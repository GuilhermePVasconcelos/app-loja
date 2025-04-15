import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Category } from "../../types/category";  


// Define os tipos das propriedades que o componente recebe
type Props = {
  category: Category; // Objeto da categoria que será exibido
  onPress: () => void; // Função a ser executada ao clicar no card
};

// Componente visual que representa um cartão de categoria clicável
export default function CategoriaCard({ category, onPress }: Props) {
  return (
    // Componente que responde ao toque do usuário e executa o onPress
    <TouchableOpacity onPress={onPress} style={styles.card}>
      
      {/* Exibe a imagem de capa da categoria */}
      <Image source={{ uri: category.cover }} style={styles.imagem} />

      {/* Container para o título da categoria */}
      <View style={styles.detalhes}>
        <Text style={styles.titulo}>{category.title}</Text>
      </View>
    </TouchableOpacity>
  );
}

// Estilos do componente CategoriaCard
const styles = StyleSheet.create({
  card: {
    flexDirection: "row", 
    backgroundColor: "#fff",
    marginBottom: 10,
    padding: 12,
    borderRadius: 10,
    elevation: 2, 
  },
  imagem: {
    width: 80,
    height: 80,
    marginRight: 12,
    borderRadius: 8, 
  },
  detalhes: {
    flex: 1,
    justifyContent: "center", 
  },
  titulo: {
    fontSize: 16,
    fontWeight: "bold",
  },
});