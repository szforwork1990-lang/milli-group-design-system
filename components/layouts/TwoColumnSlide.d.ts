/**
 * The workhorse content layout: title over two equal columns, each headed by a mango dot.
 */
export interface TwoColumnSlideProps {
  title?: string;
  /** Up to two columns; `body` accepts any node, typically a BulletList. */
  columns?: { head: string; body?: React.ReactNode }[];
  page?: number | string;
  total?: number | string;
  label?: string;
  surface?: 'white' | 'panel';
}
export declare function TwoColumnSlide(props: TwoColumnSlideProps): JSX.Element;
