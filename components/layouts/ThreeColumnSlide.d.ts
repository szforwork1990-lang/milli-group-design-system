/**
 * Three-column content layout on the template's 370px / 21px gutter grid.
 */
export interface ThreeColumnSlideProps {
  title?: string;
  columns?: { head: string; body?: React.ReactNode }[];
  page?: number | string;
  total?: number | string;
  label?: string;
  surface?: 'white' | 'panel';
}
export declare function ThreeColumnSlide(props: ThreeColumnSlideProps): JSX.Element;
