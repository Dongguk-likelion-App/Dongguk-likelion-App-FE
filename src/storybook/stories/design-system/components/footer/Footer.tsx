import React from 'react';
import { View, TouchableOpacity, Image, ViewStyle } from 'react-native';
import { FooterBarWrapper, FooterItem, FooterLabel } from './Footer.styles';
import theme from '@styles/theme';

export interface FooterBottomBarItem {
  iconActive: any; // require() or { uri }
  iconInactive: any;
  label: string;
}

export interface FooterBottomBarProps {
  items: FooterBottomBarItem[];
  selectedIndex: number;
  onClick: (idx: number) => void;
  style?: ViewStyle;
}

export default function FooterBottomBar({
  items,
  selectedIndex,
  onClick,
  style,
}: FooterBottomBarProps) {
  return (
    <FooterBarWrapper style={style}>
      {items.map((item, idx) => {
        const active = selectedIndex === idx;
        return (
          <TouchableOpacity
            key={item.label}
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              gap: theme.space.XS,
            }}
            onPress={() => onClick(idx)}
          >
            <Image
              source={active ? item.iconActive : item.iconInactive}
              style={{ width: 12, height: 12 }}
              resizeMode="contain"
            />
            <FooterLabel active={active}>{item.label}</FooterLabel>
          </TouchableOpacity>
        );
      })}
    </FooterBarWrapper>
  );
}
