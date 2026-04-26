import { MdVerified } from "react-icons/md";
import { TbHours24 } from "react-icons/tb";

import ScrollToSection from "../components/ScrollToSection";

const HomeSection = ({ sectionRef, sectionRefs }) => {
  return (
    <section
      id="home"
      ref={sectionRef}
      className="home-section
      flex justify-center
      relative
      safe-screen
      background-gradient"
    >
      {/* background image */}
      <picture>
        <source
          media="(min-width:1024px)"
          srcSet="/images/fitness-man-women-lg.webp"
        />
        <source
          media="(min-width:768px)"
          srcSet="/images/fitness-man-women-md.webp"
        />

        <img
          src="/images/fitness-man-women-mobile.webp"
          alt="Fitness Hero"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      </picture>

      {/* overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-white/60 via-sky-50/20 to-sky-100/60" />
      <div className="absolute inset-0 bg-white/5" />

      {/* blobs */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-sky-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-sky-500/20 rounded-full blur-3xl" />

      {/* Content */}

      <div
        className="home-container z-20
        flex h-full w-full md:max-w-5xl"
      >
        <div
          className="home-card
          p-2 md:p-6
          flex flex-1
          mt-(--header-mobile) 
          md:mt-(--header-desktop)
          safe-screen-offset
          md:safe-screen-offset-desktop"
        >
          <div
            className="home-left-container
            flex flex-col
            my-auto
            max-w-2xl"
          >
            <div className="home-welcome space-y-5">
              <p
                className="
                tracking-[0.25em]
                text-xs md:text-sm
                uppercase font-semibold
                text-neutral-600"
              >
                WELCOME TO YOUR SPORT CLUB
              </p>

              <h2
                className=" 
                leading-[0.95] tracking-wide
                text-6xl md:text-7xl text-sky-950"
              >
                Your Fitness Journey{" "}
                <span className="text-sky-400">Starts Here</span>
              </h2>

              <p className="leading-relaxed text-base md:text-lg text-neutral-900 md:text-neutral-600">
                Expert guidance, modern equipment, and a motivating community
                <br />— all in one place.{" "}
                <span className="font-semibold text-sky-950">
                  No matter your goal
                </span>
                , we have the perfect plan for you.
              </p>
            </div>
            <div className="home-actions space-y-6">
              <div
                className="home-trust
                border-t border-neutral-200 pt-6"
              >
                <div className="flex items-center gap-2">
                  <MdVerified className="text-sky-800 text-xl" />
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-sky-600"></span>
                  <p className="text-sm font-bold uppercase tracking-wider text-neutral-800 md:text-neutral-500">
                    Trusted by{" "}
                    <span className="text-sky-600 text-lg">+500</span> local
                    members
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <TbHours24 className="text-sky-800 text-xl" />
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-sky-600"></span>
                  <p className="text-sm font-bold uppercase tracking-wider text-neutral-800 md:text-neutral-500">
                    Open <span className="text-sky-600 text-lg">24/7</span> for
                    your convenience
                  </p>
                </div>
              </div>

              <div
                className="home-buttons
                flex flex-col md:flex-row-reverse gap-4"
              >
                <button
                  onClick={() => {
                    ScrollToSection(sectionRefs.current["contact"]);
                  }}
                  className="
                  flex-1
                  px-8 py-3 rounded-lg
                  font-heading uppercase
                  text-xl md:text-xl
                  btn-primary"
                >
                  Join Now
                </button>
                <button
                  onClick={() => {
                    ScrollToSection(sectionRefs.current["classes"]);
                  }}
                  className="
                  flex-1
                  px-8 py-3 rounded-lg
                  font-heading uppercase
                  text-xl md:text-xl
                  btn-secondary"
                >
                  View Programs
                </button>
              </div>
            </div>
          </div>
          <div className="home-right-container"></div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
