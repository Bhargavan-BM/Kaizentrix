import { Card } from "../components/ui/card";
import {
  Target,
  Eye,
  Globe,
  Award,
  Users,
  TrendingUp,
  Heart,
  Lightbulb,
  Shield,
  Zap,
} from "lucide-react";

export function About() {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We continuously push boundaries to deliver cutting-edge solutions that drive real business value.",
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "We operate with transparency, honesty, and ethical practices in every client engagement.",
    },
    {
      icon: Heart,
      title: "Client Success",
      description: "Our success is measured by the transformative impact we create for our clients.",
    },
    {
      icon: Zap,
      title: "Excellence",
      description: "We maintain the highest standards in service delivery, technical expertise, and project execution.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe in partnership and work closely with clients as trusted advisors and collaborators.",
    },
    {
      icon: TrendingUp,
      title: "Continuous Improvement",
      description: "We embrace Kaizen philosophy - constant evolution and refinement in everything we do.",
    },
  ];

  const stats = [
    { number: "500+", label: "Global Clients" },
    { number: "15+", label: "Years of Excellence" },
    { number: "50+", label: "Countries Served" },
    { number: "1000+", label: "Projects Delivered" },
  ];

  const capabilities = [
    {
      icon: Globe,
      title: "Global Delivery",
      description: "24/7 support with delivery centers across North America, Europe, and Asia-Pacific",
    },
    {
      icon: Award,
      title: "Certified Experts",
      description: "Team of 500+ certified professionals in cloud, security, AI, and DevOps technologies",
    },
    {
      icon: Users,
      title: "Industry Leadership",
      description: "Recognized by Gartner and Forrester as a leader in digital transformation services",
    },
    {
      icon: TrendingUp,
      title: "Proven Track Record",
      description: "98% client retention rate with an average engagement duration of 5+ years",
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold">
              About
              <br />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Kaizentrix Global Solutions
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A global technology partner driving continuous innovation and delivering
              transformative impact for enterprises worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Card className="p-10 bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary/20">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <Target className="h-7 w-7 text-white" />
                </div>
                <h2 className="text-3xl font-bold">Our Mission</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To empower enterprises with transformative technology solutions that drive
                  continuous innovation, operational excellence, and sustainable growth in the
                  digital age. We are committed to being the trusted technology partner that
                  delivers measurable business value through cutting-edge cloud, AI, and security
                  solutions.
                </p>
              </div>
            </Card>

            <Card className="p-10 bg-gradient-to-br from-secondary/5 to-accent/5 border-2 border-secondary/20">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center">
                  <Eye className="h-7 w-7 text-white" />
                </div>
                <h2 className="text-3xl font-bold">Our Vision</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To be the world's most trusted partner for digital transformation, recognized
                  globally for innovation, excellence, and the transformative impact we create for
                  our clients. We envision a future where technology seamlessly enables business
                  agility, intelligent decision-making, and sustainable competitive advantage.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership Message */}
      <section className="py-20 bg-gradient-to-br from-muted/30 to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-12">
            <div className="space-y-6">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-4">Leadership Message</h2>
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-12 w-12 text-white" />
                </div>
              </div>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p className="leading-relaxed">
                  "In today's rapidly evolving digital landscape, businesses face unprecedented
                  challenges and opportunities. At Kaizentrix, we believe that technology should
                  be an enabler, not a barrier, to growth and innovation."
                </p>
                <p className="leading-relaxed">
                  "Our approach is rooted in the Japanese philosophy of Kaizen - continuous
                  improvement. We don't just implement technology; we partner with our clients
                  to create lasting transformation through strategic innovation, operational
                  excellence, and a relentless focus on measurable business outcomes."
                </p>
                <p className="leading-relaxed">
                  "With over 15 years of experience serving Fortune 500 companies and innovative
                  startups alike, our team brings deep technical expertise, industry knowledge,
                  and a genuine commitment to our clients' success. We are honored to be trusted
                  partners in their digital transformation journeys."
                </p>
              </div>
              <div className="border-t border-border pt-6 text-center">
                <p className="font-semibold text-lg">The Kaizentrix Leadership Team</p>
                <p className="text-muted-foreground">Committed to Your Success</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide every decision we make and every solution we deliver
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="p-8 hover:shadow-lg transition-all duration-300">
                  <div className="space-y-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Global Delivery Capabilities */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Global Delivery Capability</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Enterprise-scale expertise and round-the-clock support across the globe
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <Card key={index} className="p-8 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{capability.title}</h3>
                      <p className="text-muted-foreground">{capability.description}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Join Us on Your Digital Journey</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Let's explore how Kaizentrix can be your trusted partner in achieving digital excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact">
              <button className="px-8 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-white/90 transition-colors">
                Get in Touch
              </button>
            </a>
            <a href="/services">
              <button className="px-8 py-3 border-2 border-white rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Explore Our Services
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
