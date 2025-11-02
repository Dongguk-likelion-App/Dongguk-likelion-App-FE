export interface FilterButtonProps {
  filters: string[];
  selectedIndex: number;
  onChange: (newIndex: number, value: string) => void;
  style?: any;
}
