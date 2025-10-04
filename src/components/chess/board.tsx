'use client';

import { useGame } from '@/components/chess/game-provider';
import { cn } from '@/lib/utils';
import { type Square, type Piece } from 'chess.js';
import { useMemo, useState } from 'react';
import { PieceComponent } from './piece';

export function Board() {
  const { game, board, makeMove, isAITurn } = useGame();
  const [selectedSquare, setSelectedSquare] = useState<Square | null>(null);

  const legalMoves = useMemo(() => {
    if (!selectedSquare) return new Set();
    const moves = game.moves({ square: selectedSquare, verbose: true });
    return new Set(moves.map((move) => move.to));
  }, [selectedSquare, game]);

  const handleSquareClick = (square: Square) => {
    if (isAITurn) return;

    if (selectedSquare) {
      const move = {
        from: selectedSquare,
        to: square,
        promotion: 'q', // auto-promote to queen for simplicity
      };

      const isLegal = game.moves({ square: selectedSquare, verbose: true }).some(m => m.to === square);

      if (isLegal) {
        const success = makeMove(move);
        if (success) {
          setSelectedSquare(null);
        } else {
          // If move is invalid for some reason, reset selection
          setSelectedSquare(null);
        }
      } else {
        // If the new square has a piece of the same color, select it instead
        const piece = game.get(square);
        if (piece && piece.color === game.turn()) {
          setSelectedSquare(square);
        } else {
          setSelectedSquare(null);
        }
      }
    } else {
      const piece = game.get(square);
      if (piece && piece.color === game.turn()) {
        setSelectedSquare(square);
      }
    }
  };

  const renderBoard = () => {
    const squares = [];
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        const isWhite = (i + j) % 2 === 0;
        const square = (String.fromCharCode(97 + j) + (8 - i)) as Square;
        const piece = board[i][j];

        squares.push(
          <div
            key={square}
            className={cn(
              'flex items-center justify-center h-full w-full relative',
              isWhite ? 'bg-secondary/50' : 'bg-primary/90'
            )}
            onClick={() => handleSquareClick(square)}
            role="button"
            aria-label={`Square ${square}`}
          >
            {piece && <PieceComponent piece={piece} />}
            {selectedSquare === square && (
              <div className="absolute inset-0 bg-accent/50" />
            )}
            {legalMoves.has(square) && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-1/3 w-1/3 rounded-full bg-accent/70" />
              </div>
            )}
            <span className="absolute bottom-0 left-1 text-xs font-bold opacity-50 select-none" style={{ color: isWhite ? 'hsl(var(--primary))' : 'hsl(var(--secondary))' }}>
              {j === 0 ? 8-i : ''}
            </span>
             <span className="absolute top-0 right-1 text-xs font-bold opacity-50 select-none" style={{ color: isWhite ? 'hsl(var(--primary))' : 'hsl(var(--secondary))' }}>
              {i === 7 ? String.fromCharCode(97 + j) : ''}
            </span>
          </div>
        );
      }
    }
    return squares;
  };

  return (
    <div className="grid grid-cols-8 grid-rows-8 aspect-square w-full shadow-2xl rounded-lg overflow-hidden border-4 border-primary">
      {renderBoard()}
    </div>
  );
}
