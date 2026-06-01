# 🦌 Rehkitzrettung Riggisberg–Gantrisch

Einfache Website, auf der Bäuerinnen und Bauern einen Termin für die
Drohnen-Rehkitzrettung reservieren können. Das Formular sendet die Angaben
**direkt per WhatsApp oder E-Mail** auf dein Handy – kein Backend, keine
Datenbank, keine laufenden Kosten.

Gebaut mit [Next.js](https://nextjs.org) und gedacht für das Hosting auf
[Vercel](https://vercel.com).

---

## ⚙️ Das Wichtigste anpassen

Alle Einstellungen stehen in **einer** Datei: [`lib/config.ts`](lib/config.ts).

```ts
export const config = {
  whatsappNumber: "41790000000", // ← DEINE WhatsApp-Nummer (siehe unten)
  contactEmail: "remy.weibel@gmail.com",
  phoneDisplay: "079 123 45 67",
  operatorName: "Rehkitzrettung Riggisberg–Gantrisch",
  region: "Riggisberg / Gantrisch",
};
```

### WhatsApp-Nummer richtig eingeben ⚠️

Die Nummer muss **mit Landesvorwahl, ohne `+` und ohne die führende `0`**
angegeben werden:

| Deine Nummer    | Eintrag in der Config |
| --------------- | --------------------- |
| 079 123 45 67   | `41791234567`         |
| +41 79 123 4567 | `41791234567`         |

So funktioniert der WhatsApp-Link (`https://wa.me/...`) zuverlässig.

---

## 🚀 Auf Vercel veröffentlichen (empfohlen)

1. Den Code zu GitHub pushen (ist bereits eingerichtet).
2. Auf [vercel.com](https://vercel.com) mit dem GitHub-Konto anmelden.
3. **"Add New… → Project"** wählen und dieses Repository importieren.
4. Vercel erkennt Next.js automatisch – einfach auf **Deploy** klicken.
5. Fertig! Die Seite ist unter einer `*.vercel.app`-Adresse erreichbar.
   Eine eigene Domain (z.B. `rehkitzrettung-gantrisch.ch`) kann man in den
   Vercel-Einstellungen unter **Domains** hinzufügen.

Jeder spätere `git push` auf den Branch veröffentlicht automatisch die neue
Version.

---

## 💻 Lokal entwickeln

Voraussetzung: [Node.js](https://nodejs.org) (Version 18+).

```bash
npm install      # Pakete installieren (einmalig)
npm run dev      # Entwicklungsserver starten → http://localhost:3000
npm run build    # Produktions-Build testen
```

---

## 🗂️ Projektstruktur

```
app/
  layout.tsx        # Grundgerüst der Seite (Titel, Sprache)
  page.tsx          # Inhalt: Hero, Infos, Ablauf, Formular, Footer
  globals.css       # Gesamtes Design / Styling
components/
  ReservationForm.tsx  # Das Reservationsformular (WhatsApp/E-Mail)
lib/
  config.ts         # ⭐ Hier alles Wichtige anpassen
```

---

## ✏️ Texte ändern

- **Überschriften, Infotexte, Ablauf:** in `app/page.tsx`.
- **Formularfelder:** in `components/ReservationForm.tsx`.
- **Farben & Design:** in `app/globals.css` (oben bei `:root` die Farbwerte).

---

## 🔮 Später erweiterbar

Wenn irgendwann ein echter Buchungskalender mit gespeicherten Terminen
gewünscht ist, lässt sich das auf dieser Basis ergänzen (z.B. Vercel-Funktion
+ E-Mail-Versand via [Resend](https://resend.com) oder eine kleine Datenbank).
Für den Start reicht die WhatsApp-/E-Mail-Lösung aber vollkommen.
