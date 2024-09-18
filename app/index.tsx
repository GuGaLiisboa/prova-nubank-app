import { Text, View, StyleSheet, Image, } from "react-native";
import { TextInput } from "react-native";
import { TouchableOpacity } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Image style={styles.logo} source={require('../assets/images/nubank-logo-branco.png')}></Image>
      </View>
      <Text style={{ color: 'white', paddingLeft: 20 }}>Olá, Felipe Melo</Text>
      {/* <Text style={styles.campoProcurar}>Procurar...</Text> */}
      <TextInput
        style={styles.campoProcurar}
        placeholder="Procurar..."
      />

      <View style={styles.cartao}>
        <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Cartão de Crédito</Text>
        <Text>Fatura</Text>
        <Text style={{ color: '#0099CC', fontSize: 25, fontWeight: 'bold' }}>R$ 1.500,00</Text>
        <TouchableOpacity
          style={styles.btn}>
            <Text style={{textAlign: 'center'}}>Pagar Fatura</Text>
          </TouchableOpacity>
      </View>

      <View style={styles.cartao}>
        <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Conta</Text>
        <Text >Saldo Disponível</Text>
        <Text style={{ color: '#0099CC', fontSize: 25, fontWeight: 'bold' }}>R$ 300,00</Text>
        <TouchableOpacity
          style={styles.btn}>
            <Text style={{textAlign: 'center'}}>Transferir</Text>
          </TouchableOpacity>
        
         
      </View>

      <TouchableOpacity
          style={styles.btnmeusCartoes}>
            <Text style={{textAlign: 'center', color: 'white', fontWeight: 'bold'}}>Meus Cartões</Text>
          </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8B03BB'
  },

  containerLogo: {
    alignItems: 'center',
    paddingTop: 25,
    paddingBottom: 20
  },

  logo: {
    width: 120,
    height: 50
  },

  campoProcurar: {
    padding: 10,
    borderRadius: 10,
    // marginBottom: 10,
    borderColor: 'white',
    borderWidth: 2,
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15,
    color: 'white',
  },

  cartao: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    marginTop: 20,
    marginLeft: 15,
    marginRight: 15
  },

  btnMenor: {
    borderRadius: 25,
    color: 'black',
    width: 120,
    borderColor: 'black',
    borderWidth: 2,
    textAlign: 'center',
    marginTop: 10,
    padding: 4
  },

  meusCartoes: {
    padding: 10,
    borderRadius: 25,
    backgroundColor: '#0099CC',
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold'
  },

  input: {
    backgroundColor: '#DDD',
    padding: 10,
    borderRadius: 10,
    marginTop: 5,
    marginBottom: 20,
  },

  btn: {
    backgroundColor: 'white',
    borderRadius: 25,
    color: 'black',
    width: 120,
    borderColor: 'black',
    borderWidth: 2,
    textAlign: 'center',
    marginTop: 10,
    padding: 4
  },

  btnmeusCartoes: {
    padding: 10,
    borderRadius: 25,
    backgroundColor: '#0099CC',
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold'
  },
})