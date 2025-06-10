import * as Font from "expo-font";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import ContentContainer from "./ContentContainer";

interface contentContainer {
  name: string;
  image: string;
  amount: number;
}

type props = {
  label: string;
  data: contentContainer[];
};

const Carrousel = ({ label, data }: props) => {
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

  if (data.length === 0) {
    return null;
  }

  return (
    <View className="w-full mt-20 px-3">
      <Text
        className="text-white mb-[19px] text-lg truncate"
        style={{ fontFamily: "Inter-Bold" }}
      >
        {label}
      </Text>
      <View className="bg-primary-gray-400 pt-[19px] pb-[17px] rounded-[14px] px-[19px] flex flex-row overflow-x-scroll space-x-[19px] shadow-lg overflow-y-hidden">
        {data.map((el, index) => (
          <ContentContainer key={index} data={el} />
        ))}
      </View>
    </View>
  );
};

export default Carrousel;
