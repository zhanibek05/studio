'use client';
import { useGame } from './game-provider';
import { ScrollArea } from '@/components/ui/scroll-area';

export function MoveHistory() {
  const { history } = useGame();

  return (
    <ScrollArea className="h-48 w-full rounded-md border p-2">
      <div className="grid grid-cols-3 gap-x-2 gap-y-1 text-sm">
        <div className="font-bold text-center">#</div>
        <div className="font-bold">White</div>
        <div className="font-bold">Black</div>
        {Array.from({ length: Math.ceil(history.length / 2) }).map((_, i) => {
          const whiteMove = history[i * 2];
          const blackMove = history[i * 2 + 1];
          return (
            <React.Fragment key={i}>
              <div className="text-muted-foreground text-center">{i + 1}</div>
              <div>{whiteMove?.san}</div>
              <div>{blackMove?.san}</div>
            </React.Fragment>
          );
        })}
      </div>
    </ScrollArea>
  );
}

// Need React for Fragment
import React from 'react';
