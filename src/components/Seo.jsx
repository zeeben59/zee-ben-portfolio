import { Helmet } from 'react-helmet-async'
import { SEO, SITE_URL, SOCIAL_LINKS } from '../seo/siteConfig'

export default function Seo({
  title = SEO.title,
  description = SEO.description,
  path = '/',
  image = SEO.image,
  type = 'website',
}) {
  const canonical = `${SITE_URL}${path}`
  const imageUrl = image.startsWith('http') ? image : `${SITE_URL}${image}`

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        name: 'Zee Ben',
        alternateName: 'Monwuba Benedict Okechukwu',
        jobTitle: 'Full Stack Web Developer & AI Enthusiast',
        url: SITE_URL,
        image: imageUrl,
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'NG',
          addressLocality: 'Nigeria',
        },
        sameAs: SOCIAL_LINKS,
      },
      {
        '@type': 'WebSite',
        name: SEO.siteName,
        url: SITE_URL,
        description: SEO.description,
        inLanguage: 'en-NG',
        publisher: {
          '@type': 'Person',
          name: 'Zee Ben',
        },
      },
      {
        '@type': 'ProfilePage',
        name: SEO.title,
        url: canonical,
        mainEntity: {
          '@type': 'Person',
          name: 'Zee Ben',
        },
      },
    ],
  }

  return (
    <Helmet prioritizeSeoTags>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={SEO.keywords} />
      <meta name="author" content={SEO.author} />
      <meta name="robots" content="index, follow, max-image-preview:large" />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SEO.siteName} />
      <meta property="og:locale" content={SEO.locale} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={imageUrl} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:creator" content={SEO.twitterHandle} />

      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  )
}
