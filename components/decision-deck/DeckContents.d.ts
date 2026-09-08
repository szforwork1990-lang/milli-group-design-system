interface ContentsBand {
  /** What this group of chapters does, e.g. "the answer", "the evidence", "the plan". */
  label?: string;
  /** Chapter range covered, e.g. "01 - 02". */
  range?: string;
  items?: { number?: string; title?: string }[];
  /** One line under the band explaining why these chapters sit together. */
  note?: string;
}
/**
 * Contents slide built as three bands rather than one list, so the reader sees the
 * argument's shape before its parts. The first band is gold; the rest are white.
 */
export interface DeckContentsProps {
  title?: string;
  /** Small line opposite the title, e.g. the document structure. */
  subtitle?: string;
  /** Two to four bands. Three columns fit the 1152px measure exactly. */
  bands?: ContentsBand[];
  dir?: 'rtl' | 'ltr';
  style?: React.CSSProperties;
}
export declare function DeckContents(props: DeckContentsProps): JSX.Element;
