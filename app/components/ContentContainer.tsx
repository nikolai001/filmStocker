import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import * as Font from "expo-font";
import { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { CarrouselType } from "../enums/Carrousel";

interface Container {
  name: string;
  image: string;
  amount: number;
}

type Props = {
  data: Container;
  carrouselType: CarrouselType;
};

const ContentContainer = ({ data, carrouselType }: Props) => {
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

  const getTextColor = () => {
    if (carrouselType === CarrouselType.Frequent) {
      return "text-primary-green-100";
    } else {
      switch (data.amount) {
        case 0:
          return "text-primary-green-100";
        case 1:
          return "text-primary-yellow-100";
        default:
          return "text-primary-red-600";
      }
    }
  };

  const getBgColor = () => {
    if (carrouselType === CarrouselType.Frequent) {
      return "bg-primary-green-100";
    } else {
      switch (data.amount) {
        case 0:
          return "bg-primary-green-100";
        case 1:
          return "bg-primary-yellow-100";
        default:
          return "bg-primary-red-600";
      }
    }
  };

  return (
    <TouchableOpacity className="px-3 space-y-3 w-5/12 bg-primary-gray-600 flex flex-col rounded-[14px] pb-2 shadow-md max-w-44 min-w-32">
      <View
        id="label"
        className="w-1/5 max-w-8 min-w-7 aspect-square bg-primary-yellow-500 relative -left-3 top-0 rounded-tl-[14px] rounded-br-[14px] flex justify-center items-center"
      >
        <MaterialCommunityIcons color="#fff" size={15} name="film" />
      </View>
      <img
        className="w-3/4 aspect-square object-contain mx-auto my-auto pointer-events-none"
        src={data.image + "gagagea"}
      />
      <View className="mt-auto mb-2 flex flex-col">
        <Text className="text-white truncate text-center">{data.name}</Text>
        <View className="flex items-center">
          <Text className={`truncate text-xs ${getTextColor()}`}>
            {data.amount +
              (carrouselType === CarrouselType.Expired
                ? " rolls expiring soon"
                : " rolls used this month")}
          </Text>
          {carrouselType === CarrouselType.Expired ? (
            <Text
              className={`w-2 aspect-square rounded-full ml-3 ${getBgColor()}`}
            />
          ) : null}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ContentContainer;
