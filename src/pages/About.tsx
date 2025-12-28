import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Award, Users, Leaf, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-secondary/30 py-16">
          <div className="container text-center">
            <h1 className="font-display text-4xl font-bold text-foreground md:text-5xl">
              Our Story
            </h1>
            <p className="mt-4 font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Three generations of passion, tradition, and excellence in butchery.
            </p>
            <div className="section-divider mt-6" />
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div>
                <h2 className="font-display text-3xl font-bold text-foreground mb-6">
                  From Humble Beginnings to Premium Excellence
                </h2>
                <div className="space-y-4 font-body text-muted-foreground">
                  <p>
                    Founded in 1974 by our grandfather, Marcus Thompson, Pork Shop began as a small 
                    family butcher in the heart of our town. With nothing but a passion for quality 
                    and a commitment to honest work, he built what would become a local institution.
                  </p>
                  <p>
                    Today, three generations later, we continue that legacy. Our family has grown, 
                    but our values remain the same: source the finest local pork, treat every cut 
                    with respect, and serve our customers like family.
                  </p>
                  <p>
                    We partner exclusively with local farms that share our commitment to sustainable, 
                    humane practices. Every piece of pork that leaves our shop can be traced back to 
                    the farm it came from.
                  </p>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop"
                  alt="Butcher shop interior"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 bg-card">
          <div className="container">
            <h2 className="font-display text-3xl font-bold text-foreground text-center mb-12">
              Our Values
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: Award,
                  title: 'Quality First',
                  description: 'We never compromise on the quality of our products.',
                },
                {
                  icon: Users,
                  title: 'Community',
                  description: 'Supporting local farms and serving our neighbors.',
                },
                {
                  icon: Leaf,
                  title: 'Sustainability',
                  description: 'Committed to environmentally responsible practices.',
                },
                {
                  icon: Heart,
                  title: 'Passion',
                  description: 'Every cut is prepared with love and expertise.',
                },
              ].map((value) => (
                <div key={value.title} className="text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                    <value.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
