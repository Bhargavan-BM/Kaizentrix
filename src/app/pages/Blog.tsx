import { Link } from "react-router";
import { Card } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import {
  Search,
  Calendar,
  Clock,
  User,
  ArrowRight,
  TrendingUp,
  Cloud,
  Shield,
  Brain,
  Code,
} from "lucide-react";

export function Blog() {
  const featuredPost = {
    slug: "ai-transformation-enterprise-2026",
    title: "AI Transformation in Enterprise: Key Trends for 2026",
    excerpt: "Explore how artificial intelligence is reshaping enterprise operations and the strategic initiatives driving AI adoption across Fortune 500 companies.",
    category: "Artificial Intelligence",
    author: "Dr. Sarah Chen",
    date: "February 15, 2026",
    readTime: "8 min read",
    image: "ai-featured",
    featured: true,
  };

  const blogPosts = [
    {
      slug: "cloud-migration-best-practices",
      title: "Cloud Migration Best Practices for Financial Services",
      excerpt: "A comprehensive guide to migrating critical banking systems to the cloud while maintaining security and compliance.",
      category: "Cloud Infrastructure",
      author: "Michael Roberts",
      date: "February 12, 2026",
      readTime: "6 min read",
      image: "cloud-migration",
    },
    {
      slug: "zero-trust-security-implementation",
      title: "Implementing Zero Trust Security in Modern Enterprises",
      excerpt: "Step-by-step approach to deploying zero trust architecture and protecting your organization from advanced threats.",
      category: "Cybersecurity",
      author: "Jennifer Martinez",
      date: "February 10, 2026",
      readTime: "7 min read",
      image: "security",
    },
    {
      slug: "devops-automation-guide",
      title: "DevOps Automation: From Manual to Intelligent Pipelines",
      excerpt: "Transform your development workflow with AI-powered automation and intelligent CI/CD pipelines.",
      category: "DevOps",
      author: "Alex Thompson",
      date: "February 8, 2026",
      readTime: "5 min read",
      image: "devops",
    },
    {
      slug: "data-analytics-healthcare",
      title: "Leveraging Data Analytics in Healthcare for Better Outcomes",
      excerpt: "How advanced analytics and machine learning are revolutionizing patient care and operational efficiency.",
      category: "Data & Analytics",
      author: "Dr. Emily Watson",
      date: "February 5, 2026",
      readTime: "9 min read",
      image: "healthcare-data",
    },
    {
      slug: "kubernetes-scaling-strategies",
      title: "Kubernetes Scaling Strategies for High-Traffic Applications",
      excerpt: "Master horizontal and vertical scaling techniques to handle millions of requests with Kubernetes.",
      category: "Cloud Infrastructure",
      author: "David Kumar",
      date: "February 3, 2026",
      readTime: "6 min read",
      image: "kubernetes",
    },
    {
      slug: "conversational-ai-customer-service",
      title: "Building Intelligent Customer Service with Conversational AI",
      excerpt: "Design and deploy AI chatbots that deliver exceptional customer experiences at scale.",
      category: "Artificial Intelligence",
      author: "Lisa Anderson",
      date: "January 30, 2026",
      readTime: "7 min read",
      image: "chatbot",
    },
  ];

  const categories = [
    { name: "All Posts", count: 24, icon: TrendingUp },
    { name: "Cloud Infrastructure", count: 8, icon: Cloud },
    { name: "Cybersecurity", count: 6, icon: Shield },
    { name: "Artificial Intelligence", count: 7, icon: Brain },
    { name: "DevOps", count: 3, icon: Code },
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Artificial Intelligence":
        return Brain;
      case "Cloud Infrastructure":
        return Cloud;
      case "Cybersecurity":
        return Shield;
      case "DevOps":
        return Code;
      default:
        return TrendingUp;
    }
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold">
              Insights &
              <br />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Technology Blog
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Expert perspectives on cloud, AI, security, and digital transformation
              from industry leaders and practitioners.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Search articles..."
                  className="pl-10 h-12 bg-background"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h3 className="font-semibold mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category, index) => {
                    const Icon = category.icon;
                    return (
                      <button
                        key={index}
                        className="w-full flex items-center justify-between px-4 py-3 rounded-lg hover:bg-accent transition-colors text-left"
                      >
                        <div className="flex items-center space-x-2">
                          <Icon className="h-4 w-4 text-primary" />
                          <span>{category.name}</span>
                        </div>
                        <Badge variant="secondary">{category.count}</Badge>
                      </button>
                    );
                  })}
                </div>
              </div>

              <Card className="p-6 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
                <h3 className="font-semibold mb-3">Subscribe to Newsletter</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Get the latest insights delivered to your inbox weekly.
                </p>
                <Input placeholder="Your email" className="mb-3" />
                <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                  Subscribe
                </Button>
              </Card>
            </div>

            {/* Blog Posts */}
            <div className="lg:col-span-3 space-y-12">
              {/* Featured Post */}
              <Link to={`/blog/${featuredPost.slug}`}>
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <div className="grid md:grid-cols-2">
                    <div className="bg-gradient-to-br from-primary/20 to-secondary/20 h-64 md:h-auto flex items-center justify-center">
                      <Brain className="h-24 w-24 text-primary opacity-50" />
                    </div>
                    <div className="p-8 flex flex-col justify-center">
                      <Badge className="w-fit mb-3 bg-gradient-to-r from-primary to-secondary">
                        Featured
                      </Badge>
                      <h2 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                        {featuredPost.title}
                      </h2>
                      <p className="text-muted-foreground mb-6">{featuredPost.excerpt}</p>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center space-x-1">
                          <User className="h-4 w-4" />
                          <span>{featuredPost.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{featuredPost.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{featuredPost.readTime}</span>
                        </div>
                      </div>
                      <div className="flex items-center text-primary font-semibold group-hover:translate-x-2 transition-transform">
                        Read Article
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>

              {/* Recent Posts Grid */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Recent Articles</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {blogPosts.map((post, index) => {
                    const CategoryIcon = getCategoryIcon(post.category);
                    return (
                      <Link key={index} to={`/blog/${post.slug}`}>
                        <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300 group">
                          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 h-48 flex items-center justify-center">
                            <CategoryIcon className="h-16 w-16 text-primary opacity-50" />
                          </div>
                          <div className="p-6">
                            <Badge variant="secondary" className="mb-3">
                              {post.category}
                            </Badge>
                            <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                              {post.title}
                            </h3>
                            <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                              {post.excerpt}
                            </p>
                            <div className="flex items-center space-x-3 text-xs text-muted-foreground mb-4">
                              <div className="flex items-center space-x-1">
                                <User className="h-3 w-3" />
                                <span>{post.author}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Clock className="h-3 w-3" />
                                <span>{post.readTime}</span>
                              </div>
                            </div>
                            <div className="flex items-center text-primary text-sm font-semibold group-hover:translate-x-1 transition-transform">
                              Read More
                              <ArrowRight className="ml-1 h-3 w-3" />
                            </div>
                          </div>
                        </Card>
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Pagination */}
              <div className="flex justify-center space-x-2">
                <Button variant="outline" disabled>
                  Previous
                </Button>
                <Button variant="default" className="bg-gradient-to-r from-primary to-secondary">
                  1
                </Button>
                <Button variant="outline">2</Button>
                <Button variant="outline">3</Button>
                <Button variant="outline">Next</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
