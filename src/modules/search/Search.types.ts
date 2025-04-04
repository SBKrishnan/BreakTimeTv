import { PropsWithChildren } from "react";
import { ColorValue, StyleProp, TextStyle } from "react-native";

export interface SearchProps extends PropsWithChildren {
  value: string;
  onChangeText: ((text: string) => void) | undefined;
  placeholder?: string;
  color?: ColorValue | undefined;
  style?: StyleProp<TextStyle>;
}
