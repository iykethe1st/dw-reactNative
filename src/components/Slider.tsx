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
import Slides from "../data";
import Pagination from "./Pagination";

const Slider = () => {
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
    <SafeAreaView>
      <FlatList
        // ref={scrollX}
        horizontal
        pagingEnabled
        snapToAlignment="center"
        onScroll={handleScroll}
        onViewableItemsChanged={handleOnViewableItemsChanged}
        viewabilityConfig={handleViewabilityConfig}
        data={Slides}
        renderItem={({ item }) => <SlideItem item={item} />}
      />
      <Pagination data={Slides} scrollX={scrollX} currentIndex={index} />
    </SafeAreaView>
  );
};

export default Slider;

const styles = StyleSheet.create({});
