"use client"

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Menu, X, Users, Target, Rocket, Zap, ArrowUpRight } from 'lucide-react'
import Link from 'next/link';
import { Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';

export default function SimpleCentered() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white min-h-screen">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">First Order</span>
              <div className="text-xl font-[var(--font-funky)] text-gray-900 flex items-center gap-2">
                First Order
              </div>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Menu aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-1">
            {/* The navigation array is no longer defined, so this loop will not render any items. */}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
            <a href="#" className="px-4 py-2 text-sm font-medium text-white bg-black rounded-full hover:bg-gray-800 transition-colors">
              Join Terminal
            </a>
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">First Order</span>
                <div className="text-xl font-[var(--font-funky)] text-gray-900 flex items-center gap-2">
                  First Order
                </div>
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <X aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {/* The navigation array is no longer defined, so this loop will not render any items. */}
                </div>
                <div className="py-6 space-y-2">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-white bg-black hover:bg-gray-800"
                  >
                    Join Terminal
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-4xl py-2 sm:py-3 lg:py-4">
          <div className="text-center">
            <h1 className="text-4xl font-medium tracking-tight text-balance text-gray-900 sm:text-5xl lg:text-6xl leading-tight mb-8">
              A place to <em className="italic font-serif">build</em><br />
              the future.
            </h1>
            
            <div className="mx-auto max-w-4xl mt-8">
              <div className="space-y-3 text-center">
                <div className="flex items-start gap-3 justify-center whitespace-nowrap">
                  <div className="w-4 h-4 border border-gray-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Users className="w-2 h-2 text-gray-400" />
                  </div>
                  <div className="flex-1 text-left max-w-md">
                    <span className="text-sm font-medium text-gray-900">Connect </span>
                    <span className="text-sm text-gray-600">with ambitious founders in our exclusive </span>
                    <a href="https://chat.whatsapp.com/BaNcGuUywsIFfn8ZFytNba" target="_blank" rel="noopener noreferrer" className="text-3xl font-[var(--font-handwritten)] underline cursor-pointer inline-flex items-center gap-0 whitespace-nowrap" style={{
                      textDecorationColor: 'transparent',
                      backgroundImage: 'linear-gradient(to right, #ec4899, #a21caf, #3b82f6)',
                      backgroundSize: '100% 2px',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: '0 100%',
                      textDecorationThickness: '1.5px',
                      textUnderlineOffset: '8px'
                    }}>
                      community <ArrowUpRight className="w-8 h-8 text-gray-400" />
                    </a>
                    <span className="text-sm text-gray-600">.</span>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 justify-center">
                  <div className="w-4 h-4 border border-gray-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Target className="w-2 h-2 text-gray-400" />
                  </div>
                  <div className="flex-1 text-left max-w-md">
                    <span className="text-sm font-medium text-gray-900">Access </span>
                    <span className="text-sm text-gray-600">high-signal resources, mentorship, and opportunities</span>
                    <br />
                    <span className="text-sm text-gray-600">to accelerate your startup journey.</span>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 justify-center">
                  <div className="w-4 h-4 border border-gray-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Rocket className="w-2 h-2 text-gray-400" />
                  </div>
                  <div className="flex-1 text-left max-w-md">
                    <span className="text-sm font-medium text-gray-900">Launch </span>
                    <span className="text-sm text-gray-600">through initiatives like </span>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <span className="text-sm text-gray-600 underline cursor-pointer">Vibeship</span>
                      </TooltipTrigger>
                      <TooltipContent sideOffset={8} className="bg-black text-white max-w-xs text-xs text-left">
                        VibeShip is a free 30-day sprint where you go from idea to your first 1,000 users or first revenue.<br/>
                        We help you build, ship, and grow, together. Next vibeship is in September.
                      </TooltipContent>
                    </Tooltip>
                    <span className="text-sm text-gray-600">, </span>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <span className="text-sm text-gray-600 underline cursor-pointer">founder dinners</span>
                      </TooltipTrigger>
                      <TooltipContent sideOffset={8} className="bg-black text-white max-w-xs text-xs text-left">
                        Founder dinners are intimate gatherings for real talk, shared struggles, and building deep founder bonds.
                      </TooltipContent>
                    </Tooltip>
                    <span className="text-sm text-gray-600">, and </span>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <span className="text-sm text-gray-600 underline cursor-pointer">demo days</span>
                      </TooltipTrigger>
                      <TooltipContent sideOffset={8} className="bg-black text-white max-w-xs text-xs text-left">
                        Demo days are where founders showcase what they've built, get feedback, and connect with supporters.
                      </TooltipContent>
                    </Tooltip>
                    <span className="text-sm text-gray-600">.</span>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 justify-center whitespace-nowrap">
                  <div className="w-4 h-4 border border-gray-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 border border-gray-400 rounded-full" />
                  </div>
                  <div className="flex-1 text-left max-w-md">
                    <span className="text-sm text-gray-600">Everyone has a </span>
                    <Link href="/backstory" className="text-lg font-[var(--font-handwritten)] underline cursor-pointer inline-flex items-center gap-0 whitespace-nowrap" style={{
                      textDecorationColor: 'transparent',
                      backgroundImage: 'linear-gradient(to right, #ec4899, #a21caf, #3b82f6)',
                      backgroundSize: '100% 2px',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: '0 100%',
                      textDecorationThickness: '1.5px',
                      textUnderlineOffset: '8px'
                    }}>
                      backstory <ArrowUpRight className="w-6 h-6 text-gray-400" />
                    </Link>
                    <span className="text-sm text-gray-600"> and so did we. And a </span>
                    <span className="text-lg text-gray-700 underline cursor-pointer underline-offset-8 inline-flex items-center gap-0" style={{
                      textDecorationColor: 'transparent',
                      backgroundImage: 'linear-gradient(to right, #ec4899, #a21caf, #3b82f6)',
                      backgroundSize: '100% 2px',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: '0 100%'
                    }}>
                      <a href="/purpose" className="inline-flex items-center gap-0">
                        purpose <ArrowUpRight className="w-6 h-6 text-gray-400" />
                      </a>
                    </span>
                    <span className="text-sm text-gray-600">.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}