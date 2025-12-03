import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import {
  TopNav,
  TabBar,
  FilterChipGroup,
  SearchBar,
  SignupApprovalCard,
  ApproveModal,
  RejectModal,
  Navigation,
} from '../../storybook/stories/design-system/components';
import AccountCard from './AccountCard/AccountCard'; 
import ActionButton from '@components/ActionButton/ActionButton';
import {Popup} from '../../storybook/stories/design-system/components';

// 목 데이터 (회원가입 신청용)
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

// 목 데이터 (전체 계정 목록용)
const mockAccounts = [
  {
    id: 'user1',
    name: '박세라',
    email: 'sarah20709@naver.com',
    tags: [
      { label: '12기', type: 'generation' as const },
      { label: '운영진', type: 'role' as const },
      { label: '기획디자인', type: 'part' as const },
      { label: '관리자', type: 'permission' as const },
    ],
  },
  {
    id: 'user2',
    name: '오태준',
    email: 'ohtejun@naver.com',
    tags: [
      { label: '12기', type: 'generation' as const },
      { label: '운영진', type: 'role' as const },
      { label: '프론트엔드', type: 'part' as const },
    ],
  },
  {
    id: 'user3',
    name: '윤혜정',
    email: 'yoon@naver.com',
    tags: [
      { label: '11기', type: 'generation' as const },
      { label: '운영진 수료자', type: 'role' as const },
      { label: '기획디자인', type: 'part' as const },
    ],
  },
];

const TABS = ['전체 계정', '회원가입 신청', '정지된 계정'];
const FILTERS = ['전체', '아기사자', '운영진', '수료자', '프론트', '백엔드', '기획/디자인'];

export default function AccountManagementScreen() {
  const [selectedTab, setSelectedTab] = useState(0); // 전체 계정 탭 선택으로 변경
  const [selectedFilter, setSelectedFilter] = useState(0); // 전체 필터 선택
  const [searchQuery, setSearchQuery] = useState('');
  const [showApproveModal, setShowApproveModal] = useState(false);
  const [showRejectModal, setShowRejectModal] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [rejectReason, setRejectReason] = useState('');

  const [selectedAccounts, setSelectedAccounts] = useState<string[]>([]); 
  const [showSuspendPopup, setShowSuspendPopup] = useState(false);
  const [showAuthorityPopup, setShowAuthorityPopup] = useState(false);


  const handleApproveClick = (id: string) => {
    setSelectedId(id);
    setShowApproveModal(true);
  };

  const handleRejectClick = (id: string) => {
    setSelectedId(id);
    setRejectReason('');
    setShowRejectModal(true);
  };

  const handleApproveConfirm = () => {
    console.log(`승인 확정: ${selectedId}`);
    // TODO: API 호출하여 승인 처리
    setShowApproveModal(false);
    setSelectedId(null);
  };

  const handleRejectConfirm = () => {
    console.log(`거부 확정: ${selectedId}, 사유: ${rejectReason}`);
    // TODO: API 호출하여 거부 처리
    setShowRejectModal(false);
    setSelectedId(null);
    setRejectReason('');
  };

  const handleCancelModal = () => {
    setShowApproveModal(false);
    setShowRejectModal(false);
    setSelectedId(null);
    setRejectReason('');
  };

  const handleAccountSelect = (id: string, isSelected: boolean) => {
   
    setSelectedAccounts(prev => {
      if (isSelected) {
        return [...prev, id];
      } else {
        return prev.filter(accountId => accountId !== id);
      }
    });
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      {/* 헤더 */}
      <Navigation pageName="계정관리" onBackPress={() => console.log('뒤로가기')} />

      {/* 탭바 */}
      <View style={{ 
        paddingLeft: 16, 
        paddingRight: 16, 
        borderBottomWidth: 1.5, 
        borderBottomColor: '#E4E4E7' 
      }}>
        <TabBar tabs={TABS} selected={selectedTab} onSelect={setSelectedTab} />
      </View>

      {/* 필터 및 검색 영역 */}
      <View style={{ 
        flexDirection: 'column', 
        justifyContent: 'flex-start', 
        alignItems: 'flex-start' 
      }}>
        {/* 필터 칩 */}
        <FilterChipGroup
          filters={FILTERS}
          selectedIndex={selectedFilter}
          onSelectFilter={setSelectedFilter}
        />

        {/* 검색바 */}
      <View style={{ 
        width: '100%',
        paddingHorizontal: 16,
        paddingVertical: 8,
      }}>
        <SearchBar
          placeholder="이름 검색"
          value={searchQuery}
          onChange={setSearchQuery}
        />
      </View>
      </View>

      {/* Action Button 행 */}
      <View style={{ height: 12 }} />
      {selectedTab === 0 && selectedAccounts.length > 0 && (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 16,
            marginBottom: 12,
          }}
        >
          <View style={{ flexDirection: 'row' }}>
            <ActionButton
              text="선택 해제"
              variant="danger"
              onPress={() => setSelectedAccounts([])}
            />
          </View>
          <View style={{ flexDirection: 'row', gap: 8 }}>
            <ActionButton
              text="계정 정지"
              variant="primary"
              onPress={() => setShowSuspendPopup(true)}
            />
            <ActionButton
              text="권한 위임"
              variant="secondary"
              onPress={() => setShowAuthorityPopup(true)}
            />
          </View>
        </View>
      )}


      {/* 내부 컨텐츠 */}
      <ScrollView style={{ flex: 1 }}>
        <View>
          {selectedTab === 0 && (
            // 전체 계정 탭
            <>
              {mockAccounts.map((account) => (
                <AccountCard
                  key={account.id}
                  id={account.id}
                  name={account.name}
                  email={account.email}
                  tags={account.tags}
                  isSelected={selectedAccounts.includes(account.id)}
                  onSelect={handleAccountSelect}
                />
              ))}
            </>
          )}
          
          {selectedTab === 1 && (
            // 회원가입 신청 탭
            <>
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
                  onApprove={() => handleApproveClick(app.id)}
                  onReject={() => handleRejectClick(app.id)}
                />
              ))}
            </>
          )}
          
          {selectedTab === 2 && (
            // 정지된 계정 탭
            <>
              {/* TODO: 정지된 계정 리스트 */}
            </>
          )}
        </View>
      </ScrollView>

      {/* 신청 처리 모달 */}
      <ApproveModal
        visible={showApproveModal}
        onConfirm={handleApproveConfirm}
        onCancel={handleCancelModal}
      />

      <RejectModal
        visible={showRejectModal}
        reason={rejectReason}
        onReasonChange={setRejectReason}
        onConfirm={handleRejectConfirm}
        onCancel={handleCancelModal}
      />

      <Popup
          visible={showSuspendPopup}
          mainText="계정을 정지하시겠습니까?"
          subText={`"계정 정지에 동의합니다"를 작성해주세요.`}
          confirmText="확인"
          cancelText="취소"
          onConfirm={() => {
            console.log('정지 확정');
            setShowSuspendPopup(false);
          }}
          onCancel={() => setShowSuspendPopup(false)}
      />
      
      <Popup
          visible={showAuthorityPopup}
          mainText="권한을 위임하시겠습니까?"
          subText={`권한 위임 시,현재 계정의 관리자 권한은 사라집니다.`}
          confirmText="확인"
          cancelText="취소"
          onConfirm={() => {
            console.log('정지 확정');
            setShowAuthorityPopup(false);
          }}

          onCancel={() => setShowAuthorityPopup(false)}
      />
    </View>
  );
}