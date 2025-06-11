import { router } from 'expo-router';
import { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import SuccessHeader from '../../../components/SignUpSuccess/SuccessHeader';
import SuccessIllustration from '../../../components/SignUpSuccess/SuccessIllustration';
import SuccessMessage from '../../../components/SignUpSuccess/SuccessMessage';
import SuccessWelcome from '../../../components/SignUpSuccess/SuccessWelcome';

export default function SignupSuccess() {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/protected/');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <SuccessHeader />
      <SuccessMessage />
      <SuccessIllustration />
      <SuccessWelcome />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});