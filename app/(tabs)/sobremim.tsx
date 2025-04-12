import { View, Text, StyleSheet, Image, Linking, TouchableOpacity, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function SobreMimScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
     
      <Image
        source={require('../../assets/images/avatar.png')}
        style={styles.foto}
      />

      
      <Text style={styles.nome}>Guilherme Vasconcelos</Text>
      <Text style={styles.funcao}>Estudante de Engenharia de Software</Text>

      
      <Text style={styles.descricao}>
        Sou o desenvolvedor deste aplicativo, criado como parte de um projeto acadêmico com foco em React Native.
        Meu objetivo é aplicar os conhecimentos adquiridos em um app funcional, moderno e responsivo, buscando evoluir sempre!
      </Text>
 
    
      <View style={styles.links}>
        <TouchableOpacity style={styles.linkBtn} onPress={() => Linking.openURL('https://github.com/GPVasconcelos')}>
          <Feather name="github" size={20} color="#2e86de" />
          <Text style={styles.linkText}>GitHub</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.linkBtn} onPress={() => Linking.openURL('mailto:gpvasconcelos@minha.fag.edu.br')}>
          <Feather name="mail" size={20} color="#2e86de" />
          <Text style={styles.linkText}>E-mail</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#f0f4f8',
    gap: 20,
  },
  foto: {
    width: 140,
    height: 140,
    borderRadius: 70,
    marginBottom: 10,
    borderWidth: 3,
    borderColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
  },
  nome: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2d3436',
  },
  funcao: {
    fontSize: 16,
    color: '#2f3542',
    marginBottom: 8,
  },
  descricao: {
    fontSize: 16,
    color: '#2f3542',
    lineHeight: 24,
    textAlign: 'center',
    paddingHorizontal: 8,
  },
  links: {
    width: '100%',
    marginTop: 20,
    gap: 16,
  },
  linkBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: '#ffffff',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#dfe6e9',
    shadowColor: '#000',
    elevation: 1,
  },
  linkText: {
    fontSize: 16,
    color: '#2e86de',
    fontWeight: '500',
  },
});
