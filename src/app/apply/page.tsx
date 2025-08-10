import { AdmissionForm } from '@/components/admission-form';

export default function ApplyPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-8 md:p-12 lg:p-24 bg-background">
      <div className="w-full max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold font-headline text-foreground">
            School Admission Application
          </h1>
          <p className="text-muted-foreground mt-2">
            Your journey to excellence starts here. Please fill out the form below.
          </p>
        </div>
        <AdmissionForm />
      </div>
    </main>
  );
}
