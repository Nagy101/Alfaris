import { useState } from 'react';
import { format, isWeekend } from 'date-fns';
import { Calendar } from '@/components/ui/calendar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { services, timeSlots } from '@/data/mockData';
import { useCartStore } from '@/stores/cartStore';
import { cn } from '@/lib/utils';
import { Clock, User, CalendarDays, CheckCircle2 } from 'lucide-react';

type ServiceType = 'lessons' | 'trips' | 'hospitality';

export default function Booking() {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<ServiceType>('lessons');

  const filteredServices = services.filter(s => s.type === activeTab);
  const currentService = services.find(s => s.id === selectedService);
  
  const isWeekendDay = selectedDate ? isWeekend(selectedDate) : false;
  const price = currentService
    ? isWeekendDay
      ? currentService.weekendPrice
      : currentService.weekdayPrice
    : 0;

  const handleConfirmBooking = () => {
    // Reset state
    setSelectedService(null);
    setSelectedDate(undefined);
    setSelectedTimeSlot(null);
    setIsConfirmOpen(false);
  };

  return (
    <div className="min-h-screen pt-24 pb-16 animate-fade-in">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl sm:text-5xl font-serif font-semibold text-foreground mb-4">
            Book an Experience
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Choose from our curated experiences and create unforgettable memories with our magnificent horses.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Service Selection */}
          <div className="lg:col-span-2 space-y-8">
            {/* Service Type Tabs */}
            <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as ServiceType)}>
              <TabsList className="w-full grid grid-cols-3 bg-card border border-border">
                <TabsTrigger value="lessons">Riding Lessons</TabsTrigger>
                <TabsTrigger value="trips">Trail Rides</TabsTrigger>
                <TabsTrigger value="hospitality">Hospitality</TabsTrigger>
              </TabsList>

              {(['lessons', 'trips', 'hospitality'] as const).map((type) => (
                <TabsContent key={type} value={type} className="mt-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {services.filter(s => s.type === type).map((service) => (
                      <button
                        key={service.id}
                        onClick={() => setSelectedService(service.id)}
                        className={cn(
                          'p-6 rounded-xl border text-left transition-all hover-lift',
                          selectedService === service.id
                            ? 'border-primary bg-primary/5'
                            : 'border-border bg-card hover:border-secondary'
                        )}
                      >
                        <h3 className="font-semibold text-foreground mb-2">{service.name}</h3>
                        <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-muted-foreground flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {service.duration}
                          </span>
                          <div className="text-right">
                            <span className="text-sm font-semibold text-primary">
                              ${service.weekdayPrice}
                            </span>
                            <span className="text-xs text-muted-foreground ml-1">weekday</span>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>

            {/* Calendar */}
            {selectedService && (
              <div className="p-6 rounded-xl bg-card border border-border fade-in-up">
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <CalendarDays className="h-5 w-5 text-secondary" />
                  Select a Date
                </h3>
                <div className="flex flex-col sm:flex-row gap-6">
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    disabled={(date) => date < new Date()}
                    className="rounded-lg border border-border pointer-events-auto"
                    classNames={{
                      day_selected: 'bg-primary text-primary-foreground',
                      day_today: 'bg-accent text-accent-foreground',
                    }}
                    modifiers={{
                      weekend: (date) => isWeekend(date),
                    }}
                    modifiersClassNames={{
                      weekend: 'text-secondary font-medium',
                    }}
                  />
                  <div className="flex-1 space-y-4">
                    <div className="p-4 rounded-lg bg-secondary/10 border border-secondary/20">
                      <p className="text-sm text-muted-foreground mb-2">Weekend Pricing</p>
                      <p className="text-xs text-muted-foreground">
                        Weekend dates (Sat-Sun) have adjusted pricing to accommodate higher demand.
                      </p>
                    </div>
                    {selectedDate && (
                      <div className="p-4 rounded-lg bg-muted">
                        <p className="text-sm font-medium text-foreground">
                          {format(selectedDate, 'EEEE, MMMM d, yyyy')}
                        </p>
                        <p className="text-sm text-muted-foreground mt-1">
                          {isWeekendDay ? 'Weekend Rate' : 'Weekday Rate'}: 
                          <span className="font-semibold text-primary ml-1">${price}</span>
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Time Slots */}
            {selectedDate && (
              <div className="p-6 rounded-xl bg-card border border-border fade-in-up">
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Clock className="h-5 w-5 text-secondary" />
                  Select a Time
                </h3>
                <div className="space-y-6">
                  {(['morning', 'afternoon', 'evening'] as const).map((period) => {
                    const slots = timeSlots.filter(t => t.period === period);
                    return (
                      <div key={period}>
                        <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3 ">
                          {period}
                        </p>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                          {slots.map((slot) => (
                            <button
                              key={slot.id}
                              disabled={!slot.available}
                              onClick={() => setSelectedTimeSlot(slot.id)}
                              className={cn(
                                'p-3 rounded-lg border text-sm transition-all',
                                !slot.available && 'opacity-50 cursor-not-allowed',
                                selectedTimeSlot === slot.id
                                  ? 'border-primary bg-primary/10 text-primary'
                                  : 'border-border bg-background hover:border-secondary'
                              )}
                            >
                              <span className="font-medium">{slot.time}</span>
                              {slot.instructor && (
                                <span className="block text-xs text-muted-foreground mt-1">
                                  {slot.instructor}
                                </span>
                              )}
                            </button>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Right: Booking Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 p-6 rounded-xl bg-card border border-border">
              <h3 className="font-serif text-xl font-semibold text-foreground mb-6">
                Booking Summary
              </h3>

              {!selectedService ? (
                <p className="text-muted-foreground text-sm">
                  Select a service to begin your booking.
                </p>
              ) : (
                <div className="space-y-4">
                  {/* Service */}
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-xs uppercase tracking-wider text-muted-foreground">Service</p>
                      <p className="font-medium text-foreground">{currentService?.name}</p>
                    </div>
                    <CheckCircle2 className="h-5 w-5 text-secondary" />
                  </div>

                  {/* Date */}
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-xs uppercase tracking-wider text-muted-foreground">Date</p>
                      <p className="font-medium text-foreground">
                        {selectedDate ? format(selectedDate, 'MMM d, yyyy') : '—'}
                      </p>
                    </div>
                    {selectedDate && <CheckCircle2 className="h-5 w-5 text-secondary" />}
                  </div>

                  {/* Time */}
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-xs uppercase tracking-wider text-muted-foreground">Time</p>
                      <p className="font-medium text-foreground">
                        {selectedTimeSlot
                          ? timeSlots.find(t => t.id === selectedTimeSlot)?.time
                          : '—'}
                      </p>
                    </div>
                    {selectedTimeSlot && <CheckCircle2 className="h-5 w-5 text-secondary" />}
                  </div>

                  <div className="pt-4 border-t border-border">
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-lg font-medium text-foreground">Total</span>
                      <span className="text-2xl font-serif font-semibold text-primary">
                        ${price}
                      </span>
                    </div>

                    <Button
                      className="w-full btn-gold"
                      size="lg"
                      disabled={!selectedService || !selectedDate || !selectedTimeSlot}
                      onClick={() => setIsConfirmOpen(true)}
                    >
                      Confirm Booking
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Confirmation Dialog */}
      <Dialog open={isConfirmOpen} onOpenChange={setIsConfirmOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="font-serif text-xl">Complete Your Booking</DialogTitle>
          </DialogHeader>
          <form onSubmit={(e) => { e.preventDefault(); handleConfirmBooking(); }} className="space-y-4 pt-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" placeholder="Your name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="your@email.com" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" placeholder="+1 (234) 567-890" required />
            </div>
            <div className="p-4 rounded-lg bg-muted text-sm">
              <div className="flex justify-between mb-2">
                <span className="text-muted-foreground">Service:</span>
                <span className="font-medium">{currentService?.name}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-muted-foreground">Date:</span>
                <span className="font-medium">
                  {selectedDate && format(selectedDate, 'MMM d, yyyy')}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Total:</span>
                <span className="font-semibold text-primary">${price}</span>
              </div>
            </div>
            <Button type="submit" className="w-full btn-gold">
              Confirm & Pay
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
