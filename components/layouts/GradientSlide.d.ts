/**
 * The one slide in the system with a tinted background: a 46% mango wash rising from the
 * lower-left corner. Use it sparingly, for a single pause or highlight slide.
 */
export interface GradientSlideProps {
  title?: string;
  chapter?: string;
  children?: React.ReactNode;
  page?: number | string;
  total?: number | string;
  label?: string;
}
export declare function GradientSlide(props: GradientSlideProps): JSX.Element;
