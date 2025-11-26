import React from 'react';
import {
  Wrapper,
  Option,
  OuterCircle,
  InnerCircle,
  Label,
} from './RadioGroup.styles';
import type { RadioGroupProps } from './RadioGroup.types';

export default function RadioGroup({
  options,
  selected,
  onSelect,
  column = false,
}: RadioGroupProps) {
  return (
    <Wrapper column={column}>
      {options.map((option, i) => (
        <Option key={option} onPress={() => onSelect(i)}>
          <OuterCircle>{selected === i && <InnerCircle />}</OuterCircle>
          <Label>{option}</Label>
        </Option>
      ))}
    </Wrapper>
  );
}
