import React from "react";
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
} from "./Popup.styles";
import type { PopupProps } from "./Popup.types";
const warningIcon = require("../../../../../../assets/images/default.svg");

export default function Popup({
  visible,
  mainText,
  subText,
  confirmText = "확인",
  cancelText = "취소",
  onConfirm,
  onCancel,
}: PopupProps) {
  if (!visible) return null;

  return (
    <Overlay>
      <Container>
        <Icon source={warningIcon} resizeMode="contain" />
        <MainText>{mainText}</MainText>
        {subText && <SubText>{subText}</SubText>}

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
