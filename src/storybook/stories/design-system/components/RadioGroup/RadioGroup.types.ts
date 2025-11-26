export interface RadioGroupProps {
  options: string[];
  selected: number;
  onSelect: (idx: number) => void;
  column?: boolean;
}
