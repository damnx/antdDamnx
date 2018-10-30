const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');

const AntDesignThemePlugin = require('antd-theme-webpack-plugin');
const path = require('path');

const options = {
  antDir: path.join(__dirname, './node_modules/antd'),
  stylesDir: path.join(__dirname, './src/styles'),
  varFile: path.join(__dirname, './src/styles/variables.less'),
  mainLessFile: path.join(__dirname, './src/styles/index.less'),
  themeVariables: [
    '@primary-color',
    '@secondary-color',
    '@text-color',
    '@text-color-secondary',
    '@heading-color',
    '@layout-header-background',
    '@btn-primary-bg',
    '@layout-sider-background',
    '@body-bg',
  ],
  indexFileName: 'index.html',
  generateOnce: false
}

module.exports = function override(config, env) {
  config = injectBabelPlugin(
    ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }], // change importing css to less
    config,
  );
  config = rewireLess.withLoaderOptions({
    modifyVars: {
      "@primary-color": "#1DA57A",
      "@layout-sider-background": "#f5222d",
      "@secondary-color": "#fff",
      "@body-bg": "#000",
    },
    javascriptEnabled: true,
  })(config, env);
  config.plugins.push(new AntDesignThemePlugin(options));
  return config;
};

