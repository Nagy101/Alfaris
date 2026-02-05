import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { testimonials } from '@/data/mockData';
import { cn } from '@/lib/utils';
import { Shield, Clock, Stethoscope, Utensils, ChevronRight, Quote } from 'lucide-react';

const features = [
  {
    icon: Shield,
    titleKey: 'boardingPage.features.security.title',
    descriptionKey: 'boardingPage.features.security.description',
  },
  {
    icon: Stethoscope,
    titleKey: 'boardingPage.features.vet.title',
    descriptionKey: 'boardingPage.features.vet.description',
  },
  {
    icon: Utensils,
    titleKey: 'boardingPage.features.nutrition.title',
    descriptionKey: 'boardingPage.features.nutrition.description',
  },
  {
    icon: Clock,
    titleKey: 'boardingPage.features.exercise.title',
    descriptionKey: 'boardingPage.features.exercise.description',
  },
];

const packages = [
  { id: 'standard', nameKey: 'boardingPage.packages.standard', price: '$1,500/month' },
  { id: 'premium', nameKey: 'boardingPage.packages.premium', price: '$2,500/month' },
  { id: 'vip', nameKey: 'boardingPage.packages.vip', price: '$4,000/month' },
];

export default function Boarding() {
  const { t } = useTranslation();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    ownerName: '',
    email: '',
    phone: '',
    horseName: '',
    breed: '',
    age: '',
    specialNeeds: '',
    package: '',
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert(t('boardingPage.alertSuccess'));
    setStep(1);
    setFormData({
      ownerName: '',
      email: '',
      phone: '',
      horseName: '',
      breed: '',
      age: '',
      specialNeeds: '',
      package: '',
    });
  };

  return (
    <div className="min-h-screen animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1598974357801-cbca100e65d3?w=1920&q=90')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-background" />
        
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-semibold text-primary-foreground mb-4 text-shadow">
            {t('boardingPage.heroTitle')}
          </h1>
          <p className="text-lg sm:text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            {t('boardingPage.heroSubtitle')}
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-serif font-semibold text-foreground mb-4">
              {t('boardingPage.facilitiesTitle')}
            </h2>
            <p className="text-muted-foreground">
              {t('boardingPage.facilitiesSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.titleKey}
                className="p-6 rounded-xl bg-background border border-border hover-lift"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{t(feature.titleKey)}</h3>
                <p className="text-sm text-muted-foreground">{t(feature.descriptionKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-semibold text-foreground mb-12 text-center">
            {t('boardingPage.testimonialsTitle')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="p-8 rounded-xl bg-card border border-border relative"
              >
                <Quote className="absolute top-4 right-4 h-8 w-8 text-muted-foreground/20" />
                <p className="text-muted-foreground mb-6 italic leading-relaxed">
                  "{t(`boardingPage.testimonials.${testimonial.id}.quote`, {
                    defaultValue: testimonial.quote,
                  })}"
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {t(`boardingPage.testimonials.${testimonial.id}.role`, {
                        defaultValue: testimonial.role,
                      })}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-semibold text-foreground mb-4">
                {t('boardingPage.applyTitle')}
              </h2>
              <p className="text-muted-foreground">
                {t('boardingPage.applySubtitle')}
              </p>
            </div>

            {/* Progress Steps */}
            <div className="flex items-center justify-center mb-8">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center">
                  <div
                    className={cn(
                      'w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors',
                      step >= s
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-muted-foreground'
                    )}
                  >
                    {s}
                  </div>
                  {s < 3 && (
                    <div
                      className={cn(
                        'w-16 h-0.5 mx-2 transition-colors',
                        step > s ? 'bg-primary' : 'bg-muted'
                      )}
                    />
                  )}
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="p-8 rounded-xl bg-background border border-border">
              {/* Step 1: Owner Details */}
              {step === 1 && (
                <div className="space-y-6 fade-in-up">
                  <h3 className="text-lg font-semibold text-foreground mb-4">{t('boardingPage.step1Title')}</h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="ownerName">{t('boardingPage.form.fullName')}</Label>
                      <Input
                        id="ownerName"
                        value={formData.ownerName}
                        onChange={(e) => handleInputChange('ownerName', e.target.value)}
                        placeholder={t('boardingPage.form.fullNamePlaceholder')}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">{t('boardingPage.form.email')}</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder={t('boardingPage.form.emailPlaceholder')}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">{t('boardingPage.form.phone')}</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder={t('boardingPage.form.phonePlaceholder')}
                        required
                      />
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <Button type="button" onClick={() => setStep(2)} className="btn-gold">
                      {t('common.next')}
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                </div>
              )}

              {/* Step 2: Horse Details */}
              {step === 2 && (
                <div className="space-y-6 fade-in-up">
                  <h3 className="text-lg font-semibold text-foreground mb-4">{t('boardingPage.step2Title')}</h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="horseName">{t('boardingPage.form.horseName')}</Label>
                      <Input
                        id="horseName"
                        value={formData.horseName}
                        onChange={(e) => handleInputChange('horseName', e.target.value)}
                        placeholder={t('boardingPage.form.horseNamePlaceholder')}
                        required
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="breed">{t('boardingPage.form.breed')}</Label>
                        <Input
                          id="breed"
                          value={formData.breed}
                          onChange={(e) => handleInputChange('breed', e.target.value)}
                          placeholder={t('boardingPage.form.breedPlaceholder')}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="age">{t('boardingPage.form.age')}</Label>
                        <Input
                          id="age"
                          value={formData.age}
                          onChange={(e) => handleInputChange('age', e.target.value)}
                          placeholder={t('boardingPage.form.agePlaceholder')}
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="specialNeeds">{t('boardingPage.form.specialNeeds')}</Label>
                      <Textarea
                        id="specialNeeds"
                        value={formData.specialNeeds}
                        onChange={(e) => handleInputChange('specialNeeds', e.target.value)}
                        placeholder={t('boardingPage.form.specialNeedsPlaceholder')}
                        rows={4}
                      />
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <Button type="button" variant="outline" onClick={() => setStep(1)}>
                      {t('common.previous')}
                    </Button>
                    <Button type="button" onClick={() => setStep(3)} className="btn-gold">
                      {t('common.next')}
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                </div>
              )}

              {/* Step 3: Package Selection */}
              {step === 3 && (
                <div className="space-y-6 fade-in-up">
                  <h3 className="text-lg font-semibold text-foreground mb-4">{t('boardingPage.step3Title')}</h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label>{t('boardingPage.form.boardingPackage')}</Label>
                      <Select
                        value={formData.package}
                        onValueChange={(value) => handleInputChange('package', value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder={t('boardingPage.form.choosePackage')} />
                        </SelectTrigger>
                        <SelectContent>
                          {packages.map((pkg) => (
                            <SelectItem key={pkg.id} value={pkg.id}>
                              {t(pkg.nameKey)} - {pkg.price}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="p-4 rounded-lg bg-muted text-sm space-y-2">
                      <p className="font-medium text-foreground">{t('boardingPage.summaryTitle')}</p>
                      <div className="text-muted-foreground space-y-1">
                        <p>
                          {t('boardingPage.summaryOwner')}: {formData.ownerName || '—'}
                        </p>
                        <p>
                          {t('boardingPage.summaryHorse')}: {formData.horseName || '—'}
                        </p>
                        <p>
                          {t('boardingPage.summaryPackage')}: {formData.package ? t(packages.find(p => p.id === formData.package)?.nameKey || '') : '—'}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <Button type="button" variant="outline" onClick={() => setStep(2)}>
                      {t('common.previous')}
                    </Button>
                    <Button type="submit" className="btn-gold">
                      {t('boardingPage.submitApplication')}
                    </Button>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
