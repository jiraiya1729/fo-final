import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Pause } from 'lucide-react';

export const FoundersNote = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display text-primary mb-8 leading-tight">
            It started with a WhatsApp group…
          </h2>
          
          <div className="flex justify-center mb-12">
            <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center overflow-hidden">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center">
                <span className="text-2xl font-display text-primary">S</span>
              </div>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 font-body">
              Like most meaningful journeys, ours began with a simple observation and a shared frustration. 
              In early 2022, I found myself in countless conversations with fellow entrepreneurs, all wrestling 
              with the same challenge: how to build something truly impactful without losing sight of what 
              matters most.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 font-body">
              What started as informal late-night discussions in a small WhatsApp group of founders soon 
              evolved into something much larger. We realized we weren't just sharing war stories—we were 
              uncovering patterns, methodologies, and insights that could fundamentally change how we 
              approach building businesses that matter.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-12 font-body">
              This platform is our attempt to scale those intimate conversations, to create a space where 
              the next generation of builders can access not just knowledge, but wisdom. Because the world 
              needs more than just successful businesses—it needs purposeful ones.
            </p>
          </div>
          
          <Card className="max-w-2xl mx-auto bg-accent/50 border-border/50 mb-8">
            <CardContent className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Play className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-display text-primary">Personal Message</h3>
                    <p className="text-sm text-muted-foreground">A deeper dive into our mission</p>
                  </div>
                </div>
                <span className="text-sm text-muted-foreground">4:32</span>
              </div>
              
              <div className="space-y-4">
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: '0%' }}></div>
                </div>
                
                <div className="flex items-center justify-center space-x-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-12 h-12 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200"
                  >
                    <Play className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-2 font-body">
              — Sarah Chen, Founder & CEO
            </p>
            <p className="text-xs text-muted-foreground font-body">
              Former Head of Growth at Stripe, YC Alum '19
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};