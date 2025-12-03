import React from 'react';
import Checkbox from '../../../storybook/stories/design-system/components/checkbox/Checkbox';
import type { CheckboxState } from '../../../storybook/stories/design-system/components/checkbox/Checkbox.types';

import {
  Container,
  CheckboxWrapper,
  Card,
  NameEmailRow,
  NameText,
  EmailText,
  TagsRow,
} from './AccountCard.styles';
import { AccountCardProps } from './AccountCard.types';
import { Tag } from '@design-system/index';
import { TagColor } from '@design-system/tag/Tag.types';

export default function AccountCard({
  id,
  name,
  email,
  tags,
  isSelected,
  onSelect,
}: AccountCardProps) {

  const isAdmin = tags.some((tag) => tag.type === 'permission');

  const checkboxState: CheckboxState = isAdmin
    ? 'disabled'
    : isSelected
    ? 'checked'
    : 'unchecked';

  const handleToggle = () => {
    if (!isAdmin) {
      onSelect(id, !isSelected);
    }
  };

  const mapTagTypeToColor = (type: string): TagColor => {
  switch (type) {
    case 'generation':
      return 'red';
    case 'role':
      return 'yellow';
    case 'part':
      return 'green';
    case 'permission':
      return 'pink';
    default:
      return 'yellow';
  }
};

  return (
    <Container>

      {/* 체크박스 */}
      <CheckboxWrapper>
        <Checkbox
          state={checkboxState}
          onPress={handleToggle}
        />
      </CheckboxWrapper>

      {/* 계정 카드 컴포넌트 */}
      <Card>
        <NameEmailRow>
          <NameText>{name}</NameText>
          <EmailText>{email}</EmailText>
        </NameEmailRow>

        <TagsRow>
          {tags.map((tag, index) => (
            <Tag
              key={index}
              text={tag.label}
              color={mapTagTypeToColor(tag.type)}
              style={{ marginRight: 8, marginBottom: 8 }}
            />
          ))}
        </TagsRow>
      </Card>

    </Container>
  );
}
