import type {Metadata} from 'next';
import Link from 'next/link';
import { School } from 'lucide-react';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: 'BSD Public School',
  description: 'Admission page for BSD Public School',
};

function Header() {
  return (
    <header className="bg-background/80 backdrop-blur-sm sticky top-0 z-50 border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg">
          <School className="h-6 w-6 text-primary" />
          <span>BSD Public School</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/about" className="text-foreground/80 hover:text-foreground transition-colors">About</Link>
          <Link href="/academics" className="text-foreground/80 hover:text-foreground transition-colors">Academics</Link>
          <Link href="/apply" className="text-foreground/80 hover:text-foreground transition-colors">Admissions</Link>
          <Link href="/student-life" className="text-foreground/80 hover:text-foreground transition-colors">Student Life</Link>
          <Link href="/contact" className="text-foreground/80 hover:text-foreground transition-colors">Contact</Link>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto py-8 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-2">BSD Public School</h3>
            <p className="text-sm">Guraini, Jaunpur</p>
            <p className="text-sm">contact@bsdpublicschool.edu</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-1 text-sm">
              <li><Link href="/about" className="hover:underline">About Us</Link></li>
              <li><Link href="/apply" className="hover:underline">Admissions</Link></li>
              <li><Link href="/academics" className="hover:underline">Academics</Link></li>
               <li><Link href="/student-life" className="hover:underline">Student Life</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact</Link></li>
            </ul>
          </div>
           <div>
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              {/* Add social icons here */}
            </div>
          </div>
        </div>
        <div className="border-t mt-8 pt-4 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} BSD Public School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
