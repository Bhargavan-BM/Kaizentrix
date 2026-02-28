import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { Home, Search, ArrowLeft } from "lucide-react";

export function NotFound() {
  return (
    <div className="w-full min-h-[80vh] flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-9xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            404
          </h1>
          <h2 className="text-4xl font-bold">Page Not Found</h2>
          <p className="text-xl text-muted-foreground">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
              <Home className="mr-2 h-5 w-5" />
              Go to Homepage
            </Button>
          </Link>
          <Link to="/contact">
            <Button size="lg" variant="outline">
              <Search className="mr-2 h-5 w-5" />
              Contact Support
            </Button>
          </Link>
        </div>

        <div className="pt-8">
          <p className="text-sm text-muted-foreground mb-4">Popular pages:</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/services">
              <Button variant="ghost" size="sm">Services</Button>
            </Link>
            <Link to="/products">
              <Button variant="ghost" size="sm">Products</Button>
            </Link>
            <Link to="/about">
              <Button variant="ghost" size="sm">About Us</Button>
            </Link>
            <Link to="/blog">
              <Button variant="ghost" size="sm">Blog</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
