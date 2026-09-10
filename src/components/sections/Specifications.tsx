"use client";

import { motion } from "motion/react";
import { FileText, Ruler, Gauge, Layers3 } from "lucide-react";

import Container from "@/components/ui/Container";

const specifications = [
  ["Material Grades", "SS 304, SS 316, SS 316L"],
  [
    "Flange Types",
    "Weld Neck, Slip On, Blind, Socket Weld, Threaded, Lap Joint",
  ],
  ["Size Range", "Project-dependent / as per enquiry"],
  ["Pressure Class", "As per applicable project specification"],
  ["Standards", "ASTM / ASME / ISO placeholders"],
  ["Facing Options", "RF / FF / RTJ based on requirement"],
  ["Surface Finish", "Standard industrial finish / project specific"],
  [
    "Documentation",
    "Material Test Certificate and inspection documents",
  ],
];

const highlights = [
  {
    icon: Ruler,
    title: "Project-Specific Sizes",
    text: "Dimensions and sizes can be supplied according to project requirements.",
  },
  {
    icon: Gauge,
    title: "Pressure Classes",
    text: "Multiple pressure ratings can be supported based on applicable specifications.",
  },
  {
    icon: Layers3,
    title: "Material Options",
    text: "Available in commonly requested stainless steel grades including 304, 316 and 316L.",
  },
  {
    icon: FileText,
    title: "Documentation",
    text: "Material and inspection documentation can accompany export supply.",
  },
];

export default function Specifications() {
  return (
    <section
      id="specifications"
      className="content-visibility-auto bg-white py-20 sm:py-24 lg:py-28"
    >
      <Container>
        <div className="grid min-w-0 gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
          {/* Intro */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#E8792E]">
              Technical Data
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-[-0.025em] text-[#0B1F33] sm:text-4xl lg:text-[44px]">
              Technical Specifications
            </h2>

            <p className="mt-6 text-base leading-8 text-[#66727F]">
              Product specifications can be aligned with project drawings,
              procurement documents and applicable industrial standards.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {highlights.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="flex gap-4 rounded-lg border border-[#E2E8ED] bg-[#F8FAFB] p-4"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#EAF0F4] text-[#1F4E79]">
                      <Icon size={19} />
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-sm font-bold text-[#0B1F33]">
                        {item.title}
                      </h3>

                      <p className="mt-1 break-words text-xs leading-5 text-[#66727F]">
                        {item.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Specifications */}
          <motion.div
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="min-w-0"
          >
            {/* Desktop / Tablet Table */}
            <div className="hidden overflow-hidden rounded-xl border border-[#DCE3E8] sm:block">
              <div className="bg-[#0B1F33] px-6 py-5">
                <p className="text-sm font-semibold text-white">
                  Stainless Steel Flange Specification Overview
                </p>
              </div>

              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="bg-[#F5F7F9]">
                    <th className="border-b border-[#DCE3E8] px-6 py-4 text-xs font-bold uppercase tracking-[0.12em] text-[#52606D]">
                      Parameter
                    </th>

                    <th className="border-b border-[#DCE3E8] px-6 py-4 text-xs font-bold uppercase tracking-[0.12em] text-[#52606D]">
                      Available Specification
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {specifications.map(([label, value]) => (
                    <tr
                      key={label}
                      className="border-b border-[#E5EAEE] last:border-b-0"
                    >
                      <td className="w-[34%] px-6 py-4 align-top text-sm font-semibold text-[#0B1F33]">
                        {label}
                      </td>

                      <td className="break-words px-6 py-4 text-sm leading-6 text-[#66727F]">
                        {value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="space-y-3 sm:hidden">
              <div className="rounded-xl bg-[#0B1F33] px-5 py-4">
                <p className="text-sm font-semibold leading-6 text-white">
                  Stainless Steel Flange Specification Overview
                </p>
              </div>

              {specifications.map(([label, value]) => (
                <div
                  key={label}
                  className="min-w-0 rounded-xl border border-[#DCE3E8] bg-white p-4"
                >
                  <p className="break-words text-xs font-bold uppercase tracking-[0.1em] text-[#52606D]">
                    {label}
                  </p>

                  <p className="mt-2 break-words text-sm leading-6 text-[#66727F]">
                    {value}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-4 text-xs leading-5 text-[#7A8691]">
              Final specifications should be confirmed against the buyer&apos;s
              purchase order, drawings and applicable project standards.
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}