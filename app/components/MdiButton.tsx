import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Text, TouchableOpacity } from "react-native";

type ButtonProps = {
  label?: string;
  rowView?: boolean;
  icon?: keyof typeof MaterialCommunityIcons.glyphMap;
  boxClass?: string;
};

const MdiButton = ({ label, rowView, icon, boxClass }: ButtonProps) => {
  return (
    <TouchableOpacity
      className={`bg-gray-700 rounded-[14px] w-full shadow-lg flex flex-wrap justify-start flex-row py-[10px] px-[19px] outline-none space-x-2 ${
        rowView ? "flex-col justify-center" : boxClass ?? ""
      }`}
    >
      {icon ? (
        <MaterialCommunityIcons color="#fff" size={20} name={icon} />
      ) : null}
      {label && (
        <Text className="text-base text-white float-left">{label}</Text>
      )}
    </TouchableOpacity>
  );
};

export default MdiButton;
