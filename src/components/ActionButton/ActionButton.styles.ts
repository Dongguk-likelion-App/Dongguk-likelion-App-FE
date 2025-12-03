import styled from '@emotion/native';

export const Button = styled.Pressable<{
  variant: 'primary' | 'secondary' | 'danger';
}>(({ theme, variant }) => {
  const base = {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  };

  switch (variant) {
    case 'primary': // 계정 정지
      return {
        ...base,
        backgroundColor: theme.colors.Neutral.N50,
      };

    case 'secondary': // 권한 위임
      return {
        ...base,
        backgroundColor: theme.colors.Neutral.N00,
      };

    case 'danger': // 선택 해제
      return {
        ...base,
        backgroundColor: theme.colors.Neutral.WHITE,
        borderWidth: 1,
        borderColor: theme.colors.Primary.B50,
      };
  }
});

export const ButtonText = styled.Text<{
  variant: 'primary' | 'secondary' | 'danger';
}>(({ theme, variant }) => {
  const base = {
    fontSize: 14,
    fontFamily: theme.fontFamily.semibold,
  };

  switch (variant) {
    case 'primary':
      return {
        ...base,
        color: theme.colors.Neutral.WHITE,
      };
    case 'secondary':
      return {
        ...base,
        color: theme.colors.Neutral.N70,
      };
    case 'danger':
      return {
        ...base,
        color: theme.colors.Primary.B50,
      };
  }
});
