import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet,
  Button 
} from 'react-native';

const CategoriesScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>You're on the Categories Screen!</Text> 
      <Button 
        title="Go to Category Meals Screen"
        onPress={() => props.navigation.navigate('CategoryMeals')}
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

export default CategoriesScreen;