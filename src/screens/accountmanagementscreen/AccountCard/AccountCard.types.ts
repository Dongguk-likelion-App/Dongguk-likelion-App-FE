export interface AccountCardProps {
  id: string;
  name: string;
  email: string;
  tags: {
    label: string;
    type: 'generation' | 'role' | 'part' | 'permission';
  }[];
  isSelected: boolean;
  onSelect: (id: string, isSelected: boolean) => void;
}