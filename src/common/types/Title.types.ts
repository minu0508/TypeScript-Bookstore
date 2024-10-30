import { ColorKey, HeadingSize } from '../../styles/theme';

export interface TtitleProps {
  children: React.ReactNode;
  size: HeadingSize;
  color?: ColorKey;
}
