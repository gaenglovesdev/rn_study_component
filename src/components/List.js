import React, {useState} from  "react";
import {View,StyleSheet,Text,FlatList,SafeAreaView,TouchableOpacity, Linking} from "react-native"

export default function List(){
  const [data, setData] = useState([
    {
      id : 0,
      label : "개",
      url : "https://www.google.com/search?q=%EA%B0%9C&rlz=1C5CHFA_enKR923KR923&sxsrf=APq-WBuQ0Mn_E6yvd_xgVy5kVupuS6E9IA:1650863770065&source=lnms&tbm=isch&sa=X&ved=2ahUKEwi-htnkuq73AhUUCt4KHRZxC-YQ_AUoAXoECAIQAw&biw=1792&bih=926&dpr=2"
    },
    {
      id : 1,
      label : "고양이",
      url : "https://www.google.com/search?q=%EA%B3%A0%EC%96%91%EC%9D%B4&tbm=isch&ved=2ahUKEwjC4NTluq73AhW2TPUHHQvXCgsQ2-cCegQIABAA&oq=%EA%B3%A0%EC%96%91%EC%9D%B4&gs_lcp=CgNpbWcQAzIICAAQgAQQsQMyCwgAEIAEELEDEIMBMggIABCABBCxAzIICAAQgAQQsQMyCAgAEIAEELEDMggIABCABBCxAzIICAAQgAQQsQMyBAgAEAMyCAgAEIAEELEDMggIABCABBCxAzoFCAAQgAQ6CggjEO8DEOoCECc6CAgAELEDEIMBUOICWNgNYKoPaAJwAHgBgAHYAogBgAmSAQcwLjYuMC4xmAEAoAEBqgELZ3dzLXdpei1pbWewAQrAAQE&sclient=img&ei=nC5mYsKiBbaZ1e8Pi66rWA&bih=926&biw=1792&rlz=1C5CHFA_enKR923KR923"
    },
    {
      id : 2,
      label : "호랑이",
      url : "https://www.google.com/search?q=%ED%98%B8%EB%9E%91%EC%9D%B4&tbm=isch&ved=2ahUKEwjJkbvvuq73AhW4SfUHHR57DEEQ2-cCegQIABAA&oq=%ED%98%B8%EB%9E%91%EC%9D%B4&gs_lcp=CgNpbWcQAzIICAAQgAQQsQMyBAgAEAMyCAgAEIAEELEDMgUIABCABDIICAAQgAQQsQMyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDoHCCMQ7wMQJzoLCAAQgAQQsQMQgwE6CggjEO8DEOoCECc6CAgAELEDEIMBUJwDWJMQYOwRaAJwAHgAgAGzAogBjgySAQcwLjcuMS4xmAEAoAEBqgELZ3dzLXdpei1pbWewAQrAAQE&sclient=img&ei=sC5mYsn5JriT1e8PnvaxiAQ&bih=926&biw=1792&rlz=1C5CHFA_enKR923KR923"
    },
    {
      id : 3,
      label : "곰",
      url : "https://www.google.com/search?q=%EA%B3%B0&tbm=isch&ved=2ahUKEwjkrc33uq73AhVvTPUHHT3FAewQ2-cCegQIABAA&oq=%EA%B3%B0&gs_lcp=CgNpbWcQAzIICAAQgAQQsQMyCAgAEIAEELEDMggIABCABBCxAzIICAAQgAQQsQMyCAgAEIAEELEDMgUIABCABDIICAAQgAQQsQMyBQgAEIAEMgUIABCABDIFCAAQgAQ6BwgjEO8DECc6BAgAEAM6CggjEO8DEOoCECdQtQJYqApgsgxoAXAAeACAAZoCiAGICJIBBTAuMi4zmAEAoAEBqgELZ3dzLXdpei1pbWewAQrAAQE&sclient=img&ei=wS5mYqTJK--Y1e8PvYqH4A4&bih=926&biw=1792&rlz=1C5CHFA_enKR923KR923#imgrc=lVthExVT4F0ARM"
    },
    {
      id : 4,
      label : "사자",
      url : "https://www.google.com/search?q=%EC%82%AC%EC%9E%90&tbm=isch&ved=2ahUKEwjP55OJu673AhWUZ94KHYJWCjAQ2-cCegQIABAA&oq=%EC%82%AC%EC%9E%90&gs_lcp=CgNpbWcQAzIICAAQgAQQsQMyCAgAEIAEELEDMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQ6BwgjEO8DECc6CAgAELEDEIMBOgsIABCABBCxAxCDAVD4B1jTDGC6DmgBcAB4AYAB1QKIAc4IkgEHMC4zLjAuMpgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=5i5mYs_cH5TP-QaCramAAw&bih=926&biw=1792&rlz=1C5CHFA_enKR923KR923"

    },
    {
      id : 5,
      label : "말",
      url : "https://www.google.com/search?q=%EB%A7%90&tbm=isch&ved=2ahUKEwj56JOLu673AhVWFYgKHYL1DYgQ2-cCegQIABAA&oq=%EB%A7%90&gs_lcp=CgNpbWcQAzIKCCMQ7wMQ6gIQJzIKCCMQ7wMQ6gIQJzIKCCMQ7wMQ6gIQJzIKCCMQ7wMQ6gIQJzIKCCMQ7wMQ6gIQJzIKCCMQ7wMQ6gIQJzIKCCMQ7wMQ6gIQJzIKCCMQ7wMQ6gIQJzIKCCMQ7wMQ6gIQJzIKCCMQ7wMQ6gIQJzoHCCMQ7wMQJzoICAAQgAQQsQM6BQgAEIAEUOYCWJkLYKAMaAFwAHgAgAGZAogBxQWSAQUwLjMuMZgBAKABAaoBC2d3cy13aXotaW1nsAEKwAEB&sclient=img&ei=6i5mYvnLK9aqoASC67fACA&bih=926&biw=1792&rlz=1C5CHFA_enKR923KR923"
    },
  ])
  
  const onLoadMore = () => {
    setData([
      ...data,
      {
        id : 6,
        label : "돼지",
        url : "https://www.google.com/search?q=%EB%A7%90&tbm=isch&ved=2ahUKEwj56JOLu673AhVWFYgKHYL1DYgQ2-cCegQIABAA&oq=%EB%A7%90&gs_lcp=CgNpbWcQAzIKCCMQ7wMQ6gIQJzIKCCMQ7wMQ6gIQJzIKCCMQ7wMQ6gIQJzIKCCMQ7wMQ6gIQJzIKCCMQ7wMQ6gIQJzIKCCMQ7wMQ6gIQJzIKCCMQ7wMQ6gIQJzIKCCMQ7wMQ6gIQJzIKCCMQ7wMQ6gIQJzIKCCMQ7wMQ6gIQJzoHCCMQ7wMQJzoICAAQgAQQsQM6BQgAEIAEUOYCWJkLYKAMaAFwAHgAgAGZAogBxQWSAQUwLjMuMZgBAKABAaoBC2d3cy13aXotaW1nsAEKwAEB&sclient=img&ei=6i5mYvnLK9aqoASC67fACA&bih=926&biw=1792&rlz=1C5CHFA_enKR923KR923"
      },
      {
        id : 7,
        label : "캥거루",
        url : "https://www.google.com/search?q=%EB%A7%90&tbm=isch&ved=2ahUKEwj56JOLu673AhVWFYgKHYL1DYgQ2-cCegQIABAA&oq=%EB%A7%90&gs_lcp=CgNpbWcQAzIKCCMQ7wMQ6gIQJzIKCCMQ7wMQ6gIQJzIKCCMQ7wMQ6gIQJzIKCCMQ7wMQ6gIQJzIKCCMQ7wMQ6gIQJzIKCCMQ7wMQ6gIQJzIKCCMQ7wMQ6gIQJzIKCCMQ7wMQ6gIQJzIKCCMQ7wMQ6gIQJzIKCCMQ7wMQ6gIQJzoHCCMQ7wMQJzoICAAQgAQQsQM6BQgAEIAEUOYCWJkLYKAMaAFwAHgAgAGZAogBxQWSAQUwLjMuMZgBAKABAaoBC2d3cy13aXotaW1nsAEKwAEB&sclient=img&ei=6i5mYvnLK9aqoASC67fACA&bih=926&biw=1792&rlz=1C5CHFA_enKR923KR923"
      },
      {
        id : 8,
        label : "고래",
        url : "https://www.google.com/search?q=%EB%A7%90&tbm=isch&ved=2ahUKEwj56JOLu673AhVWFYgKHYL1DYgQ2-cCegQIABAA&oq=%EB%A7%90&gs_lcp=CgNpbWcQAzIKCCMQ7wMQ6gIQJzIKCCMQ7wMQ6gIQJzIKCCMQ7wMQ6gIQJzIKCCMQ7wMQ6gIQJzIKCCMQ7wMQ6gIQJzIKCCMQ7wMQ6gIQJzIKCCMQ7wMQ6gIQJzIKCCMQ7wMQ6gIQJzIKCCMQ7wMQ6gIQJzIKCCMQ7wMQ6gIQJzoHCCMQ7wMQJzoICAAQgAQQsQM6BQgAEIAEUOYCWJkLYKAMaAFwAHgAgAGZAogBxQWSAQUwLjMuMZgBAKABAaoBC2d3cy13aXotaW1nsAEKwAEB&sclient=img&ei=6i5mYvnLK9aqoASC67fACA&bih=926&biw=1792&rlz=1C5CHFA_enKR923KR923"
      },
      {
        id : 9,
        label : "참새",
        url : "https://www.google.com/search?q=%EB%A7%90&tbm=isch&ved=2ahUKEwj56JOLu673AhVWFYgKHYL1DYgQ2-cCegQIABAA&oq=%EB%A7%90&gs_lcp=CgNpbWcQAzIKCCMQ7wMQ6gIQJzIKCCMQ7wMQ6gIQJzIKCCMQ7wMQ6gIQJzIKCCMQ7wMQ6gIQJzIKCCMQ7wMQ6gIQJzIKCCMQ7wMQ6gIQJzIKCCMQ7wMQ6gIQJzIKCCMQ7wMQ6gIQJzIKCCMQ7wMQ6gIQJzIKCCMQ7wMQ6gIQJzoHCCMQ7wMQJzoICAAQgAQQsQM6BQgAEIAEUOYCWJkLYKAMaAFwAHgAgAGZAogBxQWSAQUwLjMuMZgBAKABAaoBC2d3cy13aXotaW1nsAEKwAEB&sclient=img&ei=6i5mYvnLK9aqoASC67fACA&bih=926&biw=1792&rlz=1C5CHFA_enKR923KR923"
      },
      {
        id : 10,
        label : "다람쥐",
        url : "https://www.google.com/search?q=%EB%A7%90&tbm=isch&ved=2ahUKEwj56JOLu673AhVWFYgKHYL1DYgQ2-cCegQIABAA&oq=%EB%A7%90&gs_lcp=CgNpbWcQAzIKCCMQ7wMQ6gIQJzIKCCMQ7wMQ6gIQJzIKCCMQ7wMQ6gIQJzIKCCMQ7wMQ6gIQJzIKCCMQ7wMQ6gIQJzIKCCMQ7wMQ6gIQJzIKCCMQ7wMQ6gIQJzIKCCMQ7wMQ6gIQJzIKCCMQ7wMQ6gIQJzIKCCMQ7wMQ6gIQJzoHCCMQ7wMQJzoICAAQgAQQsQM6BQgAEIAEUOYCWJkLYKAMaAFwAHgAgAGZAogBxQWSAQUwLjMuMZgBAKABAaoBC2d3cy13aXotaW1nsAEKwAEB&sclient=img&ei=6i5mYvnLK9aqoASC67fACA&bih=926&biw=1792&rlz=1C5CHFA_enKR923KR923"
      },
      {
        id :11,
        label : "치타",
        url : "https://www.google.com/search?q=%EB%A7%90&tbm=isch&ved=2ahUKEwj56JOLu673AhVWFYgKHYL1DYgQ2-cCegQIABAA&oq=%EB%A7%90&gs_lcp=CgNpbWcQAzIKCCMQ7wMQ6gIQJzIKCCMQ7wMQ6gIQJzIKCCMQ7wMQ6gIQJzIKCCMQ7wMQ6gIQJzIKCCMQ7wMQ6gIQJzIKCCMQ7wMQ6gIQJzIKCCMQ7wMQ6gIQJzIKCCMQ7wMQ6gIQJzIKCCMQ7wMQ6gIQJzIKCCMQ7wMQ6gIQJzoHCCMQ7wMQJzoICAAQgAQQsQM6BQgAEIAEUOYCWJkLYKAMaAFwAHgAgAGZAogBxQWSAQUwLjMuMZgBAKABAaoBC2d3cy13aXotaW1nsAEKwAEB&sclient=img&ei=6i5mYvnLK9aqoASC67fACA&bih=926&biw=1792&rlz=1C5CHFA_enKR923KR923"
      },
    ])
  }
  return (
    <SafeAreaView style={{flex : 1}}>  
      <View style={styles.container}>
        <FlatList
          style={{flex : 1,width : "100%"}}
          data={data}
          keyExtractor={(item) => `item-${item.id}`}
          renderItem={({item}) => (
            <TouchableOpacity style={styles.item} onPress={() => Linking.openURL(item.url)}>
              <Text>{item.label}</Text>
            </TouchableOpacity>
          )}
          // onRefresh={() => console.log("REFRESH")}
          // refreshing={true}
          onEndReached={onLoadMore}
          ListHeaderComponent={
            <View style={styles.headerWrap}>
              <Text style={styles.header}>동물 리스트</Text>
            </View>
          }
          ListEmptyComponent={
            <View>
              <Text style={styles.emptyText}>텅</Text>
            </View>
          }
        />
      </View>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container : {
    flex : 1,
    paddingHorizontal : 16
  },
  item : {
    padding: 20,
    backgroundColor : "#f1f3f5",
    marginBottom : 10
  },
  headerWrap : {
    paddingVertical : 150,
    justifyContent:"center",
    alignItems : "center"
  },
  header: {
    fontSize : 30
  },
  emptyText : {
    fontSize : 100,
    textAlign:"center"
  }
})