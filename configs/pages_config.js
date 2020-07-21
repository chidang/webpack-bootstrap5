'use strict';

// entries
const _entries = {
  jmain: './app/src/assets/js/main.js',
  core: './app/src/assets/scss/main.scss',
  themedark: './app/src/assets/scss/app-dark.scss',
  themegreen: './app/src/assets/scss/app-red.scss',
  jecommerce: './app/src/assets/js/ecommerce.js',
  jcrm: './app/src/assets/js/crm.js'
};

// _page_options
const _page_options = [
  {
    title: 'Main Dashboard',
    template: './app/src/index.hbs',
    inject: "body",
    filename: 'index.html',
    chunks: ['core', 'jecommerce']
  },
  {
    title: 'CRM Dashboard',
    template: './app/src/pages/dashboard/crm.hbs',
    inject: "body",
    filename: 'crm_dashboard.html',
    chunks: ['jecommerce']
  }
];

// Hyper config class
class PagesConfig {
  static get entries() {
    return _entries;
  }

  static get page_options() {
    return _page_options;
  }
}

module.exports = PagesConfig;
