import type {Metadata} from 'next';
import Link from 'next/link';
import { School, Briefcase, Menu } from 'lucide-react';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'BSD Public School',
  description: 'Admission page for BSD Public School',
};

function Header() {
  const navLinks = [
    { href: "/about", label: "About" },
    { href: "/academics", label: "Academics" },
    { href: "/apply", label: "Admissions" },
    { href: "/student-life", label: "Student Life" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="bg-background/80 backdrop-blur-sm sticky top-0 z-50 border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg">
          <School className="h-6 w-6 text-primary" />
          <span>BSD Public School</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-foreground/80 hover:text-foreground transition-colors">
              {link.label}
            </Link>
          ))}
          <Button asChild>
            <Link href="/portal/login" className="flex items-center gap-2">
              <Briefcase className="h-4 w-4" />
              Digital Portal
            </Link>
          </Button>
        </nav>
         <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="grid gap-4 p-4">
                 <Link href="/" className="flex items-center gap-2 font-bold text-lg">
                  <School className="h-6 w-6 text-primary" />
                  <span>BSD Public School</span>
                </Link>
                <nav className="grid gap-2 text-lg font-medium">
                  {navLinks.map((link) => (
                    <Link key={link.href} href={link.href} className="block px-2 py-1 text-foreground/80 hover:text-foreground transition-colors">
                      {link.label}
                    </Link>
                  ))}
                   <Button asChild className="mt-4">
                    <Link href="/portal/login" className="flex items-center gap-2">
                      <Briefcase className="h-5 w-5" />
                      Digital Portal
                    </Link>
                  </Button>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
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
               <li><Link href="/portal/login" className="hover:underline">Digital Portal</Link></li>
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
          <p className="text-xs text-muted-foreground mt-2">Design by Zenova (Taimiya)</p>
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
