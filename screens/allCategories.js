import { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import Card from "../component/Card";

function AllCategories({navigation}) {

  const [state, setState] = useState();

  useEffect(async()=>{
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
      const actualData = await response.json();
      setState(actualData)
  }, [])

  return (
    <View style={{ flex: 1, flexDirection: 'row' }}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={true}>
            {state ?  state.categories.map((i) => <Card navigation={navigation} key={i.idCategory} description={i.strCategoryDescription} 
            category={i.strCategory} img={i.strCategoryThumb}/>) : <Text>Loading...</Text>}
        </ScrollView>
    </View>
  );
}
export default AllCategories;
