import { View, Text } from "react-native"
import FoodCard from "../component/FoodCard";
import { useState, useEffect } from "react";
import { ScrollView } from "react-native";

function SelectedCategory({ route, navigation }) {
  const {name} = route.params

  const [state, setState] = useState()


  useEffect(async()=>{
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`)
      const myData = await response.json();
      setState(myData)
  }, [])

  console.log(state);
    return (
      <View style={{ flex: 1 }}>
      <ScrollView>
        {state ? state.meals.map((item) => (<FoodCard key={item.idMeal} name={item.strMeal} image={item.strMealThumb} navigation={navigation}/>))  : <Text>loading</Text>}
      </ScrollView>
        
      </View>
    );
}
export default SelectedCategory