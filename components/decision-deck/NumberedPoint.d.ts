/**
 * A numbered claim with its supporting line. 'stacked' is the three-across treatment
 * under a rule; 'row' is the list treatment with the badge beside a full-width rule.
 */
export interface NumberedPointProps {
  number?: React.ReactNode;
  /** The claim. Write it as a sentence that could be argued with. */
  title?: string;
  /** The reason, one or two lines. */
  body?: string;
  variant?: 'stacked' | 'row';
  /** 'dark' for use inside a black panel. */
  tone?: 'light' | 'dark';
  dir?: 'rtl' | 'ltr';
  style?: React.CSSProperties;
}
export declare function NumberedPoint(props: NumberedPointProps): JSX.Element;
