/**
 * Full-width closing band. Black is the default; grey (#D3D2D0) is the quieter version
 * used when the slide above it is already dense. One per slide.
 */
export interface TakeawayProps {
  children?: React.ReactNode;
  tone?: 'black' | 'gold' | 'grey' | 'panel';
  /** Adds the gold pill on the outer edge, and turns black-band text gold. */
  accent?: boolean;
  /** Use 64px side padding when the band runs the full 1280px width. */
  bleed?: boolean;
  dir?: 'rtl' | 'ltr';
  style?: React.CSSProperties;
}
export declare function Takeaway(props: TakeawayProps): JSX.Element;
