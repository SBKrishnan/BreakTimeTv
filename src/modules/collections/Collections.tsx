import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

type CollectionsProps = {
  children: any;
  name: any;
  onPress?: () => void;
  text?: string;
};
const Collections = ({
  children,
  name,
  onPress,
  text = 'See all',
}: CollectionsProps) => {
  return (
    <View style={{marginTop: 15}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 20,
          marginVertical: 10,
        }}>
        <Text style={{color: '#fff', fontSize: 20, fontWeight: '600'}}>
          {name}
        </Text>
        <TouchableOpacity onPress={onPress}>
          <Text style={{color: '#00A6FF', fontSize: 15, fontWeight: '600'}}>
            {text}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{marginHorizontal: 10}}>{children}</View>
    </View>
  );
};
export default Collections;
