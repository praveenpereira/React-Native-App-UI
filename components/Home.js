import React,{useState} from 'react';
import {View,Text,ScrollView,TextInput,Image,TouchableOpacity} from 'react-native';
import Icon from '@expo/vector-icons/Entypo';
import Posts from './Posts';

const Home=(props)=>{
  const [popularSelected, setPopularSelected] = useState(true)
  return(
    <ScrollView
     showsVerticalScrollIndicator={false}
     style={{
       height:'100%',
       backgroundColor:'#044244'
       }}>
    <View style={{ 
      height:260,
      width:'100%',
      paddingHorizontal:35
      }}>
    <View style={{
      flexDirection:'row',
      width:'100%',
      paddingTop:40,
      justifyContent:'space-between',
      alignItems:'center'}}>
    <View>
    <Image source={require('../images/Untitled.png')}
    style={{width:20,height:20}}/>
    </View>
    <View>
    <Icon name="dots-two-vertical"
     size={22}
    color="#d2d2d2"
     style={{marginRight:-7,marginTop:7}}
    />
    </View>
    </View>
    <Text style={{
      paddingVertical:25,
      fontSize:25,color:'white',
      fontFamily:'bold'
      }}>FIND AWESOME PHOTOS</Text>

    <View style={{
      flexDirection:'row',
      justifyContent:'space-between',
      borderRadius:20,
      borderWidth:0.2,
      borderColor:'#9ca1a2',
      paddingVertical:5,
      alignItems:'center'}}>
   
    <TextInput 
    placeholder="search here...."
    
    style={{
      paddingHorizontal:20,
      fontFamily:'medium',
      fontSize:11,
      width:'90%',
      color:'#9ca1a2'
    }}
    />
    <Icon name="magnifying-glass" size={15} color='#9ca1a2'/>
   
    </View>
    </View>
   
    <View style={{
      backgroundColor:'#fff',
      paddingHorizontal:35,
      height:1000,
      borderTopLeftRadius:20,
      borderTopRightRadius:20}}>

    <View style={{
      flexDirection:'row',
      justifyContent:''
    }}>
    <TouchableOpacity onPress={()=>setPopularSelected(!popularSelected)}
     style={{
       borderBottomColor:popularSelected ? '#044244' : '#fff',
       borderBottomWidth:4,
       paddingVertical:6}}>
    <Text style={{
      fontFamily:'bold',
      color:popularSelected ? '#044244' : '#9ca1a2'
    }}
    >MOST POPULAR</Text>
    </TouchableOpacity>
    <TouchableOpacity  onPress={()=>setPopularSelected(!popularSelected)}
    style={{
       borderBottomColor:popularSelected ? '#fff' : '#044244',
      borderBottomWidth:4,
      paddingVertical:6,
      marginLeft:30}}>
    <Text style={{
      fontFamily:'bold',
      color:popularSelected ? '#9ca1a2' : '#044244'
    }} >RECENT</Text>
    </TouchableOpacity>
    </View>
    <View style={{
      flexDirection:'row',
      }}>
    <View style={{
       height:160,
       backgroundColor:'#3c636c',
       width:20,
       marginLeft:-40,
       marginRight:20,
       marginTop:120,
       borderTopRightRadius:20,
       borderBottomRightRadius:20
    }}>
    </View>
    <Posts
    onPress={()=>props.navigation.navigate('Detail')}
    name="Max Bator"
    profile={require('../images/p1.jpg')}
    photo={require('../images/5.jpg')}
    />
    </View>
    <View style={{flexDirection:'row'}}>
    <Posts
    onPress={()=>props.navigation.navigate('Detail')}
    name="Max Bator"
    profile={require('../images/p1.jpg')}
    photo={require('../images/5.jpg')}
    />
    <View style={{
      height:160,
      backgroundColor:'#3c636c',
      width:20,
      marginLeft:20,
      marginTop:120,
      borderTopLeftRadius:20,
      borderBottomLeftRadius:20
    }}></View>
     
    </View>
        <View style={{
      flexDirection:'row',
      }}>
    <View style={{
       height:160,
       backgroundColor:'#3c636c',
       width:20,
       marginLeft:-40,
       marginRight:20,
       marginTop:120,
       borderTopRightRadius:20,
       borderBottomRightRadius:20
    }}>
    </View>
    <Posts
    onPress={()=>props.navigation.navigate('Detail')}
    name="Max Bator"
    profile={require('../images/p1.jpg')}
    photo={require('../images/5.jpg')}
    />
    </View>
   </View>
  
    </ScrollView>
  )
}
export default Home;