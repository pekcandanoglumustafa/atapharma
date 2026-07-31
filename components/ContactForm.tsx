"use client";

import { useState } from "react";
import { SITE } from "@/lib/site";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [touched, setTouched] = useState(false);

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const valid = email.trim() && emailOk && message.trim();

  const submit = () => {
    setTouched(true);
    if (!valid) return;
    const subject = encodeURIComponent(`İletişim formu — ${name || "İsimsiz"}`);
    const body = encodeURIComponent(
      `Ad: ${name}\nE-posta: ${email}\n\nMesaj:\n${message}`
    );
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
  };

  const field =
    "w-full rounded-xl border border-ink/15 bg-bone px-4 py-3 text-ink placeholder:text-ink/40 transition-colors focus:border-forest focus:outline-none";

  return (
    <div className="space-y-4">
      <div>
        <label className="mb-1.5 block font-mono text-[0.68rem] uppercase tracking-widest text-ink/55">
          Adınız
        </label>
        <input
          className={field}
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Adınızı giriniz"
        />
      </div>
      <div>
        <label className="mb-1.5 block font-mono text-[0.68rem] uppercase tracking-widest text-ink/55">
          E-posta *
        </label>
        <input
          type="email"
          className={field}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={() => setTouched(true)}
          placeholder="E-posta adresinizi giriniz"
        />
        {touched && email && !emailOk && (
          <p className="mt-1.5 text-sm text-red-700">Geçerli bir e-posta giriniz.</p>
        )}
      </div>
      <div>
        <label className="mb-1.5 block font-mono text-[0.68rem] uppercase tracking-widest text-ink/55">
          Mesajınız *
        </label>
        <textarea
          rows={5}
          className={`${field} resize-none`}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Mesajınızı yazınız"
        />
        {touched && !message.trim() && (
          <p className="mt-1.5 text-sm text-red-700">Lütfen bir mesaj yazınız.</p>
        )}
      </div>
      <button onClick={submit} className="btn-gold w-full justify-center">
        Gönder
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <p className="text-center text-xs text-ink/45">
        Formu gönderdiğinizde e-posta uygulamanız açılır. Size en kısa sürede
        dönüş yapacağız.
      </p>
    </div>
  );
}
