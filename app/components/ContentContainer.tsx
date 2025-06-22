import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import * as Font from "expo-font";
import { useEffect, useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import { CarrouselType } from "../enums/Carrousel";

interface contentContainer {
  name: string;
  image: string;
  amount: number;
}

type props = {
  data: contentContainer;
  carrouselType: CarrouselType;
};

const ContentContainer = ({ data, carrouselType }: props) => {
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
      <div
        id="label"
        className="w-1/5 max-w-8 min-w-7 aspect-square bg-primary-yellow-500 relative -left-3 top-0 rounded-tl-[14px] rounded-br-[14px] flex justify-center items-center"
      >
        <MaterialCommunityIcons color="#fff" size={15} name="film" />
      </div>
      <img
        className="w-3/4 aspect-square object-contain mx-auto my-auto pointer-events-none"
        src={data.image + "gagagea"}
      />
      <div className="mt-auto mb-2 flex flex-col">
        <Text className="text-white truncate">{data.name}</Text>
        <div className="flex items-center">
          <span className={`truncate text-xs ${getTextColor()}`}>
            {data.amount +
              (carrouselType === CarrouselType.Expired
                ? " rolls expiring soon"
                : " rolls used this month")}
          </span>
          {carrouselType === CarrouselType.Expired ? (
            <span
              className={`w-2 aspect-square rounded-full ml-3 ${getBgColor()}`}
            />
          ) : null}
        </div>
      </div>
    </TouchableOpacity>
  );
};

export default ContentContainer;
