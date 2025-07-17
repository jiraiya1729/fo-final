"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "motion/react";
import Image from "next/image";

export function ThreeColumnsWithImages() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black p-8 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-red-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 md:px-8">
        <h2 className="text-4xl md:text-5xl font-light text-gray-100 leading-tight text-center mb-4">
          Dashboard for winners
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-center text-lg text-gray-300">
          Our state of the art dashboard features the most comprehensive insights
          for your SaaS tool, with a blazing fast, we are so back AI text
          generation model.
        </p>
        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
          {items.map((item, index) => (
            <Card
              key={item.title + index + "card-three-columns-with-images"}
              className={cn("flex flex-col justify-between", item.className)}
              delay={index * 0.2}
            >
              <CardContent className="h-40">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                  <CardTitle>{item.title}</CardTitle>
                </div>
                <CardDescription>{item.description}</CardDescription>
              </CardContent>
              <CardSkeletonBody>{item.header}</CardSkeletonBody>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

const items = [
  {
    title: "Dashboard that matters",
    description:
      "Discover insights and trends with our advanced analytics dashboard.",
    header: (
      <div className="relative overflow-hidden rounded-lg">
        <Image
          src="https://assets.aceternity.com/pro/bento-1.png"
          alt="Bento grid 1"
          width={500}
          height={500}
          className="w-full h-48 rounded-lg object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent rounded-lg"></div>
      </div>
    ),
    className: "md:col-span-1",
  },
  {
    title: "Automated emails",
    description:
      "Send emails in bulk to everyone, with AI-powered suggestions.",
    header: (
      <div className="relative overflow-hidden rounded-lg">
        <Image
          src="https://assets.aceternity.com/pro/bento-2.png"
          alt="Bento grid 2"
          width={500}
          height={500}
          className="w-full h-48 rounded-lg object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent rounded-lg"></div>
      </div>
    ),
    className: "md:col-span-1",
  },
  {
    title: "Super fast Analytics",
    description:
      "Get insights on your data with our blazing fast analytics dashboard.",
    header: (
      <div className="relative overflow-hidden rounded-lg">
        <Image
          src="https://assets.aceternity.com/pro/bento-4.png"
          alt="Bento grid 3"
          width={500}
          height={500}
          className="w-full h-48 rounded-lg object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent rounded-lg"></div>
      </div>
    ),
    className: "md:col-span-1",
  },
];

// Card structure
const CardSkeletonBody = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={cn("overflow-hidden p-6", className)}>{children}</div>;
};

const CardContent = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={cn("p-6", className)}>{children}</div>;
};

const CardTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h3
      className={cn(
        "font-sans text-base font-medium tracking-tight text-gray-100",
        className
      )}
    >
      {children}
    </h3>
  );
};

const CardDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={cn(
        "mt-2 max-w-xs font-sans text-base font-normal tracking-tight text-gray-300",
        className
      )}
    >
      {children}
    </p>
  );
};

const Card = ({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ 
        scale: 1.02,
        boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
      }}
      className={cn(
        "group isolate flex flex-col overflow-hidden rounded-2xl bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 shadow-2xl hover:shadow-blue-500/20 transition-all duration-300",
        className
      )}
    >
      {children}
    </motion.div>
  );
};