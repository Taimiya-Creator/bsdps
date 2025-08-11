import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <>
      <main className="flex-1">
        <section className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center text-center text-white">
          <Image
            src="https://bsdpublic.files.wordpress.com/2024/07/bsd-2-1.jpg"
            alt="School Campus"
            layout="fill"
            objectFit="cover"
            className="absolute z-0"
            data-ai-hint="school campus"
          />
          <div className="relative z-10 bg-black/50 p-8 rounded-lg">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
              Welcome to BSD Public School
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl">
              Nurturing Tomorrow's Leaders Through Excellence in Education.
            </p>
            <div className="mt-6 flex justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/apply">Apply Now <ArrowRight className="ml-2" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Our School</h2>
                <p className="text-muted-foreground md:text-xl">
                  BSD Public School has been a beacon of learning and community since 1958. We are dedicated to providing a supportive and challenging environment where students can thrive academically, creatively, and personally.
                </p>
                 <p className="text-muted-foreground md:text-xl">
                  Our experienced faculty are leaders in their fields, committed to inspiring a passion for lifelong learning in every student.
                </p>
              </div>
               <Image
                  src="https://bsdpublic.files.wordpress.com/2024/07/20240126_114328-1.jpg"
                  alt="Students learning"
                  width={600}
                  height={400}
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
                  data-ai-hint="students learning"
                />
            </div>
          </div>
        </section>
        
        <section id="academics" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl mb-12">Our Programs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Science</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Explore the wonders of biology, chemistry, and physics with hands-on experiments.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Arts</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Unleash your creativity through our visual and performing arts programs.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Commerce</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Develop business acumen and financial literacy for the modern world.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Engineering</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Design and build the future with our comprehensive engineering track.</p>
                  </CardContent>
                </Card>
            </div>
          </div>
        </section>
        
         <section id="student-life" className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl mb-12">Student Life</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Image src="https://bsdpublic.files.wordpress.com/2024/07/20240126_114400-1.jpg" alt="Sports day" width={400} height={300} className="rounded-lg object-cover" data-ai-hint="students sports" />
               <Image src="https://bsdpublic.files.wordpress.com/2024/07/20240126_114434-1.jpg" alt="Science fair" width={400} height={300} className="rounded-lg object-cover" data-ai-hint="science fair" />
                <Image src="https://bsdpublic.files.wordpress.com/2024/07/20240126_114502-1.jpg" alt="Music class" width={400} height={300} className="rounded-lg object-cover" data-ai-hint="music class" />
                 <Image src="https://bsdpublic.files.wordpress.com/2024/07/20240126_114328-1.jpg" alt="Library" width={400} height={300} className="rounded-lg object-cover" data-ai-hint="school library" />
                  <Image src="https://bsdpublic.files.wordpress.com/2024/07/20240126_114349-1.jpg" alt="Art class" width={400} height={300} className="rounded-lg object-cover" data-ai-hint="art class" />
                   <Image src="https://bsdpublic.files.wordpress.com/2024/07/20240126_114413-1.jpg" alt="Graduation" width={400} height={300} className="rounded-lg object-cover" data-ai-hint="student graduation" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
