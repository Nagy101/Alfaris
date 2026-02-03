import { useState } from 'react';
import { products } from '@/data/mockData';
import { useCartStore } from '@/stores/cartStore';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ShoppingBag, Check } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const categories = [
  { id: 'all', name: 'All Products' },
  { id: 'tack', name: 'Tack' },
  { id: 'apparel', name: 'Apparel' },
  { id: 'supplements', name: 'Supplements' },
  { id: 'accessories', name: 'Accessories' },
];

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [addedItems, setAddedItems] = useState<Set<string>>(new Set());
  const { addItem, openCart } = useCartStore();

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter(p => p.category === activeCategory);

  const handleAddToCart = (product: typeof products[0]) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
    });

    setAddedItems(prev => new Set(prev).add(product.id));
    setTimeout(() => {
      setAddedItems(prev => {
        const next = new Set(prev);
        next.delete(product.id);
        return next;
      });
    }, 2000);

    toast({
      title: 'Added to cart',
      description: `${product.name} has been added to your cart.`,
      action: (
        <Button variant="outline" size="sm" onClick={openCart}>
          View Cart
        </Button>
      ),
    });
  };

  return (
    <div className="min-h-screen pt-24 pb-16 animate-fade-in">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl sm:text-5xl font-serif font-semibold text-foreground mb-4">
            Boutique
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Curated equestrian essentials for the discerning rider. Quality craftsmanship meets timeless style.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                'px-5 py-2 rounded-full text-sm font-medium transition-all',
                activeCategory === category.id
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-card border border-border text-muted-foreground hover:border-secondary hover:text-foreground'
              )}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 stagger-children">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group rounded-xl bg-card border border-border overflow-hidden hover-lift"
            >
              {/* Image */}
              <div className="aspect-square overflow-hidden bg-muted">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <p className="text-xs uppercase tracking-wider text-secondary font-medium mb-1 capitalize">
                  {product.category}
                </p>
                <h3 className="font-semibold text-foreground mb-2 line-clamp-1">
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {product.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-lg font-serif font-semibold text-primary">
                    ${product.price}
                  </span>
                  <Button
                    size="sm"
                    onClick={() => handleAddToCart(product)}
                    className={cn(
                      'transition-all',
                      addedItems.has(product.id)
                        ? 'bg-secondary hover:bg-secondary'
                        : 'btn-gold'
                    )}
                  >
                    {addedItems.has(product.id) ? (
                      <>
                        <Check className="h-4 w-4" />
                        Added
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="h-4 w-4" />
                        Add to Cart
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
