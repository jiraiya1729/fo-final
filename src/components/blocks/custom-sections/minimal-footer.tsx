import { Twitter, Linkedin, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Contact</h3>
            <div className="space-y-2">
              <p className="text-muted-foreground">
                <a 
                  href="mailto:hello@example.com" 
                  className="hover:text-primary transition-colors duration-200"
                >
                  hello@example.com
                </a>
              </p>
              <p className="text-muted-foreground">
                <a 
                  href="tel:+1234567890" 
                  className="hover:text-primary transition-colors duration-200"
                >
                  +1 (234) 567-890
                </a>
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-secondary transition-colors duration-200 group"
              >
                <Twitter className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-secondary transition-colors duration-200 group"
              >
                <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Location</h3>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-muted-foreground" />
              <span className="text-muted-foreground">Built from Hyderabad</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Made with ❤️ in India
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};