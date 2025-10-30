export interface ToastMessageProps {
  message: string;
  visible: boolean;
  duration?: number;
  onClose?: () => void;
  style?: any;
}
