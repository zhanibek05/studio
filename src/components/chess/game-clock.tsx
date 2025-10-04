'use client';
import { useGame } from './game-provider';
import { cn } from '@/lib/utils';
import { Clock } from 'lucide-react';

const formatTime = (seconds: number) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
};

interface GameClockProps {
  player: 'w' | 'b';
}

export const GameClock = ({ player }: GameClockProps) => {
  const { game, playerTimes } = useGame();
  const time = playerTimes[player];
  const isActive = game.turn() === player && !game.isGameOver();

  return (
    <div
      className={cn(
        'p-4 rounded-lg flex items-center justify-center gap-4 text-2xl font-mono w-40',
        isActive ? 'bg-accent text-accent-foreground' : 'bg-secondary'
      )}
    >
      <Clock className="h-6 w-6" />
      <span>{formatTime(time)}</span>
    </div>
  );
};
