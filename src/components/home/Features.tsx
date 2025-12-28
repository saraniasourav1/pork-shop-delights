import { Truck, Award, Leaf, Clock } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'Premium Quality',
    description: 'Only the finest cuts from trusted local farms, hand-selected by our expert butchers.',
  },
  {
    icon: Leaf,
    title: 'Farm Fresh',
    description: 'Sourced directly from sustainable farms, ensuring freshness and quality in every cut.',
  },
  {
    icon: Truck,
    title: 'Fast Delivery',
    description: 'Same-day delivery available. Your order arrives fresh, packed with care.',
  },
  {
    icon: Clock,
    title: '50 Years Experience',
    description: 'Three generations of butchers bringing tradition and expertise to your table.',
  },
];

const Features = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
            Why Choose Pork Shop?
          </h2>
          <p className="mt-4 font-body text-muted-foreground max-w-2xl mx-auto">
            We take pride in our craft, delivering excellence from farm to table.
          </p>
          <div className="section-divider mt-6" />
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group text-center animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
                <feature.icon className="h-8 w-8 text-primary transition-colors group-hover:text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
