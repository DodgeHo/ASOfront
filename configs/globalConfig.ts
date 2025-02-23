import { MenuLink } from "./MenuLink";

type Config = {
  // Main Infos
  websiteTitle: string;

  // Theme attributes
  illustrationBottomPosition: string;

  // Menu Links
  menuLinks: MenuLink[];
};

const globalConfig: Config = {
  // Main Infos
  websiteTitle: "ASO",

  // Theme attributes
  /* 一些全局的主题属性，包括颜色等等请在文件ASOfront/app/css/style.css中
  的:root编辑，譬如包括：
  --global-theme-color-gradient-green-to-blue: linear-gradient(to bottom, #05BE9D, #0A77D8);
  --global-theme-color-gradient-purple-to-blue: linear-gradient(to top, #4c51bf, #5a67d8);
  ...
  --global-theme-color-light-cyan: #9deeed;
  */
 
  illustrationBottomPosition: "180px",

  // Menu Links 菜单及链接
  menuLinks: [
    { href: "/donation", label: "$ASO捐款" },
    { href: "/community", label: "社交社区" },
    { href: "/sales", label: "电商代币销售" },
    { href: "/partners", label: "合作伙伴" },
    { href: "/contactUs", label: "联系我们" },
    { href: "/help", label: "寻求帮助" },
  ],
};

export default globalConfig;
