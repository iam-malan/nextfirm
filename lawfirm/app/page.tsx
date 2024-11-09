'use client'

import { Button } from "../components/ui/button"
import Link from "next/link"
import Image from "next/image"
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

export default function HomePage() {
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

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Floating Contact Button */}
      <Link href="/contact" className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-50 floating-contact">
        <Button className="rounded-full bg-[#BF953F] text-white hover:bg-[#AA771C] shadow-lg flex items-center gap-2 text-sm sm:text-base">
          <LucidePhone className="h-4 w-4" />
          <span className="font-medium">Contact Us</span>
        </Button>
      </Link>

      <main className="relative">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-24">
          {/* Background */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/lawbooks.png"
              alt="Legal background"
              width={1920}
              height={1080}
              quality={90}
              priority
              className="object-cover object-center brightness-75"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVojAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx0fHRsdHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/2wBDAR0XFyAeIRshIRshHRkdIR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
          </div>

          {/* Hero Content */}
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight fade-in gold-gradient pb-4" style={{ fontFamily: 'Playfair Display' }}>
                Excellence in Legal Advocacy
              </h1>
              <p className="mt-6 sm:mt-8 text-lg sm:text-xl text-gray-200 fade-in max-w-2xl mx-auto px-4" style={{animationDelay: '0.2s', fontFamily: 'Cormorant Garamond'}}>
                Where tradition meets innovation. C De Cerff Inc. provides sophisticated legal solutions 
                tailored to modern challenges in South Africa.
              </p>
              <div className="mt-8 sm:mt-12 fade-in flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 px-4" style={{animationDelay: '0.4s'}}>
                <Button 
                  className="bg-[#BF953F] hover:bg-[#AA771C] text-white w-full sm:w-auto sm:min-w-[200px]"
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
                  className="border-[#BF953F] text-[#BF953F] hover:bg-[#BF953F] hover:text-white w-full sm:w-auto sm:min-w-[200px]"
                >
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Scroll Indicator - Moved below buttons */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 scroll-indicator hidden sm:block mt-12">
            <LucideChevronDown className="w-6 h-6 text-[#BF953F]" />
          </div>

          {/* Wave Transition */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden">
            <svg 
              preserveAspectRatio="none" 
              viewBox="0 0 1440 120" 
              className="relative block w-full"
              style={{ height: '120px' }}
            >
              <path 
                d="M0,0 C720,120 720,0 1440,0 L1440,120 L0,120 Z" 
                fill="#000" 
                className="transition-all duration-300"
              />
            </svg>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 sm:py-24 relative bg-black">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/1.png"
              alt="Legal office"
              width={1920}
              height={1080}
              quality={85}
              loading="eager"
              className="object-cover object-center opacity-20"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVojAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx0fHRsdHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/2wBDAR0XFyAeIRshIRshHRkdIR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/95 to-black/90" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 reveal gold-gradient" style={{ fontFamily: 'Playfair Display' }}>
              Our Expertise
            </h2>
            <p className="text-center text-gray-400 mb-12 sm:mb-16 reveal max-w-2xl mx-auto px-4" style={{ fontFamily: 'Cormorant Garamond' }}>
              Comprehensive legal services delivered with precision and dedication
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
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
                  className="service-card bg-black/40 backdrop-blur-sm p-6 sm:p-8 rounded-lg reveal"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <service.icon className="w-10 h-10 sm:w-12 sm:h-12 mb-4 sm:mb-6 text-[#BF953F]" />
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-[#BF953F]" style={{ fontFamily: 'Playfair Display' }}>
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-sm sm:text-base" style={{ fontFamily: 'Cormorant Garamond' }}>
                    {service.description}
                  </p>
                  <Link 
                    href="/services" 
                    className="inline-flex items-center mt-4 sm:mt-6 text-sm text-[#BF953F] hover:text-[#AA771C] transition-colors"
                  >
                    Learn More
                    <LucideArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Wave Transition */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden">
            <svg 
              preserveAspectRatio="none" 
              viewBox="0 0 1440 120" 
              className="relative block w-full"
              style={{ height: '120px' }}
            >
              <path 
                d="M0,120 C720,0 720,120 1440,120 L1440,0 L0,0 Z" 
                fill="#1a1a1a" 
                className="transition-all duration-300"
              />
            </svg>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 sm:py-24 relative bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div className="relative h-[300px] sm:h-[400px] lg:h-[600px] reveal">
                <Image
                  src="/images/people.png"
                  alt="Our Team"
                  width={1200}
                  height={800}
                  quality={85}
                  loading="eager"
                  className="object-cover object-center rounded-lg"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVojAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx0fHRsdHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/2wBDAR0XFyAeIRshIRshHRkdIR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                />
                <div className="absolute inset-0 bg-black/10 rounded-lg" />
              </div>
              
              <div className="reveal">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 gold-gradient" style={{ fontFamily: 'Playfair Display' }}>
                  Expert Legal Team
                </h2>
                <p className="text-gray-300 mb-6 sm:mb-8 text-base sm:text-lg" style={{ fontFamily: 'Cormorant Garamond' }}>
                  Our team of distinguished attorneys brings together decades of experience
                  across various fields of law. We combine traditional legal excellence
                  with innovative approaches to deliver exceptional results for our clients.
                </p>
                <div className="grid grid-cols-2 gap-4 sm:gap-6">
                  {[
                    { number: "20+", label: "Years Experience" },
                    { number: "500+", label: "Cases Won" },
                    { number: "98%", label: "Client Satisfaction" },
                    { number: "24/7", label: "Support" }
                  ].map((stat, index) => (
                    <div key={index} className="text-center p-4 sm:p-6 gold-border rounded-lg backdrop-blur-sm">
                      <div className="text-2xl sm:text-3xl font-bold mb-2 text-[#BF953F]" style={{ fontFamily: 'Playfair Display' }}>
                        {stat.number}
                      </div>
                      <div className="text-xs sm:text-sm text-gray-300" style={{ fontFamily: 'Cormorant Garamond' }}>
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Wave Transition */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden">
            <svg 
              preserveAspectRatio="none" 
              viewBox="0 0 1440 120" 
              className="relative block w-full"
              style={{ height: '120px' }}
            >
              <path 
                d="M0,0 C720,120 720,0 1440,0 L1440,120 L0,120 Z" 
                fill="#1a1a1a" 
                className="transition-all duration-300"
              />
            </svg>
          </div>
        </section>

        {/* Testimonials Preview */}
        <section className="py-16 sm:py-24 relative bg-[#1a1a1a]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16 reveal gold-gradient" style={{ fontFamily: 'Playfair Display' }}>
              Client Testimonials
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {[
                {
                  name: "Sarah Johnson",
                  role: "Corporate Client",
                  text: "C De Cerff Inc.'s expertise in corporate law helped our business navigate complex regulatory challenges."
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
                  className="gold-border backdrop-blur-sm p-6 sm:p-8 rounded-lg reveal"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <LucideMessageSquare className="w-6 h-6 sm:w-8 sm:h-8 mb-4 sm:mb-6 text-[#BF953F]" />
                  <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base" style={{ fontFamily: 'Cormorant Garamond' }}>
                    {testimonial.text}
                  </p>
                  <div>
                    <div className="font-medium text-[#BF953F] text-base sm:text-lg" style={{ fontFamily: 'Playfair Display' }}>
                      {testimonial.name}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-400" style={{ fontFamily: 'Cormorant Garamond' }}>
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-8 sm:mt-12">
              <Button 
                className="bg-[#BF953F] hover:bg-[#AA771C] text-white w-full sm:w-auto"
                asChild
              >
                <Link href="/testimonials">View All Testimonials</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
