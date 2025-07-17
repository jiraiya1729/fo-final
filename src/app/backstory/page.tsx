"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Menu, X, Zap } from 'lucide-react';

const navigation = [
  { name: 'Home', href: '/', active: false },
  { name: 'Founders', href: '#', active: false },
  { name: 'Investors', href: '#', active: false },
];

export default function BackstoryPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className="bg-white min-h-screen">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">First Order</span>
              <div className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                <div className="w-6 h-6 bg-gradient-to-br from-orange-500 to-red-600 rounded"></div>
                First Order
              </div>
            </Link>
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
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                  item.name === 'Home' ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
            <a href="#" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors flex items-center gap-1">
              <Zap className="w-4 h-4" />
              Apply
            </a>
            <a href="#" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
              Log in
            </a>
            <a href="#" className="px-4 py-2 text-sm font-medium text-white bg-black rounded-full hover:bg-gray-800 transition-colors">
              Join Now
            </a>
          </div>
        </nav>
        {mobileMenuOpen && (
          <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
            <div className="fixed inset-0 z-50" />
            <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <Link href="/" className="-m-1.5 p-1.5">
                  <span className="sr-only">First Order</span>
                  <div className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                    <div className="w-6 h-6 bg-gradient-to-br from-orange-500 to-red-600 rounded"></div>
                    First Order
                  </div>
                </Link>
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
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={`-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold transition-colors ${
                          item.name === 'Home' ? 'bg-gray-100 text-gray-900' : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  <div className="py-6 space-y-2">
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-700 hover:bg-gray-50 flex items-center gap-2"
                    >
                      <Zap className="w-4 h-4" />
                      Apply
                    </a>
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-700 hover:bg-gray-50"
                    >
                      Log in
                    </a>
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-white bg-black hover:bg-gray-800"
                    >
                      Join Now
                    </a>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </Dialog>
        )}
      </header>
      <main className="flex items-center justify-center px-4 font-sans pt-32 pb-16 min-h-screen bg-white">
        <div className="max-w-2xl mx-auto py-12 px-6 rounded-2xl bg-gray-50 shadow-sm border border-gray-100">
          <h1 className="text-3xl md:text-4xl font-medium text-gray-900 mb-10 text-center lowercase tracking-tight">we didn’t plan this. it just happened.</h1>
          <div className="text-gray-700 text-base md:text-lg leading-relaxed whitespace-pre-line">
{`It started with a rant.

A random post I dropped on Reddit a few months ago
“Why is it so hard to find real founders in Hyderabad?”
No sugarcoating. No fancy pitch. Just frustration.

I wasn’t the only one.
People replied. Some DMed.
A few said: “There’s nothing happening in Hyderabad.”
Others said: “It’s just not the city for this.”

I disagreed.

So I did the simplest thing.
Dropped a WhatsApp group link.

In 24 hours, 50 strangers joined.
In a week, we were jamming, planning a rebuild.
I didn’t even know what a ‘founders community’ should look like.
I just knew I didn’t want to build alone.

That’s how FRAG started.
Founders Rapid Action Group.
Sounded cool. Had energy.
But we had no structure, no real mission. Just vibes.

We booked an Airbnb. Called it the “rebuild.”
Pulled 24 hours of madness, hacking, jamming, eating Maggi, and shipping.
No panels. No mentorship bullshit. Just builders in one room doing their thing.
And it felt right.

People started saying “this is what I always needed.”
But others?
They said it won’t work.
They asked “where’s the business model?”
“Where’s the monetization?”
“Why would anyone care about some chaotic group in Hyderabad?”

Some people said frag was “too raw.”
Others said it was “just a phase.”

And to be honest… I didn’t disagree.
The name FRAG had hype, but no soul.
It didn’t reflect what we were trying to build.

This wasn’t a Telegram group.
This wasn’t some tech bro club.
This was something deeper.

We weren’t just creating a community.
We were building a system
where indie hackers become real founders.
where ideas become businesses.
where late-night coding turns into real momentum.

That’s when First Order came into focus.

Because we believe the first principle is action.
And when a small action compounds, it becomes something unstoppable.

So here we are.
No roadmaps. No PR.
Just a bunch of misfits building businesses together.

This is the First Order.
And it’s just getting started.`}
          </div>
        </div>
      </main>
    </div>
  );
} 