/**
 * Chapter progress markers — one rounded diamond per slide in the chapter, gold up to the
 * current slide. Diamonds, not squares: every square in the deck is rotated 45deg.
 */
export interface ChapterDotsProps {
  /** Slides in this chapter. */
  total?: number;
  /** 1-based index of the current slide; diamonds 1..active are gold. */
  active?: number;
  /** Side length of the unrotated square, in px. The diamond spans size x 1.41. */
  size?: number;
  /** 'dark' lightens the unfilled diamonds for black surfaces. */
  tone?: 'light' | 'dark';
  style?: React.CSSProperties;
}
export declare function ChapterDots(props: ChapterDotsProps): JSX.Element;
