import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

export default function ContributePage() {
  const steps = [
    {
      title: '1. Fork & Clone',
      description: 'Fork the repository on GitHub and clone it to your local machine to get started.',
    },
    {
      title: '2. Install Dependencies',
      description: 'Run `npm install` to install all the required project dependencies.',
    },
    {
      title: '3. Create a Branch',
      description: 'Create a new branch for your feature or bug fix. Use a descriptive name (e.g., `feat/new-feature` or `fix/board-bug`).',
    },
    {
      title: '4. Make Your Changes',
      description: 'Implement your changes, following the project\'s coding style and conventions.',
    },
    {
      title: '5. Submit a Pull Request',
      description: 'Push your branch to your fork and open a pull request to the main repository for review.',
    },
  ];

  return (
    <main className="container mx-auto p-4 md:p-8">
      <div className="mx-auto max-w-4xl space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Contribute to OpenBoard
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            We welcome contributions from everyone. Here’s how you can help.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Contribution Steps</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-6">
              {steps.map((step) => (
                <li key={step.title} className="flex items-start gap-4">
                  <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                  <div>
                    <h3 className="font-semibold">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Code of Conduct</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              To ensure a welcoming and inclusive environment, we expect all
              contributors to adhere to our Code of Conduct. Please be
              respectful and constructive in all interactions.
            </p>
            <p>
              Harassment, discrimination, or any form of toxic behavior will not be tolerated.
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
