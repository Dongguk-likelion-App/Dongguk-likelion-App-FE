import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/RootNavigator';

import styled from '@emotion/native';

const Title = styled.Text(({ theme }) => ({
  ...theme.typography.Head1_1,
  color: theme.colors.Primary.B50,
  margin: theme.grid.margin16,
}));

export default function HomeScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, 'Home'>>();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Title>안녕</Title>
      <Text>🏠 Home</Text>
      <Button
        title="Go to Detail"
        onPress={() => navigation.navigate('Detail', { id: 1 })}
      />
      <Button
        title="Go to TestScreen"
        onPress={() => navigation.navigate('Test')}
      />
    </View>
  );
}
