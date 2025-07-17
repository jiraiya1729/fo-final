"use client";

import React from "react";
import Link from "next/link";

const sections = [
  "We're building the founder's support system we wish we had when we were starting out.",
  "A founder-focussed community.",
  [
    "We've been Founders",
    "Operators",
    "And thinkers"
  ],
  "We’ve experienced success and we’ve experienced failure but most importantly… we deeply understand the struggle of building a business from the ground up.",
  [
    "And our goal is simple:",
    "To be the most valued founders community in India, build the best startup ecosystem from Hyderabad and ship world class products from first order founders."
  ]
];

export default function PurposePage() {
  return (
    <main className="bg-white min-h-screen w-full font-sans">
      <div className="w-full flex justify-start px-6 pt-6 pb-2 sticky top-0 z-10 bg-white/80">
        <Link href="/" className="text-gray-500 hover:text-gray-900 text-base underline underline-offset-4">← Home</Link>
      </div>
      {sections.map((text, idx) => (
        <section
          key={idx}
          className="min-h-screen flex items-center justify-center px-6"
        >
          {Array.isArray(text) ? (
            <div className="max-w-2xl mx-auto text-center text-2xl text-gray-900 leading-snug space-y-2">
              {text.map((line, i) => (
                <div key={i}>{line}</div>
              ))}
            </div>
          ) : (
            <div className="max-w-2xl mx-auto text-center text-2xl text-gray-900 leading-snug">
              {text}
            </div>
          )}
        </section>
      ))}
    </main>
  );
} 