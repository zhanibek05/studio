'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { RotateCcw } from 'lucide-react';
import { GameClock } from './game-clock';
import { useGame } from './game-provider';
import { MoveHistory } from './move-history';
import { Label } from '../ui/label';

export function GamePanel() {
  const { resetGame, gameStatus, aiDifficulty, setAiDifficulty, playerTypes, setPlayerType, isGameOver } = useGame();

  return (
    <Card>
      <CardHeader className="p-4">
        <CardTitle className="text-center text-lg">{gameStatus}</CardTitle>
      </CardHeader>
      <CardContent className="p-4 space-y-4">
        <div className="flex justify-around items-center">
            <GameClock player="b" />
            <GameClock player="w" />
        </div>

        <Tabs defaultValue="history">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="history">Move History</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          <TabsContent value="history" className="mt-4">
            <MoveHistory />
          </TabsContent>
          <TabsContent value="settings" className="mt-4 space-y-4">
            <div className="space-y-2">
                <Label>White Player</Label>
                <Select value={playerTypes.w} onValueChange={(v) => setPlayerType('w', v as any)}>
                    <SelectTrigger><SelectValue/></SelectTrigger>
                    <SelectContent>
                        <SelectItem value="human">Human</SelectItem>
                        <SelectItem value="ai">AI</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className="space-y-2">
                <Label>Black Player</Label>
                <Select value={playerTypes.b} onValueChange={(v) => setPlayerType('b', v as any)}>
                    <SelectTrigger><SelectValue/></SelectTrigger>
                    <SelectContent>
                        <SelectItem value="human">Human</SelectItem>
                        <SelectItem value="ai">AI</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className="space-y-2">
              <Label>AI Difficulty</Label>
              <Select value={aiDifficulty} onValueChange={(v) => setAiDifficulty(v as any)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select AI difficulty" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="easy">Easy</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="hard">Hard</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </TabsContent>
        </Tabs>

        <Button onClick={resetGame} className="w-full" variant={isGameOver ? 'default' : 'secondary'}>
          <RotateCcw className="mr-2 h-4 w-4" />
          New Game
        </Button>
      </CardContent>
    </Card>
  );
}
