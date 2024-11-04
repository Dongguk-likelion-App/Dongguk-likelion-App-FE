import React from 'react';
import Feather from '@expo/vector-icons/Feather';
import { TitleWrapper, TitleText, MenuButton } from './Title.styles';
import type { TitleProps } from './Title.types';

export default function Title({
  text = 'title text',
  menuIconName = 'menu',
  onPress,
  onMenuPress,
  style,
}: TitleProps) {
  return (
    <TitleWrapper style={style} onPress={onPress} activeOpacity={0.7}>
      <TitleText>{text}</TitleText>
      <MenuButton onPress={onMenuPress}>
        <Feather name={menuIconName as any} size={24} color="#2A2A2E" />
      </MenuButton>
    </TitleWrapper>
  );
}
