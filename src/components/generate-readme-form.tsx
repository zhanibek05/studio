'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { generateProjectReadme } from '@/ai/flows/generate-project-readme';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Wand2, Copy } from 'lucide-react';
import React, { useState } from 'react';

const formSchema = z.object({
  projectName: z.string().min(2, {
    message: 'Project name must be at least 2 characters.',
  }),
  projectDescription: z.string().min(10, {
    message: 'Project description must be at least 10 characters.',
  }),
  author: z.string().min(2, 'Author name is required.'),
  dependencies: z.string().min(2, 'At least one dependency is required.'),
  contributionGuidelines: z.string().min(10, {
    message: 'Contribution guidelines must be at least 10 characters.',
  }),
});

export function GenerateReadmeForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [generatedReadme, setGeneratedReadme] = useState('');
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      projectName: 'OpenBoard',
      projectDescription: 'A clone of lichess with readme and or contribution guidline',
      author: 'AI Developer',
      dependencies: 'next, react, tailwindcss, shadcn/ui, chess.js, genkit',
      contributionGuidelines:
        'Fork the repo, create a branch, make changes, and submit a pull request.',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setGeneratedReadme('');
    try {
      const result = await generateProjectReadme(values);
      setGeneratedReadme(result.readmeContent);
      toast({
        title: 'README Generated',
        description: 'Your project README has been successfully generated.',
      });
    } catch (error) {
      console.error('Failed to generate README:', error);
      toast({
        title: 'Generation Failed',
        description: 'Could not generate the README. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  }
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedReadme).then(() => {
        toast({ title: 'Copied to clipboard!' });
    });
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="projectName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Project Name</FormLabel>
                <FormControl>
                  <Input placeholder="My Awesome Project" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="projectDescription"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Project Description</FormLabel>
                <FormControl>
                  <Textarea placeholder="A brief, clear description of what your project does." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="author"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Author</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="dependencies"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Dependencies</FormLabel>
                <FormControl>
                  <Input placeholder="react, next, tailwindcss" {...field} />
                </FormControl>
                <FormDescription>
                  A comma-separated list of major dependencies.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="contributionGuidelines"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Contribution Guidelines</FormLabel>
                <FormControl>
                  <Textarea placeholder="How can others contribute to your project?" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={isLoading} className="w-full">
            <Wand2 className="mr-2 h-4 w-4" />
            {isLoading ? 'Generating...' : 'Generate README'}
          </Button>
        </form>
      </Form>
      {generatedReadme && (
        <div className="mt-8 space-y-4">
            <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold">Generated README</h3>
                <Button variant="ghost" size="icon" onClick={copyToClipboard}>
                    <Copy className="h-4 w-4"/>
                </Button>
            </div>
          <Textarea
            readOnly
            value={generatedReadme}
            className="min-h-[400px] bg-secondary/50 font-mono text-sm"
          />
        </div>
      )}
    </>
  );
}
