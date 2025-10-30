import React from 'react';
import { View } from 'react-native';
import { BarWrapper, TabText, Underline, BarLine } from './TabBar.styles';
import type { TabBarProps } from './TabBar.types';

export default function TabBar({ tabs, selected, onSelect }: TabBarProps) {
  return (
    <View>
      <BarWrapper>
        <BarLine />

        {tabs.map((tab, i) => (
          <View
            key={tab}
            style={{ position: 'relative', alignItems: 'center' }}
          >
            <TabText active={selected === i} onPress={() => onSelect(i)}>
              {tab}
            </TabText>
            {selected === i && <Underline />}
          </View>
        ))}
      </BarWrapper>
    </View>
  );
}
