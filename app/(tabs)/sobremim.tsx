import { View, Text, StyleSheet, Image, Linking, TouchableOpacity, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';

// Tela "Sobre Mim"
export default function SobreMimScreen() {
  return (
    // Container com rolagem vertical para permitir layout
    <ScrollView contentContainerStyle={styles.container}>
     
      {/* Imagem de perfil do desenvolvedor */}
      <Image
        source={require('../../assets/images/avatar.png')} // Caminho da imagem local
        style={styles.foto}
      />

      {/* Nome e função do desenvolvedor */}
      <Text style={styles.nome}>Guilherme Vasconcelos</Text>
      <Text style={styles.funcao}>Estudante de Engenharia de Software</Text>

      {/* Descrição pessoal */}
      <Text style={styles.descricao}>
        Sou o desenvolvedor deste aplicativo, criado como parte de um projeto acadêmico com foco em React Native.
        Meu objetivo é aplicar os conhecimentos adquiridos em um app funcional, moderno e responsivo, buscando evoluir sempre!
      </Text>
 
      {/* Área com botões de contato */}
      <View style={styles.links}>
        
        {/* Botão que redireciona ao perfil do GitHub */}
        <TouchableOpacity style={styles.linkBtn} onPress={() => Linking.openURL('https://github.com/GuilhermePVasconcelos')}>
          <Feather name="github" size={20} color="#2e86de" />
          <Text style={styles.linkText}>GitHub</Text>
        </TouchableOpacity>

        {/* Botão que abre o e-mail */}
        <TouchableOpacity style={styles.linkBtn} onPress={() => Linking.openURL('mailto:gpvasconcelos@minha.fag.edu.br')}>
          <Feather name="mail" size={20} color="#2e86de" />
          <Text style={styles.linkText}>E-mail</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

// Estilos aplicados a cada elemento da tela
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