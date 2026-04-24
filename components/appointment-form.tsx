"use client";

import { useState } from "react";

import { siteConfig } from "@/lib/site";

export function AppointmentForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [treatment, setTreatment] = useState("General consultation");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const triggerWA = () => {
    const text = encodeURIComponent(
      `Hello Sahara Dental Care, I would like to book an appointment.\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Treatment:* ${treatment}\n*Message:* ${message}\n\nPlease confirm my slot.`
    );
    window.open(`https://wa.me/916362112257?text=${text}`, "_blank");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const resp = await fetch("https://formsubmit.co/ajax/info@saharadentalcare.in", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name,
          phone,
          service: treatment,
          message,
          _subject: "New Website Appointment Inquiry"
        })
      });

      if (resp.ok) {
        setStatus("success");
        // Automatic WA trigger after a short delay
        setTimeout(triggerWA, 1500);
      } else {
        throw new Error("Submission failed");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
      // Fallback: Trigger WA anyway so the lead isn't lost
      triggerWA();
    }
  };

  if (status === "success") {
    return (
      <div className="section-panel" style={{ textAlign: "center", animation: "fadeIn 0.5s ease forwards" }}>
        <h3 style={{ color: "var(--wa)" }}>Request Sent!</h3>
        <p style={{ marginBottom: "1.5rem" }}>
          We've sent an email to our team. Click below to also message us on WhatsApp for faster confirmation.
        </p>
        <button className="button button-primary" onClick={triggerWA} style={{ background: "var(--wa)" }}>
          Message on WhatsApp
        </button>
      </div>
    );
  }

  return (
    <form className="appointment-form" onSubmit={handleSubmit}>
      <div className="field-grid">
        <label>
          Full Name *
          <input 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            placeholder="Your name"
            required 
            disabled={status === "sending"}
          />
        </label>
        <label>
          Phone / WhatsApp *
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+91 XXXXX XXXXX"
            required
            disabled={status === "sending"}
          />
        </label>
      </div>
      <label>
        Treatment Needed
        <select 
          value={treatment} 
          onChange={(e) => setTreatment(e.target.value)}
          disabled={status === "sending"}
        >
          <option>General consultation</option>
          <option>Braces treatment</option>
          <option>Clear aligners</option>
          <option>Dental implants</option>
          <option>Root canal treatment</option>
          <option>Pediatric dentistry</option>
          <option>TMJ and jaw pain</option>
          <option>Smile makeover</option>
        </select>
      </label>
      <label>
        Message (optional)
        <textarea
          rows={3}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us about your concern or preferred appointment time."
          disabled={status === "sending"}
        />
      </label>
      <div className="button-row">
        <button 
          className="button button-primary" 
          type="submit"
          disabled={status === "sending"}
        >
          {status === "sending" ? "Sending..." : "Book via WhatsApp"}
        </button>
        <a className="button button-secondary" href={siteConfig.phoneHref}>
          Call Instead
        </a>
      </div>
      {status === "error" && (
        <p style={{ color: "red", fontSize: "0.8rem", marginTop: "0.5rem" }}>
          Email submission failed, but you can still message us on WhatsApp above.
        </p>
      )}
    </form>
  );
}
