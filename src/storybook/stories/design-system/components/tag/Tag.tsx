import React from 'react';
import { TagWrapper, TagText } from './Tag.styles';
import type { TagProps } from './Tag.types';

export default function Tag({ text, color = 'red', onPress, style }: TagProps) {
  return (
    <TagWrapper
      color={color}
      onPress={onPress}
      style={style}
      activeOpacity={0.7}
    >
      <TagText color={color}>{text}</TagText>
    </TagWrapper>
  );
}
