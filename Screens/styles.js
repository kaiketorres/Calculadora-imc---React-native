import { StyleSheet } from "react-native";

export default StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#2F2F2F',
    paddingHorizontal: 30
  },
  titles: {
    fontFamily: 'MerriweatherSans',
    color: '#FF5F5f',
  },
  text: {
    color: '#b64444',
    fontFamily: 'Alilato',
    fontSize: 17
  },
  buttonComecar: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 55,
    borderRadius: 10,
    backgroundColor: '#FD6060',
    shadowColor: '#d75252',
    elevation: 10,
  },
  positionCalc: {
    flex: 1,
    backgroundColor: '#2F2F2F',
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    paddingLeft:10,
    paddingRight:10
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
  },
  buttonCalc: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '20%',  // Approx. 25% minus some margin
    marginVertical: 15,
    height: 70,
    borderRadius: 10,
    backgroundColor: '#363636',
    shadowColor: '#e0e0e0',
    shadowOpacity: 0.8,
    elevation: 2,
  },
  buttonRedondo: {
    borderRadius: 25,
    height: 70,
    width: '22%'  // Approx. 25% minus some margin
  },
  textButton: {
    fontFamily: 'MerriweatherSans',
    textTransform: 'uppercase',
    color: '#fff',
    fontSize: 22,
  },
  positionInput: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    gap: 50,
  },
  input: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    textAlign: 'center',
    color: '#FF5F5f',
    backgroundColor: '#2C2C2C',
    width: 130,
    height: 50,
    borderRadius: 20,
  },
  calcInput: {
    width: '100%',
    height: 50,
    borderRadius: 20,
    color: '#fff',
    fontSize: 25,
    textAlign: 'center'
  },
  resultContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '20%',
    borderRadius: 10,
    backgroundColor: '#363636',
    shadowColor: '#e0e0e0',
    shadowOpacity: 0.8,
    elevation: 2,
    marginTop:50
  },
  resultText: {
    color: '#fff',
    fontSize: 50,
    fontFamily: 'Alilato',
    fontWeight: 'bold'
  },
  buttonGO: {
    width: '47%', // Approx. 50% minus some margin
    backgroundColor: '#FF5F5f',
  },
  button_0: {
    width: '47%', // Approx. 50% minus some margin
    marginLeft: '3%',
  },
  modalContent: {
    backgroundColor: '#363636',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
    color:'white'
  },
  modalButton: {
    backgroundColor: '#FF5F5f',
    padding: 10,
    borderRadius: 5,
  },
  modalButtonText: {
    color: 'white',
    fontSize: 16,
  },
});
