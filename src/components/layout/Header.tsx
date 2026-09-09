import {
  Mail,
  MessageCircle,
  Phone,
  Menu,
  ArrowRight,
} from "lucide-react";

import Container from "@/components/ui/Container";

export default function Header() {
  return (
    <header className="w-full bg-white">
      {/* Top contact bar */}
      <div className="bg-[#0B1F33] text-white">
  <Container>
    <div className="flex min-h-10 items-center justify-between gap-4 py-2 text-xs sm:text-sm">
      <p className="hidden lg:block text-white/75">
        Stainless Steel Export Solutions for UAE, Saudi Arabia & GCC
      </p>

      <div className="flex w-full items-center justify-between gap-3 lg:w-auto lg:justify-end">
        <a
          href="tel:+919999999999"
          className="flex items-center gap-1.5 whitespace-nowrap transition hover:text-[#E8792E]"
        >
          <Phone size={14} />
          <span className="hidden sm:inline">+91 99999 99999</span>
          <span className="sm:hidden">Call</span>
        </a>

        <a
          href="mailto:exports@bhansalistainless.com"
          className="hidden items-center gap-1.5 whitespace-nowrap transition hover:text-[#E8792E] md:flex"
        >
          <Mail size={14} />
          exports@bhansalistainless.com
        </a>

        <a
          href="https://wa.me/919999999999"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 whitespace-nowrap font-medium text-[#F5A15E] transition hover:text-white"
        >
          <MessageCircle size={14} />
          WhatsApp
        </a>
      </div>
    </div>
  </Container>
</div>

      {/* Main navigation */}
      <div className="border-b border-[#DCE3E8] bg-white">
        <Container>
          <div className="flex h-[68px] items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[#0B1F33] text-sm font-bold text-white">
                BS
              </div>

              <div>
  <div className="text-[15px] font-bold leading-tight text-[#0B1F33] sm:text-[17px]">
    Bhansali Stainless
  </div>

  <div className="hidden text-[10px] font-semibold uppercase tracking-[0.2em] text-[#66727F] sm:block">
    Global Stainless Solutions
  </div>
</div>
            </a>

            {/* Desktop menu */}
            <nav aria-label="Primary navigation" className="hidden items-center gap-7 lg:flex">
              <a
                href="#overview"
                className="text-sm font-medium text-[#33404D] transition hover:text-[#E8792E]"
              >
                Overview
              </a>

              <a
                href="#grades"
                className="text-sm font-medium text-[#33404D] transition hover:text-[#E8792E]"
              >
                Grades
              </a>

              <a
                href="#specifications"
                className="text-sm font-medium text-[#33404D] transition hover:text-[#E8792E]"
              >
                Specifications
              </a>

              <a
                href="#certifications"
                className="text-sm font-medium text-[#33404D] transition hover:text-[#E8792E]"
              >
                Certifications
              </a>

              <a
                href="#export"
                className="text-sm font-medium text-[#33404D] transition hover:text-[#E8792E]"
              >
                Export
              </a>
            </nav>

            {/* CTA */}
            <div className="hidden lg:block">
              <a
                href="#enquiry"
                className="inline-flex items-center gap-2 rounded-md bg-[#E8792E] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#cf6724]"
              >
                Request a Quote
                <ArrowRight size={16} />
              </a>
            </div>

            {/* Mobile icon */}
            <button
              type="button"
              aria-label="Open navigation menu"
               aria-expanded="false"
              className="flex h-10 w-10 items-center justify-center rounded-md border border-[#DCE3E8] text-[#0B1F33] lg:hidden"
            >
              <Menu size={21} />
            </button>
          </div>
        </Container>
      </div>
    </header>
  );
}