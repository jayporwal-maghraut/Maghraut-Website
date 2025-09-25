import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "/components/ui/card";
import { Button } from "/components/ui/button";

// Navbar Component
const Navbar = () => (
  <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border/40 sticky top-0 z-50">
    <div className="container mx-auto px-4 py-4 max-w-7xl">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">MT</span>
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground">Maghraut Technologies</h1>
            <p className="text-xs text-muted-foreground">Salesforce Excellence</p>
          </div>
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          <a href="#services" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Services</a>
          <a href="#about" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">About</a>
          <a href="#contact" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Contact</a>
          <Button size="sm" className="bg-primary hover:bg-primary/90">
            Get Started
          </Button>
        </div>
        
        <Button variant="ghost" size="sm" className="md:hidden">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </Button>
      </div>
    </div>
  </nav>
);

const footerInfo = {
  company: "Maghraut Technologies Private Limited",
  address: [
    "Bhukhan, No-6/D-765, Sector 6, Gomti Nagar, Lucknow, Uttar Pradesh,",
    "India, 226010",
  ],
  contact: [
    { type: "email", value: "info@maghraut.com", href: "mailto:info@maghraut.com" },
    { type: "phone", value: "+917991989898", href: "tel:+917991989898" },
  ],
  socialLinks: [
    {
      href: "https://www.linkedin.com",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5"
        >
          <title>LinkedIn</title>
          <path d="M20.452 20H17.6v-5.458c0-1.302-.466-2.188-1.637-2.188-.893 0-1.424.602-1.659 1.183-.085.206-.106.492-.106.777V20H11.77s.038-11.333 0-12.5h2.853v1.77c.378-.586 1.05-1.42 2.554-1.42 1.852 0 3.24 1.207 3.24 3.805V20ZM5.337 7.498C4.23 7.498 3.217 6.995 3.217 5.998 3.217 5.026 4.23 4.5 5.337 4.5c1.114 0 2.13.526 2.13 1.498 0 .997-1.016 1.5-2.13 1.5Zm1.4 12.502H3.935V7.5h2.803v12.5ZM22.225 0H1.771C.792 0 0 .772 0 1.73v20.538c0 .95.792 1.73 1.77 1.73h20.451c.978 0 1.78-.78 1.78-1.73V1.73c0-.958-.802-1.73-1.77-1.73Z" />
        </svg>
      ),
      ariaLabel: "LinkedIn",
    },
    {
      href: "https://www.twitter.com",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5"
        >
          <title>Twitter</title>
          <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.609 1.794-1.574 2.163-2.724-.95.564-2.005.974-3.127 1.195-.896-.958-2.178-1.559-3.594-1.559-2.723 0-4.928 2.204-4.928 4.92 0 .39.045.765.127 1.124-4.094-.205-7.725-2.167-10.158-5.144-.426.722-.666 1.561-.666 2.475 0 1.61.82 3.03 2.064 3.86-.764-.027-1.48-.233-2.106-.58v.06c0 2.385 1.693 4.374 3.946 4.827-.412.111-.845.171-1.292.171-.315 0-.623-.03-.924-.086.630 1.953 2.445 3.377 4.604 3.418-1.687 1.32-3.808 2.105-6.102 2.105-.39 0-.779-.022-1.162-.067 2.179 1.397 4.768 2.213 7.557 2.213 9.054 0 14.002-7.503 14.002-14 0-.213-.004-.426-.015-.636.964-.695 1.8-1.56 2.46-2.548l-.047-.02z" />
        </svg>
      ),
      ariaLabel: "Twitter",
    },
    {
      href: "https://www.facebook.com",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5"
        >
          <title>Facebook</title>
          <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.352C0 23.407.593 24 1.325 24h11.497V14.709h-3.125v-3.61h3.125V8.413c0-3.097 1.892-4.788 4.658-4.788 1.325 0 2.465.099 2.797.142v3.245l-1.92.001c-1.504 0-1.796.715-1.796 1.764v2.312h3.591l-.467 3.61h-3.124V24h6.117C23.407 24 24 23.407 24 22.676V1.325C24 .593 23.407 0 22.675 0" />
        </svg>
      ),
      ariaLabel: "Facebook",
    },
    {
      href: "https://www.instagram.com",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5"
        >
          <title>Instagram</title>
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.343 3.608 1.317.975.976 1.255 2.243 1.317 3.608.058 1.266.07 1.645.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.343 2.633-1.317 3.608-.976.975-2.243 1.255-3.608 1.317-1.266.058-1.645.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.343-3.608-1.317-.975-.976-1.255-2.243-1.317-3.608C2.175 15.747 2.163 15.368 2.163 12s.012-3.584.07-4.85c.062-1.366.343-2.633 1.317-3.608.976-.975 2.243-1.255 3.608-1.317C8.416 2.175 8.796 2.163 12 2.163M12 0C8.741 0 8.332.014 7.052.072 5.771.13 4.633.442 3.68 1.395 2.725 2.35 2.41 3.488 2.35 4.77.014 8.33 0 8.741 0 12c0 3.259.014 3.67.072 4.95.06 1.282.372 2.42 1.327 3.375.955.954 2.093 1.267 3.375 1.327 1.28.059 1.69.073 4.95.073s3.67-.014 4.95-.072c1.282-.06 2.42-.372 3.375-1.327.955-.955 1.268-2.093 1.327-3.375.06-1.28.073-1.69.073-4.95s-.014-3.67-.072-4.95c-.06-1.282-.372-2.42-1.327-3.375S17.282.129 16 0c-1.28-.06-1.69-.073-4.95-.073zm0 5.838A6.162 6.162 0 1 0 18.162 12 6.169 6.169 0 0 0 12 5.838zm0 10.2a4.038 4.038 0 1 1 4.037-4.037A4.038 4.038 0 0 1 12 16.038zm6.406-11.845a1.44 1.44 0 1 1-1.44-1.44 1.44 1.44 0 0 1 1.44 1.44z" />
        </svg>
      ),
      ariaLabel: "Instagram",
    },
    {
      href: "https://www.youtube.com",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5"
        >
          <title>YouTube</title>
          <path d="M23.498 6.186a2.99 2.99 0 0 0-2.117-2.117C19.587 3.5 12 3.5 12 3.5s-7.587 0-9.38.57a2.99 2.99 0 0 0-2.117 2.117C.5 7.982.5 12 .5 12s0 4.018.003 5.814a2.99 2.99 0 0 0 2.117 2.117c1.793.57 9.38.57 9.38.57s7.587 0 9.38-.57a2.99 2.99 0 0 0 2.117-2.117C23.5 16.018 23.5 12 23.5 12s0-4.018-.002-5.814ZM9.75 15.5v-7l6 3.5-6 3.5Z" />
        </svg>
      ),
      ariaLabel: "YouTube",
    },
  ],
};

