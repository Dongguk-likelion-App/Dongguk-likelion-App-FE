import React from 'react';
import { ScrollView, View } from 'react-native';
import SignupApprovalCard from '../storybook/stories/design-system/components/SignupApprovalCard/SignupApprovalCard';

// 목 데이터
const mockApplications = [
  {
    id: '1',
    name: '박세라',
    email: 'sarah20709@naver.com',
    generation: '12기',
    role: '운영진',
    part: '기획디자인',
    applicationTime: '25-08-28 12:55',
    verificationImage: 'https://placehold.co/216x124',
  },
  {
    id: '2',
    name: '김철수',
    email: 'chulsoo@example.com',
    generation: '13기',
    role: '일반회원',
    part: '백엔드',
    applicationTime: '25-09-01 14:20',
    verificationImage: 'https://placehold.co/216x124',
  },
];

export default function AccountManagementScreen() {
  const handleApprove = (id: string) => {
    console.log(`승인: ${id}`);
    // TODO: API 호출하여 승인 처리
  };

  const handleReject = (id: string) => {
    console.log(`거부: ${id}`);
    // TODO: API 호출하여 거부 처리
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={{ paddingVertical: 16 }}>
        {mockApplications.map((app) => (
          <SignupApprovalCard
            key={app.id}
            name={app.name}
            email={app.email}
            generation={app.generation}
            role={app.role}
            part={app.part}
            applicationTime={app.applicationTime}
            verificationImage={app.verificationImage}
            onApprove={() => handleApprove(app.id)}
            onReject={() => handleReject(app.id)}
          />
        ))}
      </View>
    </ScrollView>
  );
}
