import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Code2, Sparkles, Zap, Shield, Rocket, Users, CheckCircle2 } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-6 leading-tight text-balance">
                <span className="font-pacifico text-primary">onePoint</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed text-pretty">
                A modern website does more than look good — it helps your business get found, builds trust with customers, and makes it easier for people to reach you. Whether you need a simple online presence or a full redesign, we create clean, professional websites that help small businesses stand out and grow.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed text-pretty">
                At onePoint Web Solutions, we combine thoughtful design with the latest web technologies to deliver fast, responsive, and search-optimized websites. Start with a free first-draft homepage and choose optional AI-powered features to take your site to the next level.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="rounded-full text-base">
                  <Link href="/contact">Request Your Free Draft</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full text-base">
                  <Link href="/portfolio">View Portfolio</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 p-8 flex items-center justify-center overflow-hidden">
                <img
                  src="/modern-professional-business-website-on-laptop-and-mobile-devices.jpg"
                  alt="Modern business website design"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4 text-balance">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Comprehensive web solutions tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="rounded-3xl border-border shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                  <Code2 className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Website Development</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Clean, modern site builds that are mobile-ready and optimized for search engines. Built with the latest technologies and best practices.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="rounded-3xl border-border shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-secondary" />
                </div>
                <CardTitle className="text-xl">Website Improvement</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Redesigns, modernization, and speed improvements. Transform your existing website into a high-performing digital asset.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="rounded-3xl border-border shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6 text-accent" />
                </div>
                <CardTitle className="text-xl">AI-Powered Enhancements</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Optional AI chatbot, intelligent forms, and smart content suggestions. Enhance user experience with cutting-edge technology.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4 text-balance">Why Choose onePoint</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Reliable, professional, and flexible web solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Users className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">All Business Sizes</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Whether you're a startup or established enterprise, we have solutions that scale with you.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Free First Draft</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  See your homepage come to life before making any commitment. No risk, just results.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Optional AI Features</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Add intelligent functionality when you need it, with AI-powered tools that enhance user experience.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Shield className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Clean & Reliable</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Built with industry best practices, ensuring security, performance, and maintainability.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Rocket className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Modern Design</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Friendly, approachable interfaces that users love and that reflect your brand identity.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Zap className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Flexible Pricing</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Choose between one-time builds or managed subscriptions based on your needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4 text-balance">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Real websites built for real businesses across diverse industries
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { name: 'Local Restaurant', type: 'Food & Beverage', color: 'from-orange-500/20 to-red-500/20' },
              { name: 'Professional Services', type: 'Corporate', color: 'from-blue-500/20 to-indigo-500/20' },
              { name: 'Creative Portfolio', type: 'Art & Design', color: 'from-purple-500/20 to-pink-500/20' },
              { name: 'Retail Business', type: 'E-commerce', color: 'from-green-500/20 to-teal-500/20' },
            ].map((project) => (
              <Card key={project.name} className="rounded-3xl border-border overflow-hidden group hover:shadow-md transition-shadow">
                <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                  <img
                    src={`/.jpg?height=300&width=400&query=${project.type} website design`}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{project.name}</CardTitle>
                  <CardDescription>{project.type}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" variant="outline" className="rounded-full">
              <Link href="/portfolio">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="rounded-3xl bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 border-border shadow-lg">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-3xl sm:text-4xl mb-4 text-balance">
                Start Your Free Homepage Draft Today
              </CardTitle>
              <CardDescription className="text-lg text-muted-foreground text-pretty">
                No commitment required. See your vision come to life with our complimentary first-draft service.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center pb-8">
              <Button asChild size="lg" className="rounded-full text-base">
                <Link href="/contact">Get Started Now</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
