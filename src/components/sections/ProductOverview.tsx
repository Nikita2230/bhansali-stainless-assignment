"use client";

import { motion } from "motion/react";
import {
  Factory,
  Flame,
  Droplets,
  Building2,
  CheckCircle2,
} from "lucide-react";

import Container from "@/components/ui/Container";

const applications = [
  {
    icon: Factory,
    title: "Process Industries",
    description:
      "Suitable for piping systems used across chemical, petrochemical and industrial processing environments.",
  },
  {
    icon: Flame,
    title: "Oil & Gas",
    description:
      "Reliable flange solutions for pressure piping, refineries, terminals and energy infrastructure.",
  },
  {
    icon: Droplets,
    title: "Water Systems",
    description:
      "Applicable for desalination, water treatment and industrial fluid handling projects.",
  },
  {
    icon: Building2,
    title: "Infrastructure",
    description:
      "Designed for large-scale commercial, utility and industrial infrastructure requirements.",
  },
];

const highlights = [
  "Available in SS 304, SS 316 and SS 316L",
  "Multiple pressure classes and flange types",
  "Suitable for export and project-based procurement",
  "Material and certification documentation available",
];

export default function ProductOverview() {
  return (
    <section id="overview" className="bg-white py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#E8792E]">
              Product Overview
            </span>

            <h2 className="mt-4 max-w-[580px] text-3xl font-bold leading-tight tracking-[-0.025em] text-[#0B1F33] sm:text-4xl lg:text-[46px]">
              Stainless Steel Flanges Built for Demanding Industrial Projects
            </h2>

            <p className="mt-6 max-w-[610px] text-base leading-8 text-[#66727F]">
              Our stainless steel flange range is designed for dependable pipe
              connections across industrial, energy, infrastructure and process
              applications. Products are available in commonly specified
              stainless grades with options suited to project and export
              requirements.
            </p>

            <div className="mt-8 space-y-4">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    size={19}
                    className="mt-0.5 shrink-0 text-[#E8792E]"
                  />

                  <span className="text-sm leading-6 text-[#33404D]">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="#specifications"
              className="mt-8 inline-flex border-b-2 border-[#E8792E] pb-1 text-sm font-semibold text-[#0B1F33] transition hover:text-[#E8792E]"
            >
              View technical specifications
            </a>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, delay: 0.08, ease: "easeOut" }}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              {applications.map((application, index) => {
                const Icon = application.icon;

                return (
                  <motion.article
                    key={application.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.08,
                      ease: "easeOut",
                    }}
                    className="group rounded-xl border border-[#DCE3E8] bg-[#F8FAFB] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#B8C7D2] hover:bg-white hover:shadow-[0_18px_50px_rgba(11,31,51,0.08)]"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#EAF0F4] text-[#1F4E79] transition group-hover:bg-[#0B1F33] group-hover:text-white">
                      <Icon size={23} />
                    </div>

                    <h3 className="mt-6 text-lg font-bold text-[#0B1F33]">
                      {application.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[#66727F]">
                      {application.description}
                    </p>
                  </motion.article>
                );
              })}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}