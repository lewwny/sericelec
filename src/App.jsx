import { Helmet } from 'react-helmet-async';
import { siteConfig, jsonLdSchema } from './data/content';
import { Header } from './components/Header';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Services } from './sections/Services';
import { Reviews } from './sections/Reviews';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';

function App() {
  return (
    <>
      {/* SEO & Meta */}
      <Helmet>
        <html lang="fr" />
        <title>{siteConfig.seo.title}</title>
        <meta name="description" content={siteConfig.seo.description} />
        <meta name="keywords" content={siteConfig.seo.keywords} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={siteConfig.seo.title} />
        <meta property="og:description" content={siteConfig.seo.description} />
        <meta property="og:image" content={siteConfig.seo.image} />
        <meta property="og:url" content={siteConfig.seo.url} />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:site_name" content={siteConfig.name} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={siteConfig.seo.title} />
        <meta name="twitter:description" content={siteConfig.seo.description} />
        <meta name="twitter:image" content={siteConfig.seo.image} />

        {/* Mobile & Canonical */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={siteConfig.seo.url} />

        {/* Theme color */}
        <meta name="theme-color" content="#15803d" />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(jsonLdSchema)}
        </script>
      </Helmet>

      {/* Layout */}
      <div className="min-h-screen flex flex-col bg-sage-50">
        <Header />

        <main id="main-content">
          <Hero />
          <About />
          <Services />
          <Reviews />
          <Contact />
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;
