import React,{useState} from 'react';
import {View,Text,ImageBackground,TouchableOpacity,Image} from 'react-native';
import Icon from '@expo/vector-icons/Entypo';

const Posts =(props)=>{
  const [liked, setLiked] = useState(false)
  return(
    <View>
   <View style={{flexDirection:'row',justifyContent:'space-between',paddingTop:25,alignItems:'center'}}>
   <View style={{width:'20%'}}><Image
   source={props.profile}
   style={{
     width:45,
     height:45,
     borderRadius:13
   }}
   /></View>
   <View style={{width:'60%'}}><Text style={{fontFamily:'bold',fontSize:'14',color:'#044244',marginLeft:25}}>{props.name}</Text>
   <Text style={{fontFamily:'medium',fontSize:12,color:'#9ca1a2',marginLeft:25}}>2 min ago</Text></View>
   <View style={{width:'20%',marginLeft:70}}>
   <Icon name="sound-mix" size={20} color="044244"/>
   </View>
   </View>
   <View style={{flexDirection:'row',width:'100%',paddingTop:20}}>
   <ImageBackground source={props.photo}
   style={{width:'100%',height:220,}}
   imageStyle={{borderRadius:30}}
   >
   <View style={{height:'100%',flexDirection:'row',alignItems:'flex-end',justifyContent:'flex-end'}}>
   <TouchableOpacity onPress={props.onPress} style={{
     marginBottom:20,
     borderRadius:5,
     padding:5,
     backgroundColor:'#e8e8e8'
   }}>
   <Icon name="forward" size={20} color="044244"/>
   </TouchableOpacity>
   <TouchableOpacity onPress={()=>setLiked(!liked)}
   style={{
     marginBottom:20,
     borderRadius:5,
     padding:5,
     backgroundColor:'#e8e8e8',
     marginLeft:10,
     marginRight:20
   }}>
   <Icon name={liked? 'heart':'heart-outlined'}
    size={20}
     color={liked? 'red':'#044244'}/>
   </TouchableOpacity>
   </View>
   </ImageBackground>
   </View>

    </View>
  )
}
export default Posts;