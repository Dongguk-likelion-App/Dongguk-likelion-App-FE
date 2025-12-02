export type RootStackParamList = {
  Splash: undefined;
  Auth: undefined;
  Tabs: undefined;
  AccountManagement: undefined;
  Detail: { id: number };
  Docs: undefined;
};

export type AuthStackParamList = {
  Login: undefined;
  Signup: undefined;
};

export type AccountManagementStackParamList = {
  AccountManagement: undefined;
};

export type TabParamList = {
  Home: undefined;
  Mypage: undefined;
};

export type HomeStackParamList = {
  HomeMain: undefined;
};

export type MypageStackParamList = {
  MypageMain: undefined;
};
