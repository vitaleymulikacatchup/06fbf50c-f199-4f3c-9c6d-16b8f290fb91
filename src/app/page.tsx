"use client";
import { SiteTheme, SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutSplitBottom from '@/components/navigation/NavbarLayoutSplitBottom/NavbarLayoutSplitBottom';
import BillboardHero from '@/components/sections/layouts/hero/BillboardHero';
import SocialsAbout from '@/components/sections/layouts/about/SocialsAbout';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import TextGridTokenomics from '@/components/sections/layouts/tokenomics/TextGridTokenomics';
import BentoFAQ from '@/components/sections/layouts/faq/BentoFAQ';
import FooterLogo from '@/components/footer/FooterLogo';

const theme: SiteTheme = {
  styleVariant: "futuristicAndOutOfBox",
  colorTemplate: 2,
  textAnimation: "slide",
};

export default function Home() {
  return (
    <SiteThemeProvider theme={theme}>
      <div id="nav" data-section="nav">
        <NavbarLayoutSplitBottom 
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32Sjpo9ZLWlVS5JxRw9EagJf0Fo/design-a-simple-high-contrast-logo-for-x-1759396325412-c34a8567.jpg"
          navItems={[
            { name: "Hero", id: "hero" },
            { name: "About", id: "about" },
            { name: "How to Buy", id: "how-to-buy" },
            { name: "Tokenomics", id: "tokenomics" },
            { name: "FAQ", id: "faq" },
            { name: "Footer", id: "footer" }
          ]}
          buttonText="Get started"
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <BillboardHero
          title="Unlock Your Team's Potential"
          subtitle="Achieve more with AI-driven workflows that empower your team."
        />
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <SocialsAbout
          title="About Xeven"
          descriptions={[
            "Xeven is a solution designed to streamline and enhance your team's productivity.",
            "Our cutting-edge technology helps you leverage AI for smarter decision-making and effortless collaboration.",
            "Find your potential with tools that adapt to your workflow."
          ]}
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy3D
          steps={[
            { position: "left", image: "https://example.com/image1.jpg", title: "Step 1", description: "Sign up for an account.", isCenter: false },
            { position: "center", image: "https://example.com/image2.jpg", title: "Step 2", description: "Choose your plan.", isCenter: true },
            { position: "right", image: "https://example.com/image3.jpg", title: "Step 3", description: "Start maximizing productivity!", isCenter: false },
          ]}
        />
      </div>
      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <TextGridTokenomics
          title="Tokenomics"
          description="Understanding the token supply and economics behind Xeven."
          tokenData={[
            { value: "1M", description: "Total Supply" },
            { value: "100k", description: "Tokens Sold" },
            { value: "900k", description: "Remaining Tokens" },
          ]}
        />
      </div>
      <div id="faq" data-section="faq" className="scroll-mt-24">
        <BentoFAQ
          items={[
            { title: "What is Xeven?", content: "Xeven is an AI-driven productivity platform." },
            { title: "How do I sign up?", content: "Visit our website and click on the 'Get Started' button." },
            { title: "What features does Xeven offer?", content: "Xeven offers AI workflows, seamless collaboration tools, and comprehensive analytics." },
            { title: "How can I contact support?", content: "You can reach our support team via the contact form on our website." },
          ]}
        />
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterLogo
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32Sjpo9ZLWlVS5JxRw9EagJf0Fo/design-a-simple-high-contrast-logo-for-x-1759396325412-c34a8567.jpg"
          logoAlt="Xeven Logo"
          logoText="Xeven"
          className="footer-class"
        />
      </div>
    </SiteThemeProvider>
  );
}
