import { useRef, useState } from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import OnboardingFooter from './OnboardingFooter';
import OnboardingHeader from './OnboardingHeader';
import OnboardingSlide from './OnboardingSlide';

const slides = [
  {
    title: "Your skills deserve recognition.",
    description: "You’re not just a worker — you’re a Task Master.\nJoin a platform that values your experience and professionalism.\nEarn respect, not just income.",
    image: require('../../../assets/images/onboard1.png')
  },
  {
    title: "Earn fair. Get paid on time.",
    description: "Set transparent prices for your services.\nTrack your earnings and receive payments securely, with no hidden cuts.\nYour work, your worth — always honored.",
    image: require('../../../assets/images/onboard2.png')
  },
  {
    title: "We’ve got your back. Always.",
    description: "From verified bookings to real-time support, you’re never alone on the job.\nTask Master ensures trust, safety, and steady opportunities —\nso you can work with peace of mind.",
    image: require('../../../assets/images/onboard3.png')
  }
];

const OnboardingContainer = ({ onComplete }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const slideAnim = useRef(new Animated.Value(0)).current;

  const handleNext = () => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: -50,
        duration: 300,
        useNativeDriver: true,
      })
    ]).start(() => {
      setCurrentSlide(prev => {
        const nextSlide = prev < slides.length - 1 ? prev + 1 : prev;
        if (nextSlide === prev) onComplete();
        return nextSlide;
      });
      
      fadeAnim.setValue(0);
      slideAnim.setValue(50);
      
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        })
      ]).start();
    });
  };

  const handleSkip = () => onComplete();

  return (
    <View style={styles.container}>
      <OnboardingHeader />
      
      <Animated.View style={[
        styles.content,
        {
          opacity: fadeAnim,
          transform: [{ translateY: slideAnim }]
        }
      ]}>
        <OnboardingSlide 
          title={slides[currentSlide].title}
          description={slides[currentSlide].description}
          image={slides[currentSlide].image}
        />
        <OnboardingFooter 
          onNext={handleNext}
          onSkip={handleSkip}
          isLastSlide={currentSlide === slides.length - 1}
        />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});

export default OnboardingContainer;