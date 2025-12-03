import React, {useState} from 'react';
import { TouchableOpacity, TextInput, Image, View } from 'react-native';
import warningIcon from '../../../../../../assets/warning-icon.png';
import {
  Overlay,
  Container,
  Icon,
  MainText,
  SubText,
  ButtonRow,
  ConfirmButton,
  CancelButton,
  ButtonText,
  CancelText,
} from './Popup.styles';
import type { PopupProps } from './Popup.types';

export default function Popup({
  visible,
  mainText,
  subText,
  confirmText = '확인',
  cancelText = '취소',
  onConfirm,
  onCancel,
}: PopupProps) {
  if (!visible) return null;

  return (
    <Overlay>
      <TouchableOpacity
        activeOpacity={1}
        onPress={onCancel}
        style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
      />
      <Container onStartShouldSetResponder={() => true}>
      <Icon>
        <Image
          source={warningIcon}
          style={{ width: 60, height: 60, resizeMode: 'contain' }}
        />
      </Icon>
        <MainText>{mainText}</MainText>
        {subText && (
          <>
            {(Array.isArray(subText) ? subText : subText.split('\n')).map(
              (line, index, array) => (
                <SubText
                  key={index}
                  style={
                    index === array.length - 1 ? undefined : { marginBottom: 0 }
                  }
                >
                  {line}
                </SubText>
              )
            )}
          </>
        )}

        <ButtonRow>
          <ConfirmButton onPress={onConfirm}>
            <ButtonText>{confirmText}</ButtonText>
          </ConfirmButton>
          <CancelButton onPress={onCancel}>
            <CancelText>{cancelText}</CancelText>
          </CancelButton>
        </ButtonRow>
      </Container>
    </Overlay>
  );
}
