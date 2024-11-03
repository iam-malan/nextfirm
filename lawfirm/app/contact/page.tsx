import Image from "next/image"
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import { Textarea } from "../../components/ui/textarea"
import { Label } from "../../components/ui/label"
import { 
  LucidePhone, 
  LucideMail, 
  LucideMapPin,
  LucideClock,
  LucideMessageSquare
} from "lucide-react"

export default function ContactPage() {
  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/1.png"
            alt="Contact Us"
            fill
            sizes="100vw"
            className="object-cover object-center brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/90" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 gold-gradient" style={{ fontFamily: 'Playfair Display' }}>
              Contact Us
            </h1>
            <p className="text-xl text-gray-300 mb-8" style={{ fontFamily: 'Cormorant Garamond' }}>
              Get in touch with our legal experts for a confidential consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6 gold-gradient" style={{ fontFamily: 'Playfair Display' }}>
                  Get in Touch
                </h2>
                <p className="text-gray-300 mb-8 text-lg" style={{ fontFamily: 'Cormorant Garamond' }}>
                  We're here to help you with your legal needs. Reach out to us through any of the following channels.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: LucideMapPin,
                    title: "Visit Us",
                    content: "123 Sandton Drive, Sandton, Johannesburg, 2196"
                  },
                  {
                    icon: LucidePhone,
                    title: "Call Us",
                    content: "+27 11 123 4567"
                  },
                  {
                    icon: LucideMail,
                    title: "Email Us",
                    content: "info@cdecerff.co.za"
                  },
                  {
                    icon: LucideClock,
                    title: "Business Hours",
                    content: "Monday - Friday: 8:00 AM - 6:00 PM"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="p-3 gold-border rounded-lg">
                      <item.icon className="w-6 h-6 text-[#BF953F]" />
                    </div>
                    <div>
                      <h3 className="text-[#BF953F] font-bold mb-1" style={{ fontFamily: 'Playfair Display' }}>
                        {item.title}
                      </h3>
                      <p className="text-gray-300" style={{ fontFamily: 'Cormorant Garamond' }}>
                        {item.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="gold-border backdrop-blur-sm p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-[#BF953F]" style={{ fontFamily: 'Playfair Display' }}>
                Send Us a Message
              </h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-gray-300">First Name</Label>
                    <Input 
                      id="firstName" 
                      className="bg-white/5 border-[#BF953F]/30 focus:border-[#BF953F] text-white" 
                      style={{ fontFamily: 'Cormorant Garamond' }}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-gray-300">Last Name</Label>
                    <Input 
                      id="lastName" 
                      className="bg-white/5 border-[#BF953F]/30 focus:border-[#BF953F] text-white"
                      style={{ fontFamily: 'Cormorant Garamond' }}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-300">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    className="bg-white/5 border-[#BF953F]/30 focus:border-[#BF953F] text-white"
                    style={{ fontFamily: 'Cormorant Garamond' }}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-gray-300">Phone</Label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    className="bg-white/5 border-[#BF953F]/30 focus:border-[#BF953F] text-white"
                    style={{ fontFamily: 'Cormorant Garamond' }}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service" className="text-gray-300">Service Required</Label>
                  <select 
                    id="service" 
                    className="w-full rounded-md bg-white/5 border-[#BF953F]/30 focus:border-[#BF953F] text-white p-2"
                    style={{ fontFamily: 'Cormorant Garamond' }}
                  >
                    <option value="" className="bg-black">Select a Service</option>
                    <option value="corporate" className="bg-black">Corporate Law</option>
                    <option value="family" className="bg-black">Family Law</option>
                    <option value="criminal" className="bg-black">Criminal Defense</option>
                    <option value="real-estate" className="bg-black">Real Estate Law</option>
                    <option value="other" className="bg-black">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-gray-300">Message</Label>
                  <Textarea 
                    id="message" 
                    className="bg-white/5 border-[#BF953F]/30 focus:border-[#BF953F] text-white min-h-[150px]"
                    style={{ fontFamily: 'Cormorant Garamond' }}
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-[#BF953F] hover:bg-[#AA771C] text-white"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="gold-border rounded-lg overflow-hidden h-[400px] relative">
            {/* Replace with actual map implementation */}
            <div className="absolute inset-0 bg-[#BF953F]/10 flex items-center justify-center">
              <p className="text-[#BF953F]" style={{ fontFamily: 'Cormorant Garamond' }}>
                Map will be implemented here
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 gold-gradient" style={{ fontFamily: 'Playfair Display' }}>
              Need Urgent Legal Assistance?
            </h2>
            <p className="text-xl text-gray-300 mb-8" style={{ fontFamily: 'Cormorant Garamond' }}>
              Our emergency legal hotline is available 24/7 for urgent matters.
            </p>
            <div className="flex items-center justify-center space-x-4">
              <LucidePhone className="w-6 h-6 text-[#BF953F]" />
              <span className="text-2xl text-[#BF953F] font-bold" style={{ fontFamily: 'Playfair Display' }}>
                +27 11 123 4567
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
