import React from 'react';
import { Button } from "@/components/ui/button";

export const HowYouJoinMovement = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        {/* Headline */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-primary mb-16 leading-tight">
          Want to build with us?
        </h2>
        
        {/* Steps */}
        <div className="space-y-12 mb-16">
          {/* Step 1 */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 text-left max-w-3xl mx-auto">
            <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-lg font-semibold">
              1
            </div>
            <div className="flex-1">
              <p className="text-lg text-primary font-body leading-relaxed">
                Join our private WhatsApp lounge
              </p>
            </div>
          </div>
          
          {/* Step 2 */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 text-left max-w-3xl mx-auto">
            <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-lg font-semibold">
              2
            </div>
            <div className="flex-1">
              <p className="text-lg text-primary font-body leading-relaxed">
                Attend a community call or dinner
              </p>
            </div>
          </div>
          
          {/* Step 3 */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 text-left max-w-3xl mx-auto">
            <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-lg font-semibold">
              3
            </div>
            <div className="flex-1">
              <p className="text-lg text-primary font-body leading-relaxed">
                Get access to builds, founder jams, and upcoming programs
              </p>
            </div>
          </div>
        </div>
        
        {/* CTA Button */}
        <div className="flex justify-center">
          <Button 
            size="lg" 
            className="bg-primary text-white hover:bg-primary/90 px-8 py-4 text-lg font-body transition-all duration-300 hover:scale-105"
          >
            Request Access
          </Button>
        </div>
      </div>
    </section>
  );
};