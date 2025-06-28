import { Text, View } from "react-native";
import { useRouter, Redirect, Link } from "expo-router";
import * as NavigationBar from "expo-navigation-bar/src/NavigationBar.android";
import { useCallback, useEffect } from "react";

export default function Index() {
  // const router = useRouter();
  const a = useCallback(async () => {
    await NavigationBar.setVisibilityAsync("hidden");
    await NavigationBar.setBehaviorAsync("inset-swipe");
  }, []);
  useEffect(() => {
    a();
  }, []);
  return <></>;
}
