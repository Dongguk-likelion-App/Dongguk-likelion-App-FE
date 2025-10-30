import React from 'react';
import { Wrapper, Option, OuterCircle, InnerCircle, Label } from './RadioGroup.styles';
import type { RadioGroupProps } from './RadioGroup.types';

export default function RadioGroup({ options, selected, onSelect }: RadioGroupProps) {
  return (
    <Wrapper>
      {options.map((option, i) => (
        <Option key={option} onPress={() => onSelect(i)}>
          <OuterCircle>{selected === i && <InnerCircle />}</OuterCircle>
          <Label>{option}</Label>
        </Option>
      ))}
    </Wrapper>
  );
}
