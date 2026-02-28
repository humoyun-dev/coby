import { LandingPage } from "@/app/components/landing-page";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "COBY",
      url: "https://coby.uz",
      logo: "https://coby.uz/images/coby-machine.svg",
      description:
        "Sustainable recycling infrastructure platform in Uzbekistan connecting AI-enabled collection devices with retail-integrated EcoCoin incentives.",
      sameAs: ["https://www.instagram.com/coby.uz"]
    },
    {
      "@type": "Service",
      serviceType: "Urban Recycling Infrastructure",
      provider: {
        "@type": "Organization",
        name: "COBY"
      },
      areaServed: {
        "@type": "Country",
        name: "Uzbekistan"
      },
      description:
        "Plastic and aluminum deposits are validated by AI and sensor systems, converted into EcoCoin, and redeemed through Korzinka loyalty for 365 product discounts."
    },
    {
      "@type": "WebSite",
      name: "COBY",
      url: "https://coby.uz"
    }
  ]
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <LandingPage />
    </>
  );
}
