import { LuUserCheck } from "react-icons/lu";
import featuresContent from "../data/featuresContent.js";
import sections from "../data/sections.js";

const FeaturesSection = ({ sectionRef }) => {
  const currentSection = sections.find((section) => section.id === "features");
  if (!currentSection.enabled) return null;

  return (
    <section
      id="features"
      ref={sectionRef}
      aria-labelledby="features-heading"
      className="features-section
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
        className="features-container z-20
        flex h-full w-full md:max-w-5xl"
      >
        <div
          className="features-card
          p-2 md:p-6
          flex flex-col flex-1
          safe-screen-offset
          md:safe-screen-offset-desktop"
        >
          {/* Content Start */}
          <h2
            id="features-heading"
            className="
            mt-4 mb-2
            text-center md:text-left
            text-4xl md:text-6xl text-sky-950"
          >
            Everything You Need to Succeed
          </h2>
          <div
            className="features-cards p-4 my-auto
            grid md:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {featuresContent.map((card) => {
              const { Icon, title, description } = card;
              return (
                <div
                  key={title}
                  className="features-icon-card
                  flex flex-col justify-center items-center gap-4
                  p-6 rounded-xl 
                  
                  bg-white/10
                  backdrop-blur-[2px]
                  border border-white/20

                  hover:bg-white/20
                  hover:border-white/30
                  
                  shadow-lg shadow-black/5
                  hover:shadow-xl hover:shadow-black/10
                  
                  transition-all duration-300 ease-out
                  hover:-translate-y-1 hover:scale-[1.03]"
                >
                  <Icon
                    className="
                    size-16 md:size-20
                    p-3 rounded-full
                    
                    bg-white/20
                    backdrop-blur-md
                    
                    text-sky-500
                    
                    shadow-sm
                    border border-white/20"
                  />
                  <h3
                    className=" 
                    text-center text-2xl font-semibold text-sky-500"
                  >
                    {title}
                  </h3>
                  <p
                    className="
                    text-center font-medium text-neutral-800/80"
                  >
                    {description}
                  </p>
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

export default FeaturesSection;
