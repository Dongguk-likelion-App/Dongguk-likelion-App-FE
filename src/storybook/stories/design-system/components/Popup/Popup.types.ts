export type PopupProps = {
  visible: boolean;           // 모달 표시 여부(True or False)
  mainText: string;
  subText?: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm?: () => void;     // 확인 버튼 눌렀을 때 실행되는 콜백 함수(동작 실행용)
  onCancel?: () => void;      // 취소 버튼 눌렀을 때 실행되는 콜백 함수(모달 닫기용)
};
