import React, { useContext, useEffect, useState } from "react";
import { Button, View, StyleSheet, Text, TouchableOpacity } from "react-native";
import {BarCodeScanner} from 'expo-barcode-scanner'
import { theme } from "../core/theme";
import Counter from "react-native-counters";
import { AuthContext } from "../context/AuthContext";

export default function HomeScreen({navigation}) {
    const [hasPermission, setHasPermission] = useState(null)
    const [scanned, setScanned] = useState(false)
    const [orderAmount, setOrderAmount] = useState(1)

    const {accessToken} = useContext(AuthContext)

    useEffect(() => {
        const getBarCodeScannerPermissions = async() => {
            const {status} = await BarCodeScanner.requestPermissionsAsync()
            setHasPermission(status === 'granted')
        }

        getBarCodeScannerPermissions()
    })

    const handleBarCodeScanned = ({type, data}) => {
        setScanned(false)
        console.log(`Bar code with type ${type} and data ${data} has been scanned`)
        console.log("accessToken = " + accessToken)
        try{
          fetch(`http://localhost:3000/employees/${data}`,{
            method: "POST",
            headers: {
              Accept: "application/json",
              "content-type": "application/json",
              Authorization: accessToken
            },
            body: JSON.stringify({
              employee: {
                order_amount: orderAmount
              }
            })
          })
          .then((response)=>{
            return new Promise((resolve) => response.json().then(
              (json) => resolve({
                status: response.status,
                ok: response.ok,
                json
              }))
            )
          })
          .then(({status, ok, json})=>{
            if(ok){
              // navigation.navigate("ServeScreen")
              alert(json.success)
            }else{
              switch(status){
                case 401:
                  alert(json.error + "\n" + "ያለዎት " + json.remaining + " ብቻ ነው")
                  break;
                case 404:
                  alert(json.error)
                  break;
                case 500:
                  alert(json.error)
                  break;
                default:
                  alert("Please try again")
              }
            }
          })
          // .then((response)=>{
          //   // if(!response.ok){
          //   //   console.log(response.json())
          //   //   throw new Error("Please try again")
          //   // }
          //   console.log(response.status)
          //   return response.json()
          // })
          // .then(data=>{
          //   console.log(data)
          //   navigation.navigate("ServeScreen")
          // })
          .catch((error)=>{
            alert("please try again inside")
          })
        }catch(error){
          console.log(error)
          // please try again
          alert("Please try again")
        }
    }

    if(hasPermission === null){
        return (
          <View style={styles.container}>
              <Text>Requesting for camera permission</Text>
          </View>
        )
    }

    if(hasPermission === false) {
        return <Text>No access to camera</Text>
    }

    const handleCounter = (number, type) =>{
      setOrderAmount(number)
    }

    return (
      <View style={styles.container}>
        <Counter 
          start={orderAmount} 
          min={1}
          max={10}
          onChange={handleCounter} 
          buttonTextStyle={{fontSize: 50, color: theme.colors.primary}} 
          buttonStyle={{paddingHorizontal: 25, paddingVertical:18, borderColor: theme.colors.primary}}
          countTextStyle={{fontSize: 50, color: theme.colors.primary}} 
          style={{marginBottom: 30}}
        />
        {scanned && (<BarCodeScanner
            onBarCodeScanned={!scanned ? undefined : handleBarCodeScanned}
            style={styles.barCodeScanner}
        />)}
        
        {!scanned && <TouchableOpacity
            style={styles.button}
            onPress={() => setScanned(true)}
        >
            <Text style={{fontSize: 16, color: theme.colors.tint}}>ለማስተናገድ ይጫኑ</Text>
        </TouchableOpacity>}
        
        {scanned && <TouchableOpacity
            style={styles.button}
            onPress={() => setScanned(false)}
        >
            <Text>ያቋርጡ</Text>
        </TouchableOpacity>}
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  text: {
    textAlign: "center",
  },
  barCodeScanner: {
    width: 900,
    height: 400,
    marginTop: 25
  }, 
  button: {
    marginRight: 15, 
    padding: 10, 
    backgroundColor: theme.colors.primary,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginTop: 20
  }
});
