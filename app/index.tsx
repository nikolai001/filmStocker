import MdiButton from "@/app/components/MdiButton";
import { View } from "react-native";

export default function Index() {
  return (
    <View className="bg-gray-600 flex-1 flex-row justify-evenly flex-wrap pt-10">
      <View className="grid grid-cols-2 w-full gap-x-11 gap-y-[19px] px-3">
        <MdiButton label="Add roll(s)" icon="plus" />
        <MdiButton label="Use roll(s)" icon="film" />
        <MdiButton
          label="View all rolls"
          icon="camera-iris"
          boxClass="!w-1/2 justify-self-center col-span-full"
        />
      </View>
    </View>
  );
}
