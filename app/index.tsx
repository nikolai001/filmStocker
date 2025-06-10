import MdiButton from "@/app/components/MdiButton";
import { View } from "react-native";
import Carrousel from "./components/Carrousel";

export default function Index() {
  let tempData = [
    {
      name: "Kodak Gold 200",
      image: "",
      amount: 5,
    },
    {
      name: "Kodak Ultramax 400",
      image: "",
      amount: 2,
    },
    {
      name: "APX 100",
      image: "",
      amount: 7,
    },
    {
      name: "APX 400",
      image: "",
      amount: 10,
    },
  ];

  return (
    <View className="bg-primary-gray-700 flex-1 flex-row justify-evenly flex-wrap pt-10">
      <View className="grid grid-cols-2 w-full gap-x-11 gap-y-[19px] px-3">
        <MdiButton label="Add roll(s)" icon="plus" />
        <MdiButton label="Manage roll(s)" icon="film" />
        <MdiButton
          label="Use roll"
          icon="camera-iris"
          boxClass="!w-1/2 justify-self-center col-span-full"
        />
      </View>
      <Carrousel label="Rolls near expiration date" data={tempData} />
    </View>
  );
}
