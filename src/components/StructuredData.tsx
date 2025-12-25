export function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "BlackTagDevs",
    description:
      "Technology consulting and product development company specializing in full-stack development, AI tools, data engineering, and digital transformation",
    url: "https://blacktagdevs.com",
    email: "blacktagdevs@gmail.com",
    areaServed: "United States",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Atlanta",
      addressRegion: "GA",
      addressCountry: "US",
    },
    founder: [
      {
        "@type": "Person",
        name: "Bosun Adepoju",
        jobTitle: "CTO, Lead Software Engineer",
      },
      {
        "@type": "Person",
        name: "Jamar Mitchell",
        jobTitle: "Chief Design & Interface Officer",
      },
      {
        "@type": "Person",
        name: "Daniel Uyo",
        jobTitle: "Chief Product & Data Officer",
      },
      {
        "@type": "Person",
        name: "Cameron Johnson",
        jobTitle: "Chief Security & Compliance Officer",
      },
    ],
    knowsAbout: [
      "Full Stack Development",
      "AI Tools & Agents",
      "Cybersecurity",
      "Product Strategy",
      "Data Engineering",
      "Digital Transformation",
    ],
    sameAs: [
      "https://linkedin.com/company/blacktagdevs",
      "https://twitter.com/blacktagdevs",
      "https://facebook.com/blacktagdevs",
      "https://instagram.com/blacktagdevs",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}