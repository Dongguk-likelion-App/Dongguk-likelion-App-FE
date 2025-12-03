import type { Meta, StoryObj } from '@storybook/react';
import SignupApprovalCard from './SignupApprovalCard';

const meta: Meta<typeof SignupApprovalCard> = {
  title: 'Design System/Components/SignupApprovalCard',
  component: SignupApprovalCard,
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'text',
      description: '회원 이름',
    },
    email: {
      control: 'text',
      description: '회원 이메일',
    },
    generation: {
      control: 'text',
      description: '기수 정보',
    },
    role: {
      control: 'text',
      description: '역할 (예: 운영진)',
    },
    part: {
      control: 'text',
      description: '파트 (예: 기획디자인)',
    },
    applicationTime: {
      control: 'text',
      description: '신청 시간',
    },
    verificationImage: {
      control: 'text',
      description: '인증 사진 URL',
    },
    onApprove: {
      action: 'approve clicked',
      description: '승인 버튼 클릭 핸들러',
    },
    onReject: {
      action: 'reject clicked',
      description: '거부 버튼 클릭 핸들러',
    },
  },
};

export default meta;
type Story = StoryObj<typeof SignupApprovalCard>;

export const Default: Story = {
  args: {
    name: '박세라',
    email: 'sarah20709@naver.com',
    generation: '12기',
    role: '운영진',
    part: '기획디자인',
    applicationTime: '25-08-28 12:55',
    verificationImage: 'https://placehold.co/216x124',
  },
};

export const DifferentRole: Story = {
  args: {
    name: '김철수',
    email: 'chulsoo@example.com',
    generation: '13기',
    role: '일반회원',
    part: '백엔드',
    applicationTime: '25-09-01 14:20',
    verificationImage: 'https://placehold.co/216x124',
  },
};

export const FrontendMember: Story = {
  args: {
    name: '이영희',
    email: 'younghee@example.com',
    generation: '12기',
    role: '운영진',
    part: '프론트엔드',
    applicationTime: '25-08-30 10:30',
    verificationImage: 'https://placehold.co/216x124',
  },
};
