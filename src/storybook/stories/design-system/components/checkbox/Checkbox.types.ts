export type CheckboxState = 'checked' | 'unchecked' | 'disabled';

export interface CheckboxProps {
  state?: CheckboxState;
  label?: string;
  onPress?: () => void;
  style?: any;
}

