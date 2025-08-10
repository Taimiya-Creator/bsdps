import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Atom, Palette, Briefcase, DraftingCompass } from 'lucide-react';

export default function AcademicsPage() {
  return (
    <div className="bg-background text-foreground">
       <section className="relative w-full h-[50vh] flex items-center justify-center text-center text-white">
          <Image
            src="https://placehold.co/1920x800.png"
            alt="Library"
            layout="fill"
            objectFit="cover"
            className="absolute z-0"
            data-ai-hint="school library"
          />
          <div className="relative z-10 bg-black/50 p-8 rounded-lg">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
              Academics at BSD
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl">
              A curriculum designed for inquiry, innovation, and impact.
            </p>
          </div>
        </section>

      <section className="py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Our Core Philosophy</h2>
            <p className="max-w-3xl mx-auto text-muted-foreground md:text-xl">
              We believe in a balanced education that combines rigorous academic training with creative exploration and practical skills. Our curriculum is designed to foster critical thinking, collaboration, and a love for learning that lasts a lifetime.
            </p>
          </div>
        </div>
      </section>

      <section id="programs" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl mb-12">Academic Programs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <Card className="flex flex-col">
                  <CardHeader>
                    <Atom className="w-10 h-10 text-primary mb-4" />
                    <CardTitle>Science</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground">Explore the wonders of biology, chemistry, and physics with hands-on experiments in our state-of-the-art labs.</p>
                  </CardContent>
                </Card>
                <Card className="flex flex-col">
                  <CardHeader>
                    <Palette className="w-10 h-10 text-primary mb-4" />
                    <CardTitle>Arts</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground">Unleash your creativity through our visual arts, music, drama, and dance programs, taught by practicing artists.</p>
                  </CardContent>
                </Card>
                <Card className="flex flex-col">
                  <CardHeader>
                    <Briefcase className="w-10 h-10 text-primary mb-4" />
                    <CardTitle>Commerce</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground">Develop business acumen, financial literacy, and entrepreneurial skills for the modern world.</p>
                  </CardContent>
                </Card>
                <Card className="flex flex-col">
                  <CardHeader>
                    <DraftingCompass className="w-10 h-10 text-primary mb-4" />
                    <CardTitle>Engineering</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground">Design and build the future with our comprehensive pre-engineering track, focusing on robotics, coding, and design thinking.</p>
                  </CardContent>
                </Card>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter">Dedicated Faculty</h2>
                <p className="text-muted-foreground">
                  Our teachers are more than just instructors; they are mentors, researchers, and lifelong learners themselves. With advanced degrees and a passion for their subjects, they are committed to providing personalized attention and inspiring every student to achieve their best.
                </p>
              </div>
              <Image
                src="https://placehold.co/600x400.png"
                alt="Teacher with students"
                width={600}
                height={400}
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
                data-ai-hint="teacher students"
              />
            </div>
          </div>
        </section>

    </div>
  );
}
