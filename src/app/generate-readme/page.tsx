import { GenerateReadmeForm } from '@/components/generate-readme-form';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

export default function GenerateReadmePage() {
  return (
    <main className="container mx-auto p-4 md:p-8 flex justify-center">
      <Card className="w-full max-w-3xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Generate Project README</CardTitle>
          <CardDescription>Fill in the project details below to let AI generate a professional README file for you.</CardDescription>
        </CardHeader>
        <CardContent>
          <GenerateReadmeForm />
        </CardContent>
      </Card>
    </main>
  );
}
