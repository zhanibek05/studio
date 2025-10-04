// SVGs adapted from https://github.com/lichess-org/lila/tree/master/public/piece/merida
// License: CC0

interface PieceProps {
  className?: string;
}

const WhitePawn = ({ className }: PieceProps) => (
  <svg viewBox="0 0 45 45" className={className}><g fill="#fff" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22.5 9c-2.21 0-4 1.79-4 4 0 .89.29 1.71.78 2.38C17.33 16.5 16 18.59 16 21c0 2.03.94 3.84 2.41 5.03-3 1.06-7.41 5.55-7.41 13.47h23c0-7.92-4.41-12.41-7.41-13.47C28.06 24.84 29 23.03 29 21c0-2.41-1.33-4.5-3.28-5.62.49-.67.78-1.49.78-2.38 0-2.21-1.79-4-4-4z" /></g></svg>
);
const WhiteKnight = ({ className }: PieceProps) => (
  <svg viewBox="0 0 45 45" className={className}><g fill="#fff" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22.5 9c-2.21 0-4 1.79-4 4 0 .89.29 1.71.78 2.38C17.33 16.5 16 18.59 16 21c0 2.03.94 3.84 2.41 5.03-3 1.06-7.41 5.55-7.41 13.47h23c0-7.92-4.41-12.41-7.41-13.47C28.06 24.84 29 23.03 29 21c0-2.41-1.33-4.5-3.28-5.62.49-.67.78-1.49.78-2.38 0-2.21-1.79-4-4-4z" transform="translate(-.8-3.4) scale(1.2)" /></g></svg>
);
const WhiteBishop = ({ className }: PieceProps) => (
  <svg viewBox="0 0 45 45" className={className}><g fill="#fff" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 36c3.39-.97 10.11.43 13.5-2 3.39 2.43 10.11 1.03 13.5 2 0 0 1.65.54 3 0-1.35-.54-3 0-3 0-3.39-.97-10.11.43-13.5-2-3.39 2.43-10.11 1.03-13.5 2 0 0-1.65.54-3 0 1.35-.54 3 0 3 0z" /><path d="M15 32c2.5 2.5 12.5 2.5 15 0 .5-1.5 0-2 0-2 0-2.5-2.5-4-2.5-4 5.5-1.5 6-11.5-5-15.5-11 4-10.5 14-5 15.5 0 0-2.5 1.5-2.5 4 0 0-.5.5 0 2z" /><path d="M25 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 1 1 5 0z" /></g></svg>
);
const WhiteRook = ({ className }: PieceProps) => (
  <svg viewBox="0 0 45 45" className={className}><g fill="#fff" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 39h27v-3H9v3zM12 36v-4h21v4H12zM11 14V9h4v2h5V9h5v2h5V9h4v5" /><path d="M34 14l-3 3H14l-3-3" /><path d="M31 17v12.5H14V17" /><path d="M31 29.5l1.5 2.5h-20l1.5-2.5" /><path d="M14 17h17" fill="none" stroke="#fff" strokeWidth="1" /><path d="M14 29.5h17" fill="none" stroke="#fff" strokeWidth="1" /></g></svg>
);
const WhiteQueen = ({ className }: PieceProps) => (
  <svg viewBox="0 0 45 45" className={className}><g fill="#fff" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M8 12a2 2 0 1 1-4 0 2 2 0 1 1 4 0zM24.5 7.5a2 2 0 1 1-4 0 2 2 0 1 1 4 0zM41 12a2 2 0 1 1-4 0 2 2 0 1 1 4 0zM16 8.5a2 2 0 1 1-4 0 2 2 0 1 1 4 0zM33 9a2 2 0 1 1-4 0 2 2 0 1 1 4 0z" /><path d="M9 26c8.5-1.5 21-1.5 27 0l2-12-7 11V11l-5.5 13.5-3-15-3 15L19.5 11v14L12 14l2 12z" /><path d="M9 26c0 2 1.5 4 4 4h19c2.5 0 4-2 4-4" /><path d="M11 30v4h24v-4" /><path d="M12 34h22v4H12z" /></g></svg>
);
const WhiteKing = ({ className }: PieceProps) => (
  <svg viewBox="0 0 45 45" className={className}><g fill="#fff" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22.5 11.63V6M20 8h5" /><path d="M22.5 25c-6.42 0-12.06-1.37-14.42-3.26-2.35-1.9-.8-7.64.1-10.23C10.5 8.12 16.08 7 22.5 7s12 1.12 14.32 4.14c.9 2.59 2.45 8.33.1 10.23-2.36 1.89-8 3.26-14.42 3.26z" /><path d="M11.5 30c3.04-1.95 9.05-2.95 11-3 1.95.05 7.96 1.05 11 3" /><path d="M12 30v4h22v-4" /><path d="M12 34h22v4H12z" /></g></svg>
);
const BlackPawn = ({ className }: PieceProps) => (
  <svg viewBox="0 0 45 45" className={className}><g fill="#000" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22.5 9c-2.21 0-4 1.79-4 4 0 .89.29 1.71.78 2.38C17.33 16.5 16 18.59 16 21c0 2.03.94 3.84 2.41 5.03-3 1.06-7.41 5.55-7.41 13.47h23c0-7.92-4.41-12.41-7.41-13.47C28.06 24.84 29 23.03 29 21c0-2.41-1.33-4.5-3.28-5.62.49-.67.78-1.49.78-2.38 0-2.21-1.79-4-4-4z" /></g></svg>
);
const BlackKnight = ({ className }: PieceProps) => (
  <svg viewBox="0 0 45 45" className={className}><g fill="#000" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22.5 9c-2.21 0-4 1.79-4 4 0 .89.29 1.71.78 2.38C17.33 16.5 16 18.59 16 21c0 2.03.94 3.84 2.41 5.03-3 1.06-7.41 5.55-7.41 13.47h23c0-7.92-4.41-12.41-7.41-13.47C28.06 24.84 29 23.03 29 21c0-2.41-1.33-4.5-3.28-5.62.49-.67.78-1.49.78-2.38 0-2.21-1.79-4-4-4z" transform="translate(-.8-3.4) scale(1.2)" /></g></svg>
);
const BlackBishop = ({ className }: PieceProps) => (
  <svg viewBox="0 0 45 45" className={className}><g fill="#000" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 36c3.39-.97 10.11.43 13.5-2 3.39 2.43 10.11 1.03 13.5 2 0 0 1.65.54 3 0-1.35-.54-3 0-3 0-3.39-.97-10.11.43-13.5-2-3.39 2.43-10.11 1.03-13.5 2 0 0-1.65.54-3 0 1.35-.54 3 0 3 0z" /><path d="M15 32c2.5 2.5 12.5 2.5 15 0 .5-1.5 0-2 0-2 0-2.5-2.5-4-2.5-4 5.5-1.5 6-11.5-5-15.5-11 4-10.5 14-5 15.5 0 0-2.5 1.5-2.5 4 0 0-.5.5 0 2z" /><path d="M25 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 1 1 5 0z" /></g></svg>
);
const BlackRook = ({ className }: PieceProps) => (
  <svg viewBox="0 0 45 45" className={className}><g fill="#000" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 39h27v-3H9v3zM12 36v-4h21v4H12zM11 14V9h4v2h5V9h5v2h5V9h4v5" /><path d="M34 14l-3 3H14l-3-3" /><path d="M31 17v12.5H14V17" /><path d="M31 29.5l1.5 2.5h-20l1.5-2.5" /><path d="M14 17h17" fill="none" stroke="#000" strokeWidth="1" /><path d="M14 29.5h17" fill="none" stroke="#000" strokeWidth="1" /></g></svg>
);
const BlackQueen = ({ className }: PieceProps) => (
  <svg viewBox="0 0 45 45" className={className}><g fill="#000" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M8 12a2 2 0 1 1-4 0 2 2 0 1 1 4 0zM24.5 7.5a2 2 0 1 1-4 0 2 2 0 1 1 4 0zM41 12a2 2 0 1 1-4 0 2 2 0 1 1 4 0zM16 8.5a2 2 0 1 1-4 0 2 2 0 1 1 4 0zM33 9a2 2 0 1 1-4 0 2 2 0 1 1 4 0z" /><path d="M9 26c8.5-1.5 21-1.5 27 0l2-12-7 11V11l-5.5 13.5-3-15-3 15L19.5 11v14L12 14l2 12z" /><path d="M9 26c0 2 1.5 4 4 4h19c2.5 0 4-2 4-4" /><path d="M11 30v4h24v-4" /><path d="M12 34h22v4H12z" /></g></svg>
);
const BlackKing = ({ className }: PieceProps) => (
  <svg viewBox="0 0 45 45" className={className}><g fill="#000" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22.5 11.63V6M20 8h5" /><path d="M22.5 25c-6.42 0-12.06-1.37-14.42-3.26-2.35-1.9-.8-7.64.1-10.23C10.5 8.12 16.08 7 22.5 7s12 1.12 14.32 4.14c.9 2.59 2.45 8.33.1 10.23-2.36 1.89-8 3.26-14.42 3.26z" /><path d="M11.5 30c3.04-1.95 9.05-2.95 11-3 1.95.05 7.96 1.05 11 3" /><path d="M12 30v4h22v-4" /><path d="M12 34h22v4H12z" /></g></svg>
);

export { WhitePawn, WhiteKnight, WhiteBishop, WhiteRook, WhiteQueen, WhiteKing, BlackPawn, BlackKnight, BlackBishop, BlackRook, BlackQueen, BlackKing };
