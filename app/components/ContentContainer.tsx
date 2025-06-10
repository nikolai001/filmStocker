import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import * as Font from "expo-font";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";

interface contentContainer {
  name: string;
  image: string;
  amount: number;
}

type props = {
  data: contentContainer;
};

const ContentContainer = ({ data }: props) => {
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
    <View className="px-3 space-y-3 w-5/12 bg-primary-gray-600 flex flex-col rounded-[14px] pb-2 shadow-md max-w-44 min-w-32">
      <div
        id="label"
        className="w-1/5 aspect-square bg-yellow-500 relative -left-3 top-0 rounded-tl-[14px] rounded-br-[14px] flex justify-center items-center"
      >
        <MaterialCommunityIcons color="#fff" size={15} name="film" />
      </div>
      <img
        className="w-3/4 aspect-square object-contain mx-auto my-auto"
        src={data.image + "gagagea"}
      />
      <div className="mt-auto mb-2 flex flex-col">
        <Text className="text-white truncate">{data.name}</Text>
        <div className="flex items-center">
          <span className="truncate text-xs text-red-500">
            {data.amount + " rolls expiring soon"}
          </span>
          <span className="w-2 aspect-square rounded-full bg-red-500 ml-3" />
        </div>
      </div>
    </View>
  );
};

export default ContentContainer;
