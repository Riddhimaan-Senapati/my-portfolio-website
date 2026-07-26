'use client'

import * as React from 'react'
import Link from 'next/link'
// import { ThemeToggle } from '@/components/theme-toggle' // Old toggle
import { ThemeSwitcher } from '@/components/theme-switcher' // New switcher

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'

// Section links are absolute (`/#about`) so they still reach the homepage from /blog.
const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/#about', label: 'About Me' },
  { href: '/#experience', label: 'Experience' },
  { href: '/#skills', label: 'Skills' },
  { href: '/#projects', label: 'Projects' },
  { href: '/#certifications', label: 'Certifications' },
  { href: '/blog', label: 'Blog' },
  { href: '/#contact', label: 'Contact' },
]

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <NavigationMenu>
          <NavigationMenuList className="flex-wrap">
            {navLinks.map((link) => (
              <NavigationMenuItem key={link.href}>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href={link.href}>{link.label}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <div className="ml-auto">
          {/* <ThemeToggle /> */}
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  )
}

export default Header
