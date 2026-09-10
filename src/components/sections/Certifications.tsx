"use client";

import { motion } from "motion/react";
import {
  BadgeCheck,
  FileCheck2,
  SearchCheck,
  ShieldCheck,
} from "lucide-react";

import Container from "@/components/ui/Container";

const certifications = [
  {
    icon: BadgeCheck,
    title: "ASTM Standards",
    description:
      "Material and product requirements can be aligned with applicable ASTM specifications based on buyer requirements.",
    tag: "Placeholder",
  },
  {
    icon: ShieldCheck,
    title: "ISO Quality Framework",
    description:
      "Quality processes and documentation can be presented against relevant ISO requirements for project submissions.",
    tag: "Placeholder",
  },
  {
    icon: FileCheck2,
    title: "Material Test Certificate",
    description:
      "Material Test Certificates can accompany supplied products where required by the purchase specification.",
    tag: "Documentation",
  },
  {
    icon: SearchCheck,
    title: "Inspection Support",
    description:
      "Inspection and verification documentation can be arranged according to agreed project and export requirements.",
    tag: "Quality",
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="bg-[#F5F7F9] py-20 sm:py-24 lg:py-28 content-visibility-auto"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#E8792E]">
              Quality & Compliance
            </span>

            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-[-0.025em] text-[#0B1F33] sm:text-4xl lg:text-[44px]">
              Documentation Ready for Industrial Procurement
            </h2>

            <p className="mt-6 text-base leading-8 text-[#66727F]">
              Certification and inspection requirements vary by buyer, project
              and destination. Relevant documentation can be aligned with the
              agreed procurement specification.
            </p>

            <div className="mt-8 rounded-xl border border-[#DCE3E8] bg-white p-5">
              <p className="text-sm font-semibold text-[#0B1F33]">
                Important
              </p>

              <p className="mt-2 text-sm leading-6 text-[#66727F]">
                ASTM and ISO references on this sample page are placeholders,
                as requested in the assignment brief. Final certification
                claims should be verified against actual product and company
                documentation.
              </p>
            </div>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2">
            {certifications.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="rounded-xl border border-[#DCE3E8] bg-white p-6"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#EAF0F4] text-[#1F4E79]">
                      <Icon size={23} />
                    </div>

                    <span className="rounded-full bg-[#FFF1E7] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-[#C45F20]">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="mt-6 text-lg font-bold text-[#0B1F33]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#66727F]">
                    {item.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}