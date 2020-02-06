module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/cat-forum/'
    : '/',

  outputDir: 'docs',
};
