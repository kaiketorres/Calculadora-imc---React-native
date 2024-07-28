import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Modal from 'react-native-modal';
import styles from "./styles";

const teclado = [7, 8, 9, 'AC', 4, 5, 6, 'DEL', 1, 2, 3, '.', 0, 'GO'];

export default function ({ navigation }) {
  const [idade, setIdade] = useState('');
  const [female, setFemale] = useState('#4F4D4E');
  const [male, setMale] = useState('#4F4D4E');
  const [isVisible, setIsVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const MudarCor = (genero) => {
    genero === 'female'
      ? (setFemale('#FD6060'), setMale('#4F4D4E'))
      : (setFemale('#4F4D4E'), setMale('#FD6060'));
  };

  const Press = (value) => {
    if (value === 'GO') {
      if (female === '#4F4D4E' && male === '#4F4D4E') {
        setAlertMessage('Você deve informar seu Gênero');
        setIsVisible(true);
      } else if (idade === '' && !idade) {
        setAlertMessage('Você deve informar sua idade');
        setIsVisible(true);
      } else {
        navigation.navigate('calculadora');
      }
    } else if (value === 'DEL') {
      setIdade((prev) => prev.slice(0, -1));
    } else if (value === 'AC') {
      setIdade('');
    } else {
      if (idade.length < 5) {
        setIdade((prev) => prev + value.toString());
      }
    }
  };

  const handleModalClose = () => {
    setIsVisible(false);
  };

  return (
    <View style={styles.positionCalc}>
      <View style={styles.positionInput}>
        <Text style={styles.text}>Informe Seu Gênero</Text>
        <View style={styles.input}>
          <TouchableOpacity onPress={() => MudarCor('female')} style={{ padding: 10 }}>
            <Ionicons name="female-outline" size={30} color={female} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => MudarCor('male')} style={{ padding: 10 }}>
            <Ionicons name="male" size={30} color={male} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ ...styles.positionInput, marginBottom: 70, marginTop: 50 }}>
        <Text style={styles.text}>Informe Sua idade</Text>
        <View style={styles.input}>
          <TextInput
            showSoftInputOnFocus={false}
            style={styles.input}
            value={idade}
            onChangeText={setIdade}
          />
        </View>
      </View>

      <View style={styles.buttonContainer}>
        {teclado.map((numeros, index) => {
          let buttonStyle = { ...styles.buttonCalc };

          if (numeros === 'AC' || numeros === 'DEL' || numeros === '.') {
            buttonStyle = { ...buttonStyle, ...styles.buttonRedondo };
          } else if (numeros === 'GO') {
            buttonStyle = { ...buttonStyle, ...styles.buttonGO };
          } else if (numeros === 0) {
            buttonStyle = { ...buttonStyle, ...styles.button_0 };
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

