import React from 'react';
import {
  FilterButtonWrapper,
  FilterBtn,
  FilterBtnText,
} from './FilterButton.styles';
import type { FilterButtonProps } from './FilterButton.types';

export default function FilterButton({
  filters,
  selectedIndex,
  onChange,
  style,
}: FilterButtonProps) {
  return (
    <FilterButtonWrapper style={style}>
      {filters.map((filter, idx) => (
        <FilterBtn
          key={filter}
          active={selectedIndex === idx}
          onPress={() => onChange(idx, filter)}
        >
          <FilterBtnText active={selectedIndex === idx}>{filter}</FilterBtnText>
        </FilterBtn>
      ))}
    </FilterButtonWrapper>
  );
}
