/** Closing slide: gold-and-white squircle pattern fading into black, thanks line, logo. */
export interface ThanksSlideProps {
  /** Closing line, e.g. thanks. */
  title?: string;
  /** Small line at the bottom outer corner. */
  label?: string;
  /** Logo element — pass Logo with variant="lockup-white". */
  logo?: React.ReactNode;
  dir?: 'rtl' | 'ltr';
  style?: React.CSSProperties;
}
export declare function ThanksSlide(props: ThanksSlideProps): JSX.Element;
