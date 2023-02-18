import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
  FlatList,
  RefreshControl,
} from "react-native";
import { Text } from "@ui-kitten/components";
import { DrawerActions } from "@react-navigation/native";
import { Header } from "../../Components/Header";
import { ScreenContainer } from "../../Components/ScreenContainer";

export const HomeScreen = ({ navigation }) => {
  let [page, setPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false);
  const [data, setData] = useState([]);
  const [stopFetchMore, setStopFetchMore] = useState(true);
  const [refreshing, setRefreshing] = React.useState(false);

  // fake server
  let arr = [];
  for (let i = 1; i < 300; i++) {
    arr.push(`item number ` + i);
  }
  let lastItem = "";
  const fakeServer = (qty) =>
    new Promise((resolve, reject) => {
      let newArr;
      const lastItemIndex = arr.indexOf(lastItem);
      if (lastItemIndex === arr.length - 1) return resolve("done");

      if (!lastItem) {
        newArr = [...arr].slice(0, qty);
        lastItem = [...newArr].pop();
      } else {
        const newIndex = arr.indexOf(lastItem) + 1;
        newArr = [...arr].slice(newIndex, qty + newIndex);
        lastItem = [...newArr].pop();
      }
      setTimeout(() => {
        resolve(newArr);
      }, 1000);
    });
  // end fake server

  const onRefresh = React.useCallback(() => {
    setData([]);
    fetchData();
  }, []);

  const handleOnEndReached = async () => {
    console.log("onendreached");
    setLoadingMore(true);
    const response = await fakeServer(5); //fetch 5 each time
    if (response === "done") return setLoadingMore(false);
    setData([...data, ...response]);
    setStopFetchMore(true);
    setLoadingMore(false);
  };

  const fetchData = async () => {
    const response = await fakeServer(20);
    setData([...response]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const ListFooterComponent = () => (
    <Text
      style={{
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
        padding: 5,
      }}
    >
      Loading...
    </Text>
  );
  const renderItem = ({ item, index }) => {
    return (
      <Text
        style={{
          textAlign: "center",
          fontWeight: "bold",
          fontSize: 20,
          padding: 15,
          borderBottomColor: "red",
          borderBottomWidth: 2,
        }}
      >
        Item Number: {index + 1}
      </Text>
    );
  };
  return (
    <ScreenContainer withBoundaries>
      <Header
        title="Home"
        leftIconName="person"
        rightIconName="notification"
        onClickRight={() => console.log("right")}
        onClickLeft={() => navigation.dispatch(DrawerActions.toggleDrawer())}
      />
      <FlatList
        data={data}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        keyExtractor={(item, index) => index}
        renderItem={renderItem}
        onEndReached={handleOnEndReached}
        onEndReachedThreshold={0.5}
        onScrollBeginDrag={() => {
          console.log("onScrollBeginDrag");
          setStopFetchMore(false);
        }}
        ListFooterComponent={() => loadingMore && <ListFooterComponent />}
      />
    </ScreenContainer>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "aliceblue",
  },
});
