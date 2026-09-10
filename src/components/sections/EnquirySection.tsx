"use client";

import { FormEvent, useState } from "react";
import { motion } from "motion/react";
import { sendGTMEvent } from "@next/third-parties/google";
import {
  ArrowRight,
  Mail,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";

import Container from "@/components/ui/Container";

type FormData = {
  name: string;
  email: string;
  phone: string;
  productInterest: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const initialFormData: FormData = {
  name: "",
  email: "",
  phone: "",
  productInterest: "",
};

export default function EnquirySection() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
const [isSubmitting, setIsSubmitting] = useState(false);
const [submitError, setSubmitError] = useState("");

  const validate = () => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your phone number.";
    } else if (!/^[0-9+\-\s()]{7,20}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number.";
    }

    if (!formData.productInterest) {
      newErrors.productInterest = "Please select a product interest.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (
  event: FormEvent<HTMLFormElement>
) => {
  event.preventDefault();

  setSubmitted(false);
  setSubmitError("");

  if (!validate()) {
    return;
  }

  try {
    setIsSubmitting(true);

    const response = await fetch("/api/enquiry", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (!response.ok || !result.success) {
      throw new Error(
        result.message || "Unable to submit enquiry."
      );
    }

    sendGTMEvent({
  event: "generate_lead",
  form_name: "stainless_steel_flange_enquiry",
  product_interest: formData.productInterest,
  lead_source: "website_assignment",
});

    setSubmitted(true);
    setFormData(initialFormData);
    setErrors({});
  } catch (error) {
    console.error(error);

    setSubmitError(
      "We couldn't submit your enquiry. Please try again."
    );
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <section
      id="enquiry"
      className="bg-[#F5F7F9] py-20 sm:py-24 lg:py-28 content-visibility-auto"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#E8792E]">
              Request a Quote
            </span>

            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-[-0.025em] text-[#0B1F33] sm:text-4xl lg:text-[46px]">
              Send Your Stainless Steel Flange Requirement
            </h2>

            <p className="mt-6 max-w-[560px] text-base leading-8 text-[#66727F]">
              Share your product requirement, destination and contact details.
              This sample enquiry flow is designed for B2B export leads across
              the UAE, Saudi Arabia and wider GCC markets.
            </p>

            <div className="mt-9 space-y-4">
              <a
                href="tel:+919999999999"
                className="flex items-center gap-4 rounded-xl border border-[#DCE3E8] bg-white p-4 transition hover:border-[#B8C7D2]"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#EAF0F4] text-[#1F4E79]">
                  <Phone size={20} />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#7A8691]">
                    Call
                  </p>

                  <p className="mt-1 text-sm font-bold text-[#0B1F33]">
                    +91 99999 99999
                  </p>
                </div>
              </a>

              <a
                href="mailto:exports@bhansalistainless.com"
                className="flex items-center gap-4 rounded-xl border border-[#DCE3E8] bg-white p-4 transition hover:border-[#B8C7D2]"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#EAF0F4] text-[#1F4E79]">
                  <Mail size={20} />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#7A8691]">
                    Email
                  </p>

                  <p className="mt-1 break-all text-sm font-bold text-[#0B1F33]">
                    exports@bhansalistainless.com
                  </p>
                </div>
              </a>

              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-xl border border-[#DCE3E8] bg-white p-4 transition hover:border-[#B8C7D2]"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#FFF1E7] text-[#E8792E]">
                  <MessageCircle size={20} />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#7A8691]">
                    WhatsApp
                  </p>

                  <p className="mt-1 text-sm font-bold text-[#0B1F33]">
                    Start a quick enquiry
                  </p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.08 }}
          >
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-2xl border border-[#DCE3E8] bg-white p-6 shadow-[0_24px_60px_rgba(11,31,51,0.08)] sm:p-8"
            >
              <div className="grid gap-6 sm:grid-cols-2">
                {/* Name */}
                <div className="sm:col-span-1">
                  <label
                    htmlFor="name"
                    className="text-sm font-semibold text-[#0B1F33]"
                  >
                    Name <span className="text-[#E8792E]">*</span>
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={(event) =>
                      setFormData({
                        ...formData,
                        name: event.target.value,
                      })
                    }
                    placeholder="Your full name"
                    className={`mt-2 w-full rounded-lg border px-4 py-3.5 text-sm text-[#17212B] outline-none transition placeholder:text-[#9AA5AE] ${
                      errors.name
                        ? "border-red-400 focus:border-red-500"
                        : "border-[#DCE3E8] focus:border-[#1F4E79]"
                    }`}
                    aria-invalid={!!errors.name}
aria-describedby={errors.name ? "name-error" : undefined}
autoComplete="name"
                  />

                  {errors.name && (
  <p id="name-error" className="mt-2 text-xs text-red-600">
    {errors.name}
  </p>
)}
                </div>

                {/* Email */}
                <div className="sm:col-span-1">
                  <label
                    htmlFor="email"
                    className="text-sm font-semibold text-[#0B1F33]"
                  >
                    Email <span className="text-[#E8792E]">*</span>
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={(event) =>
                      setFormData({
                        ...formData,
                        email: event.target.value,
                      })
                    }
                    placeholder="name@company.com"
                    className={`mt-2 w-full rounded-lg border px-4 py-3.5 text-sm text-[#17212B] outline-none transition placeholder:text-[#9AA5AE] ${
                      errors.email
                        ? "border-red-400 focus:border-red-500"
                        : "border-[#DCE3E8] focus:border-[#1F4E79]"
                    }`}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    autoComplete="email"
                  />

                  {errors.email && (
                    <p id="email-error" className="mt-2 text-xs text-red-600">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div className="sm:col-span-1">
                  <label
                    htmlFor="phone"
                    className="text-sm font-semibold text-[#0B1F33]"
                  >
                    Phone <span className="text-[#E8792E]">*</span>
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(event) =>
                      setFormData({
                        ...formData,
                        phone: event.target.value,
                      })
                    }
                    placeholder="+971 50 000 0000"
                    className={`mt-2 w-full rounded-lg border px-4 py-3.5 text-sm text-[#17212B] outline-none transition placeholder:text-[#9AA5AE] ${
                      errors.phone
                        ? "border-red-400 focus:border-red-500"
                        : "border-[#DCE3E8] focus:border-[#1F4E79]"
                    }`}
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? "phone-error" : undefined}
                    autoComplete="tel"
                  />

                  {errors.phone && (
                    <p id="phone-error" className="mt-2 text-xs text-red-600">
                      {errors.phone}
                    </p>
                  )}
                </div>

                {/* Product */}
                <div className="sm:col-span-1">
                  <label
                    htmlFor="productInterest"
                    className="text-sm font-semibold text-[#0B1F33]"
                  >
                    Product Interest <span className="text-[#E8792E]">*</span>
                  </label>

                  <select
                    id="productInterest"
                    name="productInterest"
                    value={formData.productInterest}
                    onChange={(event) =>
                      setFormData({
                        ...formData,
                        productInterest: event.target.value,
                      })
                    }
                    className={`mt-2 w-full rounded-lg border bg-white px-4 py-3.5 text-sm text-[#17212B] outline-none transition ${
                      errors.productInterest
                        ? "border-red-400 focus:border-red-500"
                        : "border-[#DCE3E8] focus:border-[#1F4E79]"
                    }`}
                    aria-invalid={!!errors.productInterest}
                    aria-describedby={errors.productInterest ? "productInterest-error" : undefined}
                  >
                    <option value="">Select product</option>
                    <option value="SS 304 Flanges">
                      SS 304 Flanges
                    </option>
                    <option value="SS 316 Flanges">
                      SS 316 Flanges
                    </option>
                    <option value="SS 316L Flanges">
                      SS 316L Flanges
                    </option>
                    <option value="Multiple Grades">
                      Multiple Grades
                    </option>
                    <option value="Other Requirement">
                      Other Requirement
                    </option>
                  </select>

                  {errors.productInterest && (
                    <p id="productInterest-error" className="mt-2 text-xs text-red-600">
                      {errors.productInterest}
                    </p>
                  )}
                </div>
              </div>

              <button
  type="submit"
  disabled={isSubmitting}
  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#E8792E] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#cf6724] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
>
  <Send size={17} />

  {isSubmitting ? "Submitting..." : "Submit Enquiry"}

  {!isSubmitting && <ArrowRight size={16} />}
</button>

              {submitted && (
  <div
    role="status"
    className="mt-5 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm font-medium text-green-800"
  >
    Thank you. Your enquiry has been submitted successfully.
  </div>
)}
{submitError && (
  <div
    role="alert"
    className="mt-5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700"
  >
    {submitError}
  </div>
)}
            </form>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}