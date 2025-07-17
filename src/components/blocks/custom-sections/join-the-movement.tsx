"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { MessageCircle, Users, Building2, ArrowRight, Calendar, Star } from "lucide-react";

export const JoinTheMovement = () => {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto md:mx-32 lg:mx-48 px-2 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-display">
            Want to build with us?
          </h2>
          <p className="text-lg text-[#b9bbbe] max-w-2xl mx-auto font-body">
            No fluff. Just builders, energy, and momentum.
          </p>
        </div>
        <BentoGrid className="gap-3 md:auto-rows-[12rem] md:grid-cols-6 mx-auto">
          {/* Large Mission Tile */}
          <BentoGridItem
            className="md:col-span-3 md:row-span-2 bg-[#23272a] border border-[#5865f2] rounded-2xl p-6 text-white"
            title={<span className="text-2xl font-semibold font-display">Our Mission</span>}
            description={<span className="text-base font-body text-[#b9bbbe]">Empowering founders to build, ship, and grow together. We believe in action, community, and momentum over everything else.</span>}
            icon={<Star className="w-6 h-6" style={{ color: '#5865f2', marginBottom: '0.5rem' }} />}
          />
          {/* CTA Tile */}
          <BentoGridItem
            className="md:col-span-2 md:row-span-1 bg-[#23272a] border border-[#36393f] rounded-xl p-5 text-white flex flex-col items-center justify-center"
            title={<span className="text-xl font-semibold font-display">Ready to join?</span>}
            description={<Button size="lg" className="mt-4 w-full">Request Access <ArrowRight className="ml-2 w-4 h-4" /></Button>}
            icon={<Users className="w-6 h-6" style={{ color: '#5865f2', marginBottom: '0.5rem' }} />}
          />
          {/* Next Cohort Tile */}
          <BentoGridItem
            className="md:col-span-1 md:row-span-2 bg-[#23272a] border border-[#36393f] rounded-3xl p-4 text-white flex flex-col items-center justify-center"
            title={<span className="text-lg font-semibold font-display">Next Cohort</span>}
            description={<span className="text-base font-body text-[#b9bbbe]">September 2024<br/>30-day VibeShip sprint</span>}
            icon={<Calendar className="w-6 h-6" style={{ color: '#5865f2', marginBottom: '0.5rem' }} />}
          />
          {/* WhatsApp Lounge Tile */}
          <BentoGridItem
            className="md:col-span-2 md:row-span-1 bg-[#23272a] border border-[#36393f] rounded-xl p-5 text-white flex flex-col items-center justify-center"
            title={<span className="text-lg font-semibold font-display">WhatsApp Lounge</span>}
            description={<span className="text-base font-body text-[#b9bbbe]">800+ founders jamming on ideas, launching fast, and learning in public.</span>}
            icon={<MessageCircle className="w-6 h-6" style={{ color: '#5865f2', marginBottom: '0.5rem' }} />}
          />
          {/* Testimonial Tile (Large) */}
          <BentoGridItem
            className="md:col-span-3 md:row-span-1 bg-[#23272a] border border-[#36393f] rounded-3xl p-6 text-white flex flex-col justify-between"
            title={<span className="text-lg font-semibold font-display">“The energy here is unmatched. I shipped more in 30 days than the last 6 months.”</span>}
            description={<span className="text-base font-body text-[#b9bbbe]">— Sarah, Early Member</span>}
            icon={null}
          />
          {/* Quick Stats Tile */}
          <BentoGridItem
            className="md:col-span-2 md:row-span-1 bg-[#23272a] border border-[#5865f2] rounded-xl p-5 text-white flex flex-col items-center justify-center"
            title={<span className="text-lg font-semibold font-display">Quick Stats</span>}
            description={<span className="text-base font-body text-[#b9bbbe]">800+ founders<br/>12+ cities<br/>100+ projects shipped</span>}
            icon={<Building2 className="w-6 h-6" style={{ color: '#5865f2', marginBottom: '0.5rem' }} />}
          />
          {/* New Tile: Community Events */}
          <BentoGridItem
            className="md:col-span-1 md:row-span-1 bg-[#23272a] border border-[#36393f] rounded-2xl p-4 text-white flex flex-col items-center justify-center"
            title={<span className="text-lg font-semibold font-display">Community Events</span>}
            description={<span className="text-base font-body text-[#b9bbbe]">Monthly meetups, demo days, and more.</span>}
            icon={<Calendar className="w-6 h-6" style={{ color: '#5865f2', marginBottom: '0.5rem' }} />}
          />
        </BentoGrid>
      </div>
    </section>
  );
};