const isProduction = process.env.NODE_ENV === 'production';

if (isProduction) {
  console.log('Build for production');
}

module.exports = {
  baseUrl: isProduction ? '//shouyou.178.com/css/up2018/' : '/',
};
