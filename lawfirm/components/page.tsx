'use client'

import { Button } from "../components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Navbar } from "../components/Navbar"
import { useEffect, useState } from "react"
import { 
  LucideArrowRight, 
  LucideScale, 
  LucideShield, 
  LucideUsers,
  LucideMessageSquare,
  LucideChevronDown,
  LucidePhone
} from "lucide-react"

export function Page() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal')
      reveals.forEach(element => {
        const windowHeight = window.innerHeight
        const elementTop = element.getBoundingClientRect().top
        const elementVisible = 150

        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('active')
        }
      })

      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const parallaxOffset = -scrollY * 0.5

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Floating Contact Button */}
      <Link href="/contact" className="fixed bottom-8 right-8 z-50 floating-contact">
        <Button className="rounded-full bg-[#BF953F] text-white hover:bg-[#AA771C] shadow-lg flex items-center gap-2">
          <LucidePhone className="h-4 w-4" />
          <span className="font-medium">Contact Us</span>
        </Button>
      </Link>

      <main className="relative">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Hero Background */}
          <div 
            className="absolute inset-0 z-0"
            style={{ transform: `translateY(${parallaxOffset}px)` }}
          >
            <Image
              src="/images/lawbooks.png"
              alt="Legal background"
              fill
              sizes="100vw"
              priority
              className="object-cover object-center brightness-75"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
          </div>

          {/* Hero Content */}
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight fade-in gold-gradient mb-6"
                  style={{ fontFamily: 'Playfair Display' }}>
                Excellence in Legal Advocacy
              </h1>
              <p className="mt-8 text-xl text-gray-200 fade-in max-w-2xl mx-auto" 
                 style={{animationDelay: '0.2s', fontFamily: 'Cormorant Garamond'}}>
                Where tradition meets innovation. We provide sophisticated legal solutions 
                tailored to modern challenges in South Africa.
              </p>
              <div className="mt-12 fade-in flex flex-col sm:flex-row items-center justify-center gap-6" 
                   style={{animationDelay: '0.4s'}}>
                <Button 
                  className="bg-[#BF953F] hover:bg-[#AA771C] text-white min-w-[200px]"
                  size="lg"
                  asChild
                >
                  <Link href="/contact" className="group">
                    Free Consultation
                    <LucideArrowRight className="ml-2 inline-block transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  asChild 
                  className="border-[#BF953F] text-[#BF953F] hover:bg-[#BF953F] hover:text-white min-w-[200px]"
                >
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 scroll-indicator">
              <LucideChevronDown className="w-6 h-6 text-[#BF953F]" />
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/1.png"
              alt="Legal office"
              fill
              sizes="100vw"
              className="object-cover object-center opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/95 to-black/90" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-4xl font-bold text-center mb-4 reveal gold-gradient"
                style={{ fontFamily: 'Playfair Display' }}>
              Our Expertise
            </h2>
            <p className="text-center text-gray-400 mb-16 reveal max-w-2xl mx-auto"
               style={{ fontFamily: 'Cormorant Garamond' }}>
              Comprehensive legal services delivered with precision and dedication
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: LucideScale,
                  title: "Corporate Law",
                  description: "Strategic legal guidance for businesses, from startups to corporations."
                },
                {
                  icon: LucideUsers,
                  title: "Family Law",
                  description: "Compassionate support for family matters with a focus on resolution."
                },
                {
                  icon: LucideShield,
                  title: "Criminal Defense",
                  description: "Robust defense strategies backed by years of courtroom experience."
                }
              ].map((service, index) => (
                <div
                  key={index}
                  className="service-card bg-black/40 backdrop-blur-sm p-8 rounded-lg reveal"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <service.icon className="w-12 h-12 mb-6 text-[#BF953F]" />
                  <h3 className="text-2xl font-bold mb-4 text-[#BF953F]" style={{ fontFamily: 'Playfair Display' }}>
                    {service.title}
                  </h3>
                  <p className="text-gray-300" style={{ fontFamily: 'Cormorant Garamond' }}>
                    {service.description}
                  </p>
                  <Link 
                    href="/services" 
                    className="inline-flex items-center mt-6 text-sm text-[#BF953F] hover:text-[#AA771C] transition-colors"
                  >
                    Learn More
                    <LucideArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-24 relative bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-[600px] reveal">
                <Image
                  src="/images/people.png"
                  alt="Our Team"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center rounded-lg"
                />
                <div className="absolute inset-0 bg-black/10 rounded-lg" />
              </div>
              
              <div className="reveal">
                <h2 className="text-4xl font-bold mb-6 gold-gradient" style={{ fontFamily: 'Playfair Display' }}>
                  Expert Legal Team
                </h2>
                <p className="text-gray-300 mb-8 text-lg" style={{ fontFamily: 'Cormorant Garamond' }}>
                  Our team of distinguished attorneys brings together decades of experience
                  across various fields of law. We combine traditional legal excellence
                  with innovative approaches to deliver exceptional results for our clients.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { number: "20+", label: "Years Experience" },
                    { number: "500+", label: "Cases Won" },
                    { number: "98%", label: "Client Satisfaction" },
                    { number: "24/7", label: "Support" }
                  ].map((stat, index) => (
                    <div key={index} className="text-center p-6 gold-border rounded-lg backdrop-blur-sm">
                      <div className="text-3xl font-bold mb-2 text-[#BF953F]" style={{ fontFamily: 'Playfair Display' }}>
                        {stat.number}
                      </div>
                      <div className="text-sm text-gray-300" style={{ fontFamily: 'Cormorant Garamond' }}>
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Preview */}
        <section className="py-24 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-16 reveal gold-gradient"
                style={{ fontFamily: 'Playfair Display' }}>
              Client Testimonials
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah Johnson",
                  role: "Corporate Client",
                  text: "Smith & Associates' expertise in corporate law helped our business navigate complex regulatory challenges."
                },
                {
                  name: "Michael Chen",
                  role: "Private Client",
                  text: "Professional, compassionate, and highly effective. They exceeded all my expectations."
                },
                {
                  name: "David Smith",
                  role: "Business Owner",
                  text: "Their strategic approach and attention to detail made all the difference in our case."
                }
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="gold-border backdrop-blur-sm p-8 rounded-lg reveal"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <LucideMessageSquare className="w-8 h-8 mb-6 text-[#BF953F]" />
                  <p className="text-gray-300 mb-6" style={{ fontFamily: 'Cormorant Garamond' }}>
                    {testimonial.text}
                  </p>
                  <div>
                    <div className="font-medium text-[#BF953F]" style={{ fontFamily: 'Playfair Display' }}>
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-400" style={{ fontFamily: 'Cormorant Garamond' }}>
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button 
                className="bg-[#BF953F] hover:bg-[#AA771C] text-white"
                asChild
              >
                <Link href="/testimonials">View All Testimonials</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 bg-black/50 backdrop-blur-sm text-white py-16 gold-border-t">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 gold-gradient" style={{ fontFamily: 'Playfair Display' }}>
                Smith & Associates
              </h3>
              <p className="text-gray-300" style={{ fontFamily: 'Cormorant Garamond' }}>
                Setting the standard for legal excellence in South Africa.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-6 text-[#BF953F]" style={{ fontFamily: 'Playfair Display' }}>
                Contact
              </h3>
              <div className="space-y-4 text-gray-300" style={{ fontFamily: 'Cormorant Garamond' }}>
                <p>123 Sandton Drive</p>
                <p>Sandton, Johannesburg</p>
                <p>2196</p>
                <p>Phone: +27 11 123 4567</p>
                <p>Email: info@smithassociates.co.za</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-6 text-[#BF953F]" style={{ fontFamily: 'Playfair Display' }}>
                Quick Links
              </h3>
              <div className="space-y-4">
                {['About', 'Services', 'Testimonials', 'Contact'].map((link) => (
                  <Link
                    key={link}
                    href={`/${link.toLowerCase()}`}
                    className="block text-gray-300 hover:text-[#BF953F] transition-colors"
                    style={{ fontFamily: 'Cormorant Garamond' }}
                  >
                    {link}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-[#BF953F]/20 text-center text-gray-400">
            <p style={{ fontFamily: 'Cormorant Garamond' }}>
              &copy; {new Date().getFullYear()} Smith & Associates. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
