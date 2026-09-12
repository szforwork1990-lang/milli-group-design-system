/**
 * Chapter progress markers — one rounded diamond per slide in the chapter: pale mango for
 * slides already passed, full mango for the current slide, white for slides still to come.
 * Diamonds, not squares: every square in the deck is rotated 45deg.
 */
export interface ChapterDotsProps {
  /** Slides in this chapter. */
  total?: number;
  /** 1-based index of the current slide. Diamonds before it are pale mango, it is full mango, the rest white. */
  active?: number;
  /** Side length of the unrotated square, in px. The diamond spans size x 1.41. */
  size?: number;
  /** 'dark' brightens the hairline on the white diamonds for black surfaces. */
  tone?: 'light' | 'dark';
  style?: React.CSSProperties;
}
export declare function ChapterDots(props: ChapterDotsProps): JSX.Element;
