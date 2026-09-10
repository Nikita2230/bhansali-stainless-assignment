"use client";

import { motion } from "motion/react";
import {
  Box,
  FileText,
  Globe2,
  MapPin,
  PackageCheck,
  Ship,
} from "lucide-react";

import Container from "@/components/ui/Container";

const destinations = [
  {
    country: "United Arab Emirates",
    detail: "Support for industrial and project procurement across the UAE.",
  },
  {
    country: "Saudi Arabia",
    detail: "Export-focused supply for industrial, energy and infrastructure requirements.",
  },
  {
    country: "Wider GCC",
    detail: "Enquiries supported for buyers across major Gulf markets.",
  },
];

const exportFeatures = [
  {
    icon: PackageCheck,
    title: "Export Packaging",
    text: "Products can be prepared for international transit with project-appropriate packaging.",
  },
  {
    icon: FileText,
    title: "Export Documentation",
    text: "Commercial and product documentation can be coordinated with the shipment requirements.",
  },
  {
    icon: Ship,
    title: "Shipping Coordination",
    text: "Shipment planning can be aligned with destination, quantity and agreed Incoterm requirements.",
  },
  {
    icon: Box,
    title: "Project Quantities",
    text: "Support for B2B project enquiries, repeat procurement and bulk requirements.",
  },
];

export default function ExportSection() {
  return (
    <section
      id="export"
      className="overflow-hidden bg-[#0B1F33] py-20 text-white sm:py-24 lg:py-28 content-visibility-auto"
    >
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#F2A46B]">
              Middle East Export
            </span>

            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-[-0.025em] text-white sm:text-4xl lg:text-[46px]">
              Export Support for UAE, Saudi Arabia & GCC Buyers
            </h2>

            <p className="mt-6 max-w-[620px] text-base leading-8 text-white/65">
              From quotation and documentation to packaging and shipment
              coordination, the export process can be aligned with project
              requirements and destination needs.
            </p>

            <div className="mt-9 space-y-4">
              {destinations.map((item) => (
                <div
                  key={item.country}
                  className="flex gap-4 rounded-xl border border-white/10 bg-white/[0.05] p-5"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10 text-[#F2A46B]">
                    <MapPin size={19} />
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-white">
                      {item.country}
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-white/55">
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="relative"
          >
            <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full border border-white/10" />
            <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full border border-white/10" />

            <div className="relative rounded-2xl border border-white/10 bg-white/[0.055] p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#E8792E] text-white">
                  <Globe2 size={24} />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/45">
                    Export Process
                  </p>

                  <h3 className="mt-1 text-xl font-bold text-white">
                    Built Around B2B Procurement
                  </h3>
                </div>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {exportFeatures.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.25 }}
                      transition={{
                        duration: 0.45,
                        delay: 0.12 + index * 0.06,
                      }}
                      className="rounded-xl border border-white/10 bg-[#071728] p-5"
                    >
                      <Icon size={21} className="text-[#F2A46B]" />

                      <h4 className="mt-5 text-sm font-bold text-white">
                        {item.title}
                      </h4>

                      <p className="mt-2 text-xs leading-6 text-white/55">
                        {item.text}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}