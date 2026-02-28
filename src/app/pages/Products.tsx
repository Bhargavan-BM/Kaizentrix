import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import {
  Brain,
  MessageSquare,
  Bot,
  Layers,
  Activity,
  Shield,
  Boxes,
  Package,
  GraduationCap,
  CheckCircle,
  X,
  Sparkles,
} from "lucide-react";

export function Products() {
  const products = [
    {
      icon: Activity,
      name: "AIOps Platform",
      tagline: "Intelligent IT Operations",
      description: "AI-powered platform for predictive monitoring, automated incident response, and intelligent root cause analysis.",
      features: [
        "Predictive anomaly detection",
        "Automated incident remediation",
        "Real-time performance analytics",
        "Multi-cloud infrastructure monitoring",
        "AI-driven capacity planning",
      ],
      badge: "Most Popular",
    },
    {
      icon: MessageSquare,
      name: "Conversational AI Suite",
      tagline: "Enterprise Chatbot Platform",
      description: "Build, deploy, and manage intelligent chatbots and virtual assistants across multiple channels.",
      features: [
        "Natural language understanding",
        "Multi-channel deployment",
        "Sentiment analysis",
        "Integration with CRM/ERP systems",
        "Analytics and conversation insights",
      ],
      badge: "New",
    },
    {
      icon: Bot,
      name: "Agentic AI Systems",
      tagline: "Autonomous AI Agents",
      description: "Intelligent autonomous agents that execute complex workflows and make decisions with minimal human intervention.",
      features: [
        "Goal-oriented task execution",
        "Multi-agent orchestration",
        "Learning from feedback loops",
        "Integration with enterprise systems",
        "Explainable AI decision-making",
      ],
      badge: "Enterprise",
    },
    {
      icon: Layers,
      name: "SaaS Platforms",
      tagline: "Industry-Specific Solutions",
      description: "Vertically integrated SaaS platforms designed for specific industry needs and workflows.",
      features: [
        "Industry-specific workflows",
        "Multi-tenant architecture",
        "API-first design",
        "Advanced analytics dashboards",
        "Customizable branding",
      ],
      badge: null,
    },
    {
      icon: Activity,
      name: "Monitoring Dashboards",
      tagline: "Unified Observability",
      description: "Comprehensive monitoring and observability platform for multi-cloud environments.",
      features: [
        "Real-time infrastructure visibility",
        "Custom dashboard builder",
        "Alerting and notification rules",
        "Log aggregation and analysis",
        "Cost tracking and optimization",
      ],
      badge: null,
    },
    {
      icon: Shield,
      name: "Security Assessment Tools",
      tagline: "Continuous Security Validation",
      description: "Automated security scanning and vulnerability assessment for cloud infrastructure and applications.",
      features: [
        "Continuous security scanning",
        "Compliance reporting (SOC 2, ISO)",
        "Vulnerability prioritization",
        "Security posture dashboard",
        "Automated remediation workflows",
      ],
      badge: null,
    },
    {
      icon: Boxes,
      name: "API & Integration Platforms",
      tagline: "Seamless Connectivity",
      description: "Enterprise integration platform for connecting applications, data, and systems across your organization.",
      features: [
        "Pre-built connectors for 500+ apps",
        "Low-code integration builder",
        "API gateway and management",
        "Event-driven architecture",
        "Real-time data synchronization",
      ],
      badge: null,
    },
    {
      icon: Package,
      name: "Managed Subscription Packages",
      tagline: "All-in-One IT Support",
      description: "Comprehensive managed services bundles tailored to your business size and needs.",
      features: [
        "24/7 helpdesk support",
        "Infrastructure management",
        "Security monitoring",
        "Backup and disaster recovery",
        "Monthly strategic reviews",
      ],
      badge: null,
    },
    {
      icon: GraduationCap,
      name: "Digital Training Programs",
      tagline: "Skill Development & Certification",
      description: "Expert-led training programs for cloud, DevOps, AI/ML, and cybersecurity certifications.",
      features: [
        "Live instructor-led sessions",
        "Hands-on labs and projects",
        "Certification preparation",
        "Custom corporate training",
        "Learning management platform",
      ],
      badge: null,
    },
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$2,499",
      period: "per month",
      description: "Perfect for growing businesses starting their digital transformation journey",
      features: [
        "Up to 10 users",
        "Basic cloud infrastructure",
        "Email support (24hr response)",
        "Monthly reporting",
        "Community access",
      ],
      notIncluded: [
        "Advanced AI features",
        "Dedicated account manager",
        "Custom integrations",
        "24/7 phone support",
      ],
      cta: "Start Free Trial",
      popular: false,
    },
    {
      name: "Professional",
      price: "$7,999",
      period: "per month",
      description: "Ideal for mid-sized enterprises requiring advanced features and support",
      features: [
        "Up to 100 users",
        "Advanced cloud infrastructure",
        "AI-powered analytics",
        "24/7 email & chat support",
        "Weekly reporting & reviews",
        "Dedicated account manager",
        "Custom integrations (5 included)",
        "Priority feature requests",
      ],
      notIncluded: [
        "White-label options",
        "Custom SLA agreements",
      ],
      cta: "Get Started",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "contact sales",
      description: "Comprehensive solutions for large organizations with complex requirements",
      features: [
        "Unlimited users",
        "Enterprise cloud infrastructure",
        "Full AI & automation suite",
        "24/7 priority support (all channels)",
        "Daily reporting & analytics",
        "Dedicated success team",
        "Unlimited custom integrations",
        "White-label options",
        "Custom SLA agreements",
        "On-premise deployment options",
        "Advanced security & compliance",
        "Executive business reviews",
      ],
      notIncluded: [],
      cta: "Contact Sales",
      popular: false,
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20">
              <Sparkles className="w-4 h-4 mr-2" />
              Innovation-Driven Products
            </div>
            <h1 className="text-4xl md:text-6xl font-bold">
              Cutting-Edge
              <br />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Technology Products
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Enterprise-grade platforms and solutions designed to accelerate innovation,
              enhance productivity, and drive business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Product Portfolio</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions built on cutting-edge technology stacks
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => {
              const Icon = product.icon;
              return (
                <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
                  {product.badge && (
                    <Badge className="absolute top-4 right-4 bg-gradient-to-r from-primary to-secondary">
                      {product.badge}
                    </Badge>
                  )}
                  <div className="space-y-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-1">{product.name}</h3>
                      <p className="text-sm text-primary font-semibold">{product.tagline}</p>
                    </div>
                    <p className="text-muted-foreground">{product.description}</p>
                    <div className="space-y-2">
                      {product.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                      Learn More
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-br from-muted/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Flexible Pricing Plans</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the perfect plan that scales with your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                className={`p-8 relative ${
                  plan.popular ? "border-2 border-primary shadow-xl scale-105" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-primary to-secondary px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <div className="flex items-baseline space-x-2">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-muted-foreground">/ {plan.period}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
                  </div>

                  <div className="space-y-3">
                    <p className="font-semibold text-sm">What's included:</p>
                    {plan.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                    {plan.notIncluded.length > 0 && (
                      <>
                        <p className="font-semibold text-sm pt-3">Not included:</p>
                        {plan.notIncluded.map((feature, fIndex) => (
                          <div key={fIndex} className="flex items-start space-x-2">
                            <X className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </>
                    )}
                  </div>

                  <Button
                    className={`w-full ${
                      plan.popular
                        ? "bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                        : ""
                    }`}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    {plan.cta}
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              All plans include a 30-day money-back guarantee. Need a custom solution?
            </p>
            <a href="/contact">
              <Button variant="outline" size="lg">
                Contact Our Sales Team
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Feature Comparison CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-12 bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary/20">
            <div className="text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Need a Detailed Feature Comparison?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Our product specialists can help you choose the right combination of products
                and pricing tiers for your specific needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/book-consultation">
                  <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                    Schedule a Demo
                  </Button>
                </a>
                <a href="/contact">
                  <Button size="lg" variant="outline">
                    Download Product Brochure
                  </Button>
                </a>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
