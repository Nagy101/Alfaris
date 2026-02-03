import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Palette, ShoppingCart, Users, TrendingUp, Clock } from 'lucide-react';

const stats = [
  {
    title: "Today's Bookings",
    value: '8',
    change: '+2 from yesterday',
    icon: Calendar,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
  },
  {
    title: 'Pending Inquiries',
    value: '5',
    change: '3 new this week',
    icon: Users,
    color: 'text-amber-600',
    bgColor: 'bg-amber-100',
  },
  {
    title: 'Shop Orders',
    value: '12',
    change: '+4 pending shipment',
    icon: ShoppingCart,
    color: 'text-green-600',
    bgColor: 'bg-green-100',
  },
  {
    title: 'Active Horses',
    value: '6',
    change: '2 available for sale',
    icon: Palette,
    color: 'text-purple-600',
    bgColor: 'bg-purple-100',
  },
];

const recentActivity = [
  { id: 1, action: 'New booking', description: 'Private Lesson - Sarah Johnson', time: '10 min ago' },
  { id: 2, action: 'Horse inquiry', description: 'Al-Malik viewing request', time: '25 min ago' },
  { id: 3, action: 'Shop order', description: 'Premium Leather Halter - $189', time: '1 hour ago' },
  { id: 4, action: 'Booking completed', description: 'Sunset Trail Ride - 4 guests', time: '2 hours ago' },
  { id: 5, action: 'New review', description: '5 stars - VIP Boarding experience', time: '3 hours ago' },
];

export default function Dashboard() {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Welcome Section */}
      <div>
        <h2 className="text-2xl font-serif font-semibold text-foreground mb-2">
          Welcome back, Admin
        </h2>
        <p className="text-muted-foreground">
          Here's what's happening at Al-Faris today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.title} className="hover-lift">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{stat.title}</p>
                  <p className="text-3xl font-serif font-semibold text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{stat.change}</p>
                </div>
                <div className={`p-3 rounded-xl ${stat.bgColor}`}>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-secondary" />
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div
                  key={activity.id}
                  className="flex items-start gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground">{activity.action}</p>
                    <p className="text-sm text-muted-foreground truncate">{activity.description}</p>
                  </div>
                  <span className="text-xs text-muted-foreground whitespace-nowrap">{activity.time}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-secondary" />
              Quick Actions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <button className="p-4 rounded-xl border border-border hover:border-secondary hover:bg-muted/50 transition-all text-left">
                <Palette className="h-6 w-6 text-secondary mb-2" />
                <p className="font-medium text-foreground">Add Horse</p>
                <p className="text-xs text-muted-foreground">Add to collection</p>
              </button>
              <button className="p-4 rounded-xl border border-border hover:border-secondary hover:bg-muted/50 transition-all text-left">
                <Calendar className="h-6 w-6 text-secondary mb-2" />
                <p className="font-medium text-foreground">New Booking</p>
                <p className="text-xs text-muted-foreground">Schedule manually</p>
              </button>
              <button className="p-4 rounded-xl border border-border hover:border-secondary hover:bg-muted/50 transition-all text-left">
                <ShoppingCart className="h-6 w-6 text-secondary mb-2" />
                <p className="font-medium text-foreground">Add Product</p>
                <p className="text-xs text-muted-foreground">To boutique</p>
              </button>
              <button className="p-4 rounded-xl border border-border hover:border-secondary hover:bg-muted/50 transition-all text-left">
                <Users className="h-6 w-6 text-secondary mb-2" />
                <p className="font-medium text-foreground">View Inquiries</p>
                <p className="text-xs text-muted-foreground">5 pending</p>
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
