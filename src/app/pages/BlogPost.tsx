import { Link } from "react-router";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  Brain,
} from "lucide-react";

export function BlogPost() {
  const relatedPosts = [
    {
      slug: "cloud-migration-best-practices",
      title: "Cloud Migration Best Practices",
      category: "Cloud Infrastructure",
    },
    {
      slug: "devops-automation-guide",
      title: "DevOps Automation Guide",
      category: "DevOps",
    },
    {
      slug: "conversational-ai-customer-service",
      title: "Conversational AI for Customer Service",
      category: "Artificial Intelligence",
    },
  ];

  return (
    <div className="w-full">
      {/* Back Button */}
      <div className="bg-muted/30 border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link to="/blog">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>

      {/* Article Header */}
      <section className="py-12 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge className="mb-4 bg-gradient-to-r from-primary to-secondary">
            Artificial Intelligence
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            AI Transformation in Enterprise: Key Trends for 2026
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-6">
            <div className="flex items-center space-x-2">
              <User className="h-5 w-5" />
              <span>Dr. Sarah Chen</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="h-5 w-5" />
              <span>February 15, 2026</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5" />
              <span>8 min read</span>
            </div>
          </div>

          {/* Share Buttons */}
          <div className="flex items-center space-x-3">
            <span className="text-sm font-semibold">Share:</span>
            <Button variant="outline" size="sm">
              <Facebook className="h-4 w-4 mr-2" />
              Facebook
            </Button>
            <Button variant="outline" size="sm">
              <Twitter className="h-4 w-4 mr-2" />
              Twitter
            </Button>
            <Button variant="outline" size="sm">
              <Linkedin className="h-4 w-4 mr-2" />
              LinkedIn
            </Button>
            <Button variant="outline" size="icon">
              <Share2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl h-96 flex items-center justify-center">
            <Brain className="h-32 w-32 text-primary opacity-50" />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Artificial intelligence is no longer a futuristic concept—it's transforming how
              enterprises operate today. As we move through 2026, organizations across industries
              are leveraging AI to drive innovation, optimize operations, and create unprecedented
              value for customers and stakeholders.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">The Current State of Enterprise AI</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              According to recent industry research, over 80% of Fortune 500 companies have
              implemented AI solutions in at least one business function. From predictive analytics
              in supply chain management to conversational AI in customer service, the applications
              are diverse and impactful. However, the journey from pilot projects to enterprise-wide
              AI transformation requires strategic planning, robust infrastructure, and organizational
              change management.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">Key Trends Shaping AI Adoption</h2>

            <h3 className="text-2xl font-bold mt-8 mb-4">1. Generative AI Goes Mainstream</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Generative AI technologies, including large language models and multi-modal AI
              systems, are moving beyond experimentation into production environments. Enterprises
              are building custom AI models fine-tuned for industry-specific use cases, enabling
              everything from automated content generation to intelligent code assistance for
              developers.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">2. AI-Powered Automation at Scale</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Intelligent process automation (IPA) is evolving with AI capabilities that can handle
              complex, unstructured data and make contextual decisions. Organizations are achieving
              60-80% efficiency gains in back-office operations, freeing human workers to focus on
              strategic, creative tasks that require emotional intelligence and complex problem-solving.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">3. Responsible AI and Governance</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              With growing regulatory scrutiny and ethical considerations, enterprises are establishing
              AI governance frameworks. This includes bias detection and mitigation, explainable AI
              (XAI) implementations, and comprehensive model monitoring to ensure fairness, transparency,
              and accountability in AI-driven decisions.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">4. Edge AI and Real-Time Intelligence</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              The convergence of AI and edge computing enables real-time decision-making at the point
              of data generation. Manufacturing facilities use edge AI for predictive maintenance,
              while retailers deploy it for personalized in-store experiences. This trend reduces
              latency, enhances privacy, and decreases dependency on centralized cloud infrastructure.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">Implementation Strategies for Success</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Successful AI transformation requires a holistic approach that addresses technology,
              people, and processes. Organizations should start with clear business objectives,
              identify high-value use cases, and build cross-functional teams that combine domain
              expertise with technical capabilities. Investing in data infrastructure and quality
              is crucial—AI models are only as good as the data they're trained on.
            </p>

            <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20 my-12">
              <h3 className="text-xl font-bold mb-4">Key Takeaways</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start space-x-2">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Generative AI is transitioning from pilot projects to production systems across enterprises</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>AI governance and responsible AI practices are becoming mandatory for compliance and trust</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Edge AI enables real-time intelligence and reduces latency for time-sensitive applications</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Success requires strategic planning, quality data infrastructure, and cross-functional collaboration</span>
                </li>
              </ul>
            </Card>

            <h2 className="text-3xl font-bold mt-12 mb-6">Looking Ahead</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              As we progress through 2026 and beyond, AI will continue to reshape the enterprise
              landscape. Organizations that embrace this transformation with strategic vision,
              ethical considerations, and a commitment to continuous learning will be best positioned
              to thrive in an AI-augmented future. The key is not just implementing AI technology,
              but fundamentally rethinking business models and organizational capabilities to leverage
              AI's full potential.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              At Kaizentrix, we partner with enterprises to navigate their AI transformation journeys,
              from strategy development to implementation and optimization. Our team of AI specialists
              brings deep industry expertise and technical excellence to help organizations realize
              measurable business value from their AI investments.
            </p>
          </div>

          {/* Author Bio */}
          <Card className="p-8 mt-12 bg-gradient-to-br from-muted/30 to-background">
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                <User className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">Dr. Sarah Chen</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Chief AI Strategist at Kaizentrix Global Solutions
                </p>
                <p className="text-muted-foreground">
                  Dr. Chen has over 15 years of experience in artificial intelligence and machine
                  learning, with a focus on enterprise AI strategy and responsible AI implementation.
                  She holds a Ph.D. in Computer Science from MIT and has led AI transformation
                  initiatives for numerous Fortune 500 companies.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </article>

      {/* Related Posts */}
      <section className="py-20 bg-gradient-to-br from-muted/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedPosts.map((post, index) => (
              <Link key={index} to={`/blog/${post.slug}`}>
                <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 group">
                  <Badge variant="secondary" className="mb-3">
                    {post.category}
                  </Badge>
                  <h3 className="font-bold text-lg group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Our AI experts can help you develop and implement a strategic AI roadmap.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book-consultation">
              <button className="px-8 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-white/90 transition-colors">
                Schedule a Consultation
              </button>
            </Link>
            <Link to="/services">
              <button className="px-8 py-3 border-2 border-white rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Explore AI Services
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
