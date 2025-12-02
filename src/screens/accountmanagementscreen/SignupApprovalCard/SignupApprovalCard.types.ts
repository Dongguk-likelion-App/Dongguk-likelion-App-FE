export interface SignupApprovalCardProps {
  name: string;
  email: string;
  generation: string;
  role: string;
  part: string;
  applicationTime: string;
  verificationImage: string;
  onApprove: () => void;
  onReject: () => void;
}
