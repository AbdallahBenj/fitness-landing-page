import { useState, useEffect } from "react";

import ScrollToSection from "../components/ScrollToSection";

import sections from "../data/sections";
import classesContent from "../data/classesContent";
import pricingContent from "../data/plansContent";

const ContactSection = ({ sectionRef, sectionRefs, formData, setFormData }) => {
  const [result, setResult] = useState("");
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    if (!result) return;
    const resultTimeOut = setTimeout(() => setResult(""), 5000);
    const showTimeOut = setTimeout(() => setShowResult(false), 4500);

    return () => {
      clearTimeout(resultTimeOut);
      clearTimeout(showTimeOut);
    };
  }, [result]);

  const currentSection = sections.find((section) => section.id === "contact");
  if (!currentSection.enabled) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setFormData((prev) => ({
      ...prev,
      name: "",
      email: "",
      class: "",
      plan: "",
      message: "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setShowResult(true);
    setResult(
      "Thanks! Your session request has been received. \nWe’ll contact you shortly.",
    );
    ScrollToSection(sectionRefs.current["contact"]);
    resetForm();
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="contact-section
      flex justify-center
      relative
      safe-screen
      scroll-mt-(--header-mobile) 
      md:scroll-mt-(--header-desktop) 
      background-gradient"
    >
      {/* background texture */}
      <picture>
        <source
          media="(min-width:1024px)"
          srcSet="/images/fitness-landing-page-texture-lg.webp"
        />
        <source
          media="(min-width:768px)"
          srcSet="/images/fitness-landing-page-texture-md.webp"
        />

        <img
          src="/images/fitness-landing-page-texture-mobile.webp"
          alt="Fitness Hero"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 w-full h-full object-contain object-center md:object-cover"
        />
      </picture>

      {/* Content */}

      <div
        className="contact-container z-20
        flex h-full w-full md:max-w-5xl"
      >
        <div
          className="contact-card
          p-2 md:p-6
          flex flex-col flex-1
          safe-screen-offset
          md:safe-screen-offset-desktop
          
          rounded-2xl
          bg-white/10
          backdrop-blur-xl
          border border-white/20
          shadow-xl shadow-black/5"
        >
          {/* Content Start */}

          <h2
            id="contact-heading"
            className=" 
            text-center md:text-left mt-4 mb-2
            text-4xl md:text-6xl text-sky-950"
          >
            Get Started Today
          </h2>
          <div
            className="contact-cards 
            p-2 my-auto
            flex flex-col gap-4"
          >
            {/* Form Section Start */}

            {result && (
              <p
                aria-live="polite"
                className={`font-heading 
                  text-center
                  whitespace-pre-line 
                  text-xl md:text-2xl text-green-600
                  transition-opacity duration-500 ease-out
                ${showResult ? "opacity-100" : "opacity-0"}
                `}
              >
                {result}
              </p>
            )}

            <form
              onSubmit={handleSubmit}
              className="w-full 
              font-medium text-sky-900"
            >
              <div className="inputs-card grid md:grid-cols-2 gap-4">
                <div className="name-input w-full">
                  <label htmlFor="name" className="font-semibold m-1 block">
                    Your name
                  </label>
                  <input
                    required
                    autoComplete="name"
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Name*"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full
                    px-3 py-2 rounded-lg

                    bg-white/70
                    backdrop-blur-md

                    border border-sky-500/50
                    
                    focus:outline-none
                    focus:ring-2 focus:ring-sky-500
                    placeholder:text-neutral-500"
                  />
                </div>

                <div className="name-input w-full">
                  <label htmlFor="email" className="font-semibold m-1 block">
                    Your email address
                  </label>
                  <input
                    required
                    autoComplete="email"
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email*"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full
                    px-3 py-2 rounded-lg

                    bg-white/70
                    backdrop-blur-md

                    border border-sky-500/50
                    
                    focus:outline-none
                    focus:ring-2 focus:ring-sky-500
                    placeholder:text-neutral-500"
                  />
                </div>

                <div className="class-select w-full">
                  <label htmlFor="class" className="font-semibold m-1 block">
                    Choose a class
                  </label>
                  <select
                    id="class"
                    name="class"
                    value={formData.class}
                    onChange={handleChange}
                    className="w-full
                    px-3 py-2 rounded-lg

                    bg-white/70
                    backdrop-blur-md

                    border border-sky-500/50
                    
                    focus:outline-none
                    focus:ring-2 focus:ring-sky-500
                    placeholder:text-neutral-500"
                  >
                    <option value="" disabled>
                      Select Class
                    </option>

                    {classesContent.map((classOption, i) => {
                      return (
                        <option key={i} value={classOption.title}>
                          {classOption.title}
                        </option>
                      );
                    })}
                  </select>
                </div>

                <div className="plan-select w-full">
                  <label htmlFor="plan" className="font-semibold m-1 block">
                    Choose a plan
                  </label>
                  <select
                    id="plan"
                    name="plan"
                    value={formData.plan}
                    onChange={handleChange}
                    className="w-full
                    px-3 py-2 rounded-lg

                    bg-white/70
                    backdrop-blur-md

                    border border-sky-500/50
                    
                    focus:outline-none
                    focus:ring-2 focus:ring-sky-500
                    placeholder:text-neutral-500"
                  >
                    <option value="" disabled>
                      Select Plan
                    </option>

                    {pricingContent.map((planOption, i) => {
                      return (
                        <option key={i} value={planOption.title}>
                          {planOption.title}
                        </option>
                      );
                    })}
                  </select>
                </div>

                <div className="name-input w-full md:col-span-2">
                  <label htmlFor="message" className="font-semibold m-1 block">
                    Any goals or questions? (optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Comment.."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full
                    px-3 py-2 rounded-lg

                    bg-white/70
                    backdrop-blur-md

                    border border-sky-500/50
                    
                    focus:outline-none
                    focus:ring-2 focus:ring-sky-500
                    placeholder:text-neutral-500"
                  />
                </div>

                <button
                  type="submit"
                  className="
                  md:col-span-2
                  px-6 py-3 rounded-lg
                  font-heading uppercase
                  text-xl md:text-2xl
                  btn-primary"
                >
                  Book My Session
                </button>
                <p className="md:col-span-2 text-neutral-700">
                  No commitment. We’ll contact you shortly.
                </p>
              </div>
            </form>

            {/* Form Section Start */}
          </div>

          {/* Content End */}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
