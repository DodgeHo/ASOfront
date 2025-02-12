type Config = {

  // Main Infos
  websiteTitle: string

  // Theme attributes

}

const globalConfig: Config = {

  // Main Infos
  websiteTitle: 'ASO',

  // Theme attributes 
  /* 一些全局的主题属性，包括颜色等等请在文件ASOfront/app/css/style.css中的:root编辑，
  包括：
  --global-theme-color-gradient-green-to-blue: linear-gradient(to bottom, #05BE9D, #0A77D8);
  --global-theme-color-gradient-purple-to-blue: linear-gradient(to top, #4c51bf, #5a67d8);
  --global-theme-color-gradient-green-to-cyan: linear-gradient(to bottom, #B3F37A, #6FDCDE);
  --global-theme-color-light-cyan: #9deeed;

  请在此处同步修改
  */
}

export default globalConfig;