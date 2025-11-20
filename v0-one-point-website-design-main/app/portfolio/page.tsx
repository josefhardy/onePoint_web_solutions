'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const categories = ['All', 'Food & Beverage', 'Professional Services', 'Retail & E-commerce', 'Health & Wellness', 'Creative & Arts', 'Home Services']

const projects = [
  {
    name: 'The Garden Café',
    category: 'Food & Beverage',
    description: 'Family-run café featuring an online menu, opening hours, and contact information. Clean layout with appetizing food photography.',
    highlights: ['Mobile-friendly menu', 'Google Maps integration', 'Contact form'],
    image: 'cozy cafe restaurant website with menu and photos',
    color: 'from-amber-500/20 to-orange-500/20',
  },
  {
    name: 'Harrison & Associates',
    category: 'Professional Services',
    description: 'Accountancy firm website with service pages, team bios, and client testimonials. Professional design that builds trust.',
    highlights: ['Service showcase', 'Team profiles', 'Client testimonials'],
    image: 'professional accountant office website clean corporate design',
    color: 'from-blue-500/20 to-indigo-500/20',
  },
  {
    name: 'Evergreen Landscaping',
    category: 'Home Services',
    description: 'Local landscaping company with before/after gallery, service list, and quote request form. Emphasizes quality workmanship.',
    highlights: ['Project gallery', 'Service descriptions', 'Quote request form'],
    image: 'landscaping gardening business website with green nature theme',
    color: 'from-green-500/20 to-emerald-500/20',
  },
  {
    name: 'Serenity Spa & Wellness',
    category: 'Health & Wellness',
    description: 'Wellness center offering massage and beauty treatments. Elegant, calming design with online booking functionality.',
    highlights: ['Online booking', 'Treatment menu', 'Gift vouchers'],
    image: 'spa wellness salon website elegant calming design',
    color: 'from-purple-500/20 to-pink-500/20',
  },
  {
    name: 'Urban Threads Boutique',
    category: 'Retail & E-commerce',
    description: 'Fashion boutique with product catalog, size guides, and secure checkout. Modern, visually-driven shopping experience.',
    highlights: ['Product catalog', 'Shopping cart', 'Secure payments'],
    image: 'fashion clothing boutique ecommerce website modern style',
    color: 'from-rose-500/20 to-red-500/20',
  },
  {
    name: 'Martin Photography',
    category: 'Creative & Arts',
    description: 'Wedding and portrait photographer portfolio showcasing stunning imagery with booking enquiry form.',
    highlights: ['Portfolio galleries', 'Package pricing', 'Contact form'],
    image: 'photography portfolio website with beautiful image galleries',
    color: 'from-slate-500/20 to-gray-500/20',
  },
  {
    name: 'TechFix Solutions',
    category: 'Professional Services',
    description: 'IT support company website with service offerings, support ticket system, and customer login portal.',
    highlights: ['Service pages', 'Support system', 'Client portal'],
    image: 'IT technology support business website modern tech design',
    color: 'from-cyan-500/20 to-blue-500/20',
  },
  {
    name: 'Blossom Florist',
    category: 'Retail & E-commerce',
    description: 'Local florist with seasonal arrangements, wedding packages, and same-day delivery options. Bright, cheerful aesthetic.',
    highlights: ['Product catalog', 'Delivery options', 'Special occasions'],
    image: 'florist flower shop website colorful floral design',
    color: 'from-pink-500/20 to-rose-500/20',
  },
]

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-foreground mb-4 text-balance">Our Portfolio</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty mb-6">
               From clean corporate designs to bold creative layouts, warm hospitality pages, modern e-commerce stores, and functional service-business sites. Whatever your style or industry, we can design a website that fits your brand perfectly.
            </p>
            <p className="text-base text-muted-foreground max-w-3xl mx-auto text-pretty">
              At onePoint we strive to create sites that not only fit your vision but also deliver results
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.name} className="rounded-3xl border-border overflow-hidden group hover:shadow-lg transition-all">
                <div className={`h-64 bg-gradient-to-br ${project.color} flex items-center justify-center overflow-hidden`}>
                  <img
                    src={`/.jpg?height=400&width=600&query=${project.image}`}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-2xl">{project.name}</CardTitle>
                    <span className="text-xs font-medium px-3 py-1 bg-primary/10 text-primary rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <CardDescription className="text-base leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {project.highlights.map((highlight) => (
                      <div key={highlight} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        {highlight}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-20 text-center">
            <Card className="rounded-3xl bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 border-border shadow-lg max-w-3xl mx-auto">
              <CardHeader className="pb-6">
                <CardTitle className="text-3xl mb-4 text-balance">
                  Ready to Start Your Project?
                </CardTitle>
                <CardDescription className="text-lg text-pretty">
                  Let's create something amazing together. Get your free first-draft homepage today.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center pb-8">
                <Button asChild size="lg" className="rounded-full">
                  <Link href="/contact">Request Your Free Draft</Link>
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
