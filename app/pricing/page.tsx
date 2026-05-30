import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Check, X } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    description: 'Perfect for small businesses that need a professional online presence without the ongoing commitment.',
    upfront: '£500',
    monthly: null,
    badge: null,
    color: 'border-border',
    checkColor: 'text-primary',
    features: [
      { text: 'Up to 5 pages', included: true },
      { text: 'Professional design & development', included: true },
      { text: 'Mobile responsive', included: true },
      { text: 'Contact form', included: true },
      { text: 'Basic SEO setup', included: true },
      { text: 'Google Analytics setup', included: true },
      { text: 'WhatsApp button', included: true },
      { text: '30 days post-launch support', included: true },
      { text: 'Hosting included', included: false },
      { text: 'Ongoing maintenance', included: false },
      { text: 'Google Business Profile setup', included: false },
      { text: 'Monthly SEO report', included: false },
      { text: 'Online booking integration', included: false },
      { text: 'Monthly blog post', included: false },
    ],
    note: 'You own the website outright. Hosting arranged separately — we recommend Netlify (free).',
    cta: 'Get Started',
  },
  {
    name: 'Growth',
    description: 'Our most popular plan. A fully managed website with everything a local business needs to get found and win customers.',
    upfront: '£400',
    monthly: '£50',
    badge: 'Most Popular',
    color: 'border-primary',
    checkColor: 'text-primary',
    features: [
      { text: 'Up to 8 pages', included: true },
      { text: 'Professional design & development', included: true },
      { text: 'Mobile responsive', included: true },
      { text: 'Contact form', included: true },
      { text: 'Basic SEO setup', included: true },
      { text: 'Google Analytics setup', included: true },
      { text: 'WhatsApp button', included: true },
      { text: 'Hosting included', included: true },
      { text: 'Ongoing maintenance & updates', included: true },
      { text: 'Google Business Profile setup', included: true },
      { text: 'Monthly SEO report', included: true },
      { text: 'Online booking integration', included: false },
      { text: 'Monthly blog post', included: false },
    ],
    note: 'No contract — cancel any time. Hosting, maintenance and support all included.',
    cta: 'Get Started',
  },
  {
    name: 'Pro',
    description: 'For businesses that want to dominate local search and turn their website into a consistent source of new customers.',
    upfront: '£600',
    monthly: '£100',
    badge: 'Best Value',
    color: 'border-secondary',
    checkColor: 'text-primary',
    features: [
      { text: 'Unlimited pages', included: true },
      { text: 'Professional design & development', included: true },
      { text: 'Mobile responsive', included: true },
      { text: 'Contact form', included: true },
      { text: 'Advanced SEO setup', included: true },
      { text: 'Google Analytics setup', included: true },
      { text: 'WhatsApp button', included: true },
      { text: 'Hosting included', included: true },
      { text: 'Ongoing maintenance & updates', included: true },
      { text: 'Google Business Profile setup', included: true },
      { text: 'Monthly SEO report', included: true },
      { text: 'Online booking integration', included: true },
      { text: 'Monthly blog post', included: true },
    ],
    note: 'Everything managed for you. Focus on running your business — we handle the rest.',
    cta: 'Get Started',
  },
]

const addons = [
  {
    name: 'AI Chatbot',
    description: 'An intelligent chatbot that answers customer questions 24/7, qualifies leads and books appointments automatically.',
    price: '£200 one-off + £20/month',
  },
  {
    name: 'E-commerce / Online Shop',
    description: 'A fully functional online shop with product listings, cart and secure checkout. Perfect for retail, gift vouchers or bookings.',
    price: 'From £800 one-off',
  },
  {
    name: 'GEO Optimisation',
    description: 'Optimise your site to appear in AI-generated answers on ChatGPT, Google AI Overviews and other AI tools — the next frontier of search.',
    price: '£150 one-off',
  },
  {
    name: 'Social Media Feed',
    description: 'Pull your Instagram feed directly onto your website so it stays fresh and up to date automatically.',
    price: '£75 one-off',
  },
  {
    name: 'Cookie Banner & Privacy Policy',
    description: 'A legally compliant cookie consent banner and privacy policy — a legal requirement for UK businesses.',
    price: '£50 one-off',
  },
  {
    name: 'Live Chat Widget',
    description: 'Let customers message you directly from your website. Perfect for capturing enquiries outside business hours.',
    price: '£75 one-off',
  },
]

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-foreground mb-4 text-balance">Simple, Transparent Pricing</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              No hidden fees. No confusing contracts. Just a website that works for your business.
            </p>
          </div>

          {/* Plans */}
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
            {plans.map((plan) => (
              <Card key={plan.name} className={`rounded-3xl border-2 ${plan.color} shadow-lg hover:shadow-xl transition-shadow relative flex flex-col`}>
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground text-xs font-semibold px-4 py-1.5 rounded-full whitespace-nowrap">
                      {plan.badge}
                    </span>
                  </div>
                )}
                <CardHeader className="pb-6">
                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {plan.description}
                  </CardDescription>
                  <div className="pt-4">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-foreground">{plan.upfront}</span>
                      <span className="text-muted-foreground">upfront</span>
                    </div>
                    {plan.monthly && (
                      <div className="flex items-baseline gap-2 mt-1">
                        <span className="text-2xl font-semibold text-foreground">{plan.monthly}</span>
                        <span className="text-muted-foreground">/month</span>
                      </div>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col flex-1 space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature.text} className="flex items-start gap-3">
                        {feature.included ? (
                          <Check className={`w-4 h-4 ${plan.checkColor} mt-0.5 flex-shrink-0`} />
                        ) : (
                          <X className="w-4 h-4 text-muted-foreground/40 mt-0.5 flex-shrink-0" />
                        )}
                        <span className={`text-sm ${feature.included ? 'text-foreground' : 'text-muted-foreground/50'}`}>
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-muted-foreground leading-relaxed border-t border-border pt-4">
                    {plan.note}
                  </p>
                  <div className="mt-auto pt-2">
                    <Button asChild className="w-full rounded-full" size="lg">
                      <Link href="/contact">{plan.cta}</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Free Draft Banner */}
          <Card className="rounded-3xl bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 border-border shadow-lg max-w-4xl mx-auto mb-20">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-3xl text-balance">Not sure yet? Get a free draft first.</CardTitle>
              <CardDescription className="text-lg text-pretty max-w-2xl mx-auto">
                We'll build you a free homepage draft with no commitment required. See exactly what your site could look like before you spend a penny.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center pb-8">
              <Button asChild size="lg" className="rounded-full">
                <Link href="/contact">Request Your Free Draft</Link>
              </Button>
            </CardContent>
          </Card>

          {/* Add-ons */}
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">Optional Add-ons</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Enhance any plan with these additional features. Add them at any time.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {addons.map((addon) => (
                <Card key={addon.name} className="rounded-3xl border-border hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{addon.name}</CardTitle>
                    <CardDescription className="text-sm leading-relaxed">
                      {addon.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm font-semibold text-primary">{addon.price}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-20 text-center">
            <Card className="rounded-3xl bg-muted/50 border-border max-w-3xl mx-auto">
              <CardHeader>
                <CardTitle className="text-2xl text-balance">Not sure which plan is right for you?</CardTitle>
                <CardDescription className="text-base text-pretty">
                  Get in touch and we'll recommend the best option for your business and budget. No pressure, no hard sell.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center pb-8">
                <Button asChild size="lg" variant="outline" className="rounded-full">
                  <Link href="/contact">Talk to Us</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  )
}
