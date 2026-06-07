/** @jsxImportSource preact */
import { useState } from "preact/hooks";
import { site, services } from "../../data/site";

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function AppointmentForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
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
        const msg =
          body?.errors?.map((er: { message: string }) => er.message).join(", ") ||
          "Something went wrong. Please call us directly.";
        setErrorMsg(msg);
        setStatus("error");
      }
    } catch {
      setErrorMsg("Network error. Please call us directly.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div class="card p-8 text-center" role="status" aria-live="polite">
        <div class="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary-100 text-primary-700">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-7 w-7" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
        </div>
        <h3 class="mt-4 text-xl font-semibold text-secondary-900">Request received!</h3>
        <p class="mt-2 text-secondary-600">
          Thank you for booking with {site.name}. We'll confirm your appointment within 24 hours.
        </p>
        <p class="mt-2 text-sm text-secondary-500">
          Prefer to call? <a href={site.phoneHref} class="text-primary-700 font-medium hover:underline">{site.phone}</a>
        </p>
        <button
          type="button"
          class="btn btn-secondary mt-6"
          onClick={() => setStatus("idle")}
        >
          Book another appointment
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      class="card p-6 md:p-8 grid gap-4"
      noValidate
    >
      <input type="text" name="_gotcha" style="display:none" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <input type="hidden" name="_subject" value="New appointment request — Bright Smile Dental" />

      <div class="grid sm:grid-cols-2 gap-4">
        <label class="block">
          <span class="block text-sm font-medium text-secondary-700 mb-1">Full name *</span>
          <input
            class="input"
            type="text"
            name="name"
            required
            autoComplete="name"
            placeholder="Jane Doe"
          />
        </label>
        <label class="block">
          <span class="block text-sm font-medium text-secondary-700 mb-1">Phone *</span>
          <input
            class="input"
            type="tel"
            name="phone"
            required
            autoComplete="tel"
            placeholder="(555) 555-5555"
          />
        </label>
      </div>

      <label class="block">
        <span class="block text-sm font-medium text-secondary-700 mb-1">Email *</span>
        <input
          class="input"
          type="email"
          name="email"
          required
          autoComplete="email"
          placeholder="jane@example.com"
        />
      </label>

      <div class="grid sm:grid-cols-2 gap-4">
        <label class="block">
          <span class="block text-sm font-medium text-secondary-700 mb-1">Preferred date</span>
          <input
            class="input"
            type="date"
            name="preferred_date"
          />
        </label>
        <label class="block">
          <span class="block text-sm font-medium text-secondary-700 mb-1">Service</span>
          <select class="input" name="service" defaultValue="">
            <option value="" disabled>Select a service…</option>
            {services.map((s) => (
              <option value={s.title}>{s.title}</option>
            ))}
            <option value="Other">Other / Not sure</option>
          </select>
        </label>
      </div>

      <label class="block">
        <span class="block text-sm font-medium text-secondary-700 mb-1">Message / notes</span>
        <textarea
          class="input min-h-[110px] resize-y"
          name="message"
          rows={4}
          placeholder="Anything we should know? Best time to reach you, concerns, etc."
        />
      </label>

      <p class="text-xs text-secondary-500">
        By submitting, you agree to be contacted about your request. We never share your information.
      </p>

      {status === "error" && (
        <div class="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700" role="alert">
          {errorMsg}
        </div>
      )}

      <button
        type="submit"
        class="btn btn-primary mt-2"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Sending…" : "Submit Request"}
      </button>
    </form>
  );
}
