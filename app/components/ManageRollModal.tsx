import { Checkbox } from "expo-checkbox";
import { useState } from "react";
import { Text, TouchableWithoutFeedback, View } from "react-native";
import DateInput from "./DateInput";
import Dropdown from "./Dropdown";

interface Film {
  id: string;
  name: string;
  image: string;
  amount: number;
}

type Props = {
  data?: Film[];
  panelClass?: string;
  modalOpen: boolean;
  onClose: () => void;
};

const ManageRollModal = ({ data, panelClass, modalOpen, onClose }: Props) => {
  const visibilityClass = modalOpen ? "flex" : "hidden";

  const dropDownData = data?.map((film) => {
    return {
      label: film.name,
      value: film.id,
    };
  });

  const [formData, setFormData] = useState({
    selectedFilmId: "",
    expiryDate: "",
    isFilmExpired: false,
  });

  const handleFilmChange = (filmId: string) => {
    setFormData({
      ...formData,
      selectedFilmId: filmId,
    });
  };

  const handleExpiryDateChange = (date: string) => {
    setFormData({
      ...formData,
      expiryDate: date,
    });
  };

  const handleExpiredFilmChange = (bool: boolean) => {
    setFormData({
      ...formData,
      isFilmExpired: bool,
    });
  };

  const handleSubmit = () => {
    console.log(formData);
  };

  return (
    <View
      className={`w-full absolute h-full top-0 ${visibilityClass} ${panelClass}`}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View className="absolute w-full h-full bg-black bg-opacity-40 backdrop-blur"></View>
      </TouchableWithoutFeedback>

      <View className="bg-primary-gray-500 relative rounded-2xl h-28 shadow-md mt-[50%] mx-14">
        <Text
          className="text-white text-lg truncate"
          style={{ fontFamily: "Inter-Bold" }}
        ></Text>
        <Dropdown data={dropDownData ?? []} onChange={handleFilmChange} />
        <Checkbox
          value={formData.isFilmExpired}
          onValueChange={handleExpiredFilmChange}
        />
        <DateInput dateChanged={handleExpiryDateChange} />
      </View>
    </View>
  );
};

export default ManageRollModal;
