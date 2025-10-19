"use client";

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleMinimal from "@/components/navbar/NavbarStyleMinimal";
import HeroSplit from "@/components/sections/hero/HeroSplit";
import TextSplitAbout from "@/components/sections/about/TextSplitAbout";
import PricingCardTwo from "@/components/sections/pricing/PricingCardTwo";
import TeamCardTwo from "@/components/sections/team/TeamCardTwo";
import TestimonialCardTwo from "@/components/sections/testimonial/TestimonialCardTwo";
import FaqSplitText from "@/components/sections/faq/FaqSplitText";
import ContactSplit from "@/components/sections/contact/ContactSplit";
import FooterLogoEmphasis from "@/components/sections/footer/FooterLogoEmphasis";

const assetMap = [{ "id": "hero-image", "url": "https://images.pexels.com/photos/34338526/pexels-photo-34338526.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "modern tech workspace - Photo by Andrey Matveev" }, { "id": "about-image", "url": "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Top view of a diverse team collaborating in an office setting with laptops and tablets, promoting cooperation." }, { "id": "contact-image", "url": "https://images.pexels.com/photos/633488/pexels-photo-633488.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Two hands reaching out in a black and white composition, symbolizing connection." }, { "id": "testimonial1", "url": "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Confident African American businesswoman smiling inside a modern office space." }, { "id": "testimonial2", "url": "https://images.pexels.com/photos/5716037/pexels-photo-5716037.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Colleagues celebrate success with a fist bump over financial charts depicting teamwork and unity." }, { "id": "testimonial3", "url": "https://images.pexels.com/photos/7552374/pexels-photo-7552374.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Young woman with curly hair working on her laptop in a cozy home setting, exuding confidence and focus." }, { "id": "testimonial4", "url": "https://images.pexels.com/photos/5716037/pexels-photo-5716037.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Colleagues celebrate success with a fist bump over financial charts depicting teamwork and unity." }];

const findAsset = (id) => {
  const asset = assetMap.find((a) => a.id === id);
  return asset || { url: "/public/images/placeholder.webp", alt: "Decorative image" };
};

export default function Page() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="reveal-blur"
      borderRadius="sharp"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal brandName="Webild" />
      </div>

      <div id="hero" data-section="hero" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <HeroSplit 
            title="Welcome to the Future" 
            description="Innovate with cutting-edge technology solutions."
            imageSrc={findAsset('hero-image').url}
            buttons={[{ text: "Discover More", href: "about" }]} 
          />
        </div>
      </div>

      <div id="about" data-section="about" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <TextSplitAbout
            title="About Us"
            description={["Our mission is to provide innovative tech solutions.", "We prioritize quality and excellence in every project."]}
            buttons={[{ text: "Learn More", href: "about" }]}
          />
        </div>
      </div>

      <div id="pricing" data-section="pricing" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <PricingCardTwo
            title="Choose Your Plan"
            description="Select the perfect plan for your needs."
            plans={[{
              id: "1",
              badge: "Basic",
              price: "$19/mo",
              subtitle: "Essentials for Startup",
              features: ["Up to 5 projects", "Basic support"],
              buttons: [{ text: "Sign Up", href: "signup" }]
            }, {
              id: "2",
              badge: "Pro",
              price: "$49/mo",
              subtitle: "Advanced Features",
              features: ["Unlimited projects", "Priority support"],
              buttons: [{ text: "Sign Up", href: "signup-pro" }]
            }]}
          />
        </div>
      </div>

      <div id="team" data-section="team" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <TeamCardTwo
            title="Meet Our Team"
            description="The passionate individuals driving innovation."
            members={[{
              id: "1",
              name: "John Doe",
              role: "CEO",
              description: "Leading with vision and expertise.",
              imageSrc: findAsset('about-image').url,
            }]}
          />
        </div>
      </div>

      <div id="testimonial" data-section="testimonial" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <TestimonialCardTwo
            title="Customer Reviews"
            description="Trusted by businesses worldwide."
            testimonials={[{
              id: "1",
              name: "Sarah Mitchell",
              role: "Director of Operations",
              testimonial: "Outstanding attention to detail.",
              imageSrc: findAsset('testimonial1').url
            }, {
              id: "2",
              name: "Michael Chen",
              role: "CTO",
              testimonial: "Innovative solutions that work.",
              imageSrc: findAsset('testimonial2').url
            }, {
              id: "3",
              name: "Emily Rodriguez",
              role: "Marketing Director",
              testimonial: "Exceptional service and quality.",
              imageSrc: findAsset('testimonial3').url
            }, {
              id: "4",
              name: "David Kim",
              role: "Product Manager",
              testimonial: "A game changer for our company.",
              imageSrc: findAsset('testimonial4').url
            }]}
          />
        </div>
      </div>

      <div id="faq" data-section="faq" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FaqSplitText
            sideTitle="Frequently Asked Questions"
            faqs={[{
              id: "1",
              title: "What services do you offer?",
              content: "We offer a wide range of tech solutions."
            }, {
              id: "2",
              title: "How can I get in touch?",
              content: "You can contact us through our website."
            }]}
          />
        </div>
      </div>

      <div id="contact" data-section="contact" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ContactSplit
            tag="Contact"
            title="Get In Touch"
            description="Reach out for more information or inquiries."
            imageSrc={findAsset('contact-image').url}
            inputPlaceholder="Your email address"
            buttonText="Subscribe"
            termsText="We respect your privacy. Unsubscribe at any time."
          />
        </div>
      </div>

      <div id="footer" data-section="footer" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FooterLogoEmphasis
            columns={[{
              items: [{ label: "Features", href: "features" }]
            }, {
              items: [{ label: "Pricing", href: "pricing" }]
            }]}
            logoText="Webild"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}
