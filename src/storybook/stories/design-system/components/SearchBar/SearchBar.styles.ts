import styled from '@emotion/native';

interface SearchBarWrapperProps {
  focused: boolean;
}

interface SearchInputProps {
  isEmpty: boolean;
}

export const SearchBarWrapper = styled.View<SearchBarWrapperProps>(({ theme, focused }) => ({
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: 320,
  paddingVertical: 8,
  paddingHorizontal: 16,
  borderRadius: 12,
  backgroundColor: '#F4F4F5',
  borderWidth: focused ? 1 : 0,
  borderColor: focused ? '#9747ff' : 'transparent',
}));

export const SearchInput = styled.TextInput<SearchInputProps>(({ isEmpty }) => ({
  flex: 1,
  fontSize: 14,
  fontFamily: 'SUITE-SemiBold',
  lineHeight: 20,
  color: isEmpty ? '#A3A3A3' : '#4B5563',
  textAlign: 'left',
  backgroundColor: 'transparent',
}));

export const IconContainer = styled.View({
  width: 16,
  height: 16,
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 10,
});
