export type TagColor = 'red' | 'yellow' | 'pink' | 'green';

export interface TagProps {
  text: string;
  color?: TagColor;
  onPress?: () => void;
  style?: any;
}
