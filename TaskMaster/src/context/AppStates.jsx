import { useEffect, useState } from "react";
import { AsyncStorage } from "react-native";
import { createContext, useContext } from "react";

const AppStatesContext = createContext();

export const AppStatesProvider = ({ children }) => {
  const [isAppOpenedFirstTime, setIsAppOpenedFirstTime] = useState(null);

  useEffect(() => {
    const getAppFirstOpenState = async () => {
      const appFirstOpenState = await AsyncStorage.getItem("appFirstOpenState");
      setIsAppOpenedFirstTime(appFirstOpenState === null);
    };
    getAppFirstOpenState();
  }, []);

  useEffect(() => {
    if (isAppOpenedFirstTime === false) {
      const setAppFirstOpenState = async () => {
        await AsyncStorage.setItem("appFirstOpenState", "false");
      };
      setAppFirstOpenState();
    }
  }, [isAppOpenedFirstTime]);

  return (
    <AppStatesContext.Provider
      value={{ isAppOpenedFirstTime, setIsAppOpenedFirstTime }}
    >
      {children}
    </AppStatesContext.Provider>
  );
};

export const useAppStates = () => useContext(AppStatesContext);
