/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import { SearchBarWrapper, SearchInput, IconContainer } from './SearchBar.styles';
import SearchBarProps from './SearchBar.types';
import SearchIcon from './SearchIcon';

export default function SearchBar({ placeholder = 'search value', value = '', onChange }: SearchBarProps) {
  const [text, setText] = useState(value);
  const [isFocused, setIsFocused] = useState(false);
  const isEmpty = text.trim().length === 0;

  const handleChange = (input: string) => {
    setText(input);
    onChange && onChange(input);
  };

  return (
    <SearchBarWrapper focused={isFocused}>
      <SearchInput
        placeholder={placeholder}
        placeholderTextColor="#A3A3A3"
        value={text}
        onChangeText={handleChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        isEmpty={isEmpty}
      />
      <IconContainer>
        <SearchIcon width={16} height={16} color="#9CA3AF" />
      </IconContainer>
    </SearchBarWrapper>
  );
};
