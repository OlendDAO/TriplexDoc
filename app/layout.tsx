import { NextraLogo, VercelLogo } from '@components/icons'
import type { Metadata } from 'next'
import { Footer, Layout, Link, Navbar } from 'nextra-theme-docs'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import type { ReactNode } from 'react'
import './globals.css'

export const metadata: Metadata = {
  description: 'Make beautiful websites with Next.js & MDX.',
  metadataBase: new URL('https://nextra.site'),
  keywords: [
    'Nextra',
    'Next.js',
    'React',
    'JavaScript',
    'MDX',
    'Markdown',
    'Static Site Generator'
  ],
  generator: 'Next.js',
  applicationName: 'Nextra',
  appleWebApp: {
    title: 'Nextra'
  },
  title: {
    default: 'Nextra – Next.js Static Site Generator',
    template: '%s | Nextra'
  },
  openGraph: {
    url: './',
    siteName: 'Nextra',
    locale: 'en_US',
    type: 'website'
  },
  other: {
    'msapplication-TileColor': '#fff'
  },
  twitter: {
    site: 'https://nextra.site'
  },
  alternates: {
    canonical: './'
  }
}

const navbar = (
  <Navbar
    logo={
      <NextraLogo
        height="20"
      />
    }
    projectLink="https://github.com/shuding/nextra"
  />
)
const footer = (
  <Footer className="flex-col items-center md:items-start">
    <a
      className="x:focus-visible:nextra-focus flex items-center gap-1"
      target="_blank"
      rel="noreferrer"
      title="vercel.com homepage"
      href="https://vercel.com?utm_source=nextra.site"
    >
      Powered by
      <VercelLogo height="20" />
    </a>
    <p className="mt-6 text-xs">
      © {new Date().getFullYear()} The Nextra Project.
    </p>
  </Footer>
)

export default async function RootLayout({
  children
}: {
  children: ReactNode
}) {
  const pageMap = await getPageMap()
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body>
        <Layout
          navbar={navbar}
          footer={footer}
          pageMap={pageMap}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
