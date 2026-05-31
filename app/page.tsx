import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Code2, Sparkles, Zap, Shield, Rocket, Users, CheckCircle2, MapPin, Clock } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block text-sm font-medium text-primary bg-primary/10 px-4 py-1.5 rounded-full mb-6">
            Based in the UK — serving businesses nationwide
          </span>
          <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-6 leading-tight text-balance">
            Professional websites for local businesses
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed text-pretty max-w-2xl mx-auto">
            We build clean, modern websites that help small businesses get found on Google, build trust with customers, and win more work. No jargon, no hidden fees — just a website that works.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center">
            <Button asChild size="lg" className="rounded-full text-base">
              <Link href="/contact">Get Your Free Draft</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full text-base">
              <Link href="/portfolio">View Our Work</Link>
            </Button>
          </div>
          <div className="flex flex-wrap gap-6 text-sm text-muted-foreground justify-center">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              <span>Free first draft</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              <span>No contract</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              <span>Mobile responsive</span>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4 text-balance">How It Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              From first contact to live website in three simple steps. No complexity, no surprises.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">We Build Your Free Draft</h3>
              <p className="text-muted-foreground leading-relaxed">
                Get in touch and tell us about your business. We'll build you a free homepage draft tailored to your brand — no payment, no commitment.
              </p>
            </div>
            <div className="text-center relative">
              <div className="hidden md:block absolute top-8 -left-4 w-8 h-0.5 bg-border" />
              <div className="hidden md:block absolute top-8 -right-4 w-8 h-0.5 bg-border" />
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">You Give Feedback</h3>
              <p className="text-muted-foreground leading-relaxed">
                Review the draft and tell us what you'd like to change. We refine the design until it's exactly right — your vision, your brand.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">We Launch Your Site</h3>
              <p className="text-muted-foreground leading-relaxed">
                Once you're happy, we build the full site and get it live. Fast turnaround, zero stress — your business is online and ready to grow.
              </p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" className="rounded-full">
              <Link href="/contact">Start With a Free Draft</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4 text-balance">What We Do</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Everything your business needs to have a great website
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="rounded-3xl border-border shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                  <Code2 className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">New Websites</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Clean, modern sites built from scratch. Mobile responsive, fast loading and optimised for Google — so customers can find you.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="rounded-3xl border-border shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-secondary" />
                </div>
                <CardTitle className="text-xl">Website Improvements</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Already have a site but it looks outdated? We redesign, modernise and speed up existing websites — at a lower cost than a full rebuild.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="rounded-3xl border-border shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6 text-accent" />
                </div>
                <CardTitle className="text-xl">Ongoing Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Hosting, maintenance, SEO updates, content changes — all handled for you on a simple monthly plan so you never have to worry about your website.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4 text-balance">Our Work</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Demo sites built across different industries — from trades to hospitality to fitness
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { name: 'Volta Electrical', type: 'Trades & Services', color: 'from-yellow-500/20 to-amber-500/20', image: '/volta.webp' },
              { name: 'Ember & Rye', type: 'Food & Beverage', color: 'from-orange-500/20 to-red-500/20', image: '/ember.webp' },
              { name: 'Cairn & Co.', type: 'Health & Wellness', color: 'from-green-500/20 to-emerald-500/20', image: '/cairn.webp' },
              { name: 'Iron District', type: 'Fitness & Sport', color: 'from-red-500/20 to-rose-500/20', image: '/irondistrict.webp' },
            ].map((project) => (
              <Card key={project.name} className="rounded-3xl border-border overflow-hidden group hover:shadow-md transition-shadow">
                <div className={`h-48 bg-gradient-to-br ${project.color} overflow-hidden`}>
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
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
              <Link href="/portfolio">View Full Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why onePoint */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4 text-balance">Why onePoint</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              We're not a big agency with big overheads. We're a small, focused team that cares about getting it right.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Free First Draft</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  See your homepage before you spend a penny. No risk, no commitment — just a free draft to show you what's possible.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">UK Based</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We're based in the UK and understand the UK market. No outsourcing, no language barriers — just straightforward communication.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Shield className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">No Contract</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Our subscription plans have no minimum term. Stay because you're happy, not because you're locked in.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Fast Turnaround</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Most sites are live within 14 days of sign-off. We don't keep you waiting — your time is valuable.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Rocket className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Built to Rank</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Every site we build includes basic SEO setup so you have the best chance of appearing in local Google searches.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Users className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Real Support</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  You'll always deal with the same person. No support tickets, no call centres — just a direct line to someone who knows your site.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <Card className="rounded-3xl bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 border-border shadow-lg">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-3xl sm:text-4xl mb-4 text-balance">
                Ready to get started?
              </CardTitle>
              <CardDescription className="text-lg text-muted-foreground text-pretty">
                Get your free homepage draft today. No commitment, no payment — just a free preview of what your new website could look like.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col sm:flex-row gap-4 justify-center pb-8">
              <Button asChild size="lg" className="rounded-full text-base">
                <Link href="/contact">Get Your Free Draft</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full text-base">
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
