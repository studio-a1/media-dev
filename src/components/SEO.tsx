import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  url: string;
  image: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, url, image }) => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={url} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={image} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />

        {/* JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Studio A1 Media Dev",
            "url": url,
            "logo": image,
            "sameAs": [
              "https://facebook.com/www.studioa1.tecnologia",
              "https://instagram.com/studioa1.dev",
              "https://pinterest.com/https://pin.it/6tcfbQwJv"
            ]
          })}
        </script>
      </Helmet>
    </HelmetProvider>
  );
};

export default SEO;

