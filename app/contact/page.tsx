'use client'

import { useState } from 'react'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Mail, MapPin, Phone } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessName: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', businessName: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-foreground mb-4 text-balance">Get In Touch</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Ready to start your free first-draft homepage? Let's discuss your project
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="rounded-3xl border-border shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                  <CardDescription className="text-base">
                    Fill out the form below and we'll get back to you within 24 hours
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Smith"
                        required
                        className="rounded-xl"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="rounded-xl"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="businessName">Business Name</Label>
                      <Input
                        id="businessName"
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleChange}
                        placeholder="Your Business Name"
                        className="rounded-xl"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project..."
                        required
                        rows={6}
                        className="rounded-xl resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full rounded-full"
                      disabled={isSubmitting || submitted}
                    >
                      {isSubmitting ? 'Sending...' : submitted ? 'Message Sent!' : 'Send Message'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="rounded-3xl border-border shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">Contact Information</CardTitle>
                  <CardDescription>
                    Reach out to us through any of these channels
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground mb-1">Email</p>
                      <a href="mailto:hello@onepoint.solutions" className="text-sm text-muted-foreground hover:text-primary">
                        hello@onepoint.solutions
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground mb-1">Phone</p>
                      <a href="tel:+1234567890" className="text-sm text-muted-foreground hover:text-primary">
                        +1 (234) 567-8900
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground mb-1">Office</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        123 Web Street<br />
                        Suite 100<br />
                        San Francisco, CA 94105
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-3xl bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 border-border">
                <CardHeader>
                  <CardTitle className="text-xl">Free First Draft</CardTitle>
                  <CardDescription>
                    Remember, your first homepage draft is completely free with no commitment required.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
