import React from 'react';
import Feather from '@expo/vector-icons/Feather';
import {
  CheckboxWrapper,
  CheckboxSquare,
  CheckboxLabel,
} from './Checkbox.styles';
import type { CheckboxProps } from './Checkbox.types';

export default function Checkbox({
  state = 'unchecked',
  label,
  onPress,
  style,
}: CheckboxProps) {
  const isDisabled = state === 'disabled';

  return (
    <CheckboxWrapper
      state={state}
      onPress={isDisabled ? undefined : onPress}
      style={style}
      activeOpacity={0.7}
      disabled={isDisabled}
    >
      <CheckboxSquare state={state}>
        {state === 'checked' && (
          <Feather name="check" size={12} color="#FFFFFF" />
        )}
      </CheckboxSquare>
      {label && <CheckboxLabel state={state}>{label}</CheckboxLabel>}
    </CheckboxWrapper>
  );
}
