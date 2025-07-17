import React from 'react';

export const WhatWeBelieve = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center flex flex-col items-center justify-center h-full">
          <h2 className="text-4xl font-medium tracking-tight text-balance text-gray-900 sm:text-5xl lg:text-6xl leading-tight mb-8">
            We believe the best way to learn is by <em className="italic font-serif">building</em>. And the best way to build is together.
          </h2>
        </div>
      </div>
    </section>
  );
};