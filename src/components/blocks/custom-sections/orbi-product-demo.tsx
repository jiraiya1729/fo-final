"use client";

import { useState, useEffect } from 'react';
import { Search, Star, Loader2 } from 'lucide-react';

interface Lead {
  id: string;
  title: string;
  description: string;
  quality: number;
  platform: string;
  icon: string;
}

interface SearchResult {
  platform: string;
  count: number;
  icon: string;
  color: string;
}

export const ProductDemoInterface = () => {
  const [isSearching, setIsSearching] = useState(true);
  const [searchResults] = useState<SearchResult[]>([
    { platform: 'Webflow', count: 16, icon: '🔵', color: 'text-blue-400' },
    { platform: 'Framer', count: 9, icon: '🟠', color: 'text-orange-400' },
    { platform: 'Lemlist', count: 4, icon: '⭐', color: 'text-yellow-400' }
  ]);

  const [featuredLead] = useState<Lead>({
    id: '1',
    title: 'Webflow developer',
    description: 'Looking for a designer to refre...',
    quality: 95,
    platform: 'Webflow',
    icon: '🔵'
  });

  const [feedLeads] = useState<Lead[]>([
    { id: '1', title: 'Webflow developer', description: 'Looking for a designer to refre...', quality: 95, platform: 'Webflow', icon: '🔵' },
    { id: '2', title: 'Landing page project', description: 'Need a modern landing page...', quality: 92, platform: 'Framer', icon: '🟠' },
    { id: '3', title: 'SaaS Website Re-design', description: 'Redesign our SaaS platform...', quality: 88, platform: 'Figma', icon: '🟣' }
  ]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSearching(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black p-8 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-red-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
      </div>

      {/* Header */}
      <div className="relative z-10 max-w-4xl mx-auto text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-light text-gray-100 leading-tight">
          Orbi scans the internet for new freelance opportunities and drops
        </h1>
        <p className="text-4xl md:text-5xl font-light text-gray-100 mt-2">
          the best ones into a clean, searchable feed.
        </p>
      </div>

      {/* Cards Container */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Card 1 - Bottom Left */}
        <div className="absolute bottom-0 left-0 transform -translate-x-4 translate-y-4 md:translate-y-0">
          <div className="bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-2xl max-w-sm hover:shadow-red-500/20 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                1
              </div>
              <h3 className="text-gray-100 font-medium">Orbi scans the web</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-300">
                {isSearching ? (
                  <Loader2 className="w-4 h-4 animate-spin text-red-400" />
                ) : (
                  <Search className="w-4 h-4 text-green-400" />
                )}
                <span className="text-sm">
                  {isSearching ? 'Searching for leads...' : 'Search complete'}
                </span>
              </div>
              
              <div className="space-y-2">
                {searchResults.map((result, index) => (
                  <div 
                    key={result.platform}
                    className={`flex items-center gap-3 text-sm transition-all duration-500 ${
                      isSearching ? 'opacity-50' : 'opacity-100'
                    }`}
                    style={{ 
                      transitionDelay: `${index * 200}ms`,
                      transform: isSearching ? 'translateX(-10px)' : 'translateX(0)'
                    }}
                  >
                    <span className="text-lg">{result.icon}</span>
                    <span className="text-gray-300">
                      {result.count} {result.platform} leads found
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 - Middle Center */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 translate-x-8 -translate-y-8">
          <div className="bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-2xl max-w-sm hover:shadow-blue-500/20 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                2
              </div>
              <h3 className="text-gray-100 font-medium">Rates each lead for quality</h3>
            </div>
            
            <div className="bg-gray-700/50 rounded-xl p-4 hover:bg-gray-700/70 transition-colors">
              <div className="flex items-start gap-3">
                <span className="text-xl">{featuredLead.icon}</span>
                <div className="flex-1">
                  <h4 className="text-gray-100 font-medium text-sm mb-1">
                    {featuredLead.title}
                  </h4>
                  <p className="text-gray-400 text-xs mb-3">
                    {featuredLead.description}
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="bg-green-500/20 text-green-400 px-2 py-1 rounded-full text-xs font-medium">
                      {featuredLead.quality}%
                    </div>
                    <span className="text-gray-500 text-xs">quality score</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 - Top Right */}
        <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4 md:-translate-y-8">
          <div className="bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-2xl max-w-sm hover:shadow-green-500/20 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                3
              </div>
              <h3 className="text-gray-100 font-medium">Adds it to your feed</h3>
            </div>
            {/* Header: 34 leads found today */}
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-2xl font-bold text-red-500">34</span>
              <span className="text-lg font-semibold text-white">leads found today</span>
            </div>
            {/* Feed leads */}
            <div className="space-y-2">
              {feedLeads.map((lead, index) => (
                <div 
                  key={lead.id}
                  className="bg-gray-700/50 rounded-lg p-3 hover:bg-gray-700/70 transition-all duration-200 hover:scale-105 flex items-center gap-3"
                >
                  {/* Icon */}
                  <span className={
                    lead.platform === 'Webflow' ? 'text-2xl' :
                    lead.platform === 'Framer' ? 'text-2xl' :
                    'text-2xl'
                  }>{lead.icon}</span>
                  {/* Lead info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h4 className="text-white font-semibold text-sm truncate">{lead.title}</h4>
                      {/* Quality badge */}
                      <span className="flex items-center bg-green-600/20 text-green-400 px-2 py-0.5 rounded-full text-xs font-bold ml-1">
                        {lead.quality}% <svg className="w-3 h-3 ml-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 16 16"><path strokeLinecap="round" strokeLinejoin="round" d="M8 12V4m0 0L4 8m4-4l4 4"/></svg>
                      </span>
                    </div>
                    <p className="text-gray-400 text-xs truncate">{lead.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};