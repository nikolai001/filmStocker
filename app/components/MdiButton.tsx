import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import * as Font from "expo-font";
import { useEffect, useState } from "react";
import { Text, TouchableOpacity } from "react-native";

type ButtonProps = {
  label?: string;
  rowView?: boolean;
  icon?: keyof typeof MaterialCommunityIcons.glyphMap;
  boxClass?: string;
};

const MdiButton = ({ label, rowView, icon, boxClass }: ButtonProps) => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        Inter: require("../../assets/fonts/Inter-Regular.ttf"),
        "Inter-Bold": require("../../assets/fonts/Inter-Bold.ttf"),
      });
      setFontsLoaded(true);
    }

    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <TouchableOpacity
      className={`bg-primary-gray-600 rounded-[14px] w-full shadow-lg flex flex-nowrap justify-start flex-row py-[10px] px-[19px] outline-none space-x-2 ${
        rowView ? "flex-col justify-center" : boxClass ?? ""
      }`}
    >
      {icon ? (
        <MaterialCommunityIcons color="#fff" size={20} name={icon} />
      ) : null}
      {label && (
        <Text
          className="text-base text-white whitespace-nowrap truncate"
          style={{ fontFamily: "Inter-Bold" }}
        >
          {label}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default MdiButton;
