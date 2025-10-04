'use client';
import { Board } from '@/components/chess/board';
import { GamePanel } from '@/components/chess/game-panel';
import { GameProvider } from '@/components/chess/game-provider';

export default function Home() {
  return (
    <GameProvider>
      <main className="container mx-auto p-4 flex flex-col lg:flex-row gap-8 items-start">
        <div className="w-full lg:w-[calc(66.66%-1rem)] mx-auto">
          <div className="aspect-square w-full max-w-[720px] mx-auto">
            <Board />
          </div>
        </div>
        <div className="w-full lg:w-[calc(33.33%-1rem)]">
          <GamePanel />
        </div>
      </main>
    </GameProvider>
  );
}
