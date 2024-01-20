import {
  Dimensions,
  FlatList,
  Image,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";

const screenWidth = Dimensions.get("window").width;

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const flatListRef = useRef();

  const carouselData = [
    {
      id: "01",
      image: require("../../assets/images/bonus.png"),
    },
    {
      id: "02",
      image: require("../../assets/images/bonus2.png"),
    },
    {
      id: "03",
      image: require("../../assets/images/bonus3.jpeg"),
    },
  ];

  const renderItem = ({ item, index }) => {
    return (
      <View style={styles.carousel}>
        <Image source={item.image} style={styles.image} />
      </View>
    );
  };

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;

    const index = scrollPosition / screenWidth;
    setActiveIndex(index);
  };

  const renderDotIndicators = () => {
    return carouselData.map((dot, index) =>
      activeIndex === index ? (
        <View key={index} style={[styles.dotIndicator, styles.active]}></View>
      ) : (
        <View key={index} style={[styles.dotIndicator, styles.inactive]}></View>
      )
    );
  };

  const getItemLayout = (data, index) => ({
    length: screenWidth,
    offset: screenWidth * index,
    index: index,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      if (activeIndex === carouselData.length - 1) {
        flatListRef?.current?.scrollToIndex({
          index: 0,
          animation: true,
        });
      } else {
        flatListRef?.current?.scrollToIndex({
          index: activeIndex + 1,
          animation: true,
        });
      }
    }, 3000);

    return () => clearInterval(interval);
  });

  return (
    <View style={styles.container}>
      <Text>Carousel</Text>
      <FlatList
        ref={flatListRef}
        getItemLayout={getItemLayout}
        keyExtractor={(item) => item.id}
        data={carouselData}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        onScroll={handleScroll}
        style={styles.flatlist}
      />
      <View style={styles.dotWrapper}>{renderDotIndicators()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    // overflow: "hidden",
  },
  image: {
    height: 200,
    width: screenWidth,
  },
  dotWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 20,
  },
  dotIndicator: {
    height: 10,
    width: 10,
    borderRadius: 5,
    margin: 2,
  },
  active: {
    backgroundColor: "grey",
  },
  inactive: {
    backgroundColor: "#11BFBF",
  },
  flatlist: {
    borderRadius: 8,
    borderColor: "black",
    // borderWidth: 10,
    overflow: "hidden",
    padding: 20,
    // width: 450,
  },
});

export default Carousel;
