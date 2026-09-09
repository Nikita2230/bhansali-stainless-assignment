"use client";

import { motion } from "motion/react";
import {
  Check,
  ShieldCheck,
  Factory,
  Droplets,
} from "lucide-react";

import Container from "@/components/ui/Container";

const grades = [
  {
    grade: "304",
    title: "SS 304",
    description:
      "A widely used stainless steel grade suitable for general industrial, fabrication and piping applications.",
    bestFor: "General industrial use",
    points: [
      "Good corrosion resistance",
      "Strong fabrication versatility",
      "Suitable for common piping systems",
    ],
    icon: Factory,
  },
  {
    grade: "316",
    title: "SS 316",
    description:
      "Designed for environments requiring enhanced corrosion resistance, including marine and process applications.",
    bestFor: "Corrosive environments",
    points: [
      "Enhanced corrosion resistance",
      "Suitable for chemical processing",
      "Preferred for demanding environments",
    ],
    icon: ShieldCheck,
  },
  {
    grade: "316L",
    title: "SS 316L",
    description:
      "A low-carbon variant of 316 commonly selected for welded systems and applications requiring improved resistance after welding.",
    bestFor: "Welded piping systems",
    points: [
      "Low carbon composition",
      "Suitable for welded assemblies",
      "Strong process-industry suitability",
    ],
    icon: Droplets,
  },
];

export default function GradeVariants() {
  return (
    <section
      id="grades"
      className="bg-[#0B1F33] py-20 text-white sm:py-24 lg:py-28"
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-[760px]"
        >
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#F2A46B]">
            Material Grades
          </span>

          <h2 className="mt-4 text-3xl font-bold leading-tight tracking-[-0.025em] text-white sm:text-4xl lg:text-[46px]">
            Choose the Right Stainless Steel Grade for Your Project
          </h2>

          <p className="mt-6 max-w-[680px] text-base leading-8 text-white/65">
            Available across commonly specified stainless steel grades to suit
            industrial, process, infrastructure and export requirements.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {grades.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.grade}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.055] p-7 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.08]"
              >
                {/* Large grade marker */}
                <div className="absolute right-5 top-2 text-[82px] font-black leading-none text-white/[0.035]">
                  {item.grade}
                </div>

                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/10 text-[#F2A46B]">
                      <Icon size={23} />
                    </div>

                    <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-white/60">
                      Grade {item.grade}
                    </span>
                  </div>

                  <h3 className="mt-7 text-2xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-4 min-h-[84px] text-sm leading-7 text-white/60">
                    {item.description}
                  </p>

                  <div className="mt-6 border-t border-white/10 pt-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/40">
                      Recommended for
                    </p>

                    <p className="mt-2 text-sm font-semibold text-[#F2A46B]">
                      {item.bestFor}
                    </p>
                  </div>

                  <ul className="mt-6 space-y-3">
                    {item.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2.5 text-sm text-white/70"
                      >
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#E8792E]/15 text-[#F2A46B]">
                          <Check size={12} strokeWidth={3} />
                        </span>

                        {point}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#enquiry"
                    className="mt-7 inline-flex border-b border-[#F2A46B] pb-1 text-sm font-semibold text-white transition hover:text-[#F2A46B]"
                  >
                    Enquire for SS {item.grade}
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Supporting note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-8 flex flex-col justify-between gap-4 rounded-xl border border-white/10 bg-white/[0.04] px-6 py-5 md:flex-row md:items-center"
        >
          <div>
            <p className="text-sm font-semibold text-white">
              Not sure which grade fits your specification?
            </p>

            <p className="mt-1 text-sm text-white/55">
              Share your project requirements and requested standards with our
              export team.
            </p>
          </div>

          <a
            href="#enquiry"
            className="inline-flex shrink-0 items-center justify-center rounded-md bg-[#E8792E] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#cf6724]"
          >
            Discuss Your Requirement
          </a>
        </motion.div>
      </Container>
    </section>
  );
}