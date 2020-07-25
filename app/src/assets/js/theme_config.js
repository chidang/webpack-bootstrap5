const THEME_DEFAULT = 'default';
const THEME_LIGHT = 'light';
const THEME_DARK = 'dark';

const DEFAULT_CONFIG = {
  theme: THEME_DEFAULT,
  isShrinked: false
};

class ThemeConfig {
  constructor() {
    this.config = {};
    this.body = $('body');
    this.shrinkingSidebarClassName = 'sidebar-shrinking';
  }

  storeConfig(newConfig) {
    this.config = { ...this.config, ...newConfig };
    localStorage.setItem('ABCADMIN_CONFIG', JSON.stringify(this.config));
  }

  getConfig() {
    var config = localStorage.getItem('ABCADMIN_CONFIG');
    return config ? JSON.parse(config) : DEFAULT_CONFIG;
  }

  toggleSidebar() {
    if(this.body.hasClass(this.shrinkingSidebarClassName)){
      this.expandSidebar();
    }else{
      this.shrinkSidebar();
    }
  }

  shrinkSidebar() {
    this.storeConfig({ isShrinked: true });
    this.body.addClass(this.shrinkingSidebarClassName);
  }

  expandSidebar() {
    this.storeConfig({ isShrinked: false });
    this.body.removeClass(this.shrinkingSidebarClassName);
  }

  addLeftSidebarScrollBar(){
    $("#sidebar").mCustomScrollbar({
      theme: "minimal"
    });
  }

  applyConfig() {
    this.config = this.getConfig();

    if (this.config.isShrinked) this.shrinkSidebar();
  }
}

export default ThemeConfig;
