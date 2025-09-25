import React, { useState } from "react";
// Future: Import your page components here
// import ContactPage from "./pages/ContactPage";
// import AboutPage from "./pages/AboutPage";
// import ProductsPage from "./pages/ProductsPage";
// import ServicesPage from "./pages/ServicesPage";
// import BlogsPage from "./pages/BlogsPage";
import { Button } from "./components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./components/ui/card";

const HomePage = () => {
  const [activeSection, setActiveSection] = useState("home");

  // Navigation without Careers (removed)
 

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <img
              src="https://placeholder-image-service.onrender.com/image/40x40?prompt=Maghraut Technologies company logo with modern tech design&id=03a75539-4931-4053-af7d-ce79657169a6"
              alt="Maghraut Technologies logo with modern tech design"
              className="h-10 w-10"
            />
            <span className="text-xl font-bold">Maghraut Technologies</span>
          </div>
          <nav className="hidden md:flex gap-6">
            {navigationItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={(e) => {
                  e.preventDefault();
                  setActiveSection(item.id);
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-4">
            <Button>Get Started</Button>
            {/* Removed Chat with AI button */}
          </div>
          <Button variant="ghost" size="icon" className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Insighting Every Process with{" "}
            <span className="text-primary">Cloud, Data and AI</span>
          </h1>
          <p className="mt-6 max-w-[700px] text-lg text-muted-foreground sm:text-xl">
            At Maghraut Technologies, we offer end-to-end Salesforce services
            tailored to your business needs. From implementation to AI automation,
            our team helps you transform your processes with the power of Cloud,
            Data, and AI.
          </p>
          <div className="mt-8 flex gap-4">
            <Button size="lg">Get Started</Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Services
            </h2>
            <p className="mt-4 max-w-[700px] mx-auto text-muted-foreground">
              Empowering businesses to harness the full potential of Salesforce through
              intelligent implementation, seamless integration, and AI-driven automation.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Salesforce Implementation</CardTitle>
                <CardDescription>
                  Custom Salesforce solutions tailored to your business needs
                </CardDescription>
              </CardHeader>
              <CardContent>
                <img
                  src="https://placeholder-image-service.onrender.com/image/400x300?prompt=Salesforce implementation with dashboards and analytics&id=03a75539-4931-4053-af7d-ce79657169a6"
                  alt="Salesforce implementation with dashboards and analytics"
                  className="w-full h-48 object-cover rounded-md"
                />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>AI Automation</CardTitle>
                <CardDescription>
                  Leverage AI to automate processes and gain insights
                </CardDescription>
              </CardHeader>
              <CardContent>
                <img
                  src="https://placeholder-image-service.onrender.com/image/400x300?prompt=AI automation with neural networks and data flow&id=03a75539-4931-4053-af7d-ce79657169a6"
                  alt="AI automation with neural networks and data flow"
                  className="w-full h-48 object-cover rounded-md"
                />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Data Cloud Integration</CardTitle>
                <CardDescription>
                  Unified data solutions across your organization
                </CardDescription>
              </CardHeader>
              <CardContent>
                <img
                  src="https://placeholder-image-service.onrender.com/image/400x300?prompt=Cloud data integration with connected networks&id=03a75539-4931-4053-af7d-ce79657169a6"
                  alt="Cloud data integration with connected networks"
                  className="w-full h-48 object-cover rounded-md"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Products
            </h2>
            <p className="mt-4 max-w-[700px] mx-auto text-muted-foreground">
              Unlock the ideal starting point for your business journey—Salesforce
              offers a flexible suite of products that adapt to your needs and scale
              effortlessly.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="text-center">
              <CardHeader>
                <CardTitle>Marketing Cloud</CardTitle>
              </CardHeader>
              <CardContent>
                <img
                  src="https://placeholder-image-service.onrender.com/image/300x200?prompt=Marketing cloud with digital campaign visuals&id=03a75539-4931-4053-af7d-ce79657169a6"
                  alt="Marketing cloud with digital campaign visuals"
                  className="w-full h-32 object-cover rounded-md"
                />
                <p className="mt-4 text-sm text-muted-foreground">
                  Attract more qualified leads and improve campaign effectiveness
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CardTitle>Sales Cloud</CardTitle>
              </CardHeader>
              <CardContent>
                <img
                  src="https://placeholder-image-service.onrender.com/image/300x200?prompt=Sales cloud with CRM dashboard&id=03a75539-4931-4053-af7d-ce79657169a6"
                  alt="Sales cloud with CRM dashboard"
                  className="w-full h-32 object-cover rounded-md"
                />
                <p className="mt-4 text-sm text-muted-foreground">
                  Accelerate revenue growth with scalable sales solutions
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CardTitle>Service Cloud</CardTitle>
              </CardHeader>
              <CardContent>
                <img
                  src="https://placeholder-image-service.onrender.com/image/300x200?prompt=Service cloud with customer support interface&id=03a75539-4931-4053-af7d-ce79657169a6"
                  alt="Service cloud with customer support interface"
                  className="w-full h-32 object-cover rounded-md"
                />
                <p className="mt-4 text-sm text-muted-foreground">
                  Enhance customer satisfaction with unified support experiences
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CardTitle>Slack Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <img
                  src="https://placeholder-image-service.onrender.com/image/300x200?prompt=Slack integration with collaboration tools&id=03a75539-4931-4053-af7d-ce79657169a6"
                  alt="Slack integration with collaboration tools"
                  className="w-full h-32 object-cover rounded-md"
                />
                <p className="mt-4 text-sm text-muted-foreground">
                  Elevate productivity with integrated collaboration tools
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pledge 1% Section */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <img
                src="https://placeholder-image-service.onrender.com/image/500x400?prompt=Pledge 1 percent charity and community giving&id=03a75539-4931-4053-af7d-ce79657169a6"
                alt="Pledge 1 percent charity and community giving"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Upholds Commitment to Giving Back with Pledge 1% Partnership
              </h2>
              <p className="mt-4 text-lg">A Small Pledge. A Bold Promise.</p>
              <p className="mt-4">
                At Maghraut Technologies, we've always believed that true innovation
                isn't just measured by the solutions we build—but by the lives we touch.
              </p>
              <Button variant="secondary" className="mt-6">
                Learn About Our Commitment
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Founder's Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2 order-2 md:order-1">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                From the Founder's Desk
              </h2>
              <blockquote className="mt-6 border-l-4 border-primary pl-6 italic">
                "At Maghraut Technologies, we believe in pushing boundaries and
                shaping a better digital future. Our journey began with a vision
                to empower organizations with cutting-edge solutions and personalized
                strategies."
              </blockquote>
              <p className="mt-4 font-semibold">— Vijay Kumar Soni, CEO</p>
              <Button className="mt-6">Read Full Message</Button>
            </div>
            <div className="md:w-1/2 order-1 md:order-2">
              <img
                src="https://placeholder-image-service.onrender.com/image/400x500?prompt=Professional portrait of CEO Vijay Kumar Soni&id=03a75539-4931-4053-af7d-ce79657169a6"
                alt="Professional portrait of CEO Vijay Kumar Soni"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Add other page components here */}
      {activeSection === "contact" && <div>Contact Page Content (by Birjesh)</div>}
      {activeSection === "about" && <div>About Page Content (by Nandni)</div>}
      {activeSection === "products" && <div>Products Page Content (by Medhanshi)</div>}
      {activeSection === "services" && <div>Services Page Content (by Harsh)</div>}
      {activeSection === "blogs" && <div>Blogs Page Content (by Priyanshu)</div>}

      {/* Footer */}
      <footer className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Maghraut Technologies</h3>
              <p className="text-muted-foreground">
                Insighting Every Process with Cloud, Data and AI
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <p className="text-muted-foreground">
                📍 Registered Office: Bhukhan, No-6/D-765, Sector 6, Gomti Nagar,
                Lucknow, Uttar Pradesh, India, 226010
              </p>
              <p className="text-muted-foreground mt-2">
                📩 <a href="mailto:info@maghraut.com">info@maghraut.com</a>
              </p>
              <p className="text-muted-foreground">📲 +917991989898</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {navigationItems.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="text-muted-foreground hover:text-primary"
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveSection(item.id);
                      }}
                    >
                      {item.label} (by {item.teamMember})
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
              <div className="flex gap-4">
                <a href="#" className="text-muted-foreground hover:text-primary">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;