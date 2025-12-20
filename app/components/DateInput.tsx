import DateTimePicker from "@react-native-community/datetimepicker";
import { View } from "react-native";

type Props = {
  dateChanged: (value: string) => void;
};

const DateInput = ({ dateChanged }: Props) => {
  return (
    <View>
      <DateTimePicker
        design="material"
        onChange={() => dateChanged}
        value={new Date()}
      />
    </View>
  );
};

export default DateInput;
