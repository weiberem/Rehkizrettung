// =====================================================================
//  ZENTRALE KONFIGURATION – hier kannst du alles Wichtige anpassen.
// =====================================================================

export const config = {
  // ---------------------------------------------------------------
  //  WICHTIG: Deine WhatsApp-Nummer.
  //  Format: Landesvorwahl OHNE "+" und OHNE führende 0.
  //  Beispiel Schweiz: aus 079 123 45 67  wird  41791234567
  // ---------------------------------------------------------------
  whatsappNumber: "41790000000", // TODO: durch deine echte Nummer ersetzen

  // Deine E-Mail-Adresse (Fallback, falls jemand kein WhatsApp nutzt)
  contactEmail: "remy.weibel@gmail.com",

  // Optionale Telefonnummer für die Anzeige im Footer (leer lassen = ausblenden)
  phoneDisplay: "079 123 45 67", // TODO: anpassen oder "" setzen

  // Name, der in der Fusszeile / im Impressum erscheint
  operatorName: "Rehkitzrettung Riggisberg–Gantrisch",

  // Region (für Texte)
  region: "Riggisberg / Gantrisch",

  // ---------------------------------------------------------------
  //  Hintergrundvideo im Hero-Bereich.
  //  Die ID ist der Teil nach "v=" in der YouTube-URL.
  //  Beispiel: youtube.com/watch?v=S65oERVrLE0  ->  "S65oERVrLE0"
  //  Leer lassen ("") = kein Video, nur grüner Hintergrund.
  // ---------------------------------------------------------------
  heroVideoId: "S65oERVrLE0",
} as const;
