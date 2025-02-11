type Config = {
  // Hero Section
  heroUpperButtonText: string
  heroUpperButtonColor: string

  heroTitle: string
  heroTitleColor: string
  heroTitleFontSize: string

  heroSecondText: string
  heroSecondTextColor: string
  heroSecondFontSize: string

  heroThirdText: string
  heroThirdTextColor: string
  heroThirdFontSize: string

  heroLowerButtonText: string
  heroLowerButtonColor: string
}

const homePageConfig: Config = {
  // Hero Section
  heroUpperButtonText: 'Test项目白皮书',
  heroUpperButtonColor: 'linear-gradient(to bottom, #2d3748, rgba(45, 55, 72, 0.6))',

  heroTitle: 'Discovery starts here',
  heroTitleColor: 'linear-gradient(to right, #edf2f7, #c3dafe, #f7fafc, #d6bcfa, #edf2f7)',
  heroTitleFontSize: '3.5rem',

  heroSecondText: 'Empowering Capital Formation \n through Transparent Token Sales',
  heroSecondTextColor:'linear-gradient(to bottom,rgb(64, 199, 104), rgba(255, 255, 255, 0.6))',
  heroSecondFontSize: '1.25rem',

  heroThirdText: 'Whether you\'re a project seeking early-stage funding or a participant eager to back the next big idea, Aso connects you, offering transparent tools for capital formation and discovering new communities.',
  heroThirdTextColor: 'rgb(255, 255, 255)',
  heroThirdFontSize: '0.75rem',

  heroLowerButtonText: 'Explore Sales',
  heroLowerButtonColor: 'linear-gradient(to top, #4c51bf, #5a67d8)',

}

export default homePageConfig;