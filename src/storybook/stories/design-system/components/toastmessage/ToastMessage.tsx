import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';
import { ToastWrapper, ToastText } from './ToastMessage.styles';
import type { ToastMessageProps } from './ToastMessage.types';

export default function ToastMessage({
  message,
  visible,
  duration = 2000,
  onClose,
  style,
}: ToastMessageProps) {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (visible) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }).start();
      const timer = setTimeout(() => {
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }).start(() => onClose?.());
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [visible, duration, onClose, fadeAnim]);

  if (!visible) return null;

  return (
    <Animated.View style={[{ opacity: fadeAnim }, style]}>
      <ToastWrapper>
        <ToastText>{message}</ToastText>
      </ToastWrapper>
    </Animated.View>
  );
}
