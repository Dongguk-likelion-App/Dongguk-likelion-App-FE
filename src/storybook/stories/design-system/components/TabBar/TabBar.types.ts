export interface TabBarProps {
  tabs: string[];
  selected: number;
  onSelect: (idx: number) => void;
}