const MapEmbed = () => (
  <div className="w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-border/50">
    <iframe
      title="Maghraut Technologies Location"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.138870859357!2d81.01462841509697!3d26.824838483146106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd7be65ad3bd%3A0x540e9dec1d457087!2sMaghraut%20Technologies!5e0!3m2!1sen!2sin!4v1687195943371!5m2!1sen!2sin"
      width="100%"
      height="100%"
      className="border-0 hover:scale-[1.01] transition-transform duration-300"
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  </div>
);

const ServicePoint = ({ title, desc }: { title: string; desc: string }) => (
  <Card className="mb-4 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 border-l-4 border-l-primary/20 hover:border-l-primary bg-gradient-to-r from-background to-muted/20">
    <CardHeader className="pb-3">
      <CardTitle className="text-lg font-semibold text-primary hover:text-primary/80 cursor-pointer transition-colors duration-200">
        {title}
      </CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-muted-foreground leading-relaxed">{desc}</p>
    </CardContent>
  </Card>
);

const ServiceSection = ({ 
  title, 
  description, 
  points, 
  iconSrc, 
  iconAlt 
}: {
  title: string;
  description: string;
  points: Array<{ title: string; desc: string }>;
  iconSrc: string;
  iconAlt: string;
}) => (
  <div className="grid lg:grid-cols-3 gap-8 mb-16">
    <div className="lg:col-span-2 space-y-8">
      <div className="space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-primary bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">{description}</p>
      </div>
      
      <div className="space-y-4">
        {points.map((point, index) => (
          <ServicePoint key={index} title={point.title} desc={point.desc} />
        ))}
      </div>
    </div>
    
    <div className="flex justify-center items-start lg:sticky lg:top-8">
      <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-primary/10">
        <img
          src={iconSrc}
          alt={iconAlt}
          className="w-32 h-32 md:w-36 md:h-36 object-contain mx-auto hover:scale-110 transition-transform duration-300"
        />
      </div>
    </div>
  </div>
);

