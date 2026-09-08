/** A single figure in a diamond beside its caption, split by a short rule. */
export interface StatBlockProps {
  /** The number, formatted as it should read. */
  value?: React.ReactNode;
  /** What the number measures, and its basis. */
  caption?: string;
  tone?: 'black' | 'gold' | 'outline';
  /** Side length of the unrotated square; the diamond and its layout box span size x 1.41. */
  size?: number;
  dir?: 'rtl' | 'ltr';
  style?: React.CSSProperties;
}
export declare function StatBlock(props: StatBlockProps): JSX.Element;
