/** Bulleted body copy matching the master's bodyStyle (Arial bullet, 12pt Montserrat, 90% leading). */
export interface BulletListProps {
  items?: React.ReactNode[];
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}
export declare function BulletList(props: BulletListProps): JSX.Element;