// Footer Component  
const Footer = () => (
  <footer className="bg-gradient-to-br from-muted to-muted/80 border-t border-border/50 mt-20">
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Company Info */}
        <div className="lg:col-span-2">
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">MT</span>
            </div>
            <h3 className="font-bold text-lg text-foreground bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Maghraut Technologies
            </h3>
          </div>
          <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
            Your trusted partner for Salesforce excellence. We help businesses transform their customer relationships through innovative CRM solutions.
          </p>
          {footerInfo.address.map((line, i) => (
            <p key={i} className="text-sm text-muted-foreground leading-relaxed">{line}</p>
          ))}
        </div>
        
        {/* Services */}
        <div>
          <h4 className="font-semibold text-foreground mb-4">Services</h4>
          <ul className="space-y-2">
            <li><a href="#strategy" className="text-sm text-muted-foreground hover:text-primary transition-colors">Strategy & AI</a></li>
            <li><a href="#managed" className="text-sm text-muted-foreground hover:text-primary transition-colors">Managed Services</a></li>
            <li><a href="#integration" className="text-sm text-muted-foreground hover:text-primary transition-colors">Integration & Data</a></li>
            <li><a href="#implementation" className="text-sm text-muted-foreground hover:text-primary transition-colors">Implementation</a></li>
          </ul>
        </div>
        
        {/* Contact */}
        <div>
          <h4 className="font-semibold text-foreground mb-4">Contact</h4>
          <div className="space-y-2">
            <a 
              href={footerInfo.contact[0].href} 
              className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium hover:underline block"
            >
              {footerInfo.contact[0].value}
            </a>
            <a 
              href={footerInfo.contact[1].href} 
              className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium hover:underline block"
            >
              {footerInfo.contact[1].value}
            </a>
          </div>
          
          <div className="flex gap-3 mt-4">
            {footerInfo.socialLinks.map(({ href, icon, ariaLabel }, index) => (
              <a 
                key={index} 
                href={href} 
                aria-label={ariaLabel} 
                target="_blank" 
                rel="noreferrer" 
                className="p-2 rounded-full bg-primary/10 text-muted-foreground hover:text-primary hover:bg-primary/20 transition-all duration-300 hover:scale-110"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>
      
      <div className="border-t border-border/30 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-muted-foreground">
          © 2024 {footerInfo.company}. All rights reserved.
        </p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
          <a href="#terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

const services = [
  {
    id: 'strategy',
    title: "Strategy, Analytics & AI",
    shortTitle: "Strategy & AI",
    description: "We help you turn data into decisions, and make Salesforce smarter using AI.",
    points: [
      {
        title: "Salesforce Einstein Setup:",
        desc: "Einstein is Salesforce's built-in AI. We configure it to help predict sales, suggest actions, and prioritize leads based on data.",
      },
      {
        title: "Salesforce GPT (Copilot):",
        desc: 'A new feature that allows your users to talk to Salesforce using simple text — like "Show me top deals this month" — powered by AI.',
      },
      {
        title: "CRM Analytics (Tableau CRM):",
        desc: "We create dashboards and visual reports that help your leadership see what's working, what's not, and where to focus.",
      },
      {
        title: "CRM Strategy & Roadmap:",
        desc: "We guide you on the best Salesforce products, licensing, and long-term CRM plan that fits your business goals.",
      },
    ],
    iconSrc: "https://placeholder-image-service.onrender.com/image/150x150?prompt=Modern AI brain with circuit patterns and data analytics symbols in blue and purple gradients&id=58985803-f578-44cc-9151-e22175ebccf7&customer_id=cus_T74b7gY11oVsO8",
    iconAlt: "AI Integration with brain and circuit patterns representing artificial intelligence and data analytics"
  },
  {
    id: 'managed',
    title: "Managed Services & Project Support",
    shortTitle: "Managed Services",
    description: "We support your team on an ongoing basis, or we can provide certified experts for specific projects.",
    points: [
      {
        title: "Admin & Developer Support:",
        desc: "Our team helps you handle day-to-day tasks, user issues, and new feature requests.",
      },
      {
        title: "Bug Fixes & Enhancements:",
        desc: "We troubleshoot issues and continuously improve your system as your business evolves.",
      },
      {
        title: "Salesforce Health Checks:",
        desc: "We evaluate your setup for performance, security, and scalability — and suggest improvements.",
      },
      {
        title: "Staff Augmentation:",
        desc: "Need a Salesforce Admin or Developer on your team? We provide skilled professionals to support your project or team on a flexible basis.",
      },
    ],
    iconSrc: "https://placeholder-image-service.onrender.com/image/150x150?prompt=Professional handshake with modern business partnership symbols and support icons in corporate blue tones&id=58985803-f578-44cc-9151-e22175ebccf7&customer_id=cus_T74b7gY11oVsO8",
    iconAlt: "Professional handshake representing business partnership and ongoing support services"
  },
  {
    id: 'integration',
    title: "Integration & Data Services",
    shortTitle: "Integration & Data",
    description: "We connect Salesforce with the other tools you use — and help you move your data safely.",
    points: [
      {
        title: "API Integrations:",
        desc: "Whether it's connecting to your ERP system, payment gateway, WhatsApp, or email — we enable real-time, secure communication between systems.",
      },
      {
        title: "MuleSoft & AppExchange Connectors:",
        desc: "We use trusted tools to simplify complex integrations without custom coding.",
      },
      {
        title: "Data Migration:",
        desc: "We help you move your customer data from spreadsheets, CRMs, or legacy systems to Salesforce without losing anything.",
      },
      {
        title: "Data Cleaning & Backup:",
        desc: "We remove duplicate or incorrect data, organize it, and ensure it's regularly backed up — so your team can rely on it.",
      },
    ],
    iconSrc: "https://placeholder-image-service.onrender.com/image/150x150?prompt=Cloud integration with connected systems, data flow arrows, and modern technology symbols in blue and green&id=58985803-f578-44cc-9151-e22175ebccf7&customer_id=cus_T74b7gY11oVsO8",
    iconAlt: "Cloud integration diagram showing connected systems and data flow between different platforms"
  },
  {
    id: 'implementation',
    title: "Implementation & Customization",
    shortTitle: "Implementation",
    description: "We help set up Salesforce the right way — tailored to your business processes and customers.",
    points: [
      {
        title: "Salesforce Cloud Setup:",
        desc: "We configure Salesforce products like Sales Cloud, Service Cloud, or Marketing Cloud based on your business model — ensuring they are ready for your team to use from day one.",
      },
      {
        title: "Custom Objects & Flows:",
        desc: "We create custom forms, fields, and workflows that fit your company's unique processes — like capturing leads, managing service requests, or handling approvals.",
      },
      {
        title: "Lightning Web Components (LWC) & Apex Development:",
        desc: "Our developers build advanced features, automations, and interfaces to extend Salesforce capabilities beyond the standard.",
      },
      {
        title: "Mobile and UI Customization:",
        desc: "We make sure your Salesforce setup looks and works great on both desktop and mobile — with an easy-to-use interface for your team.",
      },
    ],
    iconSrc: "https://placeholder-image-service.onrender.com/image/150x150?prompt=Mechanical gears and workflow symbols representing system customization and process automation in metallic blue&id=58985803-f578-44cc-9151-e22175ebccf7&customer_id=cus_T74b7gY11oVsO8",
    iconAlt: "Mechanical gears and workflow symbols representing system customization and process automation"
  }
];

export default function SalesforceServices() {
  const [activeService, setActiveService] = useState('strategy');

  const currentService = services.find(service => service.id === activeService) || services[0];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <Navbar />
      <div className="container mx-auto px-4 py-8 md:py-12 max-w-7xl">
        {/* Navigation */}
        <div className="mb-12">
          <div className="bg-muted/50 p-2 rounded-xl shadow-inner border border-border/30">
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              {services.map((service) => (
                <Button
                  key={service.id}
                  variant={activeService === service.id ? "default" : "ghost"}
                  onClick={() => setActiveService(service.id)}
                  className={`text-sm font-medium px-4 py-2 rounded-lg transition-all duration-300 ${
                    activeService === service.id 
                      ? "shadow-md bg-primary text-primary-foreground hover:bg-primary/90" 
                      : "hover:bg-primary/10 hover:text-primary hover:shadow-sm"
                  }`}
                >
                  {service.shortTitle}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <ServiceSection
          title={`Salesforce ${currentService.title}`}
          description={currentService.description}
          points={currentService.points}
          iconSrc={currentService.iconSrc}
          iconAlt={currentService.iconAlt}
        />

        {/* Map Section */}
        <div className="mt-20">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-primary mb-4">Visit Our Office</h2>
            <p className="text-muted-foreground">Located in the heart of Lucknow, we're here to serve you</p>
          </div>
          <MapEmbed />
        </div>
      </div>
      <Footer />
    </div>
  );
}
