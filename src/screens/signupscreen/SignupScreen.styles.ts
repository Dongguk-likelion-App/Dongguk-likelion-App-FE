import styled from '@emotion/native';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export const SignupScreenWrapper = styled(View)(({ theme }) => ({
  flex: 1,
  width: '100%',
  backgroundColor: '#FFFFFF',
}));

export const ProgressBarContainer = styled(View)(({ theme }) => ({
  width: '100%',
  paddingHorizontal: theme.space.M,
  paddingTop: theme.space.XL,
  paddingBottom: theme.space.XL,
}));

export const Container = styled(View)(({ theme }) => ({
  flex: 1,
  width: '100%',
  padding: theme.space.M,
  gap: theme.space.XL,
}));

export const InputSection = styled(View)(({ theme }) => ({
  width: '100%',
  gap: theme.space.S,
}));

export const IdInputContainer = styled(View)(({ theme }) => ({
  width: '100%',
  flexDirection: 'row',
  alignItems: 'center',
  gap: theme.space.XS,
}));

export const IdInputWrapper = styled(View)({
  flex: 1,
});

export const DuplicateCheckButton = styled(TouchableOpacity)<{
  disabled?: boolean;
}>(({ theme, disabled }) => ({
  paddingVertical: theme.space.S,
  paddingHorizontal: theme.space.M,
  backgroundColor: theme.colors.Neutral.N00,
  borderRadius: theme.radius.L,
  justifyContent: 'center',
  alignItems: 'center',
  opacity: disabled ? 0.5 : 1,
}));

export const DuplicateCheckText = styled(Text)<{ disabled?: boolean }>(
  ({ theme, disabled }) => ({
    ...theme.typography.Body2_1,
    color: disabled ? theme.colors.Neutral.N30 : theme.colors.Neutral.N70,
  })
);

export const Spacing = styled(View)(({ theme }) => ({
  height: theme.space.M,
}));

export const MessageContainer = styled(View)(({ theme }) => ({
  marginTop: theme.space.XS,
}));

export const SuccessMessage = styled(Text)(({ theme }) => ({
  ...theme.typography.Body2_2,
  color: theme.colors.Warning.G30,
}));

export const ErrorMessage = styled(Text)(({ theme }) => ({
  ...theme.typography.Body2_2,
  color: theme.colors.Warning.R30,
}));

export const FixedButtonContainer = styled(View)(({ theme }) => ({
  width: '100%',
  flexDirection: 'column',
  padding: theme.space.M,
  backgroundColor: '#FFFFFF',
  gap: theme.space.S,
}));

export const LabelText = styled(Text)(({ theme }) => ({
  ...theme.typography.Body1_2,
  color: theme.colors.Neutral.N70,
  marginBottom: theme.space.XS,
}));

export const EmailHelperText = styled(Text)(({ theme }) => ({
  ...theme.typography.Body2_2,
  color: theme.colors.Neutral.N40,
  marginTop: theme.space.XS,
}));

export const EmailInputContainer = styled(View)(({ theme }) => ({
  width: '100%',
  flexDirection: 'row',
  alignItems: 'center',
  gap: theme.space.XS,
}));

export const EmailPrefixWrapper = styled(View)({
  flex: 1,
});

export const AtSymbol = styled(Text)(({ theme }) => ({
  ...theme.typography.Body1_2,
  color: theme.colors.Neutral.N70,
}));

export const EmailDomainWrapper = styled(View)({
  flex: 1,
});

export const ImageUploadContainer = styled(View)(({ theme }) => ({
  width: '100%',
  marginTop: theme.space.XS,
}));

export const UploadButton = styled(TouchableOpacity)(({ theme }) => ({
  width: '100%',
  paddingVertical: theme.space.L,
  paddingHorizontal: theme.space.M,
  backgroundColor: theme.colors.Neutral.N00,
  borderRadius: theme.radius.M,
  alignItems: 'center',
  justifyContent: 'center',
  borderWidth: 1,
  borderColor: theme.colors.Neutral.N10,
  borderStyle: 'dashed',
}));

export const UploadButtonText = styled(Text)(({ theme }) => ({
  ...theme.typography.Body1_2,
  color: theme.colors.Neutral.N50,
}));

export const RemoveImageButton = styled(TouchableOpacity)(({ theme }) => ({
  marginTop: theme.space.S,
  paddingVertical: theme.space.XS,
  paddingHorizontal: theme.space.M,
  backgroundColor: theme.colors.Warning.R00,
  borderRadius: theme.radius.M,
  alignItems: 'center',
}));

export const RemoveImageText = styled(Text)(({ theme }) => ({
  ...theme.typography.Body2_1,
  color: theme.colors.Warning.R30,
}));

export const ImageHelperText = styled(Text)(({ theme }) => ({
  ...theme.typography.Body2_2,
  color: theme.colors.Neutral.N40,
  marginTop: theme.space.XS,
}));

export const ButtonRow = styled(View)(({ theme }) => ({
  flexDirection: 'row',
  gap: theme.space.S,
  width: '100%',
}));

export const PreviousButton = styled(View)({
  width: '100%',
});

export const SubmitButton = styled(View)({
  flex: 1,
});

export const imageStyle = {
  width: '100%' as const,
  height: 200,
  borderRadius: 8,
};
