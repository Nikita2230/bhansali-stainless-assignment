"use client";

import { motion } from "motion/react";
import {
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  ShieldCheck,
  Truck,
} from "lucide-react";

import Container from "@/components/ui/Container";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#F5F7F9]">
      {/* Decorative background */}
      <div className="absolute inset-y-0 right-0 hidden w-[42%] bg-[#EAF0F4] lg:block" />

      <Container className="relative">
        <div className="grid min-h-[650px] items-center gap-12 py-14 md:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-20">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="max-w-[680px]"
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#D7E0E7] bg-white px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#1F4E79]">
              <span className="h-2 w-2 rounded-full bg-[#E8792E]" />
              Exporting Across UAE, Saudi Arabia & GCC
            </div>

            <h1 className="max-w-[650px] text-[42px] font-bold leading-[1.08] tracking-[-0.035em] text-[#0B1F33] sm:text-[52px] lg:text-[64px]">
              Stainless Steel
              <span className="block text-[#1F4E79]">Flanges for Global Industry</span>
            </h1>

            <p className="mt-6 max-w-[610px] text-[17px] leading-8 text-[#66727F] sm:text-lg">
              Reliable stainless steel flanges in grades 304, 316 and 316L,
              supplied for industrial, infrastructure and process applications
              across the Middle East.
            </p>

            {/* Key benefits */}
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              <div className="flex items-center gap-2.5 text-sm font-medium text-[#33404D]">
                <CheckCircle2 size={18} className="text-[#E8792E]" />
                ASTM / ISO aligned supply
              </div>

              <div className="flex items-center gap-2.5 text-sm font-medium text-[#33404D]">
                <CheckCircle2 size={18} className="text-[#E8792E]" />
                Grades 304, 316 & 316L
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#enquiry"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-[#E8792E] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#cf6724]"
              >
                Request Export Quote
                <ArrowRight size={17} />
              </a>

              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-[#CBD6DE] bg-white px-6 py-3.5 text-sm font-semibold text-[#0B1F33] transition hover:border-[#1F4E79] hover:text-[#1F4E79]"
              >
                <MessageCircle size={17} />
                WhatsApp Enquiry
              </a>
            </div>

            {/* Trust row */}
            <div className="mt-10 grid max-w-[580px] grid-cols-3 divide-x divide-[#D8E0E6] border-t border-[#D8E0E6] pt-6">
              <div className="pr-4">
                <div className="text-xl font-bold text-[#0B1F33] sm:text-2xl">
                  304–316L
                </div>
                <div className="mt-1 text-xs leading-5 text-[#66727F]">
                  Stainless grades
                </div>
              </div>

              <div className="px-4">
                <div className="text-xl font-bold text-[#0B1F33] sm:text-2xl">
                  GCC
                </div>
                <div className="mt-1 text-xs leading-5 text-[#66727F]">
                  Export focused
                </div>
              </div>

              <div className="pl-4">
                <div className="text-xl font-bold text-[#0B1F33] sm:text-2xl">
                  B2B
                </div>
                <div className="mt-1 text-xs leading-5 text-[#66727F]">
                  Industrial supply
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right product visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.15, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative mx-auto max-w-[560px]">
              <div className="absolute -left-5 top-10 h-28 w-28 rounded-full border border-[#CDD8E0]" />
              <div className="absolute -right-8 bottom-10 h-44 w-44 rounded-full border border-[#D7E0E7]" />

              <div className="relative overflow-hidden rounded-2xl border border-[#D7E0E7] bg-[#0B1F33] p-7 shadow-[0_30px_80px_rgba(11,31,51,0.16)] sm:p-9">
                {/* Product illustration */}
                <div className="relative flex min-h-[330px] items-center justify-center">
                  <div className="relative flex h-[260px] w-[260px] items-center justify-center rounded-full bg-gradient-to-br from-[#DCE3E8] via-[#9DAAB4] to-[#64727D] shadow-2xl sm:h-[310px] sm:w-[310px]">
                    <div className="absolute inset-[26px] rounded-full border-[14px] border-[#E8EDF0] shadow-inner" />

                    <div className="absolute inset-[78px] rounded-full bg-[#0B1F33] shadow-inner sm:inset-[90px]" />

                    {/* Bolt holes */}
                    {[
                      "top-5 left-1/2 -translate-x-1/2",
                      "bottom-5 left-1/2 -translate-x-1/2",
                      "left-5 top-1/2 -translate-y-1/2",
                      "right-5 top-1/2 -translate-y-1/2",
                    ].map((position) => (
                      <span
                        key={position}
                        className={`absolute ${position} h-8 w-8 rounded-full bg-[#0B1F33] shadow-inner sm:h-9 sm:w-9`}
                      />
                    ))}

                    <span className="absolute left-[43px] top-[43px] h-7 w-7 rounded-full bg-[#0B1F33] sm:left-[50px] sm:top-[50px]" />
                    <span className="absolute right-[43px] top-[43px] h-7 w-7 rounded-full bg-[#0B1F33] sm:right-[50px] sm:top-[50px]" />
                    <span className="absolute bottom-[43px] left-[43px] h-7 w-7 rounded-full bg-[#0B1F33] sm:bottom-[50px] sm:left-[50px]" />
                    <span className="absolute bottom-[43px] right-[43px] h-7 w-7 rounded-full bg-[#0B1F33] sm:bottom-[50px] sm:right-[50px]" />
                  </div>
                </div>

                <div className="mt-4 border-t border-white/10 pt-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#ECA36A]">
                        Export Grade
                      </p>

                      <h2 className="mt-2 text-xl font-semibold text-white">
                        Stainless Steel Flanges
                      </h2>
                    </div>

                    <div className="rounded-md bg-white/10 px-3 py-2 text-xs font-semibold text-white">
                      SS 304 / 316 / 316L
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating trust cards */}
              <div className="absolute -bottom-6 -left-3 hidden rounded-xl border border-[#DCE3E8] bg-white p-4 shadow-lg sm:flex sm:items-center sm:gap-3 lg:-left-8">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#EEF4F7] text-[#1F4E79]">
                  <ShieldCheck size={21} />
                </div>

                <div>
                  <div className="text-sm font-semibold text-[#0B1F33]">
                    Quality Assured
                  </div>
                  <div className="text-xs text-[#66727F]">
                    Certification ready
                  </div>
                </div>
              </div>

              <div className="absolute -right-3 top-8 hidden rounded-xl border border-[#DCE3E8] bg-white p-4 shadow-lg sm:flex sm:items-center sm:gap-3 lg:-right-8">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#FFF2E9] text-[#E8792E]">
                  <Truck size={21} />
                </div>

                <div>
                  <div className="text-sm font-semibold text-[#0B1F33]">
                    GCC Export
                  </div>
                  <div className="text-xs text-[#66727F]">
                    UAE & Saudi Arabia
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}