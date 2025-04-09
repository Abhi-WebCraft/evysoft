import React from 'react';

interface SchemasProps {
  person: any;
}

function formatDate(date: any) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  const timezoneOffset = -date.getTimezoneOffset() / 60;
  const offset = timezoneOffset >= 0 ? `+${timezoneOffset}` : timezoneOffset;
  return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}${offset}:00`;
}

const Schemas: React.FC<SchemasProps> = ({ person }) => {
  const Location = person.location;
  const Latitude = person.latitude;
  const Longitude = person.longitude;
  const postdate = new Date();
  const datePublished = formatDate(postdate);
  const dateModified = formatDate(postdate);

  const jsonData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://www.axetree.com.au/#article",
        "isPartOf": {
          "@id": "https://www.axetree.com.au/"
        },
        "author": {
          "name": `AXE Tree Removal Service in ${Location}`
        },
        "headline": `Tree Removal Service in ${Location} - 0477213013`,
        "datePublished": datePublished,
        "dateModified": dateModified,
        "mainEntityOfPage": {
          "@id": "https://www.axetree.com.au/"
        },
        "wordCount": 238,
        "commentCount": 0,
        "publisher": {
          "@id": "https://www.axetree.com.au/#organization"
        },
        "image": {
          "@id": "https://www.axetree.com.au/#primaryimage"
        },
        "thumbnailUrl": "https://www.axetree.com.au/images/tree-removal-melbourne.jpg?fit=1920%2C1080&ssl=1",
        "keywords": [
          `Tree Removal Service in ${Location}`,
          `Tree Trimming in ${Location}`,
          `Tree Pruning in ${Location}`,
          `Grinding Service in ${Location}`,
          `Stump Removal Service in ${Location}`,
          `Trimming Service in ${Location}`,
          `Hedging Service in ${Location}`,
          `Stump Grinding & Removal Services in ${Location}`,
          `Palm Tree Removal in ${Location}`,
          `Best Tree Removal Service in ${Location}`,
          `Best Tree Trimming in ${Location}`,
          `Best Tree Pruning in ${Location}`,
          `Best Grinding Service in ${Location}`,
          `Best Stump Removal Service in ${Location}`,
          `Best Trimming Service in ${Location}`,
          `Best Hedging Service in ${Location}`,
          `Best Stump Grinding & Removal Services in ${Location}`,
          `Best Palm Tree Removal in ${Location}`,
          `Top Tree Removal Service in ${Location}`,
          `Top Tree Trimming in ${Location}`,
          `Top Tree Pruning in ${Location}`,
          `Top Grinding Service in ${Location}`,
          `Top Stump Removal Service in ${Location}`,
          `Top Trimming Service in ${Location}`,
          `Top Hedging Service in ${Location}`,
          `Top Stump Grinding & Removal Services in ${Location}`,
          `Top Palm Tree Removal in ${Location}`
        ],
        "articleSection": [
          `Tree Removal Service in ${Location}`
        ],
        "inLanguage": "en-US"
      },
      {
        "@type": "WebPage",
        "@id": "https://www.axetree.com.au/",
        "url": "https://www.axetree.com.au/",
        "name": `AXE Tree - Tree Removal Service in ${Location} - 0477213013`,
        "isPartOf": {
          "@id": "https://www.axetree.com.au/#website"
        },
        "primaryImageOfPage": {
          "@id": "https://www.axetree.com.au/#primaryimage"
        },
        "image": {
          "@id": "https://www.axetree.com.au/#primaryimage"
        },
        "thumbnailUrl": "https://www.axetree.com.au/images/tree-removal-melbourne.jpg?fit=1920%2C1080&ssl=1",
        "datePublished": datePublished,
        "dateModified": dateModified,
        "inLanguage": "en-US",
        "potentialAction": [
          {
            "@type": "ReadAction",
            "target": [
              "https://www.axetree.com.au/"
            ]
          }
        ]
      },
      {
        "@type": "ImageObject",
        "inLanguage": "en-US",
        "@id": "https://www.axetree.com.au/#primaryimage",
        "url": "https://www.axetree.com.au/images/tree-removal-melbourne.jpg?fit=1920%2C1080&ssl=1",
        "contentUrl": "https://www.axetree.com.au/images/tree-removal-melbourne.jpg?fit=1920%2C1080&ssl=1",
        "width": 1000,
        "height": 1000
      },
      {
        "@type": "Organization",
        "@id": "https://www.axetree.com.au/#organization",
        "name": `AXE Tree - Tree Removal Service in ${Location} - 0477213013`,
        "url": "https://www.axetree.com.au/",
        "logo": {
          "@type": "ImageObject",
          "inLanguage": "en-US",
          "@id": "https://www.axetree.com.au/#/schema/logo/image/",
          "url": "https://www.axetree.com.au/images/tree-removal-melbourne.jpg?fit=1122%2C303&ssl=1",
          "contentUrl": "https://www.axetree.com.au/images/tree-removal-melbourne.jpg?fit=1122%2C303&ssl=1",
          "width": 1000,
          "height": 1000,
          "caption": `AXE Tree - Tree Removal Service in ${Location} - 0477213013`
        },
        "image": {
          "@id": "https://www.axetree.com.au/#/schema/logo/image/"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5",
          "reviewCount": "6666"
        }
      },
      {
        "@type": "Person",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": `${Location}`,
          "addressRegion": "VIC",
          "postalCode": "3000",
          "streetAddress": `${Location}`
        },
        "email": "mailto:mancheema100@gmail.com",
        "image": "https://www.axetree.com.au/images/tree-removal-melbourne.jpg",
        "jobTitle": `Tree Removal Service in ${Location}`,
        "name": "AXE Tree",
        "telephone": "0477 213 013",
        "url": "https://www.axetree.com.au"
      },
      {
        "@type": "Service",
        "serviceType": `AXE Tree - Tree Removal Service in ${Location} - 0477213013`,
        "provider": {
          "@type": "LocalBusiness",
          "name": "dmcti Mohali",
          "location": {
            "@type": "Place",
            "geo": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": `${Latitude}`,
                "longitude": `${Longitude}`
              },
              "geoRadius": "20000"
            }
          }
        },
        "providerMobility": "dynamic",
        "areaServed": {
          "@type": "State",
          "name": "VIC"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Tree Removal services",
          "itemListElement": [
            {
              "@type": "OfferCatalog",
              "name": "House Cleaning",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Tree Removal, Cutting & Lopping"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Tree Trimming & Pruning"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Stump Removal & Grinding"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Hedging & Trimming"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Mulching"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Palm Tree Removal"
                  }
                }
              ]
            },
          ]
        }
      },
      {
        "@type": "Organization",
        "name": `Tree Removal Service in ${Location}`,
        "sameAs": "www.axetree.com.au",
        "@id": "https://www.axetree.com.au",
        "description": `Expert tree removal, stump grinding & trimming services in ${Location}. Contact AXE Tree Services for skilled arborists & comprehensive tree care. Call 477213013`,
        "isAccessibleForFree": false,
        "image": "https://www.axetree.com.au/images/tree-removal-melbourne.jpg",
        "inLanguage": "en",
        "about": {
          "name": "Business"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5",
          "ratingCount": 6666,
          "bestRating": 5,
          "worstRating": 0.5
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonData) }}
    />
  );
}

export default Schemas;
