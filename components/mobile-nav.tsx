"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" className="md:hidden p-0 w-10 h-10">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px]">
        <div className="flex flex-col space-y-4 mt-8">
          <Link
            href="#services"
            className="text-lg font-medium hover:text-teal-600 transition-colors"
            onClick={() => setOpen(false)}
          >
            Services
          </Link>
          <Link
            href="#about"
            className="text-lg font-medium hover:text-teal-600 transition-colors"
            onClick={() => setOpen(false)}
          >
            About
          </Link>
          <Link
            href="#case-studies"
            className="text-lg font-medium hover:text-teal-600 transition-colors"
            onClick={() => setOpen(false)}
          >
            Case Studies
          </Link>
          <Link
            href="#testimonials"
            className="text-lg font-medium hover:text-teal-600 transition-colors"
            onClick={() => setOpen(false)}
          >
            Testimonials
          </Link>
          <Link
            href="#contact"
            className="text-lg font-medium hover:text-teal-600 transition-colors"
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>
          <div className="flex flex-col gap-2 mt-4">
            <Button variant="outline">Log In</Button>
            <Button className="bg-teal-600 hover:bg-teal-700">Get Started</Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
