import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet,
  Button 
} from 'react-native';

const CategoryMealsScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>You're on the Category Meals Screen!</Text> 
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

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

});

export default CategoryMealsScreen;