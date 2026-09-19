import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import emailjs from "@emailjs/browser";

import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CalendarDays,
  CheckCircle2,
  Mail,
  Send,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

import SEO from "../components/SEO";
import "./Contact.css";

const initialForm = {
  contactName: "",
  agencyName: "",
  email: "",
  phone: "",
  providerType: "",
  agencySize: "",
  message: "",
  legacyInterest: false,
};

const providerTypes = [
  "Personal Care Services Agency",
  "Home Health Agency",
  "Personal Care Intermediary Service Organization",
  "Frail Elderly Waiver Provider",
  "Physical Disabilities Waiver Provider",
  "Residential / SLA Provider",
  "Jobs and Day Training Provider",
  "IDD Provider",
  "Multi-Service Agency",
  "Other",
];

function Contact() {
  const [formData, setFormData] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const { hash } = useLocation();

const { search } = useLocation();

useEffect(() => {
  const params = new URLSearchParams(search);

  if (params.get("section") !== "form") return;

  const frame = requestAnimationFrame(() => {
    document.getElementById("contact-form")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });

  return () => cancelAnimationFrame(frame);
}, [search]);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isSending) return;

    setIsSending(true);
    setSubmitted(false);
    setSubmitError("");

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setSubmitError(
        "The online form is temporarily unavailable. Please call 833-887-2251 or email support@vtrackbilling.com."
      );
      setIsSending(false);
      return;
    }

    const templateParams = {
      contact_name: formData.contactName.trim(),
      agency_name: formData.agencyName.trim(),
      email: formData.email.trim(),
      reply_to: formData.email.trim(),
      phone: formData.phone.trim() || "Not provided",
      provider_type: formData.providerType,
      agency_size: formData.agencySize || "Not provided",
      message: formData.message.trim() || "No additional message",
      legacy_interest: formData.legacyInterest ? "Yes" : "No",
    };

    try {
      await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        { publicKey }
      );

      setSubmitted(true);
      setFormData(initialForm);
    } catch (error) {
      console.error("Contact form submission failed:", error);

      setSubmitError(
        "We couldn't send your request. Please try again or contact us directly at support@vtrackbilling.com or 833-887-2251."
      );
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="contact-page">
      <SEO
        title="Contact vTrack | Nevada Provider Agencies"
        description="Contact vTrack to discuss Nevada Medicaid trading partner enrollment, EVV, billing, provider operations, and the Nevada Legacy Agency offer."
        path="/contact"
      />

      {/* CONTACT HERO */}

      <section className="contact-hero">
        <div className="contact-hero__glow"></div>

        <div className="contact-hero__container">
          <div className="contact-hero__content">
            <div className="contact-hero__eyebrow">
              <CalendarDays size={18} />
              START A NEVADA CONVERSATION
            </div>

            <h1>
              Plan your Nevada transition
              <span> with an experienced team.</span>
            </h1>

            <p>
              Tell us about your services, payers, and current workflow.
              We'll explain vTrack's capabilities, our Nevada trading
              partner enrollment status, and the steps required before
              your agency can go live.
            </p>

            <div className="contact-hero__points">
              <div>
                <CheckCircle2 size={19} />
                A conversation focused on your agency's needs
              </div>

              <div>
                <CheckCircle2 size={19} />
                Dedicated account management and onboarding support
              </div>

              <div>
                <CheckCircle2 size={19} />
                Clear guidance on outstanding Nevada requirements
              </div>
            </div>
          </div>

          <div className="contact-hero__offer">
            <Sparkles size={25} />

            <span>NEVADA LEGACY AGENCY OFFER</span>

            <strong>Six Months Free</strong>

            <p>
              The first 10 Nevada agencies that sign up can receive
              six months of vTrack platform access and dedicated
              account management at no software cost.
            </p>

            <div className="contact-hero__offer-line"></div>

            <small>
              No obligation to continue after the promotional period.
              Eligibility, terms, and onboarding details are confirmed
              with our team before enrollment.
            </small>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}

      <section className="contact-main">
        <div className="contact-main__container">
          <div className="contact-form-area">
            <div className="contact-form-heading">
              <span>TELL US ABOUT YOUR AGENCY</span>

              <h2>Become a Legacy Agency</h2>

              <p>
                Complete the form and our team will follow up to
                discuss your agency's needs and the Legacy offer.
                Submitting this form does not reserve a promotional spot.
              </p>
            </div>

            {submitted && (
              <div className="contact-success" role="status">
                <CheckCircle2 size={24} />

                <div>
                  <strong>Your request was submitted.</strong>

                  <p>
                    Thank you for contacting vTrack. Our team will
                    follow up about your Nevada agency.
                  </p>
                </div>
              </div>
            )}

            {submitError && (
              <div className="contact-error" role="alert">
                <strong>{submitError}</strong>
              </div>
            )}

            <form
              id="contact-form"
              className="contact-form"
              onSubmit={handleSubmit}
              aria-busy={isSending}
            >
              <div className="contact-form__grid">
                <div className="contact-field">
                  <label htmlFor="contactName">
                    Your Name <span>*</span>
                  </label>

                  <input
                    id="contactName"
                    name="contactName"
                    type="text"
                    value={formData.contactName}
                    onChange={handleChange}
                    placeholder="First and last name"
                    autoComplete="name"
                    required
                    disabled={isSending}
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="agencyName">
                    Agency Name <span>*</span>
                  </label>

                  <input
                    id="agencyName"
                    name="agencyName"
                    type="text"
                    value={formData.agencyName}
                    onChange={handleChange}
                    placeholder="Your organization"
                    autoComplete="organization"
                    required
                    disabled={isSending}
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="email">
                    Email Address <span>*</span>
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@agency.com"
                    autoComplete="email"
                    required
                    disabled={isSending}
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="phone">Phone Number</label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(000) 000-0000"
                    autoComplete="tel"
                    disabled={isSending}
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="providerType">
                    Provider Type <span>*</span>
                  </label>

                  <select
                    id="providerType"
                    name="providerType"
                    value={formData.providerType}
                    onChange={handleChange}
                    required
                    disabled={isSending}
                  >
                    <option value="">Select provider type</option>

                    {providerTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="contact-field">
                  <label htmlFor="agencySize">Agency Size</label>

                  <select
                    id="agencySize"
                    name="agencySize"
                    value={formData.agencySize}
                    onChange={handleChange}
                    disabled={isSending}
                  >
                    <option value="">Select agency size</option>
                    <option value="1-25">1–25 Staff</option>
                    <option value="26-50">26–50 Staff</option>
                    <option value="51-100">51–100 Staff</option>
                    <option value="101-250">101–250 Staff</option>
                    <option value="250+">250+ Staff</option>
                  </select>
                </div>
              </div>

              <div className="contact-field contact-field--full">
                <label htmlFor="message">
                  What would you like help with?
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your EVV, billing, scheduling, payroll, authorization, or provider management needs. Please do not include protected health information."
                  rows={6}
                  disabled={isSending}
                ></textarea>
              </div>

              <label className="contact-checkbox">
                <input
                  type="checkbox"
                  name="legacyInterest"
                  checked={formData.legacyInterest}
                  onChange={handleChange}
                  disabled={isSending}
                />

                <span
                  className="contact-checkbox__box"
                  aria-hidden="true"
                ></span>

                <span className="contact-checkbox__text">
                  I'm interested in learning more about the
                  Nevada Legacy Agency offer.
                </span>
              </label>

              <button
                type="submit"
                className="contact-submit"
                disabled={isSending}
              >
                {isSending ? (
                  "Sending..."
                ) : (
                  <>
                    Send My Request
                    <Send size={18} />
                  </>
                )}
              </button>

              <p className="contact-form__note">
                By submitting, you acknowledge our{" "}
                <Link to="/privacy-policy">Privacy Policy</Link>{" "}
                and{" "}
                <Link to="/terms-of-use">Terms of Use</Link>{" "}
                and agree that a vTrack representative may
                contact you by phone or email regarding your request.
                Please do not submit protected health information.
              </p>
            </form>
          </div>

          {/* SIDEBAR */}

          <aside className="contact-sidebar">
            <div className="contact-sidebar__card">
              <div className="contact-sidebar__icon">
                <BadgeCheck size={25} />
              </div>

              <h3>Nevada Trading Partner Enrollment</h3>

              <p>
                Vichra Systems, LLC is an enrolled Nevada Medicaid
                EDI trading partner, ID 51488619. EDI compliance
                testing and production authorization remain pending.
                Alternate EVV vendor approval is a separate process.
              </p>
            </div>

            <div className="contact-sidebar__card">
              <div className="contact-sidebar__icon">
                <Building2 size={25} />
              </div>

              <h3>Built for Providers</h3>

              <p>
                vTrack supports operational workflows for personal
                care, home health, waiver, residential, IDD, and
                multi-service agencies. Applicable Nevada setup
                requirements depend on your services.
              </p>
            </div>

            <div className="contact-sidebar__card">
              <div className="contact-sidebar__icon">
                <Users size={25} />
              </div>

              <h3>Talk With Our Team</h3>

              <p>
                We'll review your current processes, explain the
                onboarding steps, and discuss whether the Legacy
                Agency offer fits your organization.
              </p>

              <p>
                <a href="tel:+18338872251">833-887-2251</a>
                <br />
                <a href="mailto:support@vtrackbilling.com">
                  support@vtrackbilling.com
                </a>
              </p>
            </div>

            <div className="contact-sidebar__card contact-sidebar__card--dark">
              <ShieldCheck size={28} />

              <span>THE VTRACK DIFFERENCE</span>

              <h3>One Partner for Your Back Office.</h3>

              <p>
                EVV, scheduling, authorizations, recipient tracking,
                billing, and payroll in a connected platform,
                supported by an experienced account management team.
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* WHAT HAPPENS NEXT */}

      <section className="contact-next">
        <div className="contact-next__container">
          <div className="contact-next__heading">
            <span>WHAT HAPPENS NEXT?</span>

            <h2>
              A simple conversation about
              <strong> your agency.</strong>
            </h2>
          </div>

          <div className="contact-next__steps">
            <div className="contact-next__step">
              <div>01</div>
              <Mail size={25} />

              <h3>Send Your Request</h3>

              <p>
                Tell us about your organization and the
                workflows you'd like to improve.
              </p>
            </div>

            <ArrowRight
              className="contact-next__arrow"
              size={24}
            />

            <div className="contact-next__step">
              <div>02</div>
              <Users size={25} />

              <h3>Talk With Our Team</h3>

              <p>
                We'll review your services, payers, and
                applicable Nevada onboarding requirements.
              </p>
            </div>

            <ArrowRight
              className="contact-next__arrow"
              size={24}
            />

            <div className="contact-next__step">
              <div>03</div>
              <CalendarDays size={25} />

              <h3>See vTrack in Action</h3>

              <p>
                We'll demonstrate the platform features
                relevant to your agency.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;