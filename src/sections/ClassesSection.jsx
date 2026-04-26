import classesContent from "../data/classesContent";
import sections from "../data/sections";

import ScrollToSection from "../components/ScrollToSection";

const ClassesSection = ({ sectionRef, sectionRefs, setFormData }) => {
  const currentSection = sections.find((section) => section.id === "classes");
  if (!currentSection.enabled) return null;

  return (
    <section
      id="classes"
      ref={sectionRef}
      className="classes-section
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
        className="classes-container z-20
        flex h-full w-full md:max-w-5xl"
      >
        <div
          className="classes-card
          p-2 md:p-6
          flex flex-col flex-1
          safe-screen-offset
          md:safe-screen-offset-desktop"
        >
          {/* Content Start */}

          <h2
            id="classes-heading"
            className=" 
            text-center md:text-left mt-4 mb-2
            text-4xl md:text-6xl text-sky-950"
          >
            Choose Your Training Style
          </h2>
          <div
            className="classes-cards 
            p-2 my-4
            grid md:grid-cols-3 gap-4"
          >
            {classesContent.map((card) => {
              const { title, description, badges } = card;
              return (
                <div
                  key={title}
                  className={`classes-card
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
                      : "scale-100 bg-sky-500/10 border-sky-400/80"
                  }`}
                >
                  <h3 className="text-3xl text-sky-500 font-medium mb-6">
                    {title}
                  </h3>

                  <p
                    className="
                    font-medium text-neutral-800/80 mb-6"
                  >
                    {description}
                  </p>
                  <div className="flex flex-col gap-2">
                    {badges.map((badge) => {
                      return (
                        <div
                          key={badge}
                          className={`flex items-center gap-2 px-2 py-0.5 w-fit rounded-full

                            ${
                              badge === badges[0]
                                ? "text-white bg-sky-500"
                                : "text-sky-600 bg-white"
                            }`}
                        >
                          {badge === badges[0] && (
                            <span className="inline-block size-3 bg-white rounded-full"></span>
                          )}
                          <p className="text-sm font-bold">{badge}</p>
                        </div>
                      );
                    })}
                  </div>
                  <button
                    onClick={() => {
                      setFormData((prev) => ({ ...prev, class: title }));
                      ScrollToSection(sectionRefs.current["plans"]);
                    }}
                    className="font-heading
                    text-xl px-6 py-2 mt-6
                    rounded-tr-lg rounded-bl-lg             
                    btn-primary"
                  >
                    Explore Class
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

export default ClassesSection;
