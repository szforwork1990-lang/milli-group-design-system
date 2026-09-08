/** Slide footer: "MilliGroup" logotype on the outer edge, deck label centred, page counter opposite. */
export interface DeckFooterProps {
  /** Centre label, e.g. the group name and year. */
  label?: string;
  page?: number;
  total?: number;
  /** Ink weight for the surface underneath. */
  tone?: 'light' | 'tint' | 'gold' | 'dark';
  dir?: 'rtl' | 'ltr';
  style?: React.CSSProperties;
}
export declare function DeckFooter(props: DeckFooterProps): JSX.Element;
