"use client";

import { useState } from "react";
import { config } from "@/lib/config";

type FormState = {
  name: string;
  phone: string;
  email: string;
  location: string;
  mapLink: string;
  size: string;
  mowingDate: string;
  preferredDate: string;
  remarks: string;
};

const empty: FormState = {
  name: "",
  phone: "",
  email: "",
  location: "",
  mapLink: "",
  size: "",
  mowingDate: "",
  preferredDate: "",
  remarks: "",
};

// Baut aus den Formulardaten eine schön lesbare Nachricht.
function buildMessage(f: FormState): string {
  const lines = [
    "🦌 Neue Reservation – Rehkitzrettung",
    "",
    `Name: ${f.name}`,
    `Telefon: ${f.phone}`,
    f.email ? `E-Mail: ${f.email}` : null,
    "",
    `Standort des Felds: ${f.location}`,
    f.mapLink ? `Karte/Koordinaten: ${f.mapLink}` : null,
    f.size ? `Feldgrösse: ${f.size} ha` : null,
    `Geplantes Mähdatum: ${f.mowingDate}`,
    f.preferredDate ? `Wunschtermin Drohnenflug: ${f.preferredDate}` : null,
    f.remarks ? `Bemerkungen: ${f.remarks}` : null,
  ].filter((l) => l !== null);

  return lines.join("\n");
}

export default function ReservationForm() {
  const [form, setForm] = useState<FormState>(empty);
  const [error, setError] = useState<string | null>(null);

  function update<K extends keyof FormState>(key: K, value: string) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  // Pflichtfelder prüfen. Gibt true zurück, wenn alles ok ist.
  function validate(): boolean {
    if (!form.name.trim() || !form.phone.trim() || !form.location.trim() || !form.mowingDate) {
      setError(
        "Bitte fülle mindestens Name, Telefon, Standort und Mähdatum aus.",
      );
      return false;
    }
    setError(null);
    return true;
  }

  function sendWhatsApp() {
    if (!validate()) return;
    const text = encodeURIComponent(buildMessage(form));
    window.open(
      `https://wa.me/${config.whatsappNumber}?text=${text}`,
      "_blank",
      "noopener,noreferrer",
    );
  }

  function sendEmail() {
    if (!validate()) return;
    const subject = encodeURIComponent(
      `Rehkitzrettung – Reservation von ${form.name}`,
    );
    const body = encodeURIComponent(buildMessage(form));
    window.location.href = `mailto:${config.contactEmail}?subject=${subject}&body=${body}`;
  }

  return (
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault();
        sendWhatsApp();
      }}
    >
      <div className="field">
        <label htmlFor="name">
          Name <span className="req">*</span>
        </label>
        <input
          id="name"
          type="text"
          autoComplete="name"
          value={form.name}
          onChange={(e) => update("name", e.target.value)}
          placeholder="Vor- und Nachname"
          required
        />
      </div>

      <div className="row">
        <div className="field">
          <label htmlFor="phone">
            Telefon <span className="req">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            placeholder="079 123 45 67"
            required
          />
        </div>
        <div className="field">
          <label htmlFor="email">E-Mail</label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            placeholder="optional"
          />
        </div>
      </div>

      <div className="field">
        <label htmlFor="location">
          Standort des Felds <span className="req">*</span>
        </label>
        <input
          id="location"
          type="text"
          value={form.location}
          onChange={(e) => update("location", e.target.value)}
          placeholder="Adresse, Flurname oder Ort der Wiese"
          required
        />
      </div>

      <div className="field">
        <label htmlFor="mapLink">Google-Maps-Link oder Koordinaten</label>
        <input
          id="mapLink"
          type="text"
          value={form.mapLink}
          onChange={(e) => update("mapLink", e.target.value)}
          placeholder="optional – hilft mir, das Feld genau zu finden"
        />
        <small className="hint">
          Tipp: In Google Maps lange auf die Stelle tippen, dann „Teilen“ →
          Link hierhin kopieren.
        </small>
      </div>

      <div className="row">
        <div className="field">
          <label htmlFor="size">Feldgrösse (ha)</label>
          <input
            id="size"
            type="number"
            min="0"
            step="0.1"
            inputMode="decimal"
            value={form.size}
            onChange={(e) => update("size", e.target.value)}
            placeholder="z.B. 1.5"
          />
        </div>
        <div className="field">
          <label htmlFor="mowingDate">
            Geplantes Mähdatum <span className="req">*</span>
          </label>
          <input
            id="mowingDate"
            type="date"
            value={form.mowingDate}
            onChange={(e) => update("mowingDate", e.target.value)}
            required
          />
        </div>
      </div>

      <div className="field">
        <label htmlFor="preferredDate">Wunschtermin für den Drohnenflug</label>
        <input
          id="preferredDate"
          type="date"
          value={form.preferredDate}
          onChange={(e) => update("preferredDate", e.target.value)}
        />
        <small className="hint">
          Optional. Ideal ist der Morgen vor dem Mähen – den genauen Zeitpunkt
          legen wir gemeinsam fest.
        </small>
      </div>

      <div className="field">
        <label htmlFor="remarks">Bemerkungen</label>
        <textarea
          id="remarks"
          rows={4}
          value={form.remarks}
          onChange={(e) => update("remarks", e.target.value)}
          placeholder="Zufahrt, Hindernisse, Erreichbarkeit, weitere Felder …"
        />
      </div>

      {error && <p className="form-error">{error}</p>}

      <div className="actions">
        <button type="submit" className="btn btn-primary btn-lg">
          <span aria-hidden="true">💬</span> Per WhatsApp senden
        </button>
        <button
          type="button"
          className="btn btn-secondary btn-lg"
          onClick={sendEmail}
        >
          <span aria-hidden="true">✉️</span> Per E-Mail senden
        </button>
      </div>

      <p className="privacy-note">
        Deine Angaben werden ausschliesslich zur Terminabsprache verwendet und
        nirgends gespeichert – sie gehen direkt als Nachricht an mich.
      </p>
    </form>
  );
}
