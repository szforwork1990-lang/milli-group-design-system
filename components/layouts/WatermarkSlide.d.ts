/**
 * Open content slide with the wordmark set into the top-left corner. Use it for tables,
 * charts and images that need the full width.
 */
export interface WatermarkSlideProps {
  title?: string;
  /** Small chapter label, top right. */
  chapter?: string;
  children?: React.ReactNode;
  page?: number | string;
  total?: number | string;
  label?: string;
  surface?: 'white' | 'black' | 'panel';
}
export declare function WatermarkSlide(props: WatermarkSlideProps): JSX.Element;
