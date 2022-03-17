import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { Header } from 'react-native-elements';

export default class HomeScreen extends React.Component {
    render(){
        return (
            <View style={{flex:1}}>
                <Header
                    backgroundColor={"lightblue"}
                    centerComponent={{
                    text: 'The ULTIMATE Reading App',
                    style:{fontWeight: "bold", fontSize:20}
                }}></Header>
                <View style={{flex:1, justifyContent:"space-evenly"}}>
                    <TouchableOpacity onPress={() =>
                        this.props.navigation.navigate("ListScreen")} 
                        style={styles.buttonStyles1}>
                            <Text style={styles.textStyles}>To Lists</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() =>
                        this.props.navigation.navigate("StopWatchScreen")} 
                        style={styles.buttonStyles2}>
                        <Text style={styles.textStyles}>To Stopwatch</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles=StyleSheet.create({
    buttonStyles1:{
        borderRadius: 30,
        width:500,
        height:200,
        textAlign: 'center',
        justifyContent:'center',
        backgroundColor:"lightpink",
        
        
    },
    buttonStyles2:{
        borderRadius: 30,
        width:500,
        height:200,
        textAlign: 'center',
        justifyContent:'center',
        backgroundColor:"lightgreen",
       
        
    },
    textStyles:{
        fontSize:15
    }
})