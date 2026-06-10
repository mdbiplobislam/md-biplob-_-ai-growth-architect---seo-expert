import { useEffect } from "react";

export default function TechnicalSEO() {
  useEffect(() => {
    // 1. Compile Person Schema
    const personSchema = {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": "https://mdbiplob.com/#person",
      "name": "Md Biplob",
      "jobTitle": "AI-Driven Growth Architect & SEO Expert",
      "url": "https://mdbiplob.com",
      "image": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=400&h=400",
      "sameAs": [
        "https://linkedin.com/in/mdbiplob",
        "https://github.com/mdbiplob",
        "https://facebook.com/biplob.seo"
      ],
      "knowsAbout": [
        "Search Engine Optimization",
        "Digital Marketing Training",
        "AI Content Workflows",
        "Performance Growth Campaigns",
        "Programmatic SEO Scale"
      ],
      "knowsLanguage": ["English", "Bengali"],
      "nationality": {
        "@type": "Country",
        "name": "Bangladesh"
      },
      "alumniOf": {
        "@type": "EducationalOrganization",
        "name": "National University"
      }
    };

    // 2. Compile Organization Schema
    const orgSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://mdbiplob.com/#organization",
      "name": "Md Biplob Growth Consultancy",
      "alternateName": "Biplob SEO & Training",
      "url": "https://mdbiplob.com",
      "logo": "https://mdbiplob.com/logo.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+880-1700-000000",
        "contactType": "sales",
        "areaServed": "Worldwide",
        "availableLanguage": ["English", "Bengali"]
      }
    };

    // 3. Compile FAQ Schema
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who is Md Biplob?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Md Biplob is an AI-Driven Growth Architect, Technical SEO Expert, and digital mentor based in Bangladesh. He supports global brands, enterprise startups, and student teams to master programmatic SEO pipelines."
          }
        },
        {
          "@type": "Question",
          "name": "Does he offer customizable corporate training modules?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. He builds bespoke training pipelines teaching regional corporate departments how to safely blend search architecture and generative AI modeling routines to speed workflows."
          }
        },
        {
          "@type": "Question",
          "name": "How does 1-on-1 Mentorship work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Mentorship works iteratively. Students optimize their bidding profile structures, master high-level crawls, and learn how to construct automated thematic keyword clustering frameworks."
          }
        }
      ]
    };

    // 4. Compile Breadcrumb Schema
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://mdbiplob.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Services Hub",
          "item": "https://mdbiplob.com/#services"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Training Programs",
          "item": "https://mdbiplob.com/#training"
        }
      ]
    };

    // Inject Scripts function
    const injectSchema = (id: string, schemaObj: object) => {
      let script = document.getElementById(id);
      if (script) {
        script.textContent = JSON.stringify(schemaObj);
      } else {
        script = document.createElement("script");
        script.id = id;
        script.setAttribute("type", "application/ld+json");
        script.textContent = JSON.stringify(schemaObj);
        document.head.appendChild(script);
      }
    };

    injectSchema("seo-person-schema", personSchema);
    injectSchema("seo-org-schema", orgSchema);
    injectSchema("seo-faq-schema", faqSchema);
    injectSchema("seo-breadcrumb-schema", breadcrumbSchema);

    // Clean up on unmount
    return () => {
      const ids = ["seo-person-schema", "seo-org-schema", "seo-faq-schema", "seo-breadcrumb-schema"];
      ids.forEach((id) => {
        const script = document.getElementById(id);
        if (script) {
          script.remove();
        }
      });
    };
  }, []);

  return null; // Side-effect only rendering
}
