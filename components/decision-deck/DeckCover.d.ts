/** Deck cover. Black ground; the title is the decision, the question below it is the ask. */
export interface DeckCoverProps {
  /** Gold kicker with the gradient dot, e.g. the document type. */
  kicker?: string;
  /** The decision itself, not a project name. */
  title?: string;
  /** The question the deck answers, in one sentence. */
  question?: string;
  /** Small line on the top outer corner. */
  note?: string;
  /** Year, bottom outer corner. */
  year?: string;
  /** Logo element — pass the Logo component with variant="lockup-white". */
  logo?: React.ReactNode;
  dir?: 'rtl' | 'ltr';
  style?: React.CSSProperties;
}
export declare function DeckCover(props: DeckCoverProps): JSX.Element;
