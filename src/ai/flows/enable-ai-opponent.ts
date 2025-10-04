'use server';

/**
 * @fileOverview An AI opponent integration for chess games.
 *
 * - getNextMove - A function that determines the AI opponent's next move.
 * - AIOpponentInput - The input type for the getNextMove function.
 * - AIOpponentOutput - The return type for the getNextMove function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'zod';

const AIOpponentInputSchema = z.object({
  boardState: z.string().describe('The current state of the chessboard in FEN notation.'),
  difficulty: z.enum(['easy', 'medium', 'hard']).describe('The difficulty level of the AI opponent.'),
  moveHistory: z.array(z.string()).optional().describe('The history of moves in the game.'),
});
export type AIOpponentInput = z.infer<typeof AIOpponentInputSchema>;

const AIOpponentOutputSchema = z.object({
  nextMove: z.string().describe('The AI opponent\'s next move in algebraic notation.'),
  evaluation: z.number().optional().describe('A numerical evaluation of the board state from the AI\'s perspective.'),
  reason: z.string().optional().describe('The AI\'s reasoning for the move.'),
});
export type AIOpponentOutput = z.infer<typeof AIOpponentOutputSchema>;

export async function getNextMove(input: AIOpponentInput): Promise<AIOpponentOutput> {
  return getNextMoveFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiOpponentPrompt',
  input: {schema: AIOpponentInputSchema},
  output: {schema: AIOpponentOutputSchema},
  prompt: `You are a chess grandmaster AI, playing against a human. Your task is to generate the best next move, given the current board state, difficulty level, and move history.

Board State (FEN): {{{boardState}}}
Difficulty: {{{difficulty}}}
{{#if moveHistory}}
Move History: {{#each moveHistory}}{{{this}}} {{/each}}
{{/if}}

Consider the difficulty level when choosing your move. At easy difficulty, make more passive or exploratory moves. At hard difficulty, play the most optimal move you can calculate.

Return your move in algebraic notation (e.g., e4, Nf3, Rd8).
Include a brief reason for your move and the evalution of the move.`, 
});

const getNextMoveFlow = ai.defineFlow(
  {
    name: 'getNextMoveFlow',
    inputSchema: AIOpponentInputSchema,
    outputSchema: AIOpponentOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
