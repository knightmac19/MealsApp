import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet,
  Button, 
  Platform 
} from 'react-native';

import Colors from '../constants/Colors';
import { CATEGORIES } from '../data/dummy-data';

const CategoryMealsScreen = props => {

  const catId = props.navigation.getParam('categoryId');

  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
  return (
    <View style={styles.screen}>
      <Text>You're on the Category Meals Screen!</Text> 
      <Text>{selectedCategory.title}</Text>
      <Button 
        title="See Meal Details"
        onPress={() => props.navigation.navigate('MealDetail')}
      />
      <Button 
        title="Go Back"
        onPress={() => props.navigation.pop()}
      />
    </View>
  );
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

  return ( 
    {
      headerTitle: selectedCategory.title,
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : 'white'
      },
      headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
    }
  );
  
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

});

export default CategoryMealsScreen;