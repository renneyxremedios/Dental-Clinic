/** @jsxImportSource preact */
import { useState } from "preact/hooks";
import { site } from "../../data/site";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  const handleSubmit = async (e: Event) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const data = new FormData(form);
    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch(`https://formspree.io/f/${site.formspreeId}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        const body = await res.json().catch(() => ({}));
        setErrorMsg(
          body?.errors?.map((er: { message: string }) => er.message).join(", ") ||
            "Something went wrong. Please call us directly.",
        );
        setStatus("error");
      }
    } catch {
      setErrorMsg("Network error. Please call us directly.");
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} class="grid gap-4" noValidate>
      <input type="text" name="_gotcha" style="display:none" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <input type="hidden" name="_subject" value="Website contact message — Bright Smile Dental" />

      <div class="grid sm:grid-cols-2 gap-4">
        <label class="block">
          <span class="block text-sm font-medium text-secondary-700 mb-1">Name *</span>
          <input class="input" type="text" name="name" required autoComplete="name" />
        </label>
        <label class="block">
          <span class="block text-sm font-medium text-secondary-700 mb-1">Email *</span>
          <input class="input" type="email" name="email" required autoComplete="email" />
        </label>
      </div>

      <label class="block">
        <span class="block text-sm font-medium text-secondary-700 mb-1">Message *</span>
        <textarea class="input min-h-[120px] resize-y" name="message" required rows={5} placeholder="How can we help?" />
      </label>

      {status === "error" && (
        <div class="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700" role="alert">
          {errorMsg}
        </div>
      )}
      {status === "success" && (
        <div class="rounded-lg border border-primary-200 bg-primary-50 p-3 text-sm text-primary-800" role="status" aria-live="polite">
          Thanks! Your message has been sent. We'll be in touch soon.
        </div>
      )}

      <button type="submit" class="btn btn-primary w-full sm:w-auto" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
