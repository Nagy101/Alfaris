import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ChevronLeft, ChevronRight, Award } from 'lucide-react';
import { horses } from '@/data/mockData';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import PedigreeTree from '@/components/horses/PedigreeTree';
import { cn } from '@/lib/utils';

export default function HorseDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  const horse = horses.find(h => h.id === id);

  if (!horse) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-serif mb-4">Horse not found</h1>
          <Button asChild>
            <Link to="/horses">Back to Collection</Link>
          </Button>
        </div>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % horse.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + horse.images.length) % horse.images.length);
  };

  const relatedHorses = horses
    .filter(h => h.id !== horse.id && h.visibility === 'public')
    .slice(0, 3);

  return (
    <div className="min-h-screen pt-20 pb-16 animate-fade-in">
      {/* Back Button */}
      <div className="container mx-auto px-4 py-4">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back</span>
        </button>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Carousel */}
          <div className="space-y-4">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-muted">
              <img
                src={horse.images[currentImageIndex]}
                alt={horse.name}
                className="w-full h-full object-cover"
              />
              
              {horse.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background transition-colors"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background transition-colors"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </>
              )}
            </div>

            {/* Thumbnails */}
            {horse.images.length > 1 && (
              <div className="flex gap-3">
                {horse.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={cn(
                      'w-20 h-20 rounded-lg overflow-hidden border-2 transition-all',
                      index === currentImageIndex
                        ? 'border-primary'
                        : 'border-transparent opacity-60 hover:opacity-100'
                    )}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details */}
          <div className="space-y-8">
            {/* Header */}
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-sm uppercase tracking-wider text-secondary font-medium">
                  {horse.breed}
                </span>
                {horse.status === 'available' && (
                  <span className="px-2 py-0.5 rounded-full bg-secondary/20 text-secondary text-xs">
                    Available
                  </span>
                )}
              </div>
              <h1 className="text-4xl sm:text-5xl font-serif font-semibold text-foreground">
                {horse.name}
              </h1>
            </div>

            {/* Specs */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { label: 'Age', value: `${horse.age} years` },
                { label: 'Height', value: horse.height },
                { label: 'Color', value: horse.color },
                { label: 'Gender', value: horse.gender },
              ].map((spec) => (
                <div key={spec.label} className="p-4 rounded-xl bg-card border border-border">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                    {spec.label}
                  </p>
                  <p className="font-medium text-foreground">{spec.value}</p>
                </div>
              ))}
            </div>

            {/* Description */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">About {horse.name}</h3>
              <p className="text-muted-foreground leading-relaxed">{horse.description}</p>
            </div>

            {/* Achievements */}
            {horse.achievements.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Award className="h-5 w-5 text-accent" />
                  Achievements
                </h3>
                <ul className="space-y-2">
                  {horse.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-center gap-2 text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Price & CTA */}
            <div className="pt-4 border-t border-border">
              {horse.price && horse.status === 'available' && (
                <p className="text-2xl font-serif font-semibold text-primary mb-4">
                  ${horse.price.toLocaleString()}
                </p>
              )}
              
              <Dialog open={isInquiryOpen} onOpenChange={setIsInquiryOpen}>
                <DialogTrigger asChild>
                  <Button size="lg" className="btn-gold w-full sm:w-auto">
                    Request Private Viewing
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle className="font-serif text-xl">
                      Request a Viewing for {horse.name}
                    </DialogTitle>
                  </DialogHeader>
                  <form className="space-y-4 pt-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your Name</Label>
                      <Input id="name" placeholder="Full name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="your@email.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" placeholder="+1 (234) 567-890" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message (Optional)</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your interest..."
                        rows={3}
                      />
                    </div>
                    <Button type="submit" className="w-full btn-gold">
                      Submit Request
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>

        {/* Pedigree Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-serif font-semibold text-foreground mb-8 text-center">
            Pedigree
          </h2>
          <PedigreeTree pedigree={horse.pedigree} horseName={horse.name} />
        </div>

        {/* Related Horses */}
        {relatedHorses.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-serif font-semibold text-foreground mb-8">
              You May Also Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedHorses.map((h) => (
                <Link
                  key={h.id}
                  to={`/horses/${h.id}`}
                  className="group rounded-xl overflow-hidden bg-card border border-border hover-lift"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={h.images[0]}
                      alt={h.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-serif font-semibold text-foreground">{h.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {h.age} years • {h.color}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
