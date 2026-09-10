"use client";

import { motion } from "motion/react";
import {
  CircleDot,
  Circle,
  Disc3,
  Cable,
  PanelsTopLeft,
  Workflow,
} from "lucide-react";

import Container from "@/components/ui/Container";

const types = [
  {
    title: "Weld Neck",
    description:
      "Designed for high-pressure and demanding piping systems where strong welded connections are required.",
    icon: Workflow,
  },
  {
    title: "Slip On",
    description:
      "A practical flange option widely used in general piping applications and fabrication projects.",
    icon: CircleDot,
  },
  {
    title: "Blind",
    description:
      "Used to seal pipe ends, valves or vessel openings where future access or isolation may be needed.",
    icon: Disc3,
  },
  {
    title: "Socket Weld",
    description:
      "Suitable for smaller bore and higher-pressure piping systems requiring compact welded connections.",
    icon: Cable,
  },
  {
    title: "Threaded",
    description:
      "Useful where welded installation is not preferred, depending on project and service requirements.",
    icon: PanelsTopLeft,
  },
  {
    title: "Lap Joint",
    description:
      "Commonly selected where alignment, dismantling or frequent maintenance flexibility is important.",
    icon: Circle,
  },
];

export default function ProductTypes() {
  return (
    <section className="bg-[#F5F7F9] py-20 sm:py-24 lg:py-28 content-visibility-auto">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-[760px] text-center"
        >
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#E8792E]">
            Flange Range
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-[-0.025em] text-[#0B1F33] sm:text-4xl lg:text-[46px]">
            Flange Types for Diverse Piping Requirements
          </h2>

          <p className="mt-6 text-base leading-8 text-[#66727F]">
            Available across commonly requested flange configurations to support
            industrial, process and infrastructure piping systems.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {types.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.06,
                }}
                className="rounded-xl border border-[#DCE3E8] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(11,31,51,0.08)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#EAF0F4] text-[#1F4E79]">
                  <Icon size={23} />
                </div>

                <h3 className="mt-5 text-lg font-bold text-[#0B1F33]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#66727F]">
                  {item.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}