import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Target, Eye, BookOpen, Star } from 'lucide-react';

const faculty = [
  { name: "Mr. John Doe", subject: "Mathematics", qualification: "M.Sc. in Mathematics" },
  { name: "Mrs. Jane Smith", subject: "Science", qualification: "M.Sc. in Physics" },
  { name: "Mr. Alex Johnson", subject: "English", qualification: "M.A. in English Literature" },
  { name: "Ms. Sarah Williams", subject: "Social Studies", qualification: "M.A. in History" },
  { name: "Mr. David Brown", subject: "Computer Science", qualification: "M.C.A." },
  { name: "Ms. Emily Jones", subject: "Hindi", qualification: "M.A. in Hindi" },
]

export default function AboutPage() {
  return (
    <div className="bg-background text-foreground">
      <section className="py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">About BSD Public School</h1>
            <p className="max-w-3xl mx-auto text-muted-foreground md:text-xl">A Tradition of Excellence, A Future of Innovation.</p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24 lg:py-32 bg-secondary">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-1">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">Our History</h2>
              <p className="text-muted-foreground">
                Founded in 1958 in Guraini, Jaunpur, BSD Public School has grown from a small community school into a leading educational institution. Our journey has been one of relentless dedication to academic excellence and the holistic development of our students. We are proud of our rich heritage and the thousands of successful alumni who have passed through our halls.
              </p>
              <p className="text-muted-foreground">
                Affiliated with CBSE since 2018, we continue to build on this legacy by embracing modern teaching methodologies and fostering an environment of curiosity and lifelong learning.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Target className="w-8 h-8 text-primary" />
                <CardTitle>Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">To provide a nurturing and challenging environment that empowers students to reach their full potential academically, socially, and emotionally.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Eye className="w-8 h-8 text-primary" />
                <CardTitle>Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">To be a center of educational excellence, preparing students to become compassionate, knowledgeable, and responsible global citizens.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Users className="w-8 h-8 text-primary" />
                <CardTitle>Our Values</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">We value integrity, respect, collaboration, and a passion for learning. These principles guide all our interactions and decisions.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24 lg:py-32 bg-secondary">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl mb-12">Meet Our Leadership</h2>
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="text-center">
                    <CardHeader>
                        <CardTitle>Smt. Asha Singh</CardTitle>
                         <p className="text-muted-foreground">Principal</p>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground text-sm">With over 20 years of experience in educational leadership, our principal is dedicated to fostering a culture of academic excellence and innovation.</p>
                    </CardContent>
                </Card>
                <Card className="text-center">
                    <CardHeader>
                        <CardTitle>Anushka Singh</CardTitle>
                        <p className="text-muted-foreground">Vice Principal</p>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground text-sm">Anushka Singh oversees student affairs and curriculum development, ensuring a supportive and effective learning environment for all.</p>
                    </CardContent>
                </Card>
                <Card className="text-center">
                    <CardHeader>
                        <CardTitle>Riyan Khan</CardTitle>
                         <p className="text-muted-foreground">Director</p>
                    </CardHeader>
                    <CardContent>
                         <p className="text-muted-foreground text-sm">Riyan Khan provides strategic direction and oversight, ensuring the school's long-term success and commitment to its founding values.</p>
                    </CardContent>
                </Card>
             </div>
          </div>
        </section>

        <section className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl mb-12">Our Esteemed Faculty</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {faculty.map((teacher) => (
                <Card key={teacher.name} className="overflow-hidden">
                  <CardContent className="p-4">
                    <h3 className="text-lg font-bold">{teacher.name}</h3>
                    <p className="text-primary font-medium">{teacher.subject}</p>
                    <p className="text-muted-foreground text-sm mt-1">{teacher.qualification}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

    </div>
  );
}
