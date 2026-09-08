/**
 * The Milli Group logo, loaded from the vector artwork extracted from the official template.
 * Never re-typeset or redraw the mark — always point at one of these files.
 *
 */
export interface LogoProps {
  /** Which artwork file to use. Pick the colour that contrasts with the slide background. */
  variant?:
    | 'lockup-white' | 'lockup-black'
    | 'lockup-light-white' | 'lockup-light-black'
    | 'mark-white' | 'mark-black'
    | 'wordmark-white' | 'wordmark-black';
  /** Rendered height in px or any CSS length. Defaults to 48. */
  height?: number | string;
  /** Rendered width; set this instead of height for fixed-width slots. */
  width?: number | string;
  /** Path to the assets/logo directory, relative to the consuming page. */
  base?: string;
  style?: React.CSSProperties;
  alt?: string;
}
export declare function Logo(props: LogoProps): JSX.Element;
