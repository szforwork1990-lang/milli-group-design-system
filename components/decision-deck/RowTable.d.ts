interface RowTableColumn {
  label?: React.ReactNode;
  /** Fixed track width in px or a CSS length; omit for an equal fraction of what is left. */
  width?: number | string;
  align?: 'right' | 'left' | 'center';
}
/**
 * Striped comparison table: grey column labels, a 2px rule, then fixed-height rows
 * alternating white and #F6F6F6 with black hairlines. Cells take nodes, so RowBadge,
 * DotScale and ChipRow can sit inside them.
 */
export interface RowTableProps {
  columns?: RowTableColumn[];
  /** Each row is an array of cells (or { cells }). */
  rows?: (React.ReactNode[] | { cells: React.ReactNode[] })[];
  rowHeight?: number;
  /** 0-based index of the recommended row — filled gold with a darker edge. */
  highlight?: number;
  dir?: 'rtl' | 'ltr';
  style?: React.CSSProperties;
}
export declare function RowTable(props: RowTableProps): JSX.Element;
