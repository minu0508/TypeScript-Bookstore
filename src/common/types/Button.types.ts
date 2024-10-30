import { ButtonScheme, ButtonSize } from '../../styles/theme';

export interface ButtonProps {
  children: React.ReactNode;
  size: ButtonSize;
  scheme: ButtonScheme;
  disabled?: boolean;
  isLoading?: boolean;
}
