/** Type-only "Milli Group" lockup, exactly as the .pptx sets it in slide footers and headers. */
export interface WordmarkProps {
  /** Font size; defaults to the template's 11pt footer size. */
  size?: number | string;
  /** Single colour for both words — the template never splits the colour. */
  color?: string;
  style?: React.CSSProperties;
}
export declare function Wordmark(props: WordmarkProps): JSX.Element;
