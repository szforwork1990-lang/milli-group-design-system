/** Page number + optional deck label + wordmark, at the template's y=671 footer line. */
export interface SlideFooterProps {
  page?: number | string;
  total?: number | string;
  /** The "main file title" strip the template puts along the bottom. */
  label?: string;
  onDark?: boolean;
  style?: React.CSSProperties;
}
export declare function SlideFooter(props: SlideFooterProps): JSX.Element;
