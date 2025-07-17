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
      {/* Trusted by Visionaries Section */}
      <section className="py-16 bg-black border-t border-neutral-800">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-medium text-center text-neutral-400 mb-12">Trusted by Visionaries</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {/* Row 1 */}
            <div className="relative flex items-center justify-center bg-black border border-neutral-800 h-20 hover:bg-neutral-950 transition-colors before:absolute before:-top-0.5 before:-left-0.5 before:w-0.5 before:h-0.5 before:bg-white before:rounded-full after:absolute after:-top-0.5 after:-right-0.5 after:w-0.5 after:h-0.5 after:bg-white after:rounded-full">
              <div className="absolute -bottom-0.5 -left-0.5 w-0.5 h-0.5 bg-white rounded-full"></div>
              <div className="absolute -bottom-0.5 -right-0.5 w-0.5 h-0.5 bg-white rounded-full"></div>
              <div className="text-white font-bold text-sm">Vercel</div>
            </div>
            <div className="relative flex items-center justify-center bg-black border border-neutral-800 h-20 hover:bg-neutral-950 transition-colors before:absolute before:-top-0.5 before:-left-0.5 before:w-0.5 before:h-0.5 before:bg-white before:rounded-full after:absolute after:-top-0.5 after:-right-0.5 after:w-0.5 after:h-0.5 after:bg-white after:rounded-full">
              <div className="absolute -bottom-0.5 -left-0.5 w-0.5 h-0.5 bg-white rounded-full"></div>
              <div className="absolute -bottom-0.5 -right-0.5 w-0.5 h-0.5 bg-white rounded-full"></div>
              <div className="text-white font-bold text-sm">NEXT.js</div>
            </div>
            <div className="relative flex items-center justify-center bg-black border border-neutral-800 h-20 hover:bg-neutral-950 transition-colors before:absolute before:-top-0.5 before:-left-0.5 before:w-0.5 before:h-0.5 before:bg-white before:rounded-full after:absolute after:-top-0.5 after:-right-0.5 after:w-0.5 after:h-0.5 after:bg-white after:rounded-full">
              <div className="absolute -bottom-0.5 -left-0.5 w-0.5 h-0.5 bg-white rounded-full"></div>
              <div className="absolute -bottom-0.5 -right-0.5 w-0.5 h-0.5 bg-white rounded-full"></div>
              <div className="text-white font-bold text-sm">scale</div>
            </div>
            <div className="relative flex items-center justify-center bg-black border border-neutral-800 h-20 hover:bg-neutral-950 transition-colors before:absolute before:-top-0.5 before:-left-0.5 before:w-0.5 before:h-0.5 before:bg-white before:rounded-full after:absolute after:-top-0.5 after:-right-0.5 after:w-0.5 after:h-0.5 after:bg-white after:rounded-full">
              <div className="absolute -bottom-0.5 -left-0.5 w-0.5 h-0.5 bg-white rounded-full"></div>
              <div className="absolute -bottom-0.5 -right-0.5 w-0.5 h-0.5 bg-white rounded-full"></div>
              <div className="text-white font-bold text-sm">APOLLO</div>
            </div>
            <div className="relative flex items-center justify-center bg-black border border-neutral-800 h-20 hover:bg-neutral-950 transition-colors before:absolute before:-top-0.5 before:-left-0.5 before:w-0.5 before:h-0.5 before:bg-white before:rounded-full after:absolute after:-top-0.5 after:-right-0.5 after:w-0.5 after:h-0.5 after:bg-white after:rounded-full">
              <div className="absolute -bottom-0.5 -left-0.5 w-0.5 h-0.5 bg-white rounded-full"></div>
              <div className="absolute -bottom-0.5 -right-0.5 w-0.5 h-0.5 bg-white rounded-full"></div>
              <div className="text-white font-bold text-sm">Cal.com</div>
            </div>
            <div className="relative flex items-center justify-center bg-black border border-neutral-800 h-20 hover:bg-neutral-950 transition-colors before:absolute before:-top-0.5 before:-left-0.5 before:w-0.5 before:h-0.5 before:bg-white before:rounded-full after:absolute after:-top-0.5 after:-right-0.5 after:w-0.5 after:h-0.5 after:bg-white after:rounded-full">
              <div className="absolute -bottom-0.5 -left-0.5 w-0.5 h-0.5 bg-white rounded-full"></div>
              <div className="absolute -bottom-0.5 -right-0.5 w-0.5 h-0.5 bg-white rounded-full"></div>
              <div className="text-white font-bold text-sm">Linear</div>
            </div>
            <div className="relative flex items-center justify-center bg-black border border-neutral-800 h-20 hover:bg-neutral-950 transition-colors before:absolute before:-top-0.5 before:-left-0.5 before:w-0.5 before:h-0.5 before:bg-white before:rounded-full after:absolute after:-top-0.5 after:-right-0.5 after:w-0.5 after:h-0.5 after:bg-white after:rounded-full">
              <div className="absolute -bottom-0.5 -left-0.5 w-0.5 h-0.5 bg-white rounded-full"></div>
              <div className="absolute -bottom-0.5 -right-0.5 w-0.5 h-0.5 bg-white rounded-full"></div>
              <div className="text-white font-bold text-sm">knock</div>
            </div>
            <div className="relative flex items-center justify-center bg-black border border-neutral-800 h-20 hover:bg-neutral-950 transition-colors before:absolute before:-top-0.5 before:-left-0.5 before:w-0.5 before:h-0.5 before:bg-white before:rounded-full after:absolute after:-top-0.5 after:-right-0.5 after:w-0.5 after:h-0.5 after:bg-white after:rounded-full">
              <div className="absolute -bottom-0.5 -left-0.5 w-0.5 h-0.5 bg-white rounded-full"></div>
              <div className="absolute -bottom-0.5 -right-0.5 w-0.5 h-0.5 bg-white rounded-full"></div>
              <div className="text-white font-bold text-sm">FLOX</div>
            </div>
            
            {/* Row 2 */}
            <div className="relative flex items-center justify-center bg-black border border-neutral-800 h-20 hover:bg-neutral-950 transition-colors before:absolute before:-top-0.5 before:-left-0.5 before:w-0.5 before:h-0.5 before:bg-white before:rounded-full after:absolute after:-top-0.5 after:-right-0.5 after:w-0.5 after:h-0.5 after:bg-white after:rounded-full">
              <div className="absolute -bottom-0.5 -left-0.5 w-0.5 h-0.5 bg-white rounded-full"></div>
              <div className="absolute -bottom-0.5 -right-0.5 w-0.5 h-0.5 bg-white rounded-full"></div>
              <div className="text-white font-bold text-sm">trunk</div>
            </div>
            <div className="relative flex items-center justify-center bg-black border border-neutral-800 h-20 hover:bg-neutral-950 transition-colors before:absolute before:-top-0.5 before:-left-0.5 before:w-0.5 before:h-0.5 before:bg-white before:rounded-full after:absolute after:-top-0.5 after:-right-0.5 after:w-0.5 after:h-0.5 after:bg-white after:rounded-full">
              <div className="absolute -bottom-0.5 -left-0.5 w-0.5 h-0.5 bg-white rounded-full"></div>
              <div className="absolute -bottom-0.5 -right-0.5 w-0.5 h-0.5 bg-white rounded-full"></div>
              <div className="text-white font-bold text-sm">SPEAKEASY</div>
            </div>
            <div className="relative flex items-center justify-center bg-black border border-neutral-800 h-20 hover:bg-neutral-950 transition-colors before:absolute before:-top-0.5 before:-left-0.5 before:w-0.5 before:h-0.5 before:bg-white before:rounded-full after:absolute after:-top-0.5 after:-right-0.5 after:w-0.5 after:h-0.5 after:bg-white after:rounded-full">
              <div className="absolute -bottom-0.5 -left-0.5 w-0.5 h-0.5 bg-white rounded-full"></div>
              <div className="absolute -bottom-0.5 -right-0.5 w-0.5 h-0.5 bg-white rounded-full"></div>
              <div className="text-white font-bold text-sm">Replay</div>
            </div>
            <div className="relative flex items-center justify-center bg-black border border-neutral-800 h-20 hover:bg-neutral-950 transition-colors before:absolute before:-top-0.5 before:-left-0.5 before:w-0.5 before:h-0.5 before:bg-white before:rounded-full after:absolute after:-top-0.5 after:-right-0.5 after:w-0.5 after:h-0.5 after:bg-white after:rounded-full">
              <div className="absolute -bottom-0.5 -left-0.5 w-0.5 h-0.5 bg-white rounded-full"></div>
              <div className="absolute -bottom-0.5 -right-0.5 w-0.5 h-0.5 bg-white rounded-full"></div>
              <div className="text-white font-bold text-sm">Graphite</div>
            </div>
            <div className="relative flex items-center justify-center bg-black border border-neutral-800 h-20 hover:bg-neutral-950 transition-colors before:absolute before:-top-0.5 before:-left-0.5 before:w-0.5 before:h-0.5 before:bg-white before:rounded-full after:absolute after:-top-0.5 after:-right-0.5 after:w-0.5 after:h-0.5 after:bg-white after:rounded-full">
              <div className="absolute -bottom-0.5 -left-0.5 w-0.5 h-0.5 bg-white rounded-full"></div>
              <div className="absolute -bottom-0.5 -right-0.5 w-0.5 h-0.5 bg-white rounded-full"></div>
              <div className="text-white font-bold text-sm">spiral</div>
            </div>
            <div className="relative flex items-center justify-center bg-black border border-neutral-800 h-20 hover:bg-neutral-950 transition-colors before:absolute before:-top-0.5 before:-left-0.5 before:w-0.5 before:h-0.5 before:bg-white before:rounded-full after:absolute after:-top-0.5 after:-right-0.5 after:w-0.5 after:h-0.5 after:bg-white after:rounded-full">
              <div className="absolute -bottom-0.5 -left-0.5 w-0.5 h-0.5 bg-white rounded-full"></div>
              <div className="absolute -bottom-0.5 -right-0.5 w-0.5 h-0.5 bg-white rounded-full"></div>
              <div className="text-white font-bold text-sm">baseten</div>
            </div>
            <div className="relative flex items-center justify-center bg-black border border-neutral-800 h-20 hover:bg-neutral-950 transition-colors before:absolute before:-top-0.5 before:-left-0.5 before:w-0.5 before:h-0.5 before:bg-white before:rounded-full after:absolute after:-top-0.5 after:-right-0.5 after:w-0.5 after:h-0.5 after:bg-white after:rounded-full">
              <div className="absolute -bottom-0.5 -left-0.5 w-0.5 h-0.5 bg-white rounded-full"></div>
              <div className="absolute -bottom-0.5 -right-0.5 w-0.5 h-0.5 bg-white rounded-full"></div>
              <div className="text-white font-bold text-sm">BaseHub</div>
            </div>
            <div className="relative flex items-center justify-center bg-black border border-neutral-800 h-20 hover:bg-neutral-950 transition-colors before:absolute before:-top-0.5 before:-left-0.5 before:w-0.5 before:h-0.5 before:bg-white before:rounded-full after:absolute after:-top-0.5 after:-right-0.5 after:w-0.5 after:h-0.5 after:bg-white after:rounded-full">
              <div className="absolute -bottom-0.5 -left-0.5 w-0.5 h-0.5 bg-white rounded-full"></div>
              <div className="absolute -bottom-0.5 -right-0.5 w-0.5 h-0.5 bg-white rounded-full"></div>
              <div className="text-white font-bold text-sm">CURSOR</div>
            </div>
            
            {/* Row 3 */}
            <div className="relative flex items-center justify-center bg-black border border-neutral-800 h-20 hover:bg-neutral-950 transition-colors before:absolute before:-top-0.5 before:-left-0.5 before:w-0.5 before:h-0.5 before:bg-white before:rounded-full after:absolute after:-top-0.5 after:-right-0.5 after:w-0.5 after:h-0.5 after:bg-white after:rounded-full">
              <div className="absolute -bottom-0.5 -left-0.5 w-0.5 h-0.5 bg-white rounded-full"></div>
              <div className="absolute -bottom-0.5 -right-0.5 w-0.5 h-0.5 bg-white rounded-full"></div>
              <div className="text-white font-bold text-sm">KREA</div>
            </div>
            <div className="relative flex items-center justify-center bg-black border border-neutral-800 h-20 hover:bg-neutral-950 transition-colors before:absolute before:-top-0.5 before:-left-0.5 before:w-0.5 before:h-0.5 before:bg-white before:rounded-full after:absolute after:-top-0.5 after:-right-0.5 after:w-0.5 after:h-0.5 after:bg-white after:rounded-full">
              <div className="absolute -bottom-0.5 -left-0.5 w-0.5 h-0.5 bg-white rounded-full"></div>
              <div className="absolute -bottom-0.5 -right-0.5 w-0.5 h-0.5 bg-white rounded-full"></div>
              <div className="text-white font-bold text-sm">Harvey</div>
            </div>
            <div className="relative flex items-center justify-center bg-black border border-neutral-800 h-20 hover:bg-neutral-950 transition-colors before:absolute before:-top-0.5 before:-left-0.5 before:w-0.5 before:h-0.5 before:bg-white before:rounded-full after:absolute after:-top-0.5 after:-right-0.5 after:w-0.5 after:h-0.5 after:bg-white after:rounded-full">
              <div className="absolute -bottom-0.5 -left-0.5 w-0.5 h-0.5 bg-white rounded-full"></div>
              <div className="absolute -bottom-0.5 -right-0.5 w-0.5 h-0.5 bg-white rounded-full"></div>
              <div className="text-white font-bold text-sm">11ElevenLabs</div>
            </div>
            <div className="relative flex items-center justify-center bg-black border border-neutral-800 h-20 hover:bg-neutral-950 transition-colors before:absolute before:-top-0.5 before:-left-0.5 before:w-0.5 before:h-0.5 before:bg-white before:rounded-full after:absolute after:-top-0.5 after:-right-0.5 after:w-0.5 after:h-0.5 after:bg-white after:rounded-full">
              <div className="absolute -bottom-0.5 -left-0.5 w-0.5 h-0.5 bg-white rounded-full"></div>
              <div className="absolute -bottom-0.5 -right-0.5 w-0.5 h-0.5 bg-white rounded-full"></div>
              <div className="text-white font-bold text-sm">⏶</div>
            </div>
            <div className="relative flex items-center justify-center bg-black border border-neutral-800 h-20 hover:bg-neutral-950 transition-colors before:absolute before:-top-0.5 before:-left-0.5 before:w-0.5 before:h-0.5 before:bg-white before:rounded-full after:absolute after:-top-0.5 after:-right-0.5 after:w-0.5 after:h-0.5 after:bg-white after:rounded-full">
              <div className="absolute -bottom-0.5 -left-0.5 w-0.5 h-0.5 bg-white rounded-full"></div>
              <div className="absolute -bottom-0.5 -right-0.5 w-0.5 h-0.5 bg-white rounded-full"></div>
              <div className="text-white font-bold text-sm">ZERO MATTER</div>
            </div>
            <div className="relative flex items-center justify-center bg-black border border-neutral-800 h-20 hover:bg-neutral-950 transition-colors before:absolute before:-top-0.5 before:-left-0.5 before:w-0.5 before:h-0.5 before:bg-white before:rounded-full after:absolute after:-top-0.5 after:-right-0.5 after:w-0.5 after:h-0.5 after:bg-white after:rounded-full">
              <div className="absolute -bottom-0.5 -left-0.5 w-0.5 h-0.5 bg-white rounded-full"></div>
              <div className="absolute -bottom-0.5 -right-0.5 w-0.5 h-0.5 bg-white rounded-full"></div>
              <div className="text-white font-bold text-sm">replicate</div>
            </div>
            <div className="relative flex items-center justify-center bg-black border border-neutral-800 h-20 hover:bg-neutral-950 transition-colors before:absolute before:-top-0.5 before:-left-0.5 before:w-0.5 before:h-0.5 before:bg-white before:rounded-full after:absolute after:-top-0.5 after:-right-0.5 after:w-0.5 after:h-0.5 after:bg-white after:rounded-full">
              <div className="absolute -bottom-0.5 -left-0.5 w-0.5 h-0.5 bg-white rounded-full"></div>
              <div className="absolute -bottom-0.5 -right-0.5 w-0.5 h-0.5 bg-white rounded-full"></div>
              <div className="text-white font-bold text-sm">SOLANA</div>
            </div>
            <div className="relative flex items-center justify-center bg-black border border-neutral-800 h-20 hover:bg-neutral-950 transition-colors before:absolute before:-top-0.5 before:-left-0.5 before:w-0.5 before:h-0.5 before:bg-white before:rounded-full after:absolute after:-top-0.5 after:-right-0.5 after:w-0.5 after:h-0.5 after:bg-white after:rounded-full">
              <div className="absolute -bottom-0.5 -left-0.5 w-0.5 h-0.5 bg-white rounded-full"></div>
              <div className="absolute -bottom-0.5 -right-0.5 w-0.5 h-0.5 bg-white rounded-full"></div>
              <div className="text-white font-bold text-sm">Decentraland</div>
            </div>
            
            {/* Row 4 */}
            <div className="relative flex items-center justify-center bg-black border border-neutral-800 h-20 hover:bg-neutral-950 transition-colors before:absolute before:-top-0.5 before:-left-0.5 before:w-0.5 before:h-0.5 before:bg-white before:rounded-full after:absolute after:-top-0.5 after:-right-0.5 after:w-0.5 after:h-0.5 after:bg-white after:rounded-full">
              <div className="absolute -bottom-0.5 -left-0.5 w-0.5 h-0.5 bg-white rounded-full"></div>
              <div className="absolute -bottom-0.5 -right-0.5 w-0.5 h-0.5 bg-white rounded-full"></div>
              <div className="text-white font-bold text-sm">MR BEAST</div>
            </div>
            <div className="relative flex items-center justify-center bg-black border border-neutral-800 h-20 hover:bg-neutral-950 transition-colors before:absolute before:-top-0.5 before:-left-0.5 before:w-0.5 before:h-0.5 before:bg-white before:rounded-full after:absolute after:-top-0.5 after:-right-0.5 after:w-0.5 after:h-0.5 after:bg-white after:rounded-full">
              <div className="absolute -bottom-0.5 -left-0.5 w-0.5 h-0.5 bg-white rounded-full"></div>
              <div className="absolute -bottom-0.5 -right-0.5 w-0.5 h-0.5 bg-white rounded-full"></div>
              <div className="text-white font-bold text-sm">EDGELRD</div>
            </div>
            <div className="relative flex items-center justify-center bg-black border border-neutral-800 h-20 hover:bg-neutral-950 transition-colors before:absolute before:-top-0.5 before:-left-0.5 before:w-0.5 before:h-0.5 before:bg-white before:rounded-full after:absolute after:-top-0.5 after:-right-0.5 after:w-0.5 after:h-0.5 after:bg-white after:rounded-full">
              <div className="absolute -bottom-0.5 -left-0.5 w-0.5 h-0.5 bg-white rounded-full"></div>
              <div className="absolute -bottom-0.5 -right-0.5 w-0.5 h-0.5 bg-white rounded-full"></div>
              <div className="text-white font-bold text-sm">DAYLIGHT COMPUTER</div>
            </div>
            <div className="relative flex items-center justify-center bg-black border border-neutral-800 h-20 hover:bg-neutral-950 transition-colors before:absolute before:-top-0.5 before:-left-0.5 before:w-0.5 before:h-0.5 before:bg-white before:rounded-full after:absolute after:-top-0.5 after:-right-0.5 after:w-0.5 after:h-0.5 after:bg-white after:rounded-full">
              <div className="absolute -bottom-0.5 -left-0.5 w-0.5 h-0.5 bg-white rounded-full"></div>
              <div className="absolute -bottom-0.5 -right-0.5 w-0.5 h-0.5 bg-white rounded-full"></div>
              <div className="text-white font-bold text-sm">WARREN LOTAS</div>
            </div>
            <div className="relative flex items-center justify-center bg-black border border-neutral-800 h-20 hover:bg-neutral-950 transition-colors before:absolute before:-top-0.5 before:-left-0.5 before:w-0.5 before:h-0.5 before:bg-white before:rounded-full after:absolute after:-top-0.5 after:-right-0.5 after:w-0.5 after:h-0.5 after:bg-white after:rounded-full">
              <div className="absolute -bottom-0.5 -left-0.5 w-0.5 h-0.5 bg-white rounded-full"></div>
              <div className="absolute -bottom-0.5 -right-0.5 w-0.5 h-0.5 bg-white rounded-full"></div>
              <div className="text-white font-bold text-sm">RANBOO</div>
            </div>
            <div className="relative flex items-center justify-center bg-black border border-neutral-800 h-20 hover:bg-neutral-950 transition-colors before:absolute before:-top-0.5 before:-left-0.5 before:w-0.5 before:h-0.5 before:bg-white before:rounded-full after:absolute after:-top-0.5 after:-right-0.5 after:w-0.5 after:h-0.5 after:bg-white after:rounded-full">
              <div className="absolute -bottom-0.5 -left-0.5 w-0.5 h-0.5 bg-white rounded-full"></div>
              <div className="absolute -bottom-0.5 -right-0.5 w-0.5 h-0.5 bg-white rounded-full"></div>
              <div className="text-white font-bold text-sm">4DSUPER STUDIOS</div>
            </div>
            <div className="relative flex items-center justify-center bg-black border border-neutral-800 h-20 hover:bg-neutral-950 transition-colors before:absolute before:-top-0.5 before:-left-0.5 before:w-0.5 before:h-0.5 before:bg-white before:rounded-full after:absolute after:-top-0.5 after:-right-0.5 after:w-0.5 after:h-0.5 after:bg-white after:rounded-full">
              <div className="absolute -bottom-0.5 -left-0.5 w-0.5 h-0.5 bg-white rounded-full"></div>
              <div className="absolute -bottom-0.5 -right-0.5 w-0.5 h-0.5 bg-white rounded-full"></div>
              <div className="text-white font-bold text-sm">BASECASE</div>
            </div>
            <div className="relative flex items-center justify-center bg-black border border-neutral-800 h-20 hover:bg-neutral-950 transition-colors before:absolute before:-top-0.5 before:-left-0.5 before:w-0.5 before:h-0.5 before:bg-white before:rounded-full after:absolute after:-top-0.5 after:-right-0.5 after:w-0.5 after:h-0.5 after:bg-white after:rounded-full">
              <div className="absolute -bottom-0.5 -left-0.5 w-0.5 h-0.5 bg-white rounded-full"></div>
              <div className="absolute -bottom-0.5 -right-0.5 w-0.5 h-0.5 bg-white rounded-full"></div>
              <div className="text-white font-bold text-sm">GENERAL CATALYST</div>
            </div>
          </div>
        </div>
      </section>
      {/* End Trusted by Visionaries Section */}
      {/* <ProductDemoInterface /> */}
    </>
  )
}