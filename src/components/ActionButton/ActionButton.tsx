import React from 'react';
import { Button, ButtonText } from './ActionButton.styles';

interface ActionButtonProps {
  text: string;
  variant?: 'primary' | 'secondary' | 'danger';
  onPress?: () => void;
  style?: any;
}

export default function ActionButton({
  text,
  variant = 'secondary',
  onPress,
  style,
}: ActionButtonProps) {
  return (
    <Button variant={variant} onPress={onPress} style={style}>
      <ButtonText variant={variant}>{text}</ButtonText>
    </Button>
  );
}
