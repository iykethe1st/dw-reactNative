import {
  Animated,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useRef, useState } from "react";
import SlideItem from "./SlideItem";
import Pagination from "./Pagination";

const Slider = ({ slides }) => {
  const [index, setIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;

  const handleScroll = (event) => {
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

  const handleOnViewableItemsChanged = useRef(({ viewableItems }) =>
    // console.log("viewableItems", viewableItems)
    setIndex(viewableItems[0].index)
  ).current;

  const handleViewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;

  return (
    <View>
      <FlatList
        // ref={scrollX}
        horizontal
        pagingEnabled
        snapToAlignment="center"
        onScroll={handleScroll}
        onViewableItemsChanged={handleOnViewableItemsChanged}
        viewabilityConfig={handleViewabilityConfig}
        data={slides}
        renderItem={({ item }) => <SlideItem item={item} />}
      />
      <Pagination data={slides} scrollX={scrollX} currentIndex={index} />
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({});
