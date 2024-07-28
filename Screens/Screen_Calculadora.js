import React, { useState, useRef } from "react";
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import styles from "./styles";
import Modal from 'react-native-modal';

const teclado = [7, 8, 9, 'AC', 4, 5, 6, 'DEL', 1, 2, 3, '.', 0, 'GO']

export default function ({ navigation }) {



  const [peso, setPeso] = useState('')
  const [altura, setAltura] = useState('')
  const [focos, setFoco] = useState('')
  const [isVisible, setIsVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const Press = (value) => {
    if (value === 'GO') {

      if (peso == '' && !peso) {
        setAlertMessage('Você deve informar seu Peso');
        setIsVisible(true);
      } else if (altura === '' && !altura) {
        setAlertMessage('Você deve informar sua Altura');
        setIsVisible(true);
      } else {
        navigation.navigate('resultado', { peso, altura })

      }

    } else if (value === 'DEL') {
      if (focos === 'peso') {
        setPeso((prev) => prev.slice(0, -1))
      } else if (focos === 'altura') {
        setAltura((prev) => prev.slice(0, -1))
      }
    } else if (value === 'AC') {
      if (focos === 'peso') {
        setPeso('')
      } else if (focos === 'altura') {
        setAltura('')
      }
    } else {
      if (focos === 'peso') {
        if (peso.length < 5) {
          setPeso((prev) => prev + value.toString())
        }
      } else if (focos === 'altura') {
        if (altura.length < 4) {
          setAltura((prev) => prev + value.toString())
        }
      }
    }
  }

  const handleModalClose = () => {
    setIsVisible(false);
  };

  return (
    <View style={styles.positionCalc}>
      <View style={styles.positionInput}>
        <Text style={styles.text}>Informe Seu Peso</Text>
        <View style={styles.input}>
          <TextInput
            onFocus={() => setFoco('peso')}
            showSoftInputOnFocus={false}
            style={styles.input}
            onChangeText={setPeso}
            value={peso}
          />
        </View>
      </View>

      <View style={{ ...styles.positionInput, marginBottom: 70, marginTop: 50 }}>
        <Text style={styles.text}>Informe Sua Altura</Text>
        <View style={styles.input}>
          <TextInput
            onFocus={() => setFoco('altura')}
            showSoftInputOnFocus={false}
            style={styles.input}
            value={altura}
            onChangeText={setAltura}
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>

        {teclado.map((numeros, index) => {

          let buttonStyle = { ...styles.buttonCalc };

          if (numeros === 'AC' || numeros === 'DEL' || numeros === '.') {
            buttonStyle = { ...buttonStyle, ...styles.buttonRedondo };
          }
          else if (numeros === 'GO') {
            buttonStyle = { ...buttonStyle, ...styles.buttonGO };
          }
          else if (numeros === 0) {
            buttonStyle = { ...buttonStyle, ...styles.button_0 }
          }
          return (
            <TouchableOpacity onPress={() => Press(numeros)} key={index} style={buttonStyle}>
              <Text style={styles.textButton}>{numeros}</Text>
            </TouchableOpacity>
          );
        })}
      </View>

      <Modal isVisible={isVisible} onBackdropPress={handleModalClose}>
        <View style={styles.modalContent}>
          <Text style={styles.modalText}>{alertMessage}</Text>
          <TouchableOpacity onPress={handleModalClose} style={styles.modalButton}>
            <Text style={styles.modalButtonText}>OK</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}