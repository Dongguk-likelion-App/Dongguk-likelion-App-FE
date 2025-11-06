import styled from '@emotion/native';
import { TouchableOpacity } from 'react-native';
import type { TagColor } from './Tag.types';

const getTagColor = (color: TagColor, theme: any) => {
  switch (color) {
    case 'red':
      return theme.colors.Primary.B10; // #FFEDD5
    case 'yellow':
      return theme.colors.Warning.W00; // #F8F4C7
    case 'pink':
      return theme.colors.Warning.R00; // #FFECEC
    case 'green':
      return theme.colors.Warning.G00; // #E6F6E6
    default:
      return theme.colors.Primary.B10;
  }
};

const getFontColor = (color: TagColor, theme: any) => {
  switch (color) {
    case 'red':
      return theme.colors.Primary.B60;
    case 'yellow':
      return theme.colors.Warning.W30;
    case 'pink':
      return theme.colors.Warning.R30;
    case 'green':
      return theme.colors.Warning.G30;
    default:
      return theme.colors.Primary.B30;
  }
};

export const TagWrapper = styled(TouchableOpacity)<{ color: TagColor }>(
  ({ theme, color }) => ({
    backgroundColor: getTagColor(color, theme),
    paddingVertical: theme.space.XS,
    paddingHorizontal: theme.space.S,
    borderRadius: theme.radius.S,
    alignItems: 'center',
    justifyContent: 'center',
  })
);

export const TagText = styled.Text<{ color: TagColor }>(({ theme, color }) => ({
  ...theme.typography.Small1_1,
  color: getFontColor(color, theme),
}));
