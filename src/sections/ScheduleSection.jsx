import ScrollToSection from "../components/ScrollToSection";
import scheduleContent from "../data/scheduleContent";
import sections from "../data/sections";

const ScheduleSection = ({ sectionRef, sectionRefs }) => {
  const currentSection = sections.find((section) => section.id === "schedule");
  if (!currentSection.enabled) return null;

  return (
    <section
      id="schedule"
      ref={sectionRef}
      aria-labelledby="schedule-heading"
      className="schedule-section 
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
        className="schedule-container z-20
        flex h-full w-full md:max-w-5xl"
      >
        <div
          className="schedule-card
          p-2 md:p-6
          flex flex-col flex-1
          safe-screen-offset
          md:safe-screen-offset-desktop"
        >
          {/* Content Start */}
          <h2
            id="schedule-heading"
            className="
            mt-4
            text-center md:text-left
            text-4xl md:text-6xl text-sky-950"
          >
            Flexible Weekly Schedule
          </h2>
          <p
            className=" 
            text-left font-medium pb-2
            text-lg md:text-xl text-neutral-600"
          >
            Pick the time that works best for you.
          </p>
          <div
            className="schedule-cards p-2
            flex flex-col space-y-4 my-4"
          >
            {scheduleContent.map((part) => {
              const { name, week } = part;
              return (
                <div
                  key={name}
                  className="schedule-card
                  grid p-4
                  grid-cols-3
                  md:grid-cols-4 gap-4

                  border-b-2 border-sky-400
                  rounded-bl-2xl rounded-tr-2xl

                  bg-white/10
                  backdrop-blur
                  
                  shadow-md hover:shadow-xl
                  shadow-black/5 hover:shadow-black/10

                  transition-transform duration-300 ease-out
                  hover:-translate-y-1"
                >
                  <p
                    className="font-heading
                    text-2xl text-sky-500
                    col-span-2 col-start-1 md:col-span-1"
                  >
                    {week}
                  </p>
                  {part.sessions.map((session) => {
                    const { name, time, hours, className } = session;
                    return (
                      <div
                        key={name}
                        className="col-span-2 col-start-2 md:col-span-1 space-y-2
                        p-2 bg-white/5
                        border border-white/10
                        backdrop-blur-sm"
                      >
                        <p className="font-heading text-xl text-sky-900 flex items-center">
                          {time}{" "}
                          <span className="inline-block h-1.5 w-1.5 rounded-full bg-sky-400 mx-2"></span>{" "}
                          <span>{hours}</span>
                        </p>
                        <p className="text-md font-medium text-neutral-800/80">
                          {className}
                        </p>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
          <div className="cta-btns flex flex-col md:flex-row-reverse p-2 gap-4">
            <button
              onClick={() => {
                ScrollToSection(sectionRefs.current["plans"]);
              }}
              className="font-heading 
              
              rounded-lg
              text-xl px-6 py-2 md:w-1/2
              btn-primary"
            >
              Book a Session
            </button>
            <button
              onClick={() => {
                ScrollToSection(sectionRefs.current["classes"]);
              }}
              className="font-heading 
              rounded-lg
              text-xl px-6 py-2 md:w-1/2
              btn-secondary"
            >
              Not sure? View class details
            </button>
          </div>
          <p
            className="font-montserrat 
            text-right p-2
            text-md md:text-lg text-neutral-600"
          >
            Rotating classes keep your training fresh and well-balanced.
          </p>
          {/* Content End */}
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
