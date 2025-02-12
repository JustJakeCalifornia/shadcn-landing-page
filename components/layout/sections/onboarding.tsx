"use client";

import { Card } from "@/components/ui/card";
import { CalendarDays, Layers, PlayCircle } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stepVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

function AnimatedStep({ step, index }: any) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      variants={stepVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      custom={index}
    >
      <div className="flex gap-6">
        <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-background text-sm font-semibold">
          {step.number}
        </div>
        <div className="flex flex-1 items-start gap-4">
          <div className="space-y-1">
            <h3 className="text-lg font-medium leading-tight text-foreground">
              {step.title}
            </h3>
            <p className="text-sm text-muted-foreground">{step.description}</p>
          </div>
          <Card className="hidden sm:flex h-16 w-16 shrink-0 items-center justify-center bg-muted border-0">
            <step.icon className="h-8 w-8 text-muted-foreground" />
          </Card>
        </div>
      </div>
    </motion.div>
  );
}

export const OnboardingSection = () => {
  const steps = [
    {
      number: "1",
      title: "Try Out Demo",
      description:
        "Experience our solution firsthand. Request a demo through our contact form and see how it can transform your operations.",
      icon: PlayCircle,
    },
    {
      number: "2",
      title: "Select Modules",
      description:
        "Choose the specific modules that best fit your municipality or business needs after experiencing the demo.",
      icon: Layers,
    },
    {
      number: "3",
      title: "Delivery & Training",
      description:
        "Schedule a convenient date for system deployment and comprehensive on-site training for your team.",
      icon: CalendarDays,
    },
  ];

  return (
    <section id="onboarding" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Onboarding
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4 text-foreground">
        How it works
      </h2>
      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        These are the steps to seamlessly start your journey towards more
        efficient city management.
      </h3>
      <div className="max-w-3xl mx-auto px-4 py-8">
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[1.35rem] top-0 bottom-[2.5rem] w-0.5 bg-border" />

          <div className="space-y-8">
            {steps.map((step, index) => (
              <AnimatedStep key={index} step={step} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
