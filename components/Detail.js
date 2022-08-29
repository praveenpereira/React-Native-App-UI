import React,{useState} from 'react';
import {View,Text,ScrollView,Image,TouchableOpacity,ImageBackground} from 'react-native';
import Icon from '@expo/vector-icons/Entypo';

const Detail =({navigation})=>{
  const [collectionSelected, setCollectionSelected] = useState(true)
  return(
    <View style={{
      backgroundColor:'#044255',
      height:'100%'
    }}>
    <View style={{
      backgroundColor:'#fff',
      borderBottomLeftRadius:50,
      borderBottomRightRadius:50,
      paddingHorizontal:40
    }}>
    <View style={{
      flexDirection:'row',
      justifyContent:'space-between',
      marginTop:40
      }}>
    <TouchableOpacity onPress={()=>navigation.goBack()}>
    <Icon name="chevron-left" size={24} color="#044244"/>
    </TouchableOpacity>
    <View>
    <Icon name="dots-two-vertical" size={24} color="#044244"/>
    </View>
    </View>

    
    <Image source={require('../images/p2.jpg')} style={{height:100, width:100,alignSelf:'center',borderRadius:20,marginVertical:20}}/>
    
   
    <Text style={{
      fontSize:22,
      fontFamily:'bold',
      color:'#044244',
      alignSelf:'center'
    }}>Bator</Text>
   <Text style={{
     fontSize:16,
     fontFamily:'medium',
     color:'#9ca1a2',
     alignSelf:'center'
   }}>England</Text>
  
     <View style={{marginTop:20,flexDirection:'row',alignSelf:'center'}}>
    <View>
    <Text style={{
      fontFamily:'bold',
      fontSize:15,
      color:'#044244',
      alignSelf:'center'
    }}>290</Text>
    <Text style={{
      fontFamily:'medium',
      fontSize:16,
      color:'#9ca1a2',
      alignSelf:'center'
    }}>photos</Text></View>
      <View style={{marginHorizontal:40}}>
      <Text style={{
      fontFamily:'bold',
      fontSize:15,
      color:'#044244',
      alignSelf:'center'
    }} 
      >29999</Text>
      <Text style={{
      fontFamily:'medium',
      fontSize:16,
      color:'#9ca1a2',
      alignSelf:'center'
    }}
      >followers</Text>
      </View>
      <View >
      <Text style={{
      fontFamily:'bold',
      fontSize:15,
      color:'#044244',
      alignSelf:'center'
    }} 
      >100</Text>
      <Text style={{
      fontFamily:'medium',
      fontSize:16,
      color:'#9ca1a2',
      alignSelf:'center'
    }}
      >follows</Text>
      </View>
    </View>  
    </View>

    <View style={{paddingTop:20,paddingHorizontal:20,flexDirection:'row'}}>
    <TouchableOpacity onPress={()=>setCollectionSelected(!collectionSelected)}
      style={{
        borderBottomColor:collectionSelected ? '#fff' : '#044244',
      paddingVertical:6,
      borderBottomWidth:4
    }}>
    <Text style={{
      fontFamily:'bold',
      color: collectionSelected ? '#fff' : '#9ca1a2'
    }}>COLLECTIONS</Text></TouchableOpacity>
    <TouchableOpacity onPress={()=>setCollectionSelected(!collectionSelected)} 
      style={{
        borderBottomColor:collectionSelected ? '#044244' : '#fff',
      paddingVertical:6,
      borderBottomWidth:4,
      marginLeft:30
    }}>
    <Text style={{
      fontFamily:'bold',
      color: collectionSelected ? '#9ca1a2' : '#fff'
      }}>FEATURED</Text>
    </TouchableOpacity>
    </View>

    <View style={{flexDirection:'row'}}>
    <View style={{
      backgroundColor:'#728c8e',
      height:260,
      width:280,
      marginHorizontal:40,
      borderRadius:30,
      marginTop:30}}>
      <ImageBackground
      source={require('../images/7.jpg')}
      style={{
        width:280,
        height:180
      }}
      imageStyle={{
        borderRadius:30
      }}
      >
      <View style={{flexDirection:'row',justifyContent:'flex-end'}}>
      <TouchableOpacity style={{
        backgroundColor:'#6f8d90',
        width:40,
        marginTop:25,
        marginRight:20,
        padding:8,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center'
      }}>
      <Icon name='edit' size={20} color='#fff'/>
      </TouchableOpacity>
      </View>
      </ImageBackground>
      <View style={{
        paddingVertical:20,
        paddingHorizontal:30
      }}>
      <Text style={{
        fontFamily:'bold',
        color:'#fff',
        fontSize:15
      }}>Nature collections</Text>
      <Text style={{
        fontFamily:'medium',
        color:'#dedede',
        fontSize:12
      }}>1000 photos</Text>
      </View>
      </View>
      <View style={{
        height:180,
        backgroundColor:'#fff',
        width:20,
        marginTop:70,
        marginLeft:-20,
        borderRadiusTopLeft:20,
        borderRadiusBottomLeft:20
      }}>
      </View>
      </View>
       </View>
   
  )
}
export default Detail;