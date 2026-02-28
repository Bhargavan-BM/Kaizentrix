import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import {
  Cloud,
  Shield,
  Brain,
  Server,
  ArrowRight,
  CheckCircle,
  Factory,
  ShoppingCart,
  Building2,
  HeartPulse,
  Laptop,
  Star,
  Zap,
  Lock,
  TrendingUp,
  Award,
} from "lucide-react";

export function Home() {
  const services = [
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services for modern enterprises.",
    },
    {
      icon: Shield,
      title: "Security",
      description: "Enterprise-grade security and compliance solutions to protect your assets.",
    },
    {
      icon: Brain,
      title: "AI & ML",
      description: "Cutting-edge artificial intelligence and machine learning implementations.",
    },
    {
      icon: Server,
      title: "Managed Services",
      description: "24/7 managed IT services and support for seamless operations.",
    },
  ];

  const whyChooseUs = [
    {
      icon: Zap,
      title: "Innovation",
      description: "Pioneering solutions that drive digital transformation",
    },
    {
      icon: TrendingUp,
      title: "Scalability",
      description: "Infrastructure that grows with your business needs",
    },
    {
      icon: Lock,
      title: "Security",
      description: "Enterprise-grade protection for your critical assets",
    },
    {
      icon: Award,
      title: "Expertise",
      description: "Certified professionals with deep industry knowledge",
    },
  ];

  const industries = [
    {
      icon: Factory,
      name: "Manufacturing",
      description: "Smart factory solutions",
    },
    {
      icon: ShoppingCart,
      name: "Retail",
      description: "Digital commerce platforms",
    },
    {
      icon: Building2,
      name: "BFSI",
      description: "Financial technology",
    },
    {
      icon: HeartPulse,
      name: "Healthcare",
      description: "Healthcare IT solutions",
    },
    {
      icon: Laptop,
      name: "Technology",
      description: "Tech enablement",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      title: "CTO, TechCorp Industries",
      content: "Kaizentrix transformed our infrastructure with their cloud migration expertise. The transition was seamless, and we've seen a 40% reduction in operational costs.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      title: "VP of Operations, Global Finance Ltd",
      content: "Their security and compliance solutions gave us peace of mind. The team's professionalism and technical depth are unmatched in the industry.",
      rating: 5,
    },
    {
      name: "Emma Williams",
      title: "Director of IT, MediHealth Systems",
      content: "The AI-powered analytics platform delivered by Kaizentrix has revolutionized our patient care operations. Highly recommend their services.",
      rating: 5,
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 py-20 md:py-32">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center space-y-8">
            <div className="inline-block">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                <Zap className="w-4 h-4 mr-2" />
                Continuous Innovation, Global Impact
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Transforming Businesses
              <br />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Through Technology
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Enterprise cloud solutions, AI-powered innovation, and managed services
              that drive digital transformation at scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/services">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 group">
                  Explore Services
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/book-consultation">
                <Button size="lg" variant="outline">
                  Book Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Core Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive technology solutions designed for modern enterprises
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={index}
                  className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50"
                >
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-muted/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Why Choose Kaizentrix</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We deliver excellence through innovation, expertise, and commitment
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="text-center space-y-4">
                  <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Industries We Serve</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Tailored solutions across diverse industry verticals
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <Card
                  key={index}
                  className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50"
                >
                  <div className="mx-auto w-14 h-14 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-3">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-1">{industry.name}</h3>
                  <p className="text-sm text-muted-foreground">{industry.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Client Success Stories</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Hear from leaders who trust Kaizentrix for their digital transformation
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 space-y-4">
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground italic">"{testimonial.content}"</p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let's discuss how Kaizentrix can help you achieve your digital transformation goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                Contact Us
              </Button>
            </Link>
            <Link to="/book-consultation">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Schedule a Call
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
