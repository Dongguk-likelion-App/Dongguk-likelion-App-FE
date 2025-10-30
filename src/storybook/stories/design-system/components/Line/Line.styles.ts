import styled from '@emotion/native';
import type { LineProps } from './Line.types';

export const StyledLine = styled.View<Required<Pick<LineProps, 'height'>>>(
  ({ theme, height }) => ({
    width: '100%',
    height: height,
    backgroundColor: theme.colors.Neutral.N10,
  })
);
