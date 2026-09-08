/**
 * One dimension of the option space. Show every option that was considered; fill the
 * recommendation gold, keep the rejected ones outlined so the reader can see the trade.
 */
export interface ChipRowProps {
  /** A string is an unselected option; an object sets the state. */
  chips?: (string | { label: string; tone?: 'chosen' | 'viable' | 'option' | 'rejected' })[];
  dir?: 'rtl' | 'ltr';
  style?: React.CSSProperties;
}
export declare function ChipRow(props: ChipRowProps): JSX.Element;
