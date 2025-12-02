import React from 'react';
import { ProgressBarWrapper, ProgressBarFill } from './ProgressBar.styles';
import type { ProgressBarProps } from './ProgressBar.types';

export default function ProgressBar({
  currentStep,
  totalSteps,
}: ProgressBarProps) {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <ProgressBarWrapper>
      <ProgressBarFill progress={progress} />
    </ProgressBarWrapper>
  );
}
