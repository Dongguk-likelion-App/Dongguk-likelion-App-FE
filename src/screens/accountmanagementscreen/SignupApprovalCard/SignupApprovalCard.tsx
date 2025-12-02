import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { useTheme } from '@emotion/react';
import type { SignupApprovalCardProps } from './SignupApprovalCard.types';
import {
  Container,
  Card,
  TopSection,
  NameEmailRow,
  NameText,
  EmailText,
  TagsRow,
  Tag,
  TagText,
  Divider,
  MiddleSection,
  TimeRow,
  Label,
  TimeText,
  ImageSection,
  VerificationImage,
  BottomSection,
  ButtonsRow,
  ApproveButton,
  ApproveButtonText,
  RejectButton,
  RejectButtonText,
} from './SignupApprovalCard.styles';

export default function SignupApprovalCard({
  name,
  email,
  generation,
  role,
  part,
  applicationTime,
  verificationImage,
  onApprove,
  onReject,
}: SignupApprovalCardProps) {
  const theme = useTheme();

  return (
    <Container>
      <Card>
        {/* 상단: 이름, 이메일, 태그 */}
        <TopSection>
          <NameEmailRow>
            <NameText>{name}</NameText>
            <EmailText>{email}</EmailText>
          </NameEmailRow>
          <TagsRow>
            {/* 기수 태그 (주황) */}
            <Tag color="orange">
              <TagText color="orange">{generation}</TagText>
            </Tag>
            {/* 역할 태그 (노랑) */}
            <Tag color="yellow">
              <TagText color="yellow">{role}</TagText>
            </Tag>
            {/* 파트 태그 (초록) */}
            <Tag color="green">
              <TagText color="green">{part}</TagText>
            </Tag>
          </TagsRow>
        </TopSection>

        {/* 구분선 */}
        <Divider />

        {/* 중간: 신청시간, 인증사진 */}
        <MiddleSection>
          <TimeRow>
            <Label>신청시간</Label>
            <TimeText>{applicationTime}</TimeText>
          </TimeRow>
          <ImageSection>
            <Label>인증사진</Label>
            <VerificationImage
              source={{ uri: verificationImage }}
              resizeMode="cover"
            />
          </ImageSection>
        </MiddleSection>

        {/* 하단: 승인/거부 버튼 */}
        <BottomSection>
          <ButtonsRow>
            <ApproveButton onPress={onApprove}>
              <ApproveButtonText>승인</ApproveButtonText>
            </ApproveButton>
            <RejectButton onPress={onReject}>
              <RejectButtonText>거부</RejectButtonText>
            </RejectButton>
          </ButtonsRow>
        </BottomSection>
      </Card>
    </Container>
  );
}
