import SimpleCentered from '@/components/blocks/heros/simple-centered'
import { WhatWeBelieve } from '@/components/blocks/custom-sections/what-we-believe'
import { JoinTheMovement } from '@/components/blocks/custom-sections/join-the-movement'
// import { ProductDemoInterface } from '@/components/blocks/custom-sections/orbi-product-demo'
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function Home() {
  return (
    <>
      <SimpleCentered />
      <div className="flex justify-center mt-4">
        <Link href="/backstory" className="inline-block px-6 py-2 bg-white/10 text-white rounded-lg font-semibold hover:bg-white/20 transition-all">Backstory</Link>
      </div>
      <WhatWeBelieve />
      <JoinTheMovement />
      {/* Builders/Startups Logo Section */}
      <section className="py-20 bg-black">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-10">Trusted by Visionaries</h2>
          <div className="grid grid-cols-6 grid-rows-3 gap-6">
            {/* 18 logo slots, 3 rows x 6 columns */}
            <div className="flex items-center justify-center bg-neutral-900 rounded-lg h-24 border-2 border-dotted border-white">
              <img src="/vercel.svg" alt="Vercel" className="h-10" />
            </div>
            <div className="flex items-center justify-center bg-neutral-900 rounded-lg h-24 border-2 border-dotted border-white">
              <img src="/next.svg" alt="Next.js" className="h-10" />
            </div>
            <div className="flex items-center justify-center bg-neutral-900 rounded-lg h-24 border-2 border-dotted border-white">
              <img src="/globe.svg" alt="Globe" className="h-10" />
            </div>
            <div className="flex items-center justify-center bg-neutral-900 rounded-lg h-24 border-2 border-dotted border-white">
              <img src="/window.svg" alt="Window" className="h-10" />
            </div>
            <div className="flex items-center justify-center bg-neutral-900 rounded-lg h-24 border-2 border-dotted border-white">
              <img src="/file.svg" alt="File" className="h-10" />
            </div>
            <div className="flex items-center justify-center bg-neutral-900 rounded-lg h-24 border-2 border-dotted border-white">
              <span className="text-white text-lg font-semibold">+ More</span>
            </div>
            {/* Row 2 */}
            <div className="flex items-center justify-center bg-neutral-900 rounded-lg h-24 border-2 border-dotted border-white">
              <img src="/vercel.svg" alt="Vercel" className="h-10" />
            </div>
            <div className="flex items-center justify-center bg-neutral-900 rounded-lg h-24 border-2 border-dotted border-white">
              <img src="/next.svg" alt="Next.js" className="h-10" />
            </div>
            <div className="flex items-center justify-center bg-neutral-900 rounded-lg h-24 border-2 border-dotted border-white">
              <img src="/globe.svg" alt="Globe" className="h-10" />
            </div>
            <div className="flex items-center justify-center bg-neutral-900 rounded-lg h-24 border-2 border-dotted border-white">
              <img src="/window.svg" alt="Window" className="h-10" />
            </div>
            <div className="flex items-center justify-center bg-neutral-900 rounded-lg h-24 border-2 border-dotted border-white">
              <img src="/file.svg" alt="File" className="h-10" />
            </div>
            <div className="flex items-center justify-center bg-neutral-900 rounded-lg h-24 border-2 border-dotted border-white">
              <span className="text-white text-lg font-semibold">+ More</span>
            </div>
            {/* Row 3 */}
            <div className="flex items-center justify-center bg-neutral-900 rounded-lg h-24 border-2 border-dotted border-white">
              <img src="/vercel.svg" alt="Vercel" className="h-10" />
            </div>
            <div className="flex items-center justify-center bg-neutral-900 rounded-lg h-24 border-2 border-dotted border-white">
              <img src="/next.svg" alt="Next.js" className="h-10" />
            </div>
            <div className="flex items-center justify-center bg-neutral-900 rounded-lg h-24 border-2 border-dotted border-white">
              <img src="/globe.svg" alt="Globe" className="h-10" />
            </div>
            <div className="flex items-center justify-center bg-neutral-900 rounded-lg h-24 border-2 border-dotted border-white">
              <img src="/window.svg" alt="Window" className="h-10" />
            </div>
            <div className="flex items-center justify-center bg-neutral-900 rounded-lg h-24 border-2 border-dotted border-white">
              <img src="/file.svg" alt="File" className="h-10" />
            </div>
            <div className="flex items-center justify-center bg-neutral-900 rounded-lg h-24 border-2 border-dotted border-white">
              <span className="text-white text-lg font-semibold">+ More</span>
            </div>
          </div>
        </div>
      </section>
      {/* End Builders/Startups Logo Section */}
      {/* <ProductDemoInterface /> */}
    </>
  )
}