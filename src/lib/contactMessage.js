// Sends the contact form to the "contact-message" Edge Function in the JKLF app's
// (Nazm) Supabase project. It saves the message and emails it to the organisation.

import { supabaseConfig } from "./publicNews.js";

export const CONTACT_SUBJECTS = [
  { value: "general", label: "General Enquiry" },
  { value: "media", label: "Media Enquiry" },
  { value: "research", label: "Research & Archive" },
  { value: "international", label: "International Relations" },
  { value: "technical", label: "Website / Technical" },
];

// Returns { ok: true } or { ok: false, error, rateLimited }
export async function sendContactMessage(fields, options = {}) {
  const { request = fetch, env } = options;
  const { url, key } = supabaseConfig(env);

  try {
    const response = await request(`${url}/functions/v1/contact-message`, {
      method: "POST",
      headers: { apikey: key, "Content-Type": "application/json" },
      body: JSON.stringify(fields),
    });

    const data = await response.json().catch(() => ({}));

    if (response.ok && data.ok) {
      return { ok: true };
    }

    return {
      ok: false,
      rateLimited: response.status === 429,
      error:
        data.error ||
        "Your message could not be sent. Please try again later.",
    };
  } catch {
    return {
      ok: false,
      error:
        "Your message could not be sent. Please check your connection and try again.",
    };
  }
}
