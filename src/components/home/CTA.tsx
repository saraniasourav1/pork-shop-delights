import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CTA = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="container text-center">
        <h2 className="font-display text-3xl font-bold text-primary-foreground md:text-4xl">
          Ready to Taste the Difference?
        </h2>
        <p className="mt-4 font-body text-lg text-primary-foreground/80 max-w-2xl mx-auto">
          Join thousands of satisfied customers who trust Pork Shop for their premium pork needs. 
          Order today and experience quality like never before.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row justify-center">
          <Button asChild size="lg" variant="secondary" className="gap-2">
            <Link to="/shop">
              Start Shopping
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
            <Link to="/contact">
              Contact Us
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
