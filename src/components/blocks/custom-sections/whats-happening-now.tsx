import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Users, Utensils } from 'lucide-react';

interface Event {
  id: string;
  name: string;
  description: string;
  date: string;
  status: string;
  icon: React.ReactNode;
}

const events: Event[] = [
  {
    id: 'demo-days',
    name: 'Demo Days',
    description: 'Showcase your startup to investors, mentors, and fellow founders in our quarterly demo presentation series.',
    date: 'March 15, 2024',
    status: 'Next Event',
    icon: <Users className="w-5 h-5 text-muted-foreground" />
  },
  {
    id: 'vibeship-cohorts',
    name: 'Vibeship Cohorts',
    description: 'Join our intensive 12-week accelerator program designed to fast-track your startup journey.',
    date: 'Applications Open',
    status: 'Enrolling Now',
    icon: <Calendar className="w-5 h-5 text-muted-foreground" />
  },
  {
    id: 'founder-dinners',
    name: 'Founder Dinners',
    description: 'Monthly intimate dinners bringing together founders at similar stages to share experiences and insights.',
    date: 'February 28, 2024',
    status: 'This Month',
    icon: <Utensils className="w-5 h-5 text-muted-foreground" />
  }
];

export const WhatsHappeningNow: React.FC = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display text-primary mb-4">
            What's Happening Now
          </h2>
        </div>
        
        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {events.map((event) => (
            <Card 
              key={event.id}
              className="group border border-border hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-card"
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    {event.icon}
                    <span className="text-sm font-medium text-muted-foreground">
                      {event.status}
                    </span>
                  </div>
                </div>
                <CardTitle className="text-xl font-display text-primary group-hover:text-primary/80 transition-colors">
                  {event.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {event.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-primary">
                    {event.date}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Mobile Horizontal Scroll */}
        <div className="md:hidden">
          <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
            {events.map((event) => (
              <Card 
                key={event.id}
                className="group flex-none w-80 border border-border hover:border-primary/20 transition-all duration-300 hover:shadow-lg bg-card"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      {event.icon}
                      <span className="text-sm font-medium text-muted-foreground">
                        {event.status}
                      </span>
                    </div>
                  </div>
                  <CardTitle className="text-xl font-display text-primary group-hover:text-primary/80 transition-colors">
                    {event.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {event.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-primary">
                      {event.date}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};