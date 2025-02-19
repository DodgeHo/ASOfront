import homePageConfig from "@/configs/homePageConfig";

/* Hero content */
export default function HeroHome() {
  return (
    <section>
      <div
        className="hero-content"
        style={{ minHeight: homePageConfig.illustrationTopPosition }}
      >
        <div className="max-w-3xl mx-auto">
          <div>
            <div
              className="hero-btn-container"
              data-aos="fade-up"
              style={{
                marginTop: "5rem",
                marginBottom: "1rem",
              }}
            >
              <a
                className="btn hero-upper-btn"
                href="#0"
              >
                <span className="relative inline-flex items-center">
                  {homePageConfig.heroUpperButtonText}
                </span>
              </a>
            </div>
          </div>
          <div
            className="hero-title"
            data-aos="fade-up"
            data-aos-delay={200}
            style={{
              WebkitBackgroundClip: "text",
              marginBottom: "2rem",
            }}
          >
            {homePageConfig.heroTitle}
          </div>
          <div>
            <p
              className="hero-second-text"
              data-aos="fade-up"
              data-aos-delay={400}
              style={{
                marginBottom: "2.25rem",
                lineHeight: "1.5",
              }}
            >
              {homePageConfig.heroSecondText}
            </p>
            <p
              className="hero-third-text"
              data-aos="fade-up"
              data-aos-delay={600}
              style={{
                marginBottom: "4rem",
                lineHeight: "2",
              }}
            >
              {homePageConfig.heroThirdText}
            </p>
            <div
              className="hero-btn-container"
              data-aos="fade-up"
              data-aos-delay={1000}
            >
              <a className="btn hero-lower-btn" href="#0">
                <span className="relative inline-flex items-center" >
                  {homePageConfig.heroLowerButtonText}
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
