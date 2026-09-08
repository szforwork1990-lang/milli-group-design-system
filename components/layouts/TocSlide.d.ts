/**
 * Agenda / table of contents, matching the template's 2x5 numbered grid on black.
 */
export interface TocSlideProps {
  heading?: string;
  /** Up to ten entries; they fill the left column first. */
  items?: string[];
  dir?: 'ltr' | 'rtl';
}
export declare function TocSlide(props: TocSlideProps): JSX.Element;
