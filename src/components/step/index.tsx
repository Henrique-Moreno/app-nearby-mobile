import { colors } from "@/styles/theme";
import { s } from "./styles";
import { Text, View } from "react-native";
import { IconProps } from "@tabler/icons-react-native";

// interface Content {
//   title: string;
//   description: string;
//   icon: React.ComponentType<IconProps>;
// }

type Props = {
  title: string;
  description: string;
  icon: React.ComponentType<IconProps>;
};

// export function Step({title, description}: Content)

export function Step({ title, description, icon: Icon }: Props) {
  {
    Icon && <Icon size={32} color={colors.red.base} />;
  }

  return (
    <View style={s.container}>
      <View style={s.details}>
        <Text style={s.title}>{title}</Text>
        <Text style={s.description}>{description}</Text>
      </View>
    </View>
  );
}
