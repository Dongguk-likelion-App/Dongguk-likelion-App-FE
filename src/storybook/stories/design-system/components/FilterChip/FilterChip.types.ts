export interface FilterChipProps {
  label: string;
  selected: boolean;
  onPress: () => void;
}

export interface FilterChipGroupProps {
  filters: string[];
  selectedIndex: number;
  onSelectFilter: (index: number) => void;
}
