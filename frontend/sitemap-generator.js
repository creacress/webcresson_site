const fs = require('fs');
const path = require('path');
const { SitemapStream, streamToPromise } = require('sitemap');
const routes = require('./sitemap-routes');

const baseUrl = 'https://www.webcresson.com';

const generateSitemap = async () => {
  const smStream = new SitemapStream({ hostname: baseUrl });
  const writeStream = fs.createWriteStream(path.join(__dirname, 'public', 'sitemap.xml'));

  smStream.pipe(writeStream);

  routes.forEach(route => {
    smStream.write({ url: route.path, changefreq: route.changefreq, priority: route.priority });
  });

  smStream.end();

  await streamToPromise(smStream).then(() => {
    console.log('Sitemap généré avec succès');
  });
};

generateSitemap().catch(error => {
  console.error('Erreur lors de la génération du sitemap:', error);
});
