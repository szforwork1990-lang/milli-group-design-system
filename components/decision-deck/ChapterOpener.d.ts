/**
 * Chapter divider slide. Black ground with the concentric-squircle corner ornament,
 * a gold rule across the top of the outer half, the chapter numeral and title, a short
 * abstract, and an "in this chapter" list of what the chapter delivers.
 */
export interface ChapterOpenerProps {
  /** Chapter numeral, as displayed — pass the localised digits you want to see. */
  number?: string;
  title?: string;
  /** Two or three lines saying what the chapter argues. Not a summary of findings. */
  abstract?: string;
  /** Label above the contents list, e.g. "in this chapter". */
  contentsLabel?: string;
  /** One line per slide or per claim in the chapter. Three to five reads best. */
  contents?: string[];
  dir?: 'rtl' | 'ltr';
  style?: React.CSSProperties;
}
export declare function ChapterOpener(props: ChapterOpenerProps): JSX.Element;
