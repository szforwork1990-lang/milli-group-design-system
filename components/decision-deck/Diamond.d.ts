/**
 * A rounded square rotated 45 degrees — the deck's most repeated shape, used for chapter
 * dots, row badges, bullet markers, stat holders and the corner ornaments. Never draw a
 * plain square: every square in the source deck is rotated. Children are counter-rotated
 * so text inside reads upright.
 */
export interface DiamondProps {
  /** Side length of the unrotated square. The diamond spans size x 1.41. */
  size?: number;
  /** Any CSS colour or gradient. */
  fill?: string;
  /** Corner radius; defaults to 28% of size, the deck's usual roundRect adjustment. */
  radius?: number;
  /** Label — a numeral, an option letter, a sign. Counter-rotated automatically. */
  children?: React.ReactNode;
  /** Styles for the counter-rotated label wrapper. */
  labelStyle?: React.CSSProperties;
  style?: React.CSSProperties;
}
export declare function Diamond(props: DiamondProps): JSX.Element;
