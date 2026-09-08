/** Gold diamond holding a numeral, an option letter, or a direction sign. */
export interface RowBadgeProps {
  children?: React.ReactNode;
  /** 28 / 34 / 42 / 52 / 86 px side length. */
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  /** 'black' inverts it; 'outline' is the unselected state. */
  tone?: 'gold' | 'black' | 'outline';
  style?: React.CSSProperties;
}
export declare function RowBadge(props: RowBadgeProps): JSX.Element;
