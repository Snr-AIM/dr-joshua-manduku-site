import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, BarChart2, Globe, Lightbulb, MessageSquare, TrendingUp, Star } from "lucide-react"
import { MobileNav } from "@/components/mobile-nav"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b sticky top-0 z-50 w-full bg-white">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-6 w-6 text-teal-600" />
            <span className="text-xl font-bold">Nexa Marketing</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#services" className="text-sm font-medium hover:text-teal-600 transition-colors">
              Services
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-teal-600 transition-colors">
              About
            </Link>
            <Link href="#case-studies" className="text-sm font-medium hover:text-teal-600 transition-colors">
              Case Studies
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-teal-600 transition-colors">
              Testimonials
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-teal-600 transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" className="hidden md:flex">
              Log In
            </Button>
            <Button className="bg-teal-600 hover:bg-teal-700 hidden md:flex">Get Started</Button>
            <MobileNav />
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-32 bg-gradient-to-b from-white to-gray-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl md:text-5xl font-bold tracking-tighter">
                  Transform Your Digital Presence with Nexa Marketing
                </h1>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We help businesses grow through strategic digital marketing solutions that drive results and maximize
                  ROI.
                </p>
                <div className="flex flex-col md:flex-row gap-3">
                  <Button className="bg-teal-600 hover:bg-teal-700">Get a Free Consultation</Button>
                  <Button variant="outline" className="gap-1">
                    View Our Work <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="mx-auto lg:ml-auto">
                <div className="aspect-video overflow-hidden rounded-xl bg-gray-100 object-cover">
                  <img
                    alt="Marketing dashboard"
                    className="object-cover w-full h-full"
                    src="/placeholder.svg?height=600&width=800"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">Services</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Our Marketing Solutions</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed">
                  We offer a comprehensive suite of digital marketing services to help your business thrive in the
                  digital landscape.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="flex flex-col items-start space-y-4 p-6">
                  <div className="rounded-full bg-teal-100 p-3">
                    <Globe className="h-6 w-6 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-bold">SEO Optimization</h3>
                  <p className="text-gray-500">
                    Improve your search engine rankings and drive organic traffic to your website.
                  </p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="flex flex-col items-start space-y-4 p-6">
                  <div className="rounded-full bg-teal-100 p-3">
                    <BarChart2 className="h-6 w-6 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-bold">PPC Advertising</h3>
                  <p className="text-gray-500">
                    Create targeted ad campaigns that deliver measurable results and maximize ROI.
                  </p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="flex flex-col items-start space-y-4 p-6">
                  <div className="rounded-full bg-teal-100 p-3">
                    <MessageSquare className="h-6 w-6 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-bold">Social Media</h3>
                  <p className="text-gray-500">
                    Engage with your audience and build brand awareness through strategic social media management.
                  </p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="flex flex-col items-start space-y-4 p-6">
                  <div className="rounded-full bg-teal-100 p-3">
                    <Lightbulb className="h-6 w-6 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-bold">Content Strategy</h3>
                  <p className="text-gray-500">
                    Develop compelling content that resonates with your target audience and drives conversions.
                  </p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="flex flex-col items-start space-y-4 p-6">
                  <div className="rounded-full bg-teal-100 p-3">
                    <TrendingUp className="h-6 w-6 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-bold">Analytics & Reporting</h3>
                  <p className="text-gray-500">
                    Track performance metrics and gain valuable insights to optimize your marketing strategies.
                  </p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="flex flex-col items-start space-y-4 p-6">
                  <div className="rounded-full bg-teal-100 p-3">
                    <Globe className="h-6 w-6 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-bold">Email Marketing</h3>
                  <p className="text-gray-500">
                    Create targeted email campaigns that nurture leads and drive customer retention.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">About Us</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">We're a Team of Marketing Experts</h2>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Nexa Marketing was founded with a simple mission: to help businesses grow through effective digital
                  marketing strategies. Our team of experts combines creativity with data-driven insights to deliver
                  exceptional results.
                </p>
                <ul className="grid gap-2">
                  <li className="flex items-center gap-2">
                    <div className="rounded-full bg-green-500 p-1">
                      <svg
                        className="h-2 w-2 text-white"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span>10+ years of industry experience</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="rounded-full bg-green-500 p-1">
                      <svg
                        className="h-2 w-2 text-white"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span>200+ successful client campaigns</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="rounded-full bg-green-500 p-1">
                      <svg
                        className="h-2 w-2 text-white"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span>Data-driven approach to marketing</span>
                  </li>
                </ul>
                <div className="flex flex-col md:flex-row gap-3">
                  <Button className="bg-teal-600 hover:bg-teal-700">Meet Our Team</Button>
                </div>
              </div>
              <div className="mx-auto lg:ml-auto">
                <div className="aspect-square overflow-hidden rounded-xl bg-gray-100 object-cover">
                  <img
                    alt="Team meeting"
                    className="object-cover w-full h-full"
                    src="/placeholder.svg?height=600&width=600"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section id="case-studies" className="py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">Case Studies</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Our Success Stories</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed">
                  See how we've helped businesses like yours achieve remarkable growth through our marketing strategies.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <img
                    alt="Case study 1"
                    className="object-cover w-full h-full hover:scale-105 transition-transform"
                    src="/placeholder.svg?height=400&width=600"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold">E-commerce Revenue Growth</h3>
                  <p className="mt-2 text-gray-500">
                    How we helped an online retailer increase their revenue by 150% in just 6 months.
                  </p>
                  <Button variant="link" className="mt-4 p-0 h-auto text-teal-600">
                    Read Case Study <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <img
                    alt="Case study 2"
                    className="object-cover w-full h-full hover:scale-105 transition-transform"
                    src="/placeholder.svg?height=400&width=600"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold">B2B Lead Generation</h3>
                  <p className="mt-2 text-gray-500">
                    Transforming a B2B company's lead generation with targeted campaigns and automation.
                  </p>
                  <Button variant="link" className="mt-4 p-0 h-auto text-teal-600">
                    Read Case Study <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <img
                    alt="Case study 3"
                    className="object-cover w-full h-full hover:scale-105 transition-transform"
                    src="/placeholder.svg?height=400&width=600"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold">Brand Awareness Campaign</h3>
                  <p className="mt-2 text-gray-500">
                    Building brand recognition and engagement through multi-channel marketing strategies.
                  </p>
                  <Button variant="link" className="mt-4 p-0 h-auto text-teal-600">
                    Read Case Study <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-16 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">Testimonials</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">What Our Clients Say</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed">
                  Don't just take our word for it. Here's what our clients have to say about working with Nexa
                  Marketing.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
              <Card>
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-500 mb-4">
                    "Nexa Marketing transformed our online presence. Our website traffic increased by 300% and our
                    conversion rates doubled within the first quarter."
                  </p>
                  <div className="flex items-center gap-3">
                    <img
                      alt="Client avatar"
                      className="rounded-full"
                      height="40"
                      src="/placeholder.svg?height=40&width=40"
                      width="40"
                    />
                    <div>
                      <p className="font-semibold">Sarah Johnson</p>
                      <p className="text-sm text-gray-500">CEO, TechStart Inc.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-500 mb-4">
                    "The team at Nexa Marketing is incredibly knowledgeable and responsive. They've helped us achieve
                    our marketing goals consistently."
                  </p>
                  <div className="flex items-center gap-3">
                    <img
                      alt="Client avatar"
                      className="rounded-full"
                      height="40"
                      src="/placeholder.svg?height=40&width=40"
                      width="40"
                    />
                    <div>
                      <p className="font-semibold">Michael Chen</p>
                      <p className="text-sm text-gray-500">Marketing Director, GrowthCo</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-500 mb-4">
                    "Working with Nexa Marketing has been a game-changer for our business. Their strategic approach and
                    attention to detail is unmatched."
                  </p>
                  <div className="flex items-center gap-3">
                    <img
                      alt="Client avatar"
                      className="rounded-full"
                      height="40"
                      src="/placeholder.svg?height=40&width=40"
                      width="40"
                    />
                    <div>
                      <p className="font-semibold">Emily Rodriguez</p>
                      <p className="text-sm text-gray-500">Founder, EcoSolutions</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">Contact</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Ready to Get Started?</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed">
                  Let's discuss how we can help your business grow. Get in touch with our team today.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-2xl mt-12">
              <Card>
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                          First Name
                        </label>
                        <input
                          id="firstName"
                          type="text"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                          Last Name
                        </label>
                        <input
                          id="lastName"
                          type="text"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium mb-2">
                        Company
                      </label>
                      <input
                        id="company"
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-gray-50">
        <div className="container px-4 md:px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-6 w-6 text-teal-600" />
                <span className="text-xl font-bold">Nexa Marketing</span>
              </div>
              <p className="text-gray-500">Transforming businesses through strategic digital marketing solutions.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>
                  <Link href="#" className="hover:text-teal-600">
                    SEO Optimization
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-teal-600">
                    PPC Advertising
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-teal-600">
                    Social Media
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-teal-600">
                    Content Strategy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>
                  <Link href="#" className="hover:text-teal-600">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-teal-600">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-teal-600">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-teal-600">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>hello@nexamarketing.com</li>
                <li>(555) 123-4567</li>
                <li>123 Marketing St, Digital City</li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-gray-500">
            <p>&copy; 2024 Nexa Marketing. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
