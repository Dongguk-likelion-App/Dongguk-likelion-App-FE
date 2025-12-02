export interface ConfirmModalProps {
  visible: boolean;
  type: 'approve' | 'reject';
  onConfirm: () => void;
  onCancel: () => void;
}

export interface RejectModalProps {
  visible: boolean;
  reason: string;
  onReasonChange: (text: string) => void;
  onConfirm: () => void;
  onCancel: () => void;
}
