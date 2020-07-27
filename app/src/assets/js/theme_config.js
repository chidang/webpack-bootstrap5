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
    this.sidebar = $("#sidebar");
    this.shrinkingSidebarClassName = 'sidebar-shrinking';
  }

  storeConfig(newConfig) {
    this.config = { ...this.config, ...newConfig };
    localStorage.setItem('ABCADMIN_CONFIG', JSON.stringify(this.config));
  }

  getConfig() {
    let config = localStorage.getItem('ABCADMIN_CONFIG');
    return config ? JSON.parse(config) : DEFAULT_CONFIG;
  }

  toggleSidebar() {
    let self = this;
    $('.btn-toggle-left-sidebar').on('click', function () {
      if(self.body.hasClass(self.shrinkingSidebarClassName)){
        self.expandSidebar();
      }else{
        self.shrinkSidebar();
      }
    });
  }

  shrinkSidebar() {
    this.storeConfig({ isShrinked: true });
    this.body.addClass(this.shrinkingSidebarClassName);
    this.addLeftSidebarScrollBar();
  }

  expandSidebar() {
    this.storeConfig({ isShrinked: false });
    this.body.removeClass(this.shrinkingSidebarClassName);
    this.addLeftSidebarScrollBar();
  }

  addLeftSidebarScrollBar(){
    if (this.config.isShrinked){
      if($("#sidebar").hasClass('mCustomScrollbar')){
        $('#sidebar').mCustomScrollbar("destroy");
      }
    }else{
      $("#sidebar").mCustomScrollbar({
        theme: "minimal"
      });
    }
  }

  applyConfig() {
    this.config = this.getConfig();
    this.toggleSidebar();
    this.addLeftSidebarScrollBar();
    if (this.config.isShrinked) this.shrinkSidebar();
  }
}

export default ThemeConfig;
