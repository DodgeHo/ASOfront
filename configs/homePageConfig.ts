
type Config = {
  // Hero Section
  heroUpperButtonMarginTop: string
  heroUpperButtonText: string
  heroUpperButtonFontSize: string
  heroUpperButtonFontWeight: string
  heroUpperButtonMarginBottom: string

  heroTitle: string
  heroTitleFontSize: string
  heroTitleFontWeight: string
  heroTitleMarginBottom: string

  heroSecondText: string
  heroSecondFontSize: string
  heroSecondTextFontWeight: string
  heroSecondTextLineHeight: string
  heroSecondTextMarginBottom: string

  heroThirdText: string
  heroThirdTextColor: string
  heroThirdFontSize: string
  heroThirdTextFontWeight: string
  heroThirdTextLineHeight: string
  heroThirdTextMarginBottom: string

  heroLowerButtonText: string
  heroLowerButtonFontSize: string
  heroLowerButtonFontWeight: string
}

/* 全局的主题属性包括颜色，请在文件ASOfront/app/css/style.css中的:root编辑*/

const homePageConfig: Config = {
  // Hero Section
  heroUpperButtonMarginTop: '5rem',
  heroUpperButtonText: '项目白皮书',
  //heroUpperButtonBorderColor: 全局颜色global-theme-color-gradient-green-to-blue
  heroUpperButtonFontSize: '0.8rem',
  heroUpperButtonFontWeight: '400',
  heroUpperButtonMarginBottom: '1rem',

  heroTitle: 'Discovery starts here',
  //heroTitleColor: 全局颜色  --global-theme-color-gradient-green-to-cyan,
  heroTitleFontSize: '3.5rem',
  heroTitleFontWeight: '400',
  heroTitleMarginBottom: '2rem',

  heroSecondText: 'Empowering Capital Formation \n through Transparent Token Sales',
  //heroSecondTextColor:全局颜色 --global-theme-color-light-cyan
  heroSecondFontSize: '1.375rem',
  heroSecondTextFontWeight: '500',
  heroSecondTextLineHeight: '1.5', 
  heroSecondTextMarginBottom: '2.25rem',

  heroThirdText: 'Whether you\'re a project seeking early-stage funding or a participant eager to back the next big idea, Aso connects you, offering transparent tools for capital formation and discovering new communities.',
  heroThirdTextColor: 'white',
  heroThirdFontSize: '0.875rem',
  heroThirdTextFontWeight: '300', 
  heroThirdTextLineHeight: '2',
  heroThirdTextMarginBottom: '4rem',

  heroLowerButtonText: 'Explore Sales',
  //heroLowerButtonBackground: 全局颜色global-theme-color-gradient-green-to-blue 
  heroLowerButtonFontSize: '1.1rem',
  heroLowerButtonFontWeight: '350',
}

export default homePageConfig;