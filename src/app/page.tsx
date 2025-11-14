"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import SplitAbout from '@/components/sections/about/SplitAbout';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import FaqBase from '@/components/sections/faq/FaqBase';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Award, Car, DollarSign, Facebook, HelpCircle, Instagram, MessageSquare, Shield, Star, Twitter, Users } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
      contentWidth="large"
      sizing="small"
      background="floatingGradient"
      cardStyle="layered-gradient"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="solid"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="AutoElite"
          button={{
            text: "Visit Showroom",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Premium Vehicles, Exceptional Service"
          description="Discover our collection of luxury and reliable vehicles with personalized service that puts you first"
          tag="Welcome to AutoElite"
          tagIcon={Car}
          buttons={[
            {
              text: "Browse Inventory",
              href: "product"
            },
            {
              text: "Schedule Visit",
              href: "contact"
            }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1763150334680-4zh2tibn.jpg"
          imageAlt="Luxury car showroom display"
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="Why Choose AutoElite"
          description="We're committed to providing exceptional service and premium vehicles to make your car buying experience memorable"
          tag="Our Promise"
          tagIcon={Award}
          textboxLayout="default"
          bulletPoints={[
            {
              title: "Premium Selection",
              description: "Carefully curated collection of luxury and reliable vehicles from top manufacturers",
              icon: Star
            },
            {
              title: "Expert Service",
              description: "Professional team with years of experience to guide you through every step",
              icon: Users
            },
            {
              title: "Transparent Pricing",
              description: "No hidden fees or surprises - honest pricing you can trust",
              icon: DollarSign
            },
            {
              title: "Warranty Protection",
              description: "Comprehensive warranty coverage for peace of mind with your purchase",
              icon: Shield
            }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1763150337492-gicqiw7k.jpg"
          imageAlt="Modern car showroom interior"
          imagePosition="right"
          buttons={[
            {
              text: "Learn More",
              href: "about"
            }
          ]}
        />
      </div>

      <div id="product" data-section="product">
        <ProductCardOne
          title="Featured Vehicles"
          description="Explore our handpicked selection of premium vehicles"
          tag="Inventory"
          tagIcon={Car}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          products={[
            {
              id: "1",
              name: "Luxury Sedan Elite",
              price: "$45,900",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1763150338184-nfw5b3uj.jpg",
              imageAlt: "Luxury sedan premium car"
            },
            {
              id: "2",
              name: "Sport Convertible",
              price: "$68,500",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1763150339066-ixs172gd.jpg",
              imageAlt: "Sports car red convertible"
            },
            {
              id: "3",
              name: "Premium SUV",
              price: "$52,900",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1763150339825-742au7ud.jpg",
              imageAlt: "SUV luxury vehicle black"
            }
          ]}
          buttons={[
            {
              text: "View All Vehicles",
              href: "inventory"
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardOne
          title="What Our Customers Say"
          description="Real experiences from satisfied customers who chose AutoElite"
          tag="Reviews"
          tagIcon={MessageSquare}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Business Executive",
              company: "TechCorp Solutions",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1763150340354-iwvy18jc.jpg",
              imageAlt: "Professional business person portrait"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Marketing Director",
              company: "Creative Agency",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1763150341241-7z1hj3q4.jpg",
              imageAlt: "Happy customer business woman"
            },
            {
              id: "3",
              name: "David Rodriguez",
              role: "Senior Manager",
              company: "Finance Group",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1763150342024-l8qcvxyf.jpg",
              imageAlt: "Satisfied customer man portrait"
            },
            {
              id: "4",
              name: "Emily Carter",
              role: "Project Lead",
              company: "Innovation Labs",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1763150342548-hf8dnnuo.jpg",
              imageAlt: "Professional executive portrait"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Find answers to common questions about our vehicles and services"
          tag="Help"
          tagIcon={HelpCircle}
          textboxLayout="default"
          faqs={[
            {
              id: "1",
              title: "Do you offer financing options?",
              content: "Yes, we work with multiple lenders to provide competitive financing options. We can help you find the best rates and terms that fit your budget and credit profile."
            },
            {
              id: "2",
              title: "What warranty comes with the vehicles?",
              content: "All our vehicles come with comprehensive warranty coverage. New vehicles include manufacturer warranty, while certified pre-owned vehicles come with extended warranty options for added peace of mind."
            },
            {
              id: "3",
              title: "Can I schedule a test drive?",
              content: "Absolutely! We encourage test drives to ensure you're completely satisfied with your choice. Contact us or visit our showroom to schedule a test drive at your convenience."
            },
            {
              id: "4",
              title: "Do you accept trade-ins?",
              content: "Yes, we accept trade-ins and will provide you with a fair market evaluation of your current vehicle. Our team will assess your trade-in and apply its value toward your new purchase."
            },
            {
              id: "5",
              title: "What payment methods do you accept?",
              content: "We accept various payment methods including cash, certified checks, financing through our lending partners, and major credit cards for down payments and fees."
            }
          ]}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="AutoElite"
          columns={[
            {
              title: "Showroom",
              items: [
                {
                  label: "View Inventory",
                  href: "inventory"
                },
                {
                  label: "Schedule Visit",
                  href: "contact"
                },
                {
                  label: "Test Drive",
                  href: "test-drive"
                }
              ]
            },
            {
              title: "Services",
              items: [
                {
                  label: "Financing",
                  href: "financing"
                },
                {
                  label: "Trade-ins",
                  href: "trade-ins"
                },
                {
                  label: "Warranty",
                  href: "warranty"
                }
              ]
            },
            {
              title: "Support",
              items: [
                {
                  label: "Contact Us",
                  href: "contact"
                },
                {
                  label: "FAQ",
                  href: "faq"
                },
                {
                  label: "Service Center",
                  href: "service"
                }
              ]
            }
          ]}
          socialLinks={[
            {
              icon: Facebook,
              href: "https://facebook.com",
              ariaLabel: "Facebook"
            },
            {
              icon: Instagram,
              href: "https://instagram.com",
              ariaLabel: "Instagram"
            },
            {
              icon: Twitter,
              href: "https://twitter.com",
              ariaLabel: "Twitter"
            }
          ]}
          copyrightText="© 2025 AutoElite Car Showroom. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}