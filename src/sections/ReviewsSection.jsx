import reviewsContent from "../data/reviewsContent";
import sections from "../data/sections";
import ReviewsMobileSlider from "../layout/ReviewsMobileSlider";
import StarsReviews from "../components/StarsReviews";

const ReviewsSection = ({ sectionRef }) => {
  const currentSection = sections.find((section) => section.id === "reviews");
  if (!currentSection.enabled) return null;

  return (
    <section
      id="reviews"
      ref={sectionRef}
      aria-labelledby="reviews-heading"
      // To add min-height using responsive safe screen offsets:
      // safe-screen and remove min-h-screen
      className="reviews-section
      flex justify-center
      relative
      md:min-h-screen
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
        className="reviews-container z-20
        flex h-full w-full md:max-w-5xl"
      >
        <div
          // To add min-height using responsive safe screen offsets:
          // safe-screen-offset md:safe-screen-offset-desktop
          className="reviews-card
          p-2 md:p-6
          flex flex-col flex-1"
        >
          {/* Content Start */}

          <h2
            id="reviews-heading"
            className="
            text-center md:text-left mt-4 mb-2
            text-4xl md:text-6xl text-sky-950"
          >
            What Our Members Say
          </h2>

          <div
            className="reviews-cards 
            p-2 my-4
            hidden md:grid grid-cols-3 gap-4"
          >
            {reviewsContent.map((card) => {
              const { id, name, image, description, classType, score } = card;
              return (
                <div
                  key={id}
                  className="reviews-card
                  rounded-2xl
                  flex flex-col justify-between

                  bg-white/10
                  backdrop-blur-xl
                  border border-white/20
                  
                  shadow-md hover:shadow-xl
                  shadow-black/5 hover:shadow-black/10
                  
                  transition-all duration-300 ease-out
                  hover:-translate-y-1"
                >
                  <div className="p-6">
                    <div className="reviews-part flex items-center gap-6">
                      <p className="font-semibold text-4xl text-sky-500">
                        {score || `5`}
                      </p>
                      <StarsReviews score={score} />
                    </div>
                    <div className="mt-6 text-neutral-800/80">
                      {description.map((paragraph, i) => {
                        return (
                          <p key={i} className="mb-2 leading-relaxed">
                            {paragraph}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                  <div
                    className="profile-part
                    flex space-x-6 items-center
                    p-6 rounded-b-2xl
                    
                    bg-neutral-200/60
                    backdrop-blur-md
                    border-t border-white/10"
                  >
                    <div className="profile-picture">
                      <img
                        className="rounded-full w-20 aspect-square
                        border-2 border-neutral-100
                        shadow-sm"
                        src={image}
                        alt={`${name} image`}
                      />
                    </div>
                    <div className="profile-name">
                      <p className="font-heading text-xl text-sky-500 mb-1">
                        {name}
                      </p>
                      <p className="font-semibold text-sky-400">{classType}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Content End */}

          {/* Reviews Mobile Slider Start */}

          <div className="md:hidden flex flex-1">
            <ReviewsMobileSlider />
          </div>

          {/* Reviews Mobile Slider End */}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
