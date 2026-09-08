/**
 * The standard content slide of a Milli decision memo. The eyebrow ("chapter N - N-M")
 * sits on the reading edge and the chapter dots on the far edge; the headline is inset
 * past the dots and right-aligns to the reading edge. Below them, the full-bleed header
 * hairline with its 430px gold segment, then the three-part footer. Place body content
 * absolutely inside, normally from y=190 within the 64px margins.
 */
export interface ContentSlideProps {
  /** Headline. Set in Yekan Bakh VF Black; keep it a claim, not a label. */
  title?: string;
  /** Small locator above the headline, e.g. "chapter 1 - 1-2". */
  eyebrow?: string;
  /** Chapter progress squares, e.g. { total: 3, active: 2 }. */
  dots?: { total?: number; active?: number };
  page?: number;
  total?: number;
  /** Footer centre label. */
  label?: string;
  /** Background treatment. 'gold' and 'black' are accents — at most one or two per deck. */
  surface?: 'white' | 'panel' | 'wash' | 'gold' | 'black';
  /** Draws the two-squircle corner ornament bleeding off the bottom-left. */
  ornament?: boolean;
  dir?: 'rtl' | 'ltr';
  /** Override when the headline needs three lines (--fs-dm-title-sm) or is a single short line (--fs-dm-title-xl). */
  titleSize?: string;
  /** Leading inset that clears the chapter dots. 226 for a one-line headline, 310 when it wraps. */
  titleInset?: number;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function ContentSlide(props: ContentSlideProps): JSX.Element;
