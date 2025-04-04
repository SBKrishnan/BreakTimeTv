import { StyleSheet, Text, View } from "react-native";

type TitleProps = {
  name: string;
  upperCase?: boolean;
};
const Title = ({ name, upperCase }: TitleProps) => {
  return (
    <Text style={styles.container}>
      {upperCase ? name.toUpperCase() : name}
    </Text>
  );
};
export default Title;
const styles = StyleSheet.create({
  container: {
    color: "#fff",
    fontSize: 35,
    fontWeight: "800",
    textAlign: "center",
    marginVertical: 10,
    marginBottom: 10,
  },
});
