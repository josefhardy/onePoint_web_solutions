import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Check, CreditCard, Calendar, Sparkles } from 'lucide-react'

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-foreground mb-4 text-balance">Flexible Pricing Options</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Choose the pricing model that works best for your business needs
            </p>
          </div>

          {/* Upfront Payment */}
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
            {/* Upfront Payment */}
            <Card className="rounded-3xl border-2 border-border shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="pb-8">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                  <CreditCard className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-3xl mb-2">Upfront Payment</CardTitle>
                <CardDescription className="text-base">
                  One-time payment for full website ownership
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Standard Option */}
                <div className="p-6 bg-muted/50 rounded-2xl">
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-4xl font-bold text-foreground">£500</span>
                    <span className="text-muted-foreground">one-time</span>
                  </div>
                  <p className="font-semibold text-foreground mb-3">Standard Website</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Professional design & development</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Mobile responsive</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Basic SEO optimization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Contact forms</span>
                    </li>
                  </ul>
                </div>

                {/* AI-Powered Option */}
                <div className="p-6 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl border-2 border-primary/20">
                  <div className="flex items-center gap-2 mb-3">
                    <Sparkles className="w-5 h-5 text-primary" />
                    <span className="text-sm font-semibold text-primary">AI-Powered</span>
                  </div>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-4xl font-bold text-foreground">£750</span>
                    <span className="text-muted-foreground">one-time</span>
                  </div>
                  <p className="font-semibold text-foreground mb-3">Everything in Standard, plus:</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>AI chatbot for customer support</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Intelligent form processing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Smart content suggestions</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-4 space-y-3 border-t border-border">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">You Own the Website</p>
                      <p className="text-sm text-muted-foreground">Full ownership and control</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">30-Day Support</p>
                      <p className="text-sm text-muted-foreground">Post-launch assistance included</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">Hosting & Maintenance</p>
                      <p className="text-sm text-muted-foreground">Not included (you arrange separately)</p>
                    </div>
                  </div>
                </div>

                <Button asChild className="w-full rounded-full" size="lg">
                  <Link href="/contact">Get Started</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Subscription Model */}
            <Card className="rounded-3xl border-2 border-primary shadow-lg hover:shadow-xl transition-shadow relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="bg-primary text-primary-foreground text-xs font-semibold px-4 py-1.5 rounded-full">
                  Most Popular
                </span>
              </div>
              <CardHeader className="pb-8">
                <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center mb-4">
                  <Calendar className="w-6 h-6 text-secondary" />
                </div>
                <CardTitle className="text-3xl mb-2">Subscription</CardTitle>
                <CardDescription className="text-base">
                  Lower upfront cost with ongoing support included
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Standard Subscription */}
                <div className="p-6 bg-muted/50 rounded-2xl">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-4xl font-bold text-foreground">£400</span>
                    <span className="text-muted-foreground">upfront</span>
                  </div>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-2xl font-semibold text-foreground">£50</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <p className="font-semibold text-foreground mb-3">Standard Subscription</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                      <span>Professional website design</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                      <span>Hosting included</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                      <span>Regular maintenance & updates</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                      <span>Monthly content updates</span>
                    </li>
                  </ul>
                </div>

                {/* AI Subscription */}
                <div className="p-6 bg-gradient-to-br from-secondary/10 to-accent/10 rounded-2xl border-2 border-secondary/20">
                  <div className="flex items-center gap-2 mb-3">
                    <Sparkles className="w-5 h-5 text-secondary" />
                    <span className="text-sm font-semibold text-secondary">AI-Powered</span>
                  </div>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-4xl font-bold text-foreground">£600</span>
                    <span className="text-muted-foreground">upfront</span>
                  </div>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-2xl font-semibold text-foreground">£75</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <p className="font-semibold text-foreground mb-3">Everything in Standard, plus:</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                      <span>AI chatbot integration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                      <span>Smart form processing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                      <span>Advanced analytics</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-4 space-y-3 border-t border-border">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">Hosting Included</p>
                      <p className="text-sm text-muted-foreground">Fast, secure, reliable hosting</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">Maintenance Included</p>
                      <p className="text-sm text-muted-foreground">Updates, backups, and security</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">Priority Support</p>
                      <p className="text-sm text-muted-foreground">Ongoing assistance whenever needed</p>
                    </div>
                  </div>
                </div>

                <Button asChild className="w-full rounded-full" size="lg">
                  <Link href="/contact">Get Started</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <Card className="rounded-3xl bg-muted/50 border-border max-w-3xl mx-auto">
              <CardHeader>
                <CardTitle className="text-2xl text-balance">Not Sure Which Option is Right?</CardTitle>
                <CardDescription className="text-base text-pretty">
                  Contact us for a consultation. We'll help you choose the pricing model that best fits your business goals and budget.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center pb-8">
                <Button asChild size="lg" variant="outline" className="rounded-full">
                  <Link href="/contact">Get a Free Draft</Link>
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
