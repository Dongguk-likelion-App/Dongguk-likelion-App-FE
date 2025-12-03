import React from 'react';
import { ScrollView } from 'react-native';
import type { FilterChipProps, FilterChipGroupProps } from './FilterChip.types';
import * as S from './FilterChip.styles';

export function FilterChip({ label, selected, onPress }: FilterChipProps) {
  return (
    <S.Chip selected={selected} onPress={onPress}>
      <S.ChipText selected={selected}>{label}</S.ChipText>
    </S.Chip>
  );
}

export function FilterChipGroup({
  filters,
  selectedIndex,
  onSelectFilter,
}: FilterChipGroupProps) {
  return (
    <S.ChipGroupWrapper>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 8 }}
      >
        {filters.map((filter, index) => (
          <FilterChip
            key={filter}
            label={filter}
            selected={selectedIndex === index}
            onPress={() => onSelectFilter(index)}
          />
        ))}
      </ScrollView>
    </S.ChipGroupWrapper>
  );
}

export default FilterChip;
