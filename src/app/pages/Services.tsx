import { Card } from "../components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import {
  Cloud,
  Server,
  Shield,
  Lock,
  Database,
  Brain,
  Cog,
  Users,
  TrendingUp,
  CheckCircle,
  Globe,
  Cpu,
  FileCheck,
  Network,
  BarChart3,
  Lightbulb,
} from "lucide-react";

export function Services() {
  const serviceCategories = [
    {
      category: "Cloud & Infrastructure",
      icon: Cloud,
      description: "Enterprise-grade cloud solutions for scalable, resilient infrastructure",
      services: [
        {
          name: "Cloud Migration & Modernization",
          icon: Cloud,
          description: "Seamless migration to AWS, Azure, and Google Cloud with zero downtime strategies.",
          details: [
            "Multi-cloud architecture design and implementation",
            "Legacy system modernization and containerization",
            "Cloud-native application development",
            "Infrastructure as Code (IaC) with Terraform and CloudFormation",
            "Cost optimization and FinOps implementation",
          ],
        },
        {
          name: "Infrastructure Management",
          icon: Server,
          description: "Comprehensive infrastructure monitoring, optimization, and automation.",
          details: [
            "24/7 infrastructure monitoring and alerting",
            "Automated scaling and resource optimization",
            "Disaster recovery and business continuity planning",
            "Performance tuning and capacity planning",
            "Multi-cloud management and orchestration",
          ],
        },
        {
          name: "DevOps & CI/CD",
          icon: Cog,
          description: "Streamlined development operations for faster time-to-market.",
          details: [
            "CI/CD pipeline design and implementation",
            "GitOps workflows and version control strategies",
            "Container orchestration with Kubernetes",
            "Automated testing and quality assurance",
            "DevSecOps integration and best practices",
          ],
        },
      ],
    },
    {
      category: "Security & Compliance",
      icon: Shield,
      description: "Comprehensive security solutions to protect your digital assets",
      services: [
        {
          name: "Cybersecurity Services",
          icon: Lock,
          description: "Advanced threat detection and prevention for enterprise environments.",
          details: [
            "Security Operations Center (SOC) services",
            "Threat intelligence and vulnerability management",
            "Penetration testing and security audits",
            "Incident response and forensics",
            "Zero Trust architecture implementation",
          ],
        },
        {
          name: "Compliance & Governance",
          icon: FileCheck,
          description: "Regulatory compliance and governance frameworks for global standards.",
          details: [
            "ISO 27001, SOC 2, GDPR compliance",
            "HIPAA and PCI-DSS compliance for healthcare and finance",
            "Data privacy and protection strategies",
            "Compliance monitoring and reporting",
            "Policy development and enforcement",
          ],
        },
        {
          name: "Identity & Access Management",
          icon: Users,
          description: "Secure identity management and access control solutions.",
          details: [
            "Single Sign-On (SSO) and Multi-Factor Authentication",
            "Privileged Access Management (PAM)",
            "Identity federation and directory services",
            "Role-Based Access Control (RBAC) implementation",
            "Continuous authentication and adaptive security",
          ],
        },
      ],
    },
    {
      category: "Data & AI",
      icon: Brain,
      description: "Intelligent data solutions and AI-powered business transformation",
      services: [
        {
          name: "Data Engineering & Analytics",
          icon: Database,
          description: "Build robust data infrastructure for insights-driven decision making.",
          details: [
            "Data warehouse and data lake architecture",
            "ETL/ELT pipeline development and optimization",
            "Real-time streaming analytics with Kafka and Spark",
            "Business intelligence and visualization dashboards",
            "Data governance and quality management",
          ],
        },
        {
          name: "Artificial Intelligence & ML",
          icon: Brain,
          description: "Custom AI/ML models and intelligent automation solutions.",
          details: [
            "Machine learning model development and deployment",
            "Natural Language Processing (NLP) solutions",
            "Computer vision and image recognition",
            "Predictive analytics and forecasting",
            "MLOps and model lifecycle management",
          ],
        },
        {
          name: "Conversational AI",
          icon: Cpu,
          description: "Intelligent chatbots and virtual assistants for enhanced customer experience.",
          details: [
            "AI-powered chatbot development",
            "Voice assistant integration",
            "Sentiment analysis and intent recognition",
            "Multi-channel conversational platforms",
            "Continuous learning and improvement",
          ],
        },
      ],
    },
    {
      category: "Managed Services",
      icon: Server,
      description: "End-to-end managed IT services for seamless operations",
      services: [
        {
          name: "24/7 Operations Support",
          icon: Globe,
          description: "Round-the-clock monitoring and support for mission-critical systems.",
          details: [
            "24/7/365 monitoring and incident management",
            "Service desk and ticketing system",
            "Proactive maintenance and patching",
            "Performance optimization and reporting",
            "SLA-based service delivery",
          ],
        },
        {
          name: "Application Management",
          icon: Network,
          description: "Comprehensive application lifecycle management and support.",
          details: [
            "Application monitoring and performance tuning",
            "Bug fixes and feature enhancements",
            "Version upgrades and migrations",
            "Third-party integration management",
            "Technical documentation and training",
          ],
        },
        {
          name: "Cloud Cost Optimization",
          icon: TrendingUp,
          description: "Continuous optimization to reduce cloud spending without compromising performance.",
          details: [
            "Cost analysis and optimization recommendations",
            "Reserved instance and savings plan management",
            "Resource right-sizing and auto-scaling",
            "Cost allocation and chargeback reporting",
            "FinOps best practices implementation",
          ],
        },
      ],
    },
    {
      category: "Business Consulting",
      icon: Lightbulb,
      description: "Strategic technology consulting for digital transformation",
      services: [
        {
          name: "Digital Transformation Strategy",
          icon: TrendingUp,
          description: "Strategic roadmap for enterprise-wide digital transformation initiatives.",
          details: [
            "Business process assessment and optimization",
            "Technology stack evaluation and modernization",
            "Change management and organizational alignment",
            "Digital maturity assessment",
            "Innovation workshops and ideation sessions",
          ],
        },
        {
          name: "Enterprise Architecture",
          icon: BarChart3,
          description: "Comprehensive architecture design aligned with business objectives.",
          details: [
            "Solution architecture and design",
            "Technology roadmap development",
            "Architecture governance and standards",
            "Integration architecture and API strategy",
            "Cloud architecture best practices",
          ],
        },
        {
          name: "Technology Advisory",
          icon: Lightbulb,
          description: "Expert guidance on technology selection and implementation.",
          details: [
            "Technology evaluation and vendor selection",
            "Proof of Concept (POC) development",
            "Risk assessment and mitigation strategies",
            "IT strategy and governance",
            "Innovation and emerging technology adoption",
          ],
        },
      ],
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold">
              Enterprise Technology
              <br />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Services & Solutions
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive technology services designed to accelerate your digital transformation
              and drive business innovation at scale.
            </p>
          </div>
        </div>
      </section>

      {/* Services Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {serviceCategories.map((category, categoryIndex) => {
            const CategoryIcon = category.icon;
            return (
              <div key={categoryIndex} className="space-y-8">
                {/* Category Header */}
                <div className="text-center space-y-4">
                  <div className="flex justify-center">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                      <CategoryIcon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold">{category.category}</h2>
                  <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    {category.description}
                  </p>
                </div>

                {/* Service Cards with Accordion */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.services.map((service, serviceIndex) => {
                    const ServiceIcon = service.icon;
                    return (
                      <Card key={serviceIndex} className="p-6 hover:shadow-lg transition-all duration-300">
                        <div className="space-y-4">
                          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                            <ServiceIcon className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                            <p className="text-muted-foreground text-sm">{service.description}</p>
                          </div>

                          <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="details" className="border-none">
                              <AccordionTrigger className="text-sm text-primary hover:no-underline">
                                View Details
                              </AccordionTrigger>
                              <AccordionContent>
                                <ul className="space-y-2 mt-2">
                                  {service.details.map((detail, detailIndex) => (
                                    <li key={detailIndex} className="flex items-start space-x-2 text-sm">
                                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                      <span className="text-muted-foreground">{detail}</span>
                                    </li>
                                  ))}
                                </ul>
                              </AccordionContent>
                            </AccordionItem>
                          </Accordion>
                        </div>
                      </Card>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Let's Build Your Digital Future Together
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Our experts are ready to discuss your unique challenges and design tailored solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/book-consultation">
              <button className="px-8 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-white/90 transition-colors">
                Book a Consultation
              </button>
            </a>
            <a href="/contact">
              <button className="px-8 py-3 border-2 border-white rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Contact Our Team
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
