import styled from '@emotion/native';
import { View } from 'react-native';

export const ProgressBarWrapper = styled(View)(({ theme }) => ({
  width: '100%',
  height: 4,
  backgroundColor: theme.colors.Primary.B10,
  borderRadius: theme.radius.XS,
  overflow: 'hidden',
}));

export const ProgressBarFill = styled(View)<{ progress: number }>(
  ({ theme, progress }) => ({
    height: '100%',
    width: `${progress}%`,
    backgroundColor: theme.colors.Primary.B50,
    borderRadius: theme.radius.XS,
  })
);
