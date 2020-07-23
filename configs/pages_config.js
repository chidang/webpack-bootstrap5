'use strict';

const _entries = {
  core_css: './app/src/assets/scss/core.scss',
  themedark_css: './app/src/assets/scss/app-dark.scss',
  themegreen_css: './app/src/assets/scss/app-red.scss',
  ecommerce_js: './app/src/assets/js/ecommerce.js',
  core_js: './app/src/assets/js/core.js',
  crm_js: './app/src/assets/js/crm.js'
};

const _page_options = [
  {
    title: 'Main Dashboard',
    template: './app/src/index.hbs',
    inject: 'body',
    filename: 'index.html',
    chunks: ['ecommerce_js']
  },
  {
    title: 'CRM Dashboard',
    template: './app/src/pages/dashboard/crm.hbs',
    inject: 'body',
    filename: 'crm_dashboard.html',
    chunks: ['crm_js']
  },
  {
    title: 'Button Components',
    template: './app/src/pages/components/buttons.hbs',
    inject: 'body',
    filename: 'component-buttons.html',
    chunks: []
  }
];

class PagesConfig {
  static get entries() {
    return _entries;
  }

  static get page_options() {
    return _page_options;
  }
}

module.exports = PagesConfig;
