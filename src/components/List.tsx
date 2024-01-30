import { FlatList } from "react-native";
import React from "react";
import ListItem from "./ListItem";

interface ListProps {
  theme: string;
  icon?: any;
  large?: boolean;
  iconLibrary?: string;
  data?: any;
}

const List: React.FC<ListProps> = ({
  theme,
  icon,
  large,
  iconLibrary,
  data,
}) => {
  if (large) {
    return (
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <ListItem
            iconLibrary={iconLibrary}
            icon={item.icon ? item.icon : icon}
            theme={theme}
            labelOne={item.labelOne}
            labelTwo={item.labelTwo}
            labelThree={item.labelThree}
            labelFour={item.labelFour}
            labelFive={item.labelFive}
            img={item.img}
            imgSrc={item.imgSrc}
            large
          />
        )}
        keyExtractor={(item) => item.id}
      />
    );
  }
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <ListItem
          iconLibrary={iconLibrary}
          icon={item.icon ? item.icon : icon}
          theme={theme}
          labelOne={item.labelOne}
          labelTwo={item.labelTwo}
          labelThree={item.labelThree}
          labelFour={item.labelFour}
          labelFive={item.labelFive}
          img={item.img}
          imgSrc={item.imgSrc}
          large={false}
        />
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

export default List;
