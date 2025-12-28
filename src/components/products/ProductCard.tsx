import { Plus, Check } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Product, useCartStore } from '@/stores/cartStore';
import { toast } from 'sonner';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [isAdded, setIsAdded] = useState(false);
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    addItem(product);
    setIsAdded(true);
    toast.success(`${product.name} added to cart!`);
    
    setTimeout(() => {
      setIsAdded(false);
    }, 1500);
  };

  return (
    <div className="group card-rustic overflow-hidden">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <span className="absolute left-3 top-3 rounded-full bg-secondary px-3 py-1 font-body text-xs font-medium text-secondary-foreground">
          {product.category}
        </span>
      </div>
      
      <div className="p-5">
        <div className="mb-3 flex items-start justify-between gap-2">
          <div>
            <h3 className="font-display text-lg font-semibold text-foreground leading-tight">
              {product.name}
            </h3>
            <p className="font-body text-sm text-muted-foreground">{product.weight}</p>
          </div>
          <span className="font-display text-xl font-bold text-primary">
            ${product.price.toFixed(2)}
          </span>
        </div>
        
        <p className="mb-4 font-body text-sm text-muted-foreground line-clamp-2">
          {product.description}
        </p>
        
        <Button
          onClick={handleAddToCart}
          className="w-full gap-2"
          variant={isAdded ? 'secondary' : 'default'}
          disabled={isAdded}
        >
          {isAdded ? (
            <>
              <Check className="h-4 w-4" />
              Added to Cart
            </>
          ) : (
            <>
              <Plus className="h-4 w-4" />
              Add to Cart
            </>
          )}
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
