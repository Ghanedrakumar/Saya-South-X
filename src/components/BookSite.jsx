import React, { useState } from "react";
import Navbar from './Navbar.jsx';
export default function BookSite() {
  const [form, setForm] = useState({ name: "", email: "", date: "", phone: "" });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const today = new Date().toISOString().split("T")[0];

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email";
    if (!form.phone.trim()) e.phone = "Phone is required";
    else if (!/^[0-9]{7,15}$/.test(form.phone.replace(/\s+/g, ""))) e.phone = "Enter a valid phone number";
    if (!form.date) e.date = "Please pick a preferred date";
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
    setErrors((s) => ({ ...s, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const eobj = validate();
    setErrors(eobj);
    if (Object.keys(eobj).length) return;

    setSubmitting(true);
    try {
      await new Promise((r) => setTimeout(r, 900));
      setSuccess(true);
      setForm({ name: "", email: "", date: "", phone: "" });
      setTimeout(() => setSuccess(false), 3500);
    } catch (err) {
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
   < Navbar />
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br px-4 py-30 bg-amber-50 inset-0 bg-cover bg-center "
    
      style={{
            backgroundImage:
              "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl0V5PIPMxYNzRhlFY14X3ZoltI-VlS4Gr6A&s')",
            filter: "brightness(0.95)",
            zIndex: 0,
          }}
          aria-hidden="true"
    >
      <div
        className="relative max-w-3xl w-full rounded-2xl overflow-hidden shadow-2xl"
        aria-live="polite"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl0V5PIPMxYNzRhlFY14X3ZoltI-VlS4Gr6A&s')",
            filter: "brightness(0.95)",
            zIndex: 0,
          }}
          aria-hidden="true"
        />

        <div className="absolute inset-0 bg-white/60 backdrop-blur-sm" aria-hidden="true" />

        <div
          className="relative z-10  backdrop-blur-sm rounded-2xl p-6 md:p-10 transform transition-all duration-700 ease-out translate-y-6 opacity-0 animate-appear"
          style={{
            // small inline keyframes fallback if Tailwind doesn't include animate-appear
            animation: "appear 600ms cubic-bezier(.2,.9,.2,1) forwards",
          }}
        >
          <style>
            {`@keyframes appear { from { opacity: 0; transform: translateY(24px) scale(.995); } to { opacity:1; transform: translateY(0) scale(1);} }`}
          </style>

          <header className="mb-6 text-center">
            <h1 className="text-2xl md:text-3xl font-semibold text-amber-800">Book a Site Visit</h1>
            <p className="text-sm text-gray-600 mt-1">Pick a date and we&apos;ll confirm a convenient time.</p>
          </header>

          <form onSubmit={handleSubmit} noValidate className="grid gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
           
              <label className="relative block">
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  type="text"
                  className={`peer w-full rounded-lg px-4 pt-6 pb-2 border focus:outline-none focus:ring-2 focus:ring-amber-300 transition ${
                    errors.name ? "border-rose-500" : "border-gray-200"
                  }`}
                  placeholder="Your name"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                <span
                  className={`absolute left-4 top-3 text-sm transition-all pointer-events-none peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs ${
                    errors.name ? "text-rose-600" : "text-gray-500"
                  }`}
                >
                  Name
                </span>
                {errors.name && (
                  <p id="name-error" className="text-rose-600 text-xs mt-1">
                    {errors.name}
                  </p>
                )}
              </label>

              {/* Email */}
              <label className="relative block">
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  type="email"
                  className={`peer w-full rounded-lg px-4 pt-6 pb-2 border focus:outline-none focus:ring-2 focus:ring-amber-300 transition ${
                    errors.email ? "border-rose-500" : "border-gray-200"
                  }`}
                  placeholder="you@domain.com"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                <span
                  className={`absolute left-4 top-3 text-sm transition-all pointer-events-none peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs ${
                    errors.email ? "text-rose-600" : "text-gray-500"
                  }`}
                >
                  Email
                </span>
                {errors.email && (
                  <p id="email-error" className="text-rose-600 text-xs mt-1">
                    {errors.email}
                  </p>
                )}
              </label>
            </div>

            {/* Phone & Date */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="relative block">
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  type="tel"
                  inputMode="tel"
                  className={`peer w-full rounded-lg px-4 pt-6 pb-2 border focus:outline-none focus:ring-2 focus:ring-amber-300 transition ${
                    errors.phone ? "border-rose-500" : "border-gray-200"
                  }`}
                  placeholder="9876543210"
                  aria-invalid={!!errors.phone}
                  aria-describedby={errors.phone ? "phone-error" : undefined}
                />
                <span
                  className={`absolute left-4 top-3 text-sm transition-all pointer-events-none peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs ${
                    errors.phone ? "text-rose-600" : "text-gray-500"
                  }`}
                >
                  Phone
                </span>
                {errors.phone && (
                  <p id="phone-error" className="text-rose-600 text-xs mt-1">
                    {errors.phone}
                  </p>
                )}
              </label>

              <label className="relative block">
                <input
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  type="date"
                  min={today}
                  className={`peer w-full rounded-lg px-4 pt-6 pb-2 border focus:outline-none focus:ring-2 focus:ring-amber-300 transition ${
                    errors.date ? "border-rose-500" : "border-gray-200"
                  }`}
                  aria-invalid={!!errors.date}
                  aria-describedby={errors.date ? "date-error" : undefined}
                />
                <span
                  className={`absolute left-4 top-3 text-sm transition-all pointer-events-none peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs ${
                    errors.date ? "text-rose-600" : "text-gray-500"
                  }`}
                >
                  Preferred date
                </span>
                {errors.date && (
                  <p id="date-error" className="text-rose-600 text-xs mt-1">
                    {errors.date}
                  </p>
                )}
              </label>
            </div>

            <label className="relative block">
              <textarea
                name="message"
                value={form.message || ""}
                onChange={handleChange}
                rows={4}
                className={`peer w-full rounded-lg px-4 pt-6 pb-2 border focus:outline-none focus:ring-2 focus:ring-amber-300 transition border-gray-200`}
                placeholder="Your message (optional)"
              />
              <span className="absolute left-4 top-3 text-sm transition-all pointer-events-none peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs text-gray-500">
                Message (optional)
              </span>
            </label>

            <div className="flex items-center gap-3 justify-between">
              <button
                type="submit"
                disabled={submitting}
                className={`inline-flex items-center gap-2 px-5 py-2 rounded-full text-white font-semibold transition-shadow shadow-md ${
                  submitting ? "bg-amber-400 cursor-wait" : "bg-amber-700 hover:shadow-lg hover:scale-[1.02]"
                }`}
                aria-busy={submitting}
              >
                {submitting ? "Booking..." : "Request Visit"}
              </button>

              <div className="ml-auto text-sm text-gray-600">
                {success && <span className="text-emerald-700 bg-emerald-50 px-3 py-1 rounded-md border">Booked successfully!</span>}
              </div>
            </div>
          </form>

          <div className="mt-6 text-xs text-gray-500 text-center">
            By requesting a visit you agree to be contacted by Saya Homes for scheduling.
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
