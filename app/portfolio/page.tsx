'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { ExternalLink } from 'lucide-react'

const categories = [
  'All',
  'Trades & Services',
  'Food & Beverage',
  'Health & Wellness',
  'Fitness & Sport',
]

const projects = [
  {
    name: 'Volta Electrical',
    category: 'Trades & Services',
    description:
      'Family-run electrical contractor based in Manchester. A fully fledged multi-page site covering services, about, gallery and contact — built to rank locally and convert enquiries.',
    highlights: [
      'Full rewires & fuse boards',
      'EV charger installations',
      'NICEIC registered',
    ],
    image: '/volta.webp',
    url: 'https://josefhardy12.github.io/volta_electrical/',
    color: 'from-yellow-500/20 to-amber-500/20',
  },
  {
    name: 'Ember & Rye',
    category: 'Food & Beverage',
    description:
      'A casual neighbourhood restaurant in Peckham, South London. Seasonal British cooking with West African influences. Warm, editorial design with online reservations and a full menu.',
    highlights: [
      'Online reservations',
      'Seasonal menu',
      'Gallery & about pages',
    ],
    image: '/ember.webp',
    url: 'https://josefhardy12.github.io/ember-rye-digital/',
    color: 'from-orange-500/20 to-red-500/20',
  },
  {
    name: 'Cairn & Co.',
    category: 'Health & Wellness',
    description:
      "A luxury day spa in Edinburgh's New Town, housed in a Georgian townhouse. Clean, minimal design with a full treatments menu, online booking and gift vouchers.",
    highlights: [
      'Full treatments menu',
      'Online booking form',
      'Gift vouchers',
    ],
    image: '/cairn.webp',
    url: 'https://josefhardy12.github.io/cairn-co.-spa/',
    color: 'from-green-500/20 to-emerald-500/20',
  },
  {
    name: 'Iron District Boxing Club',
    category: 'Fitness & Sport',
    description:
      'An independent boxing gym in Bermondsey, South London. Bold, editorial design with a weekly class timetable, coach profiles and membership options.',
    highlights: [
      'Weekly class timetable',
      'Coach profiles',
      'Membership plans',
    ],
    image: '/irondistrict.webp',
    url: 'https://josefhardy12.github.io/iron-district-boxing/',
    color: 'from-red-500/20 to-rose-500/20',
  },
]

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter(
          (project) => project.category === selectedCategory
        )

  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-foreground mb-4 text-balance">
              Our Portfolio
            </h1>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty mb-6">
              A selection of demo sites built across different industries —
              from trades and hospitality to wellness and sport. Each one is
              fully responsive, multi-page and built to convert.
            </p>

            <p className="text-base text-muted-foreground max-w-3xl mx-auto text-pretty">
              Every site is a concept build showing what we can create for your
              business. Your site will be tailored specifically to you.
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((category) => (
              <Button
                key={category}
                variant={
                  selectedCategory === category ? 'default' : 'outline'
                }
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
              <Card
                key={project.name}
                className="rounded-3xl border-border overflow-hidden group hover:shadow-lg transition-all"
              >
                <div
                  className={`h-64 bg-gradient-to-br ${project.color} overflow-hidden`}
                >
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-2xl">
                      {project.name}
                    </CardTitle>

                    <span className="text-xs font-medium px-3 py-1 bg-primary/10 text-primary rounded-full">
                      {project.category}
                    </span>
                  </div>

                  <CardDescription className="text-base leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="space-y-2 mb-6">
                    {project.highlights.map((highlight) => (
                      <div
                        key={highlight}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        {highlight}
                      </div>
                    ))}
                  </div>

                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      className="rounded-full w-full gap-2"
                    >
                      View Live Site
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </a>
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
                  Let&apos;s create something amazing together. Get your free
                  first-draft homepage today — no commitment required.
                </CardDescription>
              </CardHeader>

              <CardContent className="flex justify-center pb-8">
                <Button asChild size="lg" className="rounded-full">
                  <Link href="/contact">
                    Request Your Free Draft
                  </Link>
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