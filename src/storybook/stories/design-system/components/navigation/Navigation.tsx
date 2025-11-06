import React from 'react';
import Feather from '@expo/vector-icons/Feather';
import {
  NavigationWrapper,
  BackButton,
  PageNameText,
} from './Navigation.styles';
import type { NavigationProps } from './Navigation.types';

export default function Navigation({
  pageName,
  backIconName = 'chevron-left',
  onBackPress,
  onPress,
  style,
}: NavigationProps) {
  return (
    <NavigationWrapper style={style} onPress={onPress} activeOpacity={0.7}>
      <BackButton onPress={onBackPress}>
        <Feather name={backIconName as any} size={20} color="#000000" />
      </BackButton>
      <PageNameText>{pageName}</PageNameText>
    </NavigationWrapper>
  );
}
