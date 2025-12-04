import React, { useState } from "react";
import Navbar from "../components/Navbar.jsx";

const bgUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl0V5PIPMxYNzRhlFY14X3ZoltI-VlS4Gr6A&s";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!form.email.trim()) e.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email.";
    if (!form.phone.trim()) e.phone = "Phone number is required.";
    else if (!/^\d{10,15}$/.test(form.phone.replace(/\s+/g, ""))) e.phone = "Enter a valid phone (10–15 digits).";
    if (!form.message.trim()) e.message = "Please write a message.";
    return e;
  };

  const handleChange = (e) => {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
    setErrors((s) => ({ ...s, [e.target.name]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const eobj = validate();
    setErrors(eobj);
    if (Object.keys(eobj).length) return;
    setSubmitting(true);

    // Simulate an API call — replace with real request
    setTimeout(() => {
      console.log("Form submitted:", form); // replace with fetch/axios call
      setSubmitting(false);
      setSuccess(true);
      setForm({ name: "", email: "", phone: "", message: "" });
      setTimeout(() => setSuccess(false), 4000);
    }, 900);
  };

  return (
    <>
    <Navbar/>
    <section
      aria-label="Contact"
      className="relative w-full py-16"
      style={{
        backgroundImage: `url('${bgUrl}')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* soft light overlay so inputs remain readable */}
      <div className="absolute inset-0 bg-white/60 backdrop-blur-sm" />

      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <div className="bg-white/90 rounded-2xl shadow-lg p-6 md:p-10">
          <h2 className="text-2xl font-semibold text-amber-800 mb-2 text-center">Get in touch</h2>
          <p className="text-sm text-gray-600 text-center mb-6">
            Fill the form below and we&apos;ll respond as soon as possible.
          </p>

          <form onSubmit={handleSubmit} noValidate className="grid gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="flex flex-col">
                <span className="text-sm font-medium text-gray-700 mb-1">Name</span>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  type="text"
                  required
                  aria-required="true"
                  aria-invalid={!!errors.name}
                  className={`px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-amber-300 ${
                    errors.name ? "border-rose-500" : "border-gray-200"
                  }`}
                  placeholder="Your full name"
                />
                {errors.name && <span className="mt-1 text-rose-600 text-sm">{errors.name}</span>}
              </label>

              <label className="flex flex-col">
                <span className="text-sm font-medium text-gray-700 mb-1">Email</span>
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  type="email"
                  required
                  aria-required="true"
                  aria-invalid={!!errors.email}
                  className={`px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-amber-300 ${
                    errors.email ? "border-rose-500" : "border-gray-200"
                  }`}
                  placeholder="you@domain.com"
                />
                {errors.email && <span className="mt-1 text-rose-600 text-sm">{errors.email}</span>}
              </label>
            </div>

            <label className="flex flex-col">
              <span className="text-sm font-medium text-gray-700 mb-1">Phone number</span>
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                type="tel"
                inputMode="tel"
                required
                aria-required="true"
                aria-invalid={!!errors.phone}
                className={`px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-amber-300 ${
                  errors.phone ? "border-rose-500" : "border-gray-200"
                }`}
                placeholder="e.g. 9876543210"
              />
              {errors.phone && <span className="mt-1 text-rose-600 text-sm">{errors.phone}</span>}
            </label>

            <label className="flex flex-col">
              <span className="text-sm font-medium text-gray-700 mb-1">Message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                required
                aria-required="true"
                aria-invalid={!!errors.message}
                className={`px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-amber-300 resize-none ${
                  errors.message ? "border-rose-500" : "border-gray-200"
                }`}
                placeholder="How can we help you?"
              />
              {errors.message && <span className="mt-1 text-rose-600 text-sm">{errors.message}</span>}
            </label>

            <div className="flex items-center gap-3">
              <button
                type="submit"
                disabled={submitting}
                className={`inline-flex items-center justify-center px-5 py-2 rounded-full text-white font-medium transition ${
                  submitting ? "bg-amber-400 cursor-wait" : "bg-amber-700 hover:bg-amber-800"
                }`}
                aria-busy={submitting}
              >
                {submitting ? "Sending..." : "Send message"}
              </button>

              {success && (
                <div
                  role="status"
                  className="text-sm text-emerald-700 bg-emerald-50 px-3 py-1 rounded-md border border-emerald-100"
                >
                  Message sent — thank you!
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
    </>
  );
}
