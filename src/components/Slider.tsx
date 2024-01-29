import {
  Animated,
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
  View,
} from "react-native";
import React, { useRef, useState } from "react";
import SlideItem from "./SlideItem";
import Pagination from "./Pagination";
import Button from "./Button";
import { OnBoard } from "../types";

interface SliderProps {
  slides: OnBoard[];
  onPress?: () => void;
}

const Slider: React.FC<SliderProps> = ({ slides, onPress }) => {
  const [index, setIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: {
              x: scrollX,
            },
          },
        },
      ],
      {
        useNativeDriver: false,
      }
    )(event);
  };

  const handleOnViewableItemsChanged = useRef(({ viewableItems }: any) =>
    setIndex(viewableItems[0].index)
  ).current;

  const handleViewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        pagingEnabled
        snapToAlignment="center"
        onScroll={handleScroll}
        onViewableItemsChanged={handleOnViewableItemsChanged}
        viewabilityConfig={handleViewabilityConfig}
        showsHorizontalScrollIndicator={false}
        data={slides}
        renderItem={({ item }) => <SlideItem item={item} />}
      />

      <Pagination data={slides} scrollX={scrollX} currentIndex={index} />

      <Button
        onPress={onPress}
        label={index === slides.length - 1 ? "Get started" : "Next"}
        theme="dark"
        type="large"
      />
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
