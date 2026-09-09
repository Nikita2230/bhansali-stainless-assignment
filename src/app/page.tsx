import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import ProductOverview from "@/components/sections/ProductOverview";
import GradeVariants from "@/components/sections/GradeVariants";
import ProductTypes from "@/components/sections/ProductTypes";
import Specifications from "@/components/sections/Specifications";
import Certifications from "@/components/sections/Certifications";
import ExportSection from "@/components/sections/ExportSection";
import EnquirySection from "@/components/sections/EnquirySection";

export default function Home() {
  return (
    <>
    <a
  href="#main-content"
  className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[9999] focus:rounded-md focus:bg-white focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-[#0B1F33] focus:shadow-lg"
>
  Skip to main content
</a>
      <Header />

      <main id="main-content">
        <Hero />
        <ProductOverview />
        <GradeVariants />
        <ProductTypes />
        <Specifications />
        <Certifications />
        <ExportSection />
        <EnquirySection />
      </main>
    </>
  );
}