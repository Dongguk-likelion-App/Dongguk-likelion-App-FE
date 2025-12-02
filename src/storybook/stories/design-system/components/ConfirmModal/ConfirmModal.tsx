import React from 'react';
import { Modal, TouchableOpacity } from 'react-native';
import { useTheme } from '@emotion/react';
import type { ConfirmModalProps, RejectModalProps } from './ConfirmModal.types';
import * as S from './ConfirmModal.styles';

export function ApproveModal({ visible, onConfirm, onCancel }: Omit<ConfirmModalProps, 'type'>) {
  return (
    <Modal transparent visible={visible} animationType="fade">
      <S.Overlay>
        <TouchableOpacity
          activeOpacity={1}
          onPress={onCancel}
          style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
        />
        <S.ModalContainer>
          <S.ContentWrapper>
            <S.TopSection>
              <S.IconWrapper>
                <S.IconInner>
                  <S.IconBar />
                  <S.IconDot />
                </S.IconInner>
              </S.IconWrapper>
              <S.TextWrapper>
                <S.MainText>회원가입을 승인하시겠습니까?</S.MainText>
                <S.SubText>유저의 회원가입이 승인됩니다.</S.SubText>
              </S.TextWrapper>
            </S.TopSection>
            <S.ButtonRow>
              <S.ConfirmButton onPress={onConfirm}>
                <S.ConfirmButtonText>확인</S.ConfirmButtonText>
              </S.ConfirmButton>
              <S.CancelButton onPress={onCancel}>
                <S.CancelButtonText>취소</S.CancelButtonText>
              </S.CancelButton>
            </S.ButtonRow>
          </S.ContentWrapper>
        </S.ModalContainer>
      </S.Overlay>
    </Modal>
  );
}

export function RejectModal({
  visible,
  reason,
  onReasonChange,
  onConfirm,
  onCancel,
}: RejectModalProps) {
  const theme = useTheme();

  return (
    <Modal transparent visible={visible} animationType="fade">
      <S.Overlay>
        <TouchableOpacity
          activeOpacity={1}
          onPress={onCancel}
          style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
        />
        <S.ModalContainer>
          <S.ContentWrapper>
            <S.TopSection>
              <S.IconWrapper>
                <S.IconInner>
                  <S.IconBar />
                  <S.IconDot />
                </S.IconInner>
              </S.IconWrapper>
              <S.TextWrapper>
                <S.MainText>회원가입을 거부하시겠습니까?</S.MainText>
                <S.InputContainer>
                  <S.Input
                    placeholder="거부 사유를 작성해주세요."
                    placeholderTextColor={theme.colors.Neutral.N30}
                    value={reason}
                    onChangeText={onReasonChange}
                    multiline={false}
                  />
                </S.InputContainer>
              </S.TextWrapper>
            </S.TopSection>
            <S.ButtonRow>
              <S.ConfirmButton disabled={!reason.trim()} onPress={onConfirm}>
                <S.ConfirmButtonText disabled={!reason.trim()}>확인</S.ConfirmButtonText>
              </S.ConfirmButton>
              <S.CancelButton onPress={onCancel}>
                <S.CancelButtonText>취소</S.CancelButtonText>
              </S.CancelButton>
            </S.ButtonRow>
          </S.ContentWrapper>
        </S.ModalContainer>
      </S.Overlay>
    </Modal>
  );
}

export default { ApproveModal, RejectModal };
