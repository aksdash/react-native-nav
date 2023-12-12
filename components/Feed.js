import React from "react";
import { View,Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLayoutEffect } from "react";

const Feed = () => {
    const  navigation = useNavigation()
    return (
       <SafeAreaView>
            <Pressable onPress={() => {
            console.log("Details Screen")
             navigation.navigate("HomeDetailScreen")
       }}>
         <View>
            <Text>Feed</Text>
        </View>
        
        </Pressable>
        </SafeAreaView>
       
    );
};

export default Feed;
