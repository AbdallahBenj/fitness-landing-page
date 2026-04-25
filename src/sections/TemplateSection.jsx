import sections from "../data/sections";

const TemplateSection = ({ sectionRefs }) => {
  const currentSection = sections.find((section) => section.id === "template");
  if (!currentSection.enabled) return null;

  return (
    <section
      id="template"
      ref={sectionRefs}
      className="template-section
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
        className="template-container z-20
        flex h-full w-full md:max-w-5xl"
      >
        <div
          className="template-card
          border border-green-400
          p-2 md:p-6
          flex flex-col flex-1
          safe-screen-offset
          md:safe-screen-offset-desktop"
        >
          {/* Content Start */}

          <h2
            id="template-heading"
            className="font-heading 
            text-center md:text-left mt-4 mb-2
            text-4xl md:text-6xl text-neutral-700"
          >
            Section Template
          </h2>
          <div
            className="template-cards p-2 my-auto
          grid md:grid-cols-3 gap-4"
          ></div>

          {/* Content End */}
        </div>
      </div>
    </section>
  );
};

export default TemplateSection;
