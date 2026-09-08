/**
 * Deck cover, matching the template's "2_Cover Slide" layout.
 */
export interface CoverSlideProps {
  title?: string;
  description?: string;
  /** Relative path to assets/logo from the page. */
  logoBase?: string;
  dir?: 'ltr' | 'rtl';
}
export declare function CoverSlide(props: CoverSlideProps): JSX.Element;
