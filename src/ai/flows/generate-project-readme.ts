'use server';

/**
 * @fileOverview An AI agent for generating a project README file.
 *
 * - generateProjectReadme - A function that generates a README file.
 * - GenerateProjectReadmeInput - The input type for the generateProjectReadme function.
 * - GenerateProjectReadmeOutput - The return type for the generateProjectReadme function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateProjectReadmeInputSchema = z.object({
  projectName: z.string().describe('The name of the project.'),
  projectDescription: z.string().describe('A brief description of the project.'),
  author: z.string().describe('The author of the project.'),
  dependencies: z.string().describe('A comma-separated list of project dependencies.'),
  contributionGuidelines: z.string().describe('The contribution guidelines for the project.'),
});

export type GenerateProjectReadmeInput = z.infer<typeof GenerateProjectReadmeInputSchema>;

const GenerateProjectReadmeOutputSchema = z.object({
  readmeContent: z.string().describe('The generated README file content.'),
});

export type GenerateProjectReadmeOutput = z.infer<typeof GenerateProjectReadmeOutputSchema>;

export async function generateProjectReadme(input: GenerateProjectReadmeInput): Promise<GenerateProjectReadmeOutput> {
  return generateProjectReadmeFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateProjectReadmePrompt',
  input: {schema: GenerateProjectReadmeInputSchema},
  output: {schema: GenerateProjectReadmeOutputSchema},
  prompt: `You are a documentation expert. Generate a comprehensive README file for the following project, including installation instructions, usage examples, contribution guidelines and dependencies.

Project Name: {{{projectName}}}
Project Description: {{{projectDescription}}}
Author: {{{author}}}
Dependencies: {{{dependencies}}}
Contribution Guidelines: {{{contributionGuidelines}}}

Ensure the README is well-formatted and easy to read. Use Markdown formatting.
`,
});

const generateProjectReadmeFlow = ai.defineFlow(
  {
    name: 'generateProjectReadmeFlow',
    inputSchema: GenerateProjectReadmeInputSchema,
    outputSchema: GenerateProjectReadmeOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
