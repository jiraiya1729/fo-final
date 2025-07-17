import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

interface Builder {
  id: string;
  name: string;
  building: string;
  buildingInPublic?: string;
  avatar: string;
}

const builders: Builder[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    building: 'AI-powered design tools for small businesses',
    buildingInPublic: 'https://twitter.com/sarahchen',
    avatar: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/033d2e68-606d-4132-866d-0b83f932d970/generated_images/professional-headshot-portrait-of-a-youn-384d91c6-20250714190503.jpg?'
  },
  {
    id: '2',
    name: 'Marcus Rodriguez',
    building: 'Sustainable logistics platform for e-commerce',
    buildingInPublic: 'https://twitter.com/marcusrod',
    avatar: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/033d2e68-606d-4132-866d-0b83f932d970/generated_images/professional-headshot-portrait-of-a-youn-a3fa0ccd-20250714190515.jpg?'
  },
  {
    id: '3',
    name: 'Elena Vasquez',
    building: 'Developer tools for blockchain integration',
    avatar: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/033d2e68-606d-4132-866d-0b83f932d970/generated_images/professional-headshot-portrait-of-a-youn-c18ab926-20250714190523.jpg?'
  },
  {
    id: '4',
    name: 'David Kim',
    building: 'Mental health support app for remote workers',
    buildingInPublic: 'https://twitter.com/davidkim',
    avatar: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/033d2e68-606d-4132-866d-0b83f932d970/generated_images/professional-headshot-portrait-of-a-youn-beccfd36-20250714190531.jpg?'
  },
  {
    id: '5',
    name: 'Priya Patel',
    building: 'Educational platform for coding bootcamps',
    buildingInPublic: 'https://twitter.com/priyapatel',
    avatar: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/033d2e68-606d-4132-866d-0b83f932d970/generated_images/professional-headshot-portrait-of-a-youn-9ed1d5b0-20250714190539.jpg?'
  },
  {
    id: '6',
    name: 'Alex Thompson',
    building: 'Carbon footprint tracking for enterprises',
    avatar: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/033d2e68-606d-4132-866d-0b83f932d970/generated_images/professional-headshot-portrait-of-a-youn-79a1a79d-20250714190548.jpg?'
  },
  {
    id: '7',
    name: 'Maya Johnson',
    building: 'Voice-first productivity tools',
    buildingInPublic: 'https://twitter.com/mayajohnson',
    avatar: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/033d2e68-606d-4132-866d-0b83f932d970/generated_images/professional-headshot-portrait-of-a-youn-0e04b905-20250714190556.jpg?'
  },
  {
    id: '8',
    name: 'James Wilson',
    building: 'Collaborative workspace for distributed teams',
    buildingInPublic: 'https://twitter.com/jameswilson',
    avatar: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/033d2e68-606d-4132-866d-0b83f932d970/generated_images/professional-headshot-portrait-of-a-youn-7dcc9d47-20250714190604.jpg?'
  }
];

export const MeetTheBuildersSection = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-primary mb-4 leading-tight">
            Meet the Builders
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-body">
            The collective
          </p>
        </div>

        {/* Mobile: horizontal scroll */}
        <div className="md:hidden">
          <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
            {builders.map((builder) => (
              <div key={builder.id} className="flex-shrink-0 w-72">
                <BuilderCard builder={builder} />
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {builders.map((builder) => (
            <BuilderCard key={builder.id} builder={builder} />
          ))}
        </div>
      </div>
    </section>
  );
};

const BuilderCard = ({ builder }: { builder: Builder }) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 border-border bg-card">
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center space-y-4">
          {/* Avatar */}
          <div className="relative">
            <img
              src={builder.avatar}
              alt={builder.name}
              className="w-20 h-20 rounded-full object-cover ring-2 ring-secondary group-hover:ring-border transition-all duration-300"
            />
          </div>

          {/* Name */}
          <h3 className="font-display text-xl text-primary font-medium">
            {builder.name}
          </h3>

          {/* What they're building */}
          <p className="text-muted-foreground text-sm leading-relaxed min-h-[3rem] font-body">
            {builder.building}
          </p>

          {/* Building in public link */}
          {builder.buildingInPublic && (
            <Button
              variant="outline"
              size="sm"
              className="mt-4 h-8 text-xs border-border text-muted-foreground hover:bg-secondary hover:border-border transition-colors duration-200"
              asChild
            >
              <a
                href={builder.buildingInPublic}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5"
              >
                <span>Building in public</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};