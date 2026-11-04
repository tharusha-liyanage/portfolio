import React, { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRight,
  Check,
  Copy,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Send,
  Smartphone,
} from "lucide-react";
import { HERO_DATA } from "../data/hero";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";

gsap.registerPlugin(ScrollTrigger);

const contactItems = [
  {
    id: "email",
    icon: Mail,
    text: HERO_DATA.contactEmail,
    sub: "Send me an email",
    titleClass: "group-hover:text-pink-700",
    copyValue: HERO_DATA.contactEmail,
  },
  {
    id: "phone",
    icon: Smartphone,
    text: HERO_DATA.contactPhone,
    sub: "Mobile number · Click to copy",
    titleClass: "group-hover:text-cyan-700",
    copyValue: HERO_DATA.contactPhone,
  },
  {
    id: "location",
    icon: MapPin,
    text: "Galle, Sri Lanka",
    sub: "Location",
    titleClass: "group-hover:text-violet-700",
  },
  {
    id: "github",
    icon: Github,
    text: "GitHub",
    sub: "Check my code",
    link: HERO_DATA.github,
    titleClass: "group-hover:text-slate-700",
  },
  {
    id: "linkedin",
    icon: Linkedin,
    text: "LinkedIn",
    sub: "Let's connect",
    link: HERO_DATA.linkedin,
    titleClass: "group-hover:text-blue-700",
  },
];

export default function ContactSection() {
  const sectionRef = useRef(null);
  const copyTimeoutRef = useRef(null);
  const [copiedCard, setCopiedCard] = useState(null);

  useEffect(() => () => clearTimeout(copyTimeoutRef.current), []);

  useGSAP(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const section = sectionRef.current;
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 85%",
        once: true,
      },
    });

    timeline
      .fromTo(
        section.querySelector(".contact-heading"),
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }
      )
      .fromTo(
        section.querySelectorAll(".contact-card"),
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: "back.out(1.5)",
        }
      );
  }, { scope: sectionRef });

  const handleCopy = async (item) => {
    try {
      await navigator.clipboard.writeText(item.copyValue);
      clearTimeout(copyTimeoutRef.current);
      setCopiedCard(item.id);
      copyTimeoutRef.current = setTimeout(() => setCopiedCard(null), 2000);
    } catch (error) {
      console.error("Failed to copy contact information:", error);
      alert(`Could not automatically copy. Please copy manually: ${item.copyValue}`);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const subject = encodeURIComponent(formData.get("subject"));
    const body = encodeURIComponent(
      `Name: ${formData.get("name")}\nEmail: ${formData.get("email")}\n\n${formData.get("message")}`
    );
    window.location.href = `mailto:${HERO_DATA.contactEmail}?subject=${subject}&body=${body}`;
  };

  const animateCardHover = (event, isEntering) => {
    const card = event.currentTarget;
    gsap.to(card, {
      y: isEntering ? -8 : 0,
      duration: 0.3,
      ease: "power2.out",
      boxShadow: isEntering
        ? "0 18px 30px rgba(53, 47, 91, 0.16)"
        : "0 1px 2px rgba(53, 47, 91, 0.05)",
    });
  };

  const renderContactCard = (item) => {
    const Icon = item.icon;
    const isCopied = copiedCard === item.id;
    const contactLink = item.id === "email"
      ? "mailto:tharushalakchani@gmail.com"
      : item.id === "phone"
        ? "tel:+94766210979"
        : item.link;
    const content = (
      <a
        href={contactLink}
        target={item.link ? "_blank" : undefined}
        rel={item.link ? "noopener noreferrer" : undefined}
        className="flex min-w-0 flex-1 items-center gap-4 outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2"
      >
        <span className="contact-card-icon rounded-xl border border-violet-100 bg-violet-50 p-3 text-violet-700">
          <Icon className="h-5 w-5" />
        </span>
        <span className="min-w-0 flex-1">
          <span className="mb-1 block text-[11px] uppercase tracking-[0.15em] text-slate-500">
            {item.sub}
          </span>
          <span className={`block truncate text-sm font-semibold text-slate-900 sm:text-base ${item.titleClass}`}>
            {item.text}
          </span>
        </span>
        {item.link && <ArrowRight className="h-4 w-4 shrink-0 text-slate-500" />}
      </a>
    );
    const className =
      "contact-card group flex w-full items-center gap-2 rounded-2xl border border-violet-100 bg-white/80 p-4 text-left shadow-sm transition-colors hover:border-violet-300 hover:bg-violet-50";
    const hoverProps = {
      onMouseEnter: (event) => animateCardHover(event, true),
      onMouseLeave: (event) => animateCardHover(event, false),
    };

    return (
      <div key={item.id} className={className} {...hoverProps}>
        {content}
        {item.copyValue && (
          <span className="relative shrink-0">
            <button
              type="button"
              onClick={() => handleCopy(item)}
              aria-label={`Copy ${item.id}`}
              className={`rounded-md p-2 transition-colors hover:bg-violet-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 ${
                isCopied ? "text-emerald-600" : "text-slate-500"
              }`}
            >
              {isCopied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            </button>
            {isCopied && (
              <span
                role="status"
                className="absolute bottom-full right-0 mb-2 whitespace-nowrap rounded bg-slate-900 px-2 py-1 text-xs text-white shadow"
              >
                Copied!
              </span>
            )}
          </span>
        )}
      </div>
    );
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="section-shell relative overflow-hidden py-20 lg:py-28"
    >
      <div className="absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8">
        <div className="contact-heading section-heading mb-12">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
            Let&apos;s <span className="text-gradient">Connect</span>
          </h2>
          <div className="section-heading__bar mt-6" />
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 justify-items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3">
          {contactItems.map(renderContactCard)}
        </div>
      </div>
    </section>
  );
}
