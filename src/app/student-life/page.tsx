import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SwatchBook, Medal, Drama } from 'lucide-react';

export default function StudentLifePage() {
  return (
    <div className="bg-background text-foreground">
      <section className="py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">Student Life at BSD</h1>
            <p className="max-w-3xl mx-auto text-muted-foreground md:text-xl">Learning Beyond the Classroom.</p>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl mb-12">Clubs & Activities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <SwatchBook className="w-8 h-8 text-primary" />
                <CardTitle>Arts & Culture</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">From the painting club to the school choir, students can explore their artistic talents and express their creativity.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Medal className="w-8 h-8 text-primary" />
                <CardTitle>Athletics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">We offer a wide range of sports including cricket, basketball, and athletics, promoting teamwork and physical fitness.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Drama className="w-8 h-8 text-primary" />
                <CardTitle>Performing Arts</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Our drama club and debate team help students build confidence and public speaking skills through regular performances and competitions.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="gallery" className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl mb-12">Campus Moments</h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
             <Image src="https://bsdpublic.wordpress.com/wp-content/uploads/2024/12/img-20241130-wa00108512621830963700095.jpg" alt="Student Life 1" width={400} height={300} className="rounded-lg object-cover w-full aspect-[4/3]" data-ai-hint="students classroom" />
             <Image src="https://bsdpublic.wordpress.com/wp-content/uploads/2025/01/img-20250126-wa01086560046345694459814.jpg" alt="Student Life 2" width={400} height={300} className="rounded-lg object-cover w-full aspect-[4/3]" data-ai-hint="school event" />
             <Image src="https://bsdpublic.wordpress.com/wp-content/uploads/2024/12/image_editor_output_image1175559294-17330529511767410884181698057418.png" alt="Student Life 3" width={400} height={300} className="rounded-lg object-cover w-full aspect-[4/3]" data-ai-hint="school event" />
             <Image src="https://bsdpublic.wordpress.com/wp-content/uploads/2024/12/img-20241130-wa00191071599275774132406.jpg" alt="Student Life 4" width={400} height={300} className="rounded-lg object-cover w-full aspect-[4/3]" data-ai-hint="school event" />
             <Image src="https://bsdpublic.files.wordpress.com/2024/07/20240126_114349-1.jpg" alt="Art class" width={400} height={300} className="rounded-lg object-cover w-full aspect-[4/3]" data-ai-hint="art class" />
             <Image src="https://bsdpublic.wordpress.com/wp-content/uploads/2025/01/riyan_20250126_1000473806793646282110540542.jpg" alt="Graduation" width={400} height={300} className="rounded-lg object-cover w-full aspect-[4/3]" data-ai-hint="student graduation" />
          </div>
        </div>
      </section>
    </div>
  );
}
