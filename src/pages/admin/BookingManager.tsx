import { useState } from 'react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameDay, addMonths, subMonths, isToday } from 'date-fns';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { ChevronLeft, ChevronRight, Clock, User, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Booking {
  id: string;
  date: Date;
  time: string;
  customer: string;
  service: string;
  type: 'lesson' | 'trip' | 'hospitality';
  status: 'confirmed' | 'pending' | 'cancelled';
}

// Mock bookings data
const mockBookings: Booking[] = [
  { id: '1', date: new Date(), time: '9:30 AM', customer: 'Sarah Johnson', service: 'Private Lesson', type: 'lesson', status: 'confirmed' },
  { id: '2', date: new Date(), time: '2:00 PM', customer: 'Mike Chen', service: 'Sunset Trail Ride', type: 'trip', status: 'confirmed' },
  { id: '3', date: new Date(Date.now() + 86400000), time: '10:00 AM', customer: 'Emma Wilson', service: 'VIP Farm Tour', type: 'hospitality', status: 'pending' },
  { id: '4', date: new Date(Date.now() + 86400000 * 2), time: '11:00 AM', customer: 'James Lee', service: 'Group Lesson', type: 'lesson', status: 'confirmed' },
  { id: '5', date: new Date(Date.now() + 86400000 * 3), time: '4:00 PM', customer: 'Lisa Brown', service: 'Full Day Adventure', type: 'trip', status: 'confirmed' },
];

export default function BookingManager() {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  const daysInMonth = eachDayOfInterval({ start: monthStart, end: monthEnd });

  // Get bookings for a specific day
  const getBookingsForDay = (date: Date) => {
    return mockBookings.filter((booking) => isSameDay(booking.date, date));
  };

  // Get bookings for selected date
  const selectedDateBookings = selectedDate ? getBookingsForDay(selectedDate) : [];

  const typeColors = {
    lesson: 'bg-blue-500',
    trip: 'bg-green-500',
    hospitality: 'bg-purple-500',
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-serif font-semibold text-foreground">Booking Calendar</h2>
        <p className="text-muted-foreground">View and manage all customer bookings</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Calendar */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="font-serif">
                {format(currentMonth, 'MMMM yyyy')}
              </CardTitle>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              {/* Weekday Headers */}
              <div className="grid grid-cols-7 mb-2">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                  <div key={day} className="text-center text-sm font-medium text-muted-foreground py-2">
                    {day}
                  </div>
                ))}
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-1">
                {/* Empty cells for offset */}
                {Array.from({ length: monthStart.getDay() }).map((_, i) => (
                  <div key={`empty-${i}`} className="aspect-square" />
                ))}

                {/* Days */}
                {daysInMonth.map((day) => {
                  const dayBookings = getBookingsForDay(day);
                  const isSelected = selectedDate && isSameDay(day, selectedDate);

                  return (
                    <button
                      key={day.toISOString()}
                      onClick={() => setSelectedDate(day)}
                      className={cn(
                        'aspect-square p-1 rounded-lg text-sm transition-colors relative',
                        isToday(day) && 'bg-accent/50',
                        isSelected && 'bg-primary text-primary-foreground',
                        !isSelected && 'hover:bg-muted'
                      )}
                    >
                      <span className={cn(
                        'block text-center',
                        isSelected ? 'font-semibold' : ''
                      )}>
                        {format(day, 'd')}
                      </span>
                      {/* Booking indicators */}
                      {dayBookings.length > 0 && (
                        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 flex gap-0.5">
                          {dayBookings.slice(0, 3).map((booking, i) => (
                            <div
                              key={booking.id}
                              className={cn(
                                'w-1.5 h-1.5 rounded-full',
                                typeColors[booking.type]
                              )}
                            />
                          ))}
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Legend */}
              <div className="flex items-center justify-center gap-6 mt-6 pt-4 border-t border-border">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-blue-500" />
                  <span className="text-xs text-muted-foreground">Lessons</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="text-xs text-muted-foreground">Trail Rides</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-purple-500" />
                  <span className="text-xs text-muted-foreground">Hospitality</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Selected Day Details */}
        <div className="lg:col-span-1">
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="font-serif text-lg">
                {selectedDate ? format(selectedDate, 'EEEE, MMMM d') : 'Select a Date'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {!selectedDate ? (
                <p className="text-muted-foreground text-sm">
                  Click on a date to view bookings
                </p>
              ) : selectedDateBookings.length === 0 ? (
                <p className="text-muted-foreground text-sm">
                  No bookings for this date
                </p>
              ) : (
                <div className="space-y-3">
                  {selectedDateBookings.map((booking) => (
                    <button
                      key={booking.id}
                      onClick={() => setSelectedBooking(booking)}
                      className="w-full p-3 rounded-lg border border-border hover:border-secondary transition-colors text-left"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <div className={cn('w-2 h-2 rounded-full', typeColors[booking.type])} />
                        <span className="font-medium text-foreground text-sm">{booking.service}</span>
                      </div>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {booking.time}
                        </span>
                        <span className="flex items-center gap-1">
                          <User className="h-3 w-3" />
                          {booking.customer}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Booking Detail Dialog */}
      <Dialog open={!!selectedBooking} onOpenChange={() => setSelectedBooking(null)}>
        <DialogContent className="sm:max-w-[400px]">
          <DialogHeader>
            <DialogTitle className="font-serif text-xl">Booking Details</DialogTitle>
          </DialogHeader>
          {selectedBooking && (
            <div className="space-y-4 pt-4">
              <div className="p-4 rounded-lg bg-muted space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Service</span>
                  <span className="font-medium">{selectedBooking.service}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Customer</span>
                  <span className="font-medium">{selectedBooking.customer}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Date</span>
                  <span className="font-medium">{format(selectedBooking.date, 'MMM d, yyyy')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Time</span>
                  <span className="font-medium">{selectedBooking.time}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Status</span>
                  <span className={cn(
                    'px-2 py-0.5 rounded-full text-xs font-medium capitalize',
                    selectedBooking.status === 'confirmed' && 'bg-green-100 text-green-700',
                    selectedBooking.status === 'pending' && 'bg-amber-100 text-amber-700',
                    selectedBooking.status === 'cancelled' && 'bg-red-100 text-red-700'
                  )}>
                    {selectedBooking.status}
                  </span>
                </div>
              </div>
              <div className="flex gap-3">
                <Button variant="outline" className="flex-1">
                  Reschedule
                </Button>
                <Button variant="destructive" className="flex-1">
                  Cancel
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
