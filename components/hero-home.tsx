import homePageConfig from "@/configs/homePageConfig";

/* Hero content */
export default function HeroHome() {
  return (
    <section>
      <div className="container">
        <div className="hero-content">
          <div className="section-header">
            <div className="text-container">
              <div className="btn-container" data-aos="fade-up" 
                style={{ 
                  marginTop: homePageConfig.heroUpperButtonMarginTop,
                  marginBottom: homePageConfig.heroUpperButtonMarginBottom
                }}>
                <a className="btn hero-upper-btn" 
                  style={{ 
                  fontSize: homePageConfig.heroUpperButtonFontSize,
                  fontWeight: homePageConfig.heroUpperButtonFontWeight,
                  }}>
                  <span className="relative inline-flex items-center">
                  {homePageConfig.heroUpperButtonText}
                  </span>
                </a>
              </div>
            </div>
            <div className="hero-title" data-aos="fade-up" data-aos-delay={200} 
              style={{
                WebkitBackgroundClip: 'text',
                fontSize: homePageConfig.heroTitleFontSize,
                fontWeight: homePageConfig.heroTitleFontWeight,
                marginBottom: homePageConfig.heroTitleMarginBottom,
              }} >
              {homePageConfig.heroTitle}
            </div>
            <div className="text-container">
              <p className="hero-text" data-aos="fade-up" data-aos-delay={400}
                style={{
                  color: 'var(--global-theme-color-light-cyan)',
                  fontSize: homePageConfig.heroSecondFontSize,
                  marginBottom: homePageConfig.heroSecondTextMarginBottom,
                  fontWeight: homePageConfig.heroSecondTextFontWeight, 
                  lineHeight: homePageConfig.heroSecondTextLineHeight,
                }}
              >
                {homePageConfig.heroSecondText}
              </p>
              <p className="hero-text" data-aos="fade-up" data-aos-delay={600}
                style={{
                  color: homePageConfig.heroThirdTextColor,
                  fontSize: homePageConfig.heroThirdFontSize,
                  marginBottom: homePageConfig.heroThirdTextMarginBottom,
                  fontWeight: homePageConfig.heroThirdTextFontWeight,
                  lineHeight: homePageConfig.heroThirdTextLineHeight,
                }}
              >
                {homePageConfig.heroThirdText}
              </p>
              <div className="btn-container" data-aos="fade-up" data-aos-delay={1000}>
                <a className="btn hero-lower-btn" href="#0" >
                  <span className="relative inline-flex items-center"
                    style={{ 
                      fontSize: homePageConfig.heroLowerButtonFontSize,
                      fontWeight: homePageConfig.heroLowerButtonFontWeight,  
                    }}>
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
