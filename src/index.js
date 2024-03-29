const path = require('path');

module.exports = function (context) {
  const {siteConfig} = context;
  const {themeConfig} = siteConfig;
  const {hubspot} = themeConfig || {};

  if (!hubspot) {
    throw new Error(
      `You need to specify the 'hubspot' object in 'themeConfig' with the 'accountId' field in it to use docusaurus-plugin-hubspot`,
    );
  }

  const {accountId} = hubspot;

  if (!accountId) {
    throw new Error(
      'You specified the `hubspot` object in `themeConfig` but the `accountId` field was missing. ' +
        'Please ensure this is not a mistake.',
    );
  }

  const isProd = process.env.NODE_ENV === 'production';

  return {
    name: 'docusaurus-plugin-hubspot',

    injectHtmlTags() {
      if (!isProd) {
        return {};
      }
      return {
        headTags: [
            {
                tagName: 'script',
                attributes: {
                    async: hubspot.async || false,
                    defer: hubspot.defer || false,
                    type: 'text/javascript',
                    id: 'hs-script-loader',
                    src: `//js.hs-scripts.com/${accountId}.js`,
                },
            },
        ],
      };
    },
  };
};