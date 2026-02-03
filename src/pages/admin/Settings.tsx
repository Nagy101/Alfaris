import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Save, Clock, DollarSign, FileText } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

export default function Settings() {
  const [settings, setSettings] = useState({
    weekendMultiplier: 1.25,
    cancellationPolicy: `Cancellations made 48 hours or more before the scheduled appointment will receive a full refund.

Cancellations made between 24-48 hours before the appointment will receive a 50% refund.

Cancellations made less than 24 hours before the appointment are non-refundable.

No-shows will be charged the full amount.`,
    businessHours: {
      weekday: { open: '08:00', close: '18:00' },
      weekend: { open: '09:00', close: '17:00' },
    },
    notifications: {
      newBooking: true,
      cancellation: true,
      lowStock: true,
      horseInquiry: true,
    },
  });

  const handleSave = () => {
    toast({
      title: 'Settings saved',
      description: 'Your changes have been saved successfully.',
    });
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-serif font-semibold text-foreground">Settings</h2>
          <p className="text-muted-foreground">Configure your farm's business settings</p>
        </div>
        <Button onClick={handleSave} className="btn-gold">
          <Save className="h-4 w-4 mr-2" />
          Save Changes
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Pricing */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-secondary" />
              Pricing Settings
            </CardTitle>
            <CardDescription>Configure pricing rules and multipliers</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="weekendMultiplier">Weekend Price Multiplier</Label>
              <div className="flex items-center gap-3">
                <Input
                  id="weekendMultiplier"
                  type="number"
                  step="0.05"
                  value={settings.weekendMultiplier}
                  onChange={(e) =>
                    setSettings({ ...settings, weekendMultiplier: parseFloat(e.target.value) })
                  }
                  className="max-w-[120px]"
                />
                <span className="text-muted-foreground">× base price</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Weekend bookings will be priced at {settings.weekendMultiplier}x the weekday rate
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Business Hours */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-secondary" />
              Business Hours
            </CardTitle>
            <CardDescription>Set your operating hours</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div>
                <Label className="text-sm font-medium">Weekdays (Mon-Fri)</Label>
                <div className="flex items-center gap-3 mt-2">
                  <Input
                    type="time"
                    value={settings.businessHours.weekday.open}
                    onChange={(e) =>
                      setSettings({
                        ...settings,
                        businessHours: {
                          ...settings.businessHours,
                          weekday: { ...settings.businessHours.weekday, open: e.target.value },
                        },
                      })
                    }
                    className="max-w-[120px]"
                  />
                  <span className="text-muted-foreground">to</span>
                  <Input
                    type="time"
                    value={settings.businessHours.weekday.close}
                    onChange={(e) =>
                      setSettings({
                        ...settings,
                        businessHours: {
                          ...settings.businessHours,
                          weekday: { ...settings.businessHours.weekday, close: e.target.value },
                        },
                      })
                    }
                    className="max-w-[120px]"
                  />
                </div>
              </div>
              <div>
                <Label className="text-sm font-medium">Weekends (Sat-Sun)</Label>
                <div className="flex items-center gap-3 mt-2">
                  <Input
                    type="time"
                    value={settings.businessHours.weekend.open}
                    onChange={(e) =>
                      setSettings({
                        ...settings,
                        businessHours: {
                          ...settings.businessHours,
                          weekend: { ...settings.businessHours.weekend, open: e.target.value },
                        },
                      })
                    }
                    className="max-w-[120px]"
                  />
                  <span className="text-muted-foreground">to</span>
                  <Input
                    type="time"
                    value={settings.businessHours.weekend.close}
                    onChange={(e) =>
                      setSettings({
                        ...settings,
                        businessHours: {
                          ...settings.businessHours,
                          weekend: { ...settings.businessHours.weekend, close: e.target.value },
                        },
                      })
                    }
                    className="max-w-[120px]"
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Cancellation Policy */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-secondary" />
              Cancellation Policy
            </CardTitle>
            <CardDescription>
              This policy will be displayed to customers during booking
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Textarea
              value={settings.cancellationPolicy}
              onChange={(e) => setSettings({ ...settings, cancellationPolicy: e.target.value })}
              rows={8}
              className="font-mono text-sm"
            />
          </CardContent>
        </Card>

        {/* Notifications */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Email Notifications</CardTitle>
            <CardDescription>Configure which notifications you'd like to receive</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { key: 'newBooking', label: 'New Booking', description: 'When a customer makes a booking' },
                { key: 'cancellation', label: 'Cancellation', description: 'When a booking is cancelled' },
                { key: 'lowStock', label: 'Low Stock Alert', description: 'When inventory runs low' },
                { key: 'horseInquiry', label: 'Horse Inquiry', description: 'When someone requests a viewing' },
              ].map((item) => (
                <div
                  key={item.key}
                  className="flex items-center justify-between p-4 rounded-lg border border-border"
                >
                  <div>
                    <p className="font-medium text-foreground">{item.label}</p>
                    <p className="text-xs text-muted-foreground">{item.description}</p>
                  </div>
                  <Switch
                    checked={settings.notifications[item.key as keyof typeof settings.notifications]}
                    onCheckedChange={(checked) =>
                      setSettings({
                        ...settings,
                        notifications: { ...settings.notifications, [item.key]: checked },
                      })
                    }
                  />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
