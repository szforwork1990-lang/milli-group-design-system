/** Fixed 1280x720 slide canvas with the four background treatments the template defines. */
export interface SlideFrameProps {
  /** black = cover/section/end slides; white = content slides; panel = neutral tint; wash = the "Gradient Slide" mango corner. */
  surface?: 'black' | 'white' | 'panel' | 'wash';
  /**
   * 'rtl' switches to the Farsi stack ('B Yekan','Yekan Bakh VF') and applies
   * direction:rtl; text-align:right; unicode-bidi:isolate inline, which is what a
   * PowerPoint export needs to keep the paragraph right-aligned RTL.
   */
  dir?: 'ltr' | 'rtl';
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function SlideFrame(props: SlideFrameProps): JSX.Element;
