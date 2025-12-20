import MdiButton from "@/app/components/MdiButton";
import { useState } from "react";
import { View } from "react-native";
import Carrousel from "./components/Carrousel";
import ManageRollModal from "./components/ManageRollModal";
import { CarrouselType } from "./enums/Carrousel";

export default function Index() {
  let tempData = [
    {
      id: "69c51d34-cbfe-415b-88de-676cf968bf2f",
      name: "Kodak Gold 200",
      image: "",
      amount: 5,
    },
    {
      id: "534c4f8f-c61a-4d44-8cf2-33243e621281",
      name: "Kodak Ultramax 400",
      image: "",
      amount: 2,
    },
    {
      id: "97f8a38c-699c-4682-be77-b090a4feacf5",
      name: "APX 100",
      image: "",
      amount: 7,
    },
    {
      id: "df599277-6ce1-4a4e-be11-b62da077016c",
      name: "APX 400",
      image: "",
      amount: 10,
    },
  ];

  const [isManageRollModalOpen, setManageRollModalOpen] = useState(false);

  const toggleManageRollModal = () => {
    setManageRollModalOpen(!isManageRollModalOpen);
  };

  const hideOverflow = !isManageRollModalOpen ? "overflow-y-scroll" : null;

  return (
    <View
      className={
        `bg-primary-gray-700 flex-1 flex-row justify-evenly flex-wrap pt-10 ` +
        hideOverflow
      }
    >
      <View className="grid grid-cols-2 w-full gap-x-11 gap-y-[19px] px-3">
        <MdiButton
          label="Add roll(s)"
          icon="plus"
          onButtonPressed={toggleManageRollModal}
        />
        <MdiButton label="Manage roll(s)" icon="film" />
        <MdiButton
          label="Use roll"
          icon="camera-iris"
          boxClass="!w-1/2 justify-self-center col-span-full"
        />
      </View>
      <Carrousel data={tempData} carrouselType={CarrouselType.Expired} />
      <Carrousel
        data={tempData}
        panelClass="mt-[19px]"
        carrouselType={CarrouselType.Frequent}
      />
      <ManageRollModal
        modalOpen={isManageRollModalOpen}
        data={tempData}
        onClose={() => setManageRollModalOpen(false)}
      />
    </View>
  );
}
