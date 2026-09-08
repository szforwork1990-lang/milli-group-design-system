/**
 * Numbered section divider. `surface="white"` is the template's "White Section Slide";
 * `surface="black"` is the layout it calls "Blue Section Slide" (the background is black).
 */
export interface SectionSlideProps {
  title?: string;
  number?: number | string;
  /** Short prefix before the number — "Sec" in the English layout. */
  label?: string;
  surface?: 'white' | 'black';
  dir?: 'ltr' | 'rtl';
}
export declare function SectionSlide(props: SectionSlideProps): JSX.Element;
