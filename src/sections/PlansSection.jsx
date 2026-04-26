import ScrollToSection from "../components/ScrollToSection";
import plansContent from "../data/plansContent";
import sections from "../data/sections";
import { HiBadgeCheck } from "react-icons/hi";

const PlansSection = ({ sectionRef, sectionRefs, setFormData }) => {
  const currentSection = sections.find((section) => section.id === "plans");
  if (!currentSection.enabled) return null;

  return (
    <section
      id="plans"
      ref={sectionRef}
      className="plans-section
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
        className="plans-container z-20
        flex h-full w-full md:max-w-5xl"
      >
        <div
          className="plans-card
          p-2 md:p-6
          flex flex-col flex-1
          safe-screen-offset
          md:safe-screen-offset-desktop"
        >
          {/* Content Start */}

          <h2
            id="plans-heading"
            className=" 
            text-center md:text-left mt-4 mb-2
            text-4xl md:text-6xl text-sky-950"
          >
            Choose Your Membership Plan
          </h2>
          <div
            className="plans-cards
            p-2 my-4
            grid md:grid-cols-3 gap-4"
          >
            {plansContent.map((card, i) => {
              const { title, phrases, popular, CTABtn } = card;
              return (
                <div
                  key={i}
                  className={`plans-card
                  flex flex-col justify-between p-6

                  border-l border-sky-400/50

                  rounded-tr-2xl rounded-bl-2xl  
                                    
                  backdrop-blur-[2px]
                  
                  shadow-lg shadow-black/5
                  hover:shadow-xl hover:shadow-black/10

                  transition-all duration-300 ease-out
                  hover:-translate-y-1 hover:scale-[1.03]
                  ${
                    !card.medium
                      ? "md:scale-95 bg-white/10"
                      : "relative scale-100 bg-sky-500/10 border-sky-400/80"
                  }`}
                >
                  <h3 className="text-3xl font-medium text-sky-500 mb-6">
                    {title}
                  </h3>

                  {popular && (
                    <span
                      className="absolute -top-3 right-4
                      px-4 py-1 text-sm font-bold
                      text-white
                      bg-linear-to-r from-sky-400 to-sky-600
                      rounded-full shadow"
                    >
                      Most Popular
                    </span>
                  )}

                  <div className="flex flex-col gap-2 font-sans">
                    {phrases.map((badge, i) => {
                      return (
                        <div
                          key={i}
                          className={`flex items-center gap-2 px-4 py-1 w-fit rounded-full
                            
                            ${
                              badge === phrases[0]
                                ? "mb-2 text-white bg-sky-500"
                                : "text-sky-600 bg-white"
                            }`}
                        >
                          {badge === phrases[0] ? (
                            <span className="inline-block w-3 aspect-square bg-sky-100 rounded-full"></span>
                          ) : (
                            <HiBadgeCheck className="font-semibold text-xl text-emerald-500" />
                          )}
                          <p className="text-sm font-bold">{badge}</p>
                        </div>
                      );
                    })}
                  </div>
                  <button
                    onClick={() => {
                      setFormData((prev) => ({ ...prev, plan: title }));
                      ScrollToSection(sectionRefs.current["contact"]);
                    }}
                    className="font-heading
                    text-xl px-6 py-2 mt-6
                    rounded-tr-lg rounded-bl-lg             
                    btn-primary"
                  >
                    {CTABtn}
                  </button>
                </div>
              );
            })}
          </div>

          {/* Content End */}
        </div>
      </div>
    </section>
  );
};

export default PlansSection;
