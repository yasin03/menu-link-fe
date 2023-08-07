"use client";
import HeadSection from "@/component/components/ui/HeadSection";
import ContactContent from "@/component/components/user/contact/ContactContent";
import ContactForm from "@/component/components/user/contact/ContactForm";
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen w-full">
      <HeadSection title={"İletişim"} />

      <ContactContent />
    </div>
  );
};

export default page;
