'use client';
import { type Piece } from 'chess.js';
import * as PieceSVGs from './piece-svgs';

interface PieceProps {
  piece: Piece;
}

export const PieceComponent = ({ piece }: PieceProps) => {
  const { type, color } = piece;
  const className = "w-full h-full drop-shadow-lg";

  switch (color) {
    case 'w':
      switch (type) {
        case 'p': return <PieceSVGs.WhitePawn className={className} />;
        case 'r': return <PieceSVGs.WhiteRook className={className} />;
        case 'n': return <PieceSVGs.WhiteKnight className={className} />;
        case 'b': return <PieceSVGs.WhiteBishop className={className} />;
        case 'q': return <PieceSVGs.WhiteQueen className={className} />;
        case 'k': return <PieceSVGs.WhiteKing className={className} />;
      }
      break;
    case 'b':
      switch (type) {
        case 'p': return <PieceSVGs.BlackPawn className={className} />;
        case 'r': return <PieceSVGs.BlackRook className={className} />;
        case 'n': return <PieceSVGs.BlackKnight className={className} />;
        case 'b': return <PieceSVGs.BlackBishop className={className} />;
        case 'q': return <PieceSVGs.BlackQueen className={className} />;
        case 'k': return <PieceSVGs.BlackKing className={className} />;
      }
      break;
  }
  return null;
};
