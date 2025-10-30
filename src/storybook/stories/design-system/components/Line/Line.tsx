import React from 'react';
import type { LineProps } from './Line.types';
import { StyledLine } from './Line.styles';

export default function Line({ width = '100%', color, height = 1, style }: LineProps) {
  return (
    <StyledLine style={[{ width, backgroundColor: color }, style]} height={height} />
  );
}
