export interface FooterItem {
  icon: string;
  label: string;
  locked?: boolean;
  disabled?: boolean;
}

export interface FooterProps {
  items: FooterItem[];
  selectedIndex: number;
  onClick: (idx: number) => void;
  style?: any;
}
