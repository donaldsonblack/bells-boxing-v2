"use client";

import { Navbar } from "@/components/navbar";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    console.log("=== CONTACT FORM DEBUG ===");
    console.log("Form submission started");

    try {
      const webhookUrl = process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL || process.env.NEXT_PUBLIC_TEST_N8N_WEBHOOK_URL;

      console.log("Environment variables:");
      console.log("- NEXT_PUBLIC_N8N_WEBHOOK_URL:", process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL);
      console.log("- NEXT_PUBLIC_TEST_N8N_WEBHOOK_URL:", process.env.NEXT_PUBLIC_TEST_N8N_WEBHOOK_URL);
      console.log("- Final webhookUrl:", webhookUrl);

      // If no webhook URL is configured, just show success (for testing)
      if (!webhookUrl) {
        console.warn("⚠️ N8N webhook URL not configured - showing success without sending");
        setIsSubmitting(false);
        setSubmitStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
        setTimeout(() => setSubmitStatus("idle"), 5000);
        return;
      }

      const payload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        timestamp: new Date().toISOString(),
      };

      console.log("📤 Sending POST request to:", webhookUrl);
      console.log("Payload:", payload);

      const fetchOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
        mode: "no-cors" as RequestMode, // n8n webhooks might not return CORS headers
      };

      console.log("Fetch options:", fetchOptions);

      const startTime = Date.now();
      await fetch(webhookUrl, fetchOptions);
      const endTime = Date.now();

      console.log(`✅ Request completed in ${endTime - startTime}ms`);
      console.log("Note: no-cors mode means we can't read the response");

      // Assume success since n8n webhook may not return a response
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });

      console.log("Form reset, showing success message");
      console.log("=== END CONTACT FORM DEBUG ===");

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch (error) {
      console.error("❌ Error submitting form:");
      console.error("Error type:", error instanceof Error ? error.constructor.name : typeof error);
      console.error("Error message:", error instanceof Error ? error.message : String(error));
      console.error("Full error object:", error);
      console.log("=== END CONTACT FORM DEBUG ===");

      setIsSubmitting(false);
      setSubmitStatus("error");

      // Reset error message after 5 seconds
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-20">
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-b from-black via-zinc-950 to-background">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center space-y-6">
              <h1 className="font-bebas text-7xl md:text-8xl lg:text-9xl">
                GET IN <span className="text-primary">TOUCH</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Ready to start your boxing journey? We&apos;re here to help. Reach out and let&apos;s get you started.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info Section */}
        <section className="py-24 bg-gradient-to-b from-background to-zinc-950">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
              {/* Contact Form */}
              <div className="space-y-8">
                <div>
                  <h2 className="font-bebas text-5xl mb-4">
                    SEND US A <span className="text-primary">MESSAGE</span>
                  </h2>
                  <div className="w-24 h-1 bg-primary" />
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-card border-2 border-border focus:border-primary outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-card border-2 border-border focus:border-primary outline-none transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-card border-2 border-border focus:border-primary outline-none transition-colors"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 bg-card border-2 border-border focus:border-primary outline-none transition-colors resize-none"
                      placeholder="Tell us about your fitness goals and what you're looking for..."
                    />
                  </div>

                  {submitStatus === "success" && (
                    <div className="bg-primary/20 border-2 border-primary text-foreground px-4 py-3">
                      Thank you! Your message has been sent successfully. We&apos;ll get back to you soon.
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="bg-destructive/20 border-2 border-destructive text-foreground px-4 py-3">
                      Sorry, there was an error sending your message. Please try again or contact us directly.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-xl font-bebas tracking-wider transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="font-bebas text-5xl mb-4">
                    CONTACT <span className="text-primary">INFO</span>
                  </h2>
                  <div className="w-24 h-1 bg-primary" />
                </div>

                <div className="space-y-6">
                  <div className="bg-card border-2 border-border p-6 space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="text-primary text-2xl">📍</div>
                      <div>
                        <h3 className="font-bebas text-2xl mb-2">ADDRESS</h3>
                        <p className="text-muted-foreground">
                          116 Fyans St
                          <br />
                          South Geelong VIC 3220
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-card border-2 border-border p-6 space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="text-primary text-2xl">📞</div>
                      <div>
                        <h3 className="font-bebas text-2xl mb-2">PHONE</h3>
                        <p className="text-muted-foreground">0 407 581 872</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-card border-2 border-border p-6 space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="text-primary text-2xl">✉️</div>
                      <div>
                        <h3 className="font-bebas text-2xl mb-2">EMAIL</h3>
                        <p className="text-muted-foreground">greg@bellsboxing.com</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-card border-2 border-border p-6 space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="text-primary text-2xl">🕒</div>
                      <div>
                        <h3 className="font-bebas text-2xl mb-2">HOURS</h3>
                        <p className="text-muted-foreground">All Days: 5:00 AM - 9:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-24 bg-zinc-900/50">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-6 mb-12">
              <h2 className="font-bebas text-6xl md:text-7xl">
                VISIT <span className="text-primary">US</span>
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto" />
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Drop by for a tour of our facility. First class is always free!
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="bg-card border-2 border-primary p-2 md:p-4">
                <div className="aspect-video w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3137.0118234701567!2d144.35568631270795!3d-38.16316475397257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad415f18edd7fa9%3A0xd5a10e8309b7dba3!2sBells%20Boxing!5e0!3m2!1sen!2sau!4v1761288802546!5m2!1sen!2sau"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-gradient-to-b from-background to-black">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-6 mb-16">
              <h2 className="font-bebas text-6xl md:text-7xl">
                FREQUENTLY ASKED <span className="text-primary">QUESTIONS</span>
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto" />
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {[
                {
                  question: "Do I need experience to join?",
                  answer:
                    "Not at all! We welcome all skill levels, from complete beginners to competitive fighters. Our coaches will work with you at your pace.",
                },
                {
                  question: "What should I bring to my first class?",
                  answer:
                    "Just comfortable workout clothes and a water bottle. We provide all equipment including gloves, wraps, and pads for your first class.",
                },
                {
                  question: "How do memberships work?",
                  answer:
                    "We offer flexible monthly memberships with no long-term contracts. Options include unlimited classes, punch cards, and drop-in rates.",
                },
                {
                  question: "Is there parking available?",
                  answer:
                    "Yes! We have a dedicated parking lot with plenty of spaces for members. Street parking is also available nearby.",
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className="bg-card border-2 border-border p-6 space-y-3"
                >
                  <h3 className="font-bebas text-2xl text-primary">{faq.question}</h3>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black text-foreground py-12 border-t border-primary/20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="space-y-4">
                <h3 className="font-bebas text-3xl">
                  BELLS <span className="text-primary">BOXING</span>
                </h3>
                <p className="text-muted-foreground">
                  Elite boxing training and fitness for all levels.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="font-bebas text-xl text-primary">HOURS</h4>
                <div className="text-muted-foreground space-y-2">
                  <p>All Days: 5:00 AM - 9:00 PM</p>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-bebas text-xl text-primary">CONTACT</h4>
                <div className="text-muted-foreground space-y-2">
                  <p>Email: greg@bellsboxing.com</p>
                  <p>Phone: 0 407 581 872</p>
                  <p>Address: 116 Fyans St, South Geelong VIC 3220</p>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-bebas text-xl text-primary">FOLLOW US</h4>
                <div className="flex gap-4">
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Instagram
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Facebook
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Twitter
                  </a>
                </div>
              </div>
            </div>

            <div className="border-t border-primary/20 mt-12 pt-8 text-center text-muted-foreground">
              <p>&copy; {new Date().getFullYear()} Bells Boxing. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
