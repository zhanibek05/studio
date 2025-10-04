'use client';

import { getNextMove } from '@/ai/flows/enable-ai-opponent';
import { useToast } from '@/hooks/use-toast';
import { Chess, type Piece, type Square } from 'chess.js';
import type { Move } from 'chess.js';
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

type PlayerType = 'human' | 'ai';
type Difficulty = 'easy' | 'medium' | 'hard';

interface GameContextType {
  game: Chess;
  board: (Piece | null)[][];
  makeMove: (move: string | Move) => boolean;
  resetGame: () => void;
  fen: string;
  pgn: string;
  isGameOver: boolean;
  gameStatus: string;
  history: Move[];
  playerTypes: { w: PlayerType; b: PlayerType };
  setPlayerType: (color: 'w' | 'b', type: PlayerType) => void;
  aiDifficulty: Difficulty;
  setAiDifficulty: (difficulty: Difficulty) => void;
  isAITurn: boolean;
  playerTimes: { w: number; b: number };
}

const GameContext = createContext<GameContextType | null>(null);

const INITIAL_TIME = 300; // 5 minutes in seconds

export const GameProvider = ({ children }: { children: React.ReactNode }) => {
  const [game, setGame] = useState(new Chess());
  const [fen, setFen] = useState(game.fen());
  const [isAITurn, setIsAITurn] = useState(false);
  const [playerTypes, setPlayerTypes] = useState<{ w: PlayerType; b: PlayerType }>({ w: 'human', b: 'ai' });
  const [aiDifficulty, setAiDifficulty] = useState<Difficulty>('medium');
  const [playerTimes, setPlayerTimes] = useState({ w: INITIAL_TIME, b: INITIAL_TIME });
  const { toast } = useToast();

  const isGameOver = game.isGameOver();
  const turn = game.turn();

  useEffect(() => {
    if (isGameOver) return;

    const timer = setInterval(() => {
      setPlayerTimes((prevTimes) => {
        const newTimes = { ...prevTimes };
        if (turn === 'w') {
          newTimes.w = Math.max(0, newTimes.w - 1);
        } else {
          newTimes.b = Math.max(0, newTimes.b - 1);
        }
        if (newTimes.w === 0 || newTimes.b === 0) {
            toast({ title: "Time's up!", description: `${turn === 'w' ? 'Black' : 'White'} wins on time.` });
            // The game over state will be updated by chess.js, but this is a fallback.
        }
        return newTimes;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [turn, isGameOver, toast]);


  const getGameStatus = useCallback(() => {
    if (game.isCheckmate()) return `Checkmate! ${game.turn() === 'w' ? 'Black' : 'White'} wins.`;
    if (game.isDraw()) return 'Draw!';
    if (game.isStalemate()) return 'Stalemate!';
    if (game.inCheck()) return 'Check!';
    return `${game.turn() === 'w' ? 'White' : 'Black'} to move.`;
  }, [game]);


  const makeMove = useCallback(
    (move: string | Move) => {
      try {
        const result = game.move(move);
        if (result) {
          setFen(game.fen());
          return true;
        }
      } catch (e) {
        return false;
      }
      return false;
    },
    [game]
  );
  
  const resetGame = useCallback(() => {
    const newGame = new Chess();
    setGame(newGame);
    setFen(newGame.fen());
    setPlayerTimes({ w: INITIAL_TIME, b: INITIAL_TIME });
  }, []);

  const setPlayerType = (color: 'w' | 'b', type: PlayerType) => {
    setPlayerTypes(prev => ({...prev, [color]: type}));
    resetGame();
  }

  useEffect(() => {
    const currentPlayerType = playerTypes[game.turn()];
    const isCurrentTurnAI = currentPlayerType === 'ai';
    setIsAITurn(isCurrentTurnAI);

    if (isCurrentTurnAI && !game.isGameOver()) {
      const makeAiMove = async () => {
        try {
          const { nextMove } = await getNextMove({
            boardState: game.fen(),
            difficulty: aiDifficulty,
            moveHistory: game.history(),
          });
          if (nextMove) {
            makeMove(nextMove);
          } else {
             toast({ title: 'AI Error', description: 'AI failed to suggest a move.', variant: 'destructive' });
          }
        } catch (error) {
          console.error('AI move error:', error);
          toast({ title: 'AI Error', description: 'Could not get AI move.', variant: 'destructive' });
        }
      };
      
      // Add a small delay for better UX
      const timeoutId = setTimeout(makeAiMove, 1000);
      return () => clearTimeout(timeoutId);
    }
  }, [game.fen(), playerTypes, aiDifficulty, game, makeMove, toast]);


  return (
    <GameContext.Provider
      value={{
        game,
        board: game.board(),
        makeMove,
        resetGame,
        fen,
        pgn: game.pgn(),
        isGameOver,
        gameStatus: getGameStatus(),
        history: game.history({ verbose: true }),
        playerTypes,
        setPlayerType,
        aiDifficulty,
        setAiDifficulty,
        isAITurn,
        playerTimes
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
};
