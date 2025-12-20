import { View } from "react-native";
import RNPickerSelect from "react-native-picker-select";

interface DropdownOption {
  label: string;
  value: string;
}

type Props = {
  data: DropdownOption[];
  onChange: (value: string) => void;
};

const Dropdown = ({ data, onChange }: Props) => {
  return (
    <View>
      <RNPickerSelect onValueChange={onChange} items={data} />
    </View>
  );
};

export default Dropdown;
