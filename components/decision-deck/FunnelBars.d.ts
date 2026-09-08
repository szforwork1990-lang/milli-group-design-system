interface FunnelStep {
  /** What this population is. */
  label?: string;
  /** Its basis — share of the layer above, and of the whole. */
  meta?: string;
  /** The count, formatted as it should read. */
  value?: React.ReactNode;
  /** Bar width as a percentage of the measure. */
  width?: number;
  /** Small gold tag, e.g. to mark the target segment. */
  flag?: string;
  tone?: 'black' | 'gold' | 'grey';
}
/** Narrowing bars from whole population to target, or TAM to SOM. */
export interface FunnelBarsProps {
  steps?: FunnelStep[];
  dir?: 'rtl' | 'ltr';
  style?: React.CSSProperties;
}
export declare function FunnelBars(props: FunnelBarsProps): JSX.Element;
