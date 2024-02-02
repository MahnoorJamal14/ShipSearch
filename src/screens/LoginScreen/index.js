import React, {useState} from 'react';
import {
  View,
  Image,
  ScrollView,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native'; 
import Slider from  '../../component/Slider'

function LoginScreen() {
  return (
    <ScrollView style={{flex: 1}}>
      <View
        style={{
          height: '50%',
          alignItems: 'center',
          margin: 40,
          justifyContent: 'center',
          marginTop: '40%',
         marginBottom: 90,
        }}>
        <Image
          source={require('../../Images/Logo.png')}
          style={{
            height: '80%',
            width: '40%',
            alignItems: 'center',
            justifyContent: 'center',
            resizeMode: 'contain',
          }}></Image>

        {/* <View style={{alignItems:'center', height: '100%',width:'80%', backgroundColor
    :'pink', marginTop: 29}}> */}

        <View style={{marginTop: -50, alignItems: 'center'}}>
          <Text style={{color: '#3D7A72', fontSize: 30}}>Login</Text>
          <View style={{marginTop: 20}}>
            <Text style={{color: '#3D7A72', fontSize: 15}}>
              Please Enter Your Credentials
            </Text>
            {/* </View> */}
          </View>
        </View>

        <View style={styles.container}>
          <TextInput
            style={styles.textInput}
            placeholder="Login"
            // Add any other props you need
          />

          <TextInput
            style={styles.textInput}
            placeholder="Password"
            // Add any other props you need
          />
        </View>

        {/* <Slider></Slider> */}
          
        <View>
            <ImageBackground source={require('../../Images/Rectangle1.png')}></ImageBackground>
          </View>

        <View
          style={{
            flexDirection: 'row',
            height: '9%',
            justifyContent: 'space-between',
            marginTop: 35,
            width: '100%',
          }}>
          <TouchableOpacity
            style={{
              width: '45%',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 20,
              height: 45,
              backgroundColor: '#3D7A72',
            }}>
            <Text style={{color: 'white'}}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity omPress={{}}
            style={{
              width: '45%',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 20,
              height: 45,
              backgroundColor: '#3D7A72',
            }}>
            <Text style={{color: 'white'}}>Guest</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            height: '20%',
            backhroundColor: 'orange',

            justifyContent: 'space-between',
            marginTop: 35,
            width: '100%',
          }}>

          
          <View style={{marginTop: '10%',
          
          flexDirection:'row',marginLeft: 65,alignItem:'center', justifyContent:'center'}}>


            <Text style={{textAlign:'center'}}>Don't have an account?</Text>
            <TouchableOpacity>
              <Text style={{color:'#4CCDBC'}}> Sign Up</Text>
            </TouchableOpacity>

          </View>
          <Image style={{height: '15%', width: '90%', marginTop: 90}}source={require('../../Images/Vector.png')}></Image>
        </View>

        {/* <Text>jdkjk</Text> */}
        {/* <View>
      <View style={{ flexDirection: 'row', height: '9%', justifyContent: 'space-between', marginTop: 35, width: '100%' }}>
        <TouchableOpacity style={{ width: '45%', alignItems: 'center', justifyContent: 'center', borderRadius: 20, height: 45, backgroundColor: '#3D7A72' }}>
          <Text style={{ color: 'white' }}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ width: '45%', alignItems: 'center', justifyContent: 'center', borderRadius: 20, height: 45, backgroundColor: '#3D7A72' }}>
          <Text style={{ color: 'white' }}>Guest</Text>
        </TouchableOpacity>
      </View>

      <View style={{ flexDirection: 'row', height: '20%', backgroundColor: 'orange', justifyContent: 'space-between', marginTop: 35, width: '100%' }}>
        <TouchableOpacity style={{ width: '100%', alignItems: 'center', justifyContent: 'center', marginTop: '10%', backgroundColor: 'purple' }}>
          <Text style={{ color: 'white' }}>Don't have an account? SignUp</Text>
        </TouchableOpacity>
      </View>
    </View> */}
      </View>
    </ScrollView>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    //   flex: 1,
    //   margin
    marginTop: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    width: 350,
    height: 60,
    borderWidth: 1,
    backgroundColor: 'white',
    borderRadius: 50,
    paddingHorizontal: 10,
    marginBottom: 10,
    borderColor: 'white',
    //   width: '100%',
    //   height: '15%',
    // Add any other styling you need
  },
});
