import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ProductCard from '@/components/products/ProductCard';
import { products } from '@/data/products';

const FeaturedProducts = () => {
  const featuredProducts = products.slice(0, 4);

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container">
        <div className="mb-12 text-center">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 font-body text-sm font-medium text-primary mb-4">
            Featured Selection
          </span>
          <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
            Our Premium Cuts
          </h2>
          <p className="mt-4 font-body text-muted-foreground max-w-2xl mx-auto">
            Hand-selected premium pork cuts, carefully prepared by our expert butchers. 
            Each cut represents the finest quality from local farms.
          </p>
          <div className="section-divider mt-6" />
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product, index) => (
            <div
              key={product.id}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="outline" size="lg" className="gap-2">
            <Link to="/shop">
              View All Products
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
