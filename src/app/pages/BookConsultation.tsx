import { Card } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import {
  Calendar as CalendarIcon,
  CheckCircle,
  Clock,
  Video,
  Phone,
  MessageSquare,
} from "lucide-react";
import { useState } from "react";

export function BookConsultation() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    preferredDate: "",
    preferredTime: "",
    consultationType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Static form - no actual submission
    alert("Thank you for booking! This is a static demo - no data is actually sent.");
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      service: "",
      preferredDate: "",
      preferredTime: "",
      consultationType: "",
      message: "",
    });
  };

  const benefits = [
    "Free 60-minute consultation with our experts",
    "Tailored recommendations for your business",
    "Technology roadmap and implementation strategy",
    "ROI analysis and cost optimization insights",
    "No obligation - just valuable insights",
  ];

  const consultationTypes = [
    {
      icon: Video,
      title: "Video Call",
      description: "Face-to-face virtual meeting via Zoom or Teams",
    },
    {
      icon: Phone,
      title: "Phone Call",
      description: "Traditional phone conversation at your convenience",
    },
    {
      icon: MessageSquare,
      title: "In-Person",
      description: "Meet at our office or your location",
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold">
              Book Your Free
              <br />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Expert Consultation
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Schedule a personalized consultation with our technology experts to discuss your
              digital transformation goals and challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Booking Form */}
            <div className="lg:col-span-2">
              <Card className="p-8">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-3xl font-bold mb-2">Schedule Your Session</h2>
                    <p className="text-muted-foreground">
                      Fill out the form below and we'll get back to you within 24 hours to confirm your consultation.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Information */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="company">Company Name *</Label>
                        <Input
                          id="company"
                          placeholder="Your Company Inc."
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+1 (555) 123-4567"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>
                    </div>

                    {/* Service Selection */}
                    <div className="space-y-2">
                      <Label htmlFor="service">Service Interest *</Label>
                      <Select
                        value={formData.service}
                        onValueChange={(value) => setFormData({ ...formData, service: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service area" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="cloud">Cloud & Infrastructure</SelectItem>
                          <SelectItem value="security">Security & Compliance</SelectItem>
                          <SelectItem value="ai">Data & AI Solutions</SelectItem>
                          <SelectItem value="managed">Managed Services</SelectItem>
                          <SelectItem value="consulting">Business Consulting</SelectItem>
                          <SelectItem value="products">Product Solutions</SelectItem>
                          <SelectItem value="other">Other / Not Sure</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Consultation Type */}
                    <div className="space-y-2">
                      <Label htmlFor="consultationType">Preferred Consultation Type *</Label>
                      <Select
                        value={formData.consultationType}
                        onValueChange={(value) => setFormData({ ...formData, consultationType: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select consultation type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="video">Video Call (Zoom/Teams)</SelectItem>
                          <SelectItem value="phone">Phone Call</SelectItem>
                          <SelectItem value="inperson">In-Person Meeting</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Date and Time */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="preferredDate">Preferred Date *</Label>
                        <Input
                          id="preferredDate"
                          type="date"
                          value={formData.preferredDate}
                          onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="preferredTime">Preferred Time *</Label>
                        <Select
                          value={formData.preferredTime}
                          onValueChange={(value) => setFormData({ ...formData, preferredTime: value })}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select a time" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="9am">9:00 AM - 10:00 AM</SelectItem>
                            <SelectItem value="10am">10:00 AM - 11:00 AM</SelectItem>
                            <SelectItem value="11am">11:00 AM - 12:00 PM</SelectItem>
                            <SelectItem value="1pm">1:00 PM - 2:00 PM</SelectItem>
                            <SelectItem value="2pm">2:00 PM - 3:00 PM</SelectItem>
                            <SelectItem value="3pm">3:00 PM - 4:00 PM</SelectItem>
                            <SelectItem value="4pm">4:00 PM - 5:00 PM</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <Label htmlFor="message">Tell us about your project or goals</Label>
                      <Textarea
                        id="message"
                        placeholder="Share any specific challenges, goals, or questions you'd like to discuss..."
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full md:w-auto bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                    >
                      <CalendarIcon className="mr-2 h-5 w-5" />
                      Book Consultation
                    </Button>
                  </form>
                </div>
              </Card>
            </div>

            {/* Sidebar Info */}
            <div className="space-y-6">
              {/* What to Expect */}
              <Card className="p-6">
                <h3 className="font-semibold mb-4 flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-2" />
                  What to Expect
                </h3>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start space-x-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              {/* Consultation Types */}
              <Card className="p-6">
                <h3 className="font-semibold mb-4">Consultation Options</h3>
                <div className="space-y-4">
                  {consultationTypes.map((type, index) => {
                    const Icon = type.icon;
                    return (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-semibold text-sm">{type.title}</p>
                          <p className="text-xs text-muted-foreground">{type.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Card>

              {/* Duration Info */}
              <Card className="p-6 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Session Duration</p>
                    <p className="text-2xl font-bold text-primary">60 minutes</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Enough time to deeply understand your needs and provide actionable recommendations.
                </p>
              </Card>

              {/* Contact Alternative */}
              <Card className="p-6">
                <h3 className="font-semibold mb-3">Need Immediate Assistance?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  For urgent inquiries, feel free to contact us directly:
                </p>
                <div className="space-y-2 text-sm">
                  <p>
                    <span className="font-semibold">Phone:</span>{" "}
                    <a href="tel:+15551234567" className="text-primary hover:underline">
                      +1 (555) 123-4567
                    </a>
                  </p>
                  <p>
                    <span className="font-semibold">Email:</span>{" "}
                    <a href="mailto:info@kaizentrix.com" className="text-primary hover:underline">
                      info@kaizentrix.com
                    </a>
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 bg-gradient-to-br from-muted/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Trusted by Industry Leaders</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join hundreds of companies that have transformed their businesses with Kaizentrix
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Global Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Support Available</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
