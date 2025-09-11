import React from 'react';
import {
  Text,
  Image,
  ActivityIndicator,
  StyleProp,
  ViewStyle,
  Pressable,
} from 'react-native';
import { useTheme } from '@emotion/react';

import { Feather } from '@expo/vector-icons';

type size = 'small' | 'big';
type status = 'abled' | 'clicked' | 'disabled';
type button = 'one' | 'two' | 'three' | 'four';
type Triplet = {
  bg?: string;
  border?: string;
  color?: string;
};

type Props = {
  title: string;
  onPress?: () => void;
  size?: size;
  status?: status;
  button?: button;
  instance?: string;
  showIcon?: boolean;
  loading?: boolean;
  style?: StyleProp<ViewStyle>;
};

export default function Button({
  title,
  onPress,
  size = 'big',
  status = 'abled',
  button = 'one',
  instance,
  showIcon = false,
  loading = false,
  style,
}: Props) {
  const theme = useTheme();

  const sizeMap: Record<
    size,
    {
      paddingV: number;
      paddingH: number;
      font: any;
      icon: number;
    }
  > = {
    small: {
      paddingV: theme.grid.margin16,
      paddingH: theme.grid.margin8,
      font: theme.typography.Body2_1,
      icon: 16,
    },
    big: {
      paddingV: theme.grid.margin24,
      paddingH: theme.grid.margin16,
      font: theme.typography.Body1_1,
      icon: 20,
    },
  };

  const buttonStyleMap: Record<button, Record<status, Triplet>> = {
    one: {
      abled: {
        bg: theme.colors.Primary.B50,
        border: theme.colors.Primary.B50,
        color: theme.colors.Neutral.WHITE,
      },
      clicked: {
        bg: theme.colors.Primary.B60,
        border: theme.colors.Primary.B60,
        color: theme.colors.Neutral.WHITE,
      },
      disabled: {
        bg: theme.colors.Primary.B30,
        border: theme.colors.Primary.B30,
        color: theme.colors.Neutral.WHITE,
      },
    },
    two: {
      abled: {
        bg: theme.colors.Neutral.N50,
        border: theme.colors.Neutral.N50,
        color: theme.colors.Neutral.WHITE,
      },
      clicked: {
        bg: theme.colors.Neutral.N70,
        border: theme.colors.Neutral.N70,
        color: theme.colors.Neutral.WHITE,
      },
      disabled: {
        bg: theme.colors.Neutral.N30,
        border: theme.colors.Neutral.N30,
        color: theme.colors.Neutral.N10,
      },
    },
    three: {
      abled: {
        bg: theme.colors.Neutral.N00,
        border: theme.colors.Neutral.N00,
        color: theme.colors.Neutral.N70,
      },
      clicked: {
        bg: theme.colors.Neutral.N10,
        border: theme.colors.Neutral.N10,
        color: theme.colors.Neutral.N70,
      },
      disabled: {
        bg: theme.colors.Neutral.N00,
        border: theme.colors.Neutral.N00,
        color: theme.colors.Neutral.N30,
      },
    },
    four: {
      abled: {
        bg: theme.colors.Neutral.WHITE,
        border: theme.colors.Primary.B50,
        color: theme.colors.Primary.B60,
      },
      clicked: {
        bg: theme.colors.Neutral.WHITE,
        border: theme.colors.Primary.B60,
        color: theme.colors.Primary.B60,
      },
      disabled: {
        bg: theme.colors.Neutral.WHITE,
        border: theme.colors.Primary.B30,
        color: theme.colors.Primary.B30,
      },
    },
  };

  const { paddingV, paddingH, font, icon } = sizeMap[size];

  return (
    <Pressable
      onPress={onPress}
      disabled={status === 'disabled' || loading}
      style={({ pressed }) => {
        const isDisabled = status === 'disabled' || loading;
        const visualStatus: status = isDisabled
          ? 'disabled'
          : pressed
          ? 'clicked'
          : 'abled';
        const triplet = buttonStyleMap[button][visualStatus];

        const shouldShowIcon =
          size === 'big' && showIcon && visualStatus !== 'clicked' && !loading;

        return [
          {
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: shouldShowIcon ? 'space-between' : 'center',
            backgroundColor: triplet.bg,
            borderColor: triplet.border,
            borderWidth: 1,
            borderRadius: theme.radius.M,
            paddingVertical: paddingV,
            paddingHorizontal: paddingH,
          },
          style,
        ];
      }}
    >
      {({ pressed }) => {
        const isDisabled = status === 'disabled' || loading;
        const visualStatus: status = isDisabled
          ? 'disabled'
          : pressed
          ? 'clicked'
          : 'abled';
        const triplet = buttonStyleMap[button][visualStatus];
        const shouldShowIcon =
          size === 'big' && showIcon && visualStatus !== 'clicked' && !loading;

        return loading ? (
          <ActivityIndicator color={triplet.color} />
        ) : (
          <>
            <Text style={[font, { color: triplet.color }]}>{title}</Text>
            {shouldShowIcon &&
              (instance ? (
                <Image
                  source={{ uri: instance }}
                  style={{ width: icon, height: icon }}
                  resizeMode="contain"
                />
              ) : (
                <Feather
                  name="chevron-right"
                  size={icon}
                  color={triplet.color}
                />
              ))}
          </>
        );
      }}
    </Pressable>
  );
}
