type Config = {

  // Main Infos
  title: string
  description: string

  // Hero Section
  dashboardImageLight: string
  dashboardImageDark: string
  elementsImageLight: string
  elementsImageDark: string
  heroSectionBgLight: string
  heroSectionBgDark: string
  heroText: string
  heroSubText: string
  heroButtonText: string
  heroButtonHref: string
  heroArrowText: string
  heroArrowImgPath: string

  // Useful Feature
  usefulFeatureLabel: string
  usefulFeatureTitleFirstHalf: string
  usefulFeatureTitleSecondHalf: string
  usefulFeatureSubTitle: string
}

const globalConfig: Config = {

  // Main Infos
  title: 'Tafily',
  description: 'Tafily Landing Page',

  // Hero Section
  dashboardImageLight: '/images/front-pages/landing-page/hero-dashboard-light.png',
  dashboardImageDark: '/images/front-pages/landing-page/hero-dashboard-dark.png',
  elementsImageLight: '/images/front-pages/landing-page/hero-elements-light.png',
  elementsImageDark: '/images/front-pages/landing-page/hero-elements-dark.png',
  heroSectionBgLight: '/images/front-pages/landing-page/hero-bg-light.png',
  heroSectionBgDark: '/images/front-pages/landing-page/hero-bg-dark.png',
  heroText: 'All in one sass application for your business',
  heroSubText: 'No coding required to make customizations. The live customizer has everything your marketing need.',
  heroButtonText: 'Get Early Access',
  heroButtonHref: '/landing-page#pricing-plans',
  heroArrowText: 'Join community',
  heroArrowImgPath: '/images/front-pages/landing-page/join-community-arrow.png',

  // Useful Feature
  usefulFeatureLabel: 'Useful Feature',
  usefulFeatureTitleFirstHalf: 'Everything you need',
  usefulFeatureTitleSecondHalf: 'to start your next project',
  usefulFeatureSubTitle: 'Not just a set of tools, the package includes ready-to-deploy conceptual application.',
}

export default globalConfig;