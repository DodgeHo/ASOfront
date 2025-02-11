import homePageConfig from "@/configs/homePageConfig";

/* Hero content */
export default function HeroHome() {
  return (
    <section>
      <div className="container">
        <div className="hero-content">
          <div className="section-header">
            <div data-aos="fade-up" data-aos-delay={600}>
              <a className="btn hero-upper-btn" href="#0"
                style={{ background: homePageConfig.heroUpperButtonColor }}>
                  <span className="relative inline-flex items-center">
                    {homePageConfig.heroUpperButtonText}</span>
                
              </a>
            </div>
            <div className="hero-title" data-aos="fade-up"
              style={{
                background: homePageConfig.heroTitleColor,
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                fontSize: homePageConfig.heroTitleFontSize,
              }} >
              {homePageConfig.heroTitle}
            </div>
            <div className="text-container">
              <p className="hero-text" data-aos="fade-up" data-aos-delay={200}
                style={{
                  background: homePageConfig.heroSecondTextColor,
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                  fontSize: homePageConfig.heroSecondFontSize,
                }}
              >
                {homePageConfig.heroSecondText}
              </p>
              <p className="hero-text" data-aos="fade-up" data-aos-delay={400}
                style={{
                  color: homePageConfig.heroThirdTextColor,
                  fontSize: homePageConfig.heroThirdFontSize,
                }}
              >
                {homePageConfig.heroThirdText}
              </p>
              <div className="btn-container">
                <a className="btn hero-lower-btn" href="#0"
                  style={{ background: homePageConfig.heroLowerButtonColor }}
                >
                  <span className="relative inline-flex items-center">
                    {homePageConfig.heroLowerButtonText}
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
