import {View, Text, StyleSheet, Image} from 'react-native';

export default function App(){
    return(
        <View style={styles.frame}>
            <View>
                <Text style={styles.titleText}>
                    Hello, Devs
                </Text>
                <Text>14 tasks today</Text>
            </View>
            <View style={styles.profileIcon}>
                <Image source={require("../assets/image.png")}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    frame:{
        display: "flex",
        justifyContent: "space-between",
        alignContent: "center",
        flexDirection: "row",
        width: "100%",
        borderColor: "black",
    },
    titleText:{
        fontSize: 20,
        fontWeight: "bold",
    },
    profileIcon:{
        backgroundColor: "white",
        borderRadius: 50,
        width: 50,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
    },
});