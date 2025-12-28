import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-image.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Premium pork cuts on wooden board"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      </div>

      {/* Content */}
      <div className="container relative z-10 py-20">
        <div className="max-w-2xl animate-slide-up">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 font-body text-sm font-medium text-primary mb-6">
            Premium Quality Pork
          </span>
          
          <h1 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Farm Fresh
            <span className="block text-primary">Pork Cuts</span>
          </h1>
          
          <p className="mt-6 font-body text-lg text-muted-foreground md:text-xl max-w-lg">
            From our local farms to your table. Experience the finest selection of premium pork, 
            hand-selected by expert butchers with over 50 years of tradition.
          </p>
          
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg" className="gap-2">
              <Link to="/shop">
                Shop Now
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/about">
                Our Story
              </Link>
            </Button>
          </div>
          
          {/* Stats */}
          <div className="mt-12 flex gap-8 border-t border-border pt-8">
            <div>
              <span className="font-display text-3xl font-bold text-primary">50+</span>
              <p className="font-body text-sm text-muted-foreground">Years of Tradition</p>
            </div>
            <div>
              <span className="font-display text-3xl font-bold text-primary">100%</span>
              <p className="font-body text-sm text-muted-foreground">Local Farms</p>
            </div>
            <div>
              <span className="font-display text-3xl font-bold text-primary">5K+</span>
              <p className="font-body text-sm text-muted-foreground">Happy Customers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
