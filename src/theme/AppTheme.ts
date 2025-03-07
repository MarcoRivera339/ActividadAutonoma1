import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        height:'100%',
        width:'100%'

    },
    title:{
        textAlign:'center',
        fontSize:45,
        fontWeight:'bold',
        marginBottom:10,
        letterSpacing: 5,
        color:'brown'
    },
    img:{
        width: 200,
        height: 200,
        alignSelf:'center'
    },
    btnAcceder:{
        marginTop:20,
        backgroundColor: 'brown',
        borderRadius: 100,
        width: 100,
        height: 60,
        justifyContent:'center',
        alignSelf:'center'
    },
    buttonAccederText:{
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign:'center'
    },
    TextNumDiv:{
        marginLeft:15,
        marginBottom:5,
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign:'left'
    },
    TextNumDivInput:{
        marginLeft:15,
        fontSize: 20,
        borderWidth:1,
        borderColor:'brown',
        borderRadius: 10
    }


})