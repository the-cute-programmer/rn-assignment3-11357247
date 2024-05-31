import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import TitleFrame from "./components/TitleFrame"

export default function App() {
  return (
    <ScrollView> 
      <View style={styles.container}>
        <TitleFrame/>
        <SearchBar/>
        <Categories/>
        <OngoingTask/>
      <StatusBar style="auto" />
    </View>
    </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f0e8',
    paddingTop: 52, 
    padding: 20, 
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});
