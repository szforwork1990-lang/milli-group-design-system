/**
 * Rating drawn from the outer edge inwards — gold for the score, black or grey for the
 * rest. 'bar' is the three-step qualitative rank; 'diamond' is the four-step weight.
 */
export interface DotScaleProps {
  value?: number;
  max?: number;
  /** 'bar' = 18x5 bars; 'diamond' = rotated squares, the deck's weight idiom. */
  shape?: 'bar' | 'diamond';
  /** Diamond side length. Ignored for bars. */
  size?: number;
  /** 'muted' uses #E7E6E6 for the unfilled marks, for dense rows. */
  tone?: 'light' | 'muted';
  dir?: 'rtl' | 'ltr';
  style?: React.CSSProperties;
}
export declare function DotScale(props: DotScaleProps): JSX.Element;
