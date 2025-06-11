import { useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import AdvancedOptions from "../../../../../components/Profile/AdvancedOptions";
import BottomLinks from "../../../../../components/Profile/BottomLinks";
import ProfileForm from "../../../../../components/Profile/ProfileForm";
import ProfileHeader from "../../../../../components/Profile/ProfileHeader";
const ProfilePage = () => {
  const [isGeneral, setIsGeneral] = useState(true);

  return (
    <ScrollView style={styles.container}>
      <ProfileHeader isGeneral={isGeneral} setIsGeneral={setIsGeneral} />
      {isGeneral ? <ProfileForm /> : <AdvancedOptions />}
      <BottomLinks />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:20,
    backgroundColor: "#fff",
  },
});

export default ProfilePage;
