'use client'

import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-blue-600">
          MyPortfolio
        </Link>
        <div className="space-x-6">
          <Link href="#about" className="hover:text-blue-500">About</Link>
          <Link href="#projects" className="hover:text-blue-500">Projects</Link>
          <Link href="#contact" className="hover:text-blue-500">Contact</Link>
        </div>
      </div>
    </nav>
  )
}
