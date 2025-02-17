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
                marginTop: homePageConfig.heroUpperButtonMarginTop,
                marginBottom: homePageConfig.heroUpperButtonMarginBottom,
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
              marginBottom: homePageConfig.heroTitleMarginBottom,
            }}
          >
            {homePageConfig.heroTitle}
          </div>
          <div>
            <p
              className="hero-text"
              data-aos="fade-up"
              data-aos-delay={400}
              style={{
              color: "var(--global-theme-color-light-cyan)",
              marginBottom: homePageConfig.heroSecondTextMarginBottom,
              lineHeight: homePageConfig.heroSecondTextLineHeight,
              fontSize: '1.375rem',
              fontWeight:  '500',
              }}
            >
              {homePageConfig.heroSecondText}
            </p>
            <p
              className="hero-text"
              data-aos="fade-up"
              data-aos-delay={600}
              style={{
                marginBottom: homePageConfig.heroThirdTextMarginBottom,
                lineHeight: homePageConfig.heroThirdTextLineHeight,
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
