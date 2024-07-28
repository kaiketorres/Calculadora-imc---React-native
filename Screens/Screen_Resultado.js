import React, { useState, useEffect } from "react";
import { View, Text } from 'react-native'
import styles from "./styles";


export default function ({ route, navigation }) {

  const { peso, altura } = route.params;
  const r = peso / (Math.pow(altura, 2));

  const [situacao, setSituacao] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [situacaoColor, setSituacaoColor] = useState('#fff');

  const colors = {
    'Muito abaixo do peso': '#FF0000',
    'Abaixo do peso': '#FFA500',
    'Peso normal': '#00FF00',
    'Acima do peso': '#FFFF00',
    'Obesidade grau 1': '#FF6347',
    'Obesidade grau 2': '#FF4500',
    'Obesidade grau 3': '#8B0000',
  };


  useEffect(() => {
    if (r <= 16) {
      setSituacao('Muito abaixo do peso');
      setMensagem('Você está muito abaixo do peso ideal. É importante procurar um nutricionista para uma avaliação e orientação sobre uma dieta adequada para sua saúde.');
    } else if (r <= 18) {
      setSituacao('Abaixo do peso');
      setMensagem('Você está abaixo do peso ideal. Tente incluir alimentos mais nutritivos na sua dieta e considere buscar orientação de um profissional de saúde.');
    } else if (r <= 24) {
      setSituacao('Peso normal');
      setMensagem('Você está com o peso ideal. Continue mantendo uma dieta equilibrada e praticando atividades físicas regularmente.');
    } else if (r <= 29) {
      setSituacao('Acima do peso');
      setMensagem('Você está um pouco acima do peso ideal. Tente adotar hábitos mais saudáveis, como uma alimentação balanceada e a prática de exercícios.');
    } else if (r <= 34) {
      setSituacao('Obesidade grau 1');
      setMensagem('Você está com obesidade grau 1. É recomendável buscar a orientação de um profissional de saúde para adotar uma dieta adequada e iniciar uma rotina de exercícios.');
    } else if (r <= 40) {
      setSituacao('Obesidade grau 2');
      setMensagem('Você está com obesidade grau 2. Procure acompanhamento médico para um plano de emagrecimento seguro e eficaz.');
    } else if (r > 40) {
      setSituacao('Obesidade grau 3');
      setMensagem('Você está com obesidade grau 3. É muito importante procurar ajuda médica para iniciar um tratamento adequado e melhorar sua saúde.');
    }
    setSituacaoColor(colors[situacao]);
  }, [r, situacao]);



  return (

    <View style={{ ...styles.positionCalc, paddingHorizontal: 10 }}>


      <View style={styles.positionInput}>
        <Text style={styles.text}>Seu Peso</Text>
        <View style={styles.input}>
          <Text style={{
            ...styles.titles,
            textAlign: 'center',
            fontSize: 25
          }}>{peso} kg</Text>
        </View>
      </View>

      <View style={{ ...styles.positionInput,  marginBottom: 50,marginTop: 50 }}>
        <Text style={styles.text}>Sua Altura</Text>
        <View style={styles.input}>
          <Text style={{
            ...styles.titles,
            textAlign: 'center',
            fontSize: 25
          }}>{altura} kg</Text>
        </View>
      </View>

      <View >
        <Text style={{ color: '#ffff', textAlign: 'center', fontFamily: ('Alilato'), }}>{mensagem}</Text>
      </View>

      <View style={styles.resultContainer}>

        <Text style={styles.resultText}>
          {r.toFixed(1)}
        </Text>

        <Text style={{
          color: '#fff',
          fontSize: 20,
          fontFamily: ('Alilato'),
          fontWeight: 'bold',
        }}>IMC</Text>


        <Text style={{
          color: situacaoColor,
          fontSize: 15,
          fontFamily: ('Alilato'),
          fontWeight: 'bold'
        }}>{situacao}</Text>

      </View>
    </View>
  )
}