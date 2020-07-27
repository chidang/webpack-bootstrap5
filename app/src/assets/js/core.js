import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'

import 'imports-loader?imports[]=default|jquery!jquery-mousewheel'
import 'imports-loader?imports[]=default|jquery!malihu-custom-scrollbar-plugin'
import { Tooltip, Toast, Popover } from 'bootstrap';
import ThemeConfig from './theme_config.js';

class AbcAdmin {
  init() {
    $(document).ready(function () {
      let themeConfig = new ThemeConfig();
      themeConfig.applyConfig();
    });
  }
}

window.abcAdmin = new AbcAdmin();
window.abcAdmin.init();
