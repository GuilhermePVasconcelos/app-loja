import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Product } from '../../types/product';
import { useRouter } from 'expo-router';

// Define as propriedades aceitas pelo componente
type Props = {
  product: Product; // Dados do produto a serem exibidos
  onPress?: () => void; // Função opcional de clique (não está sendo usada neste caso)
};

// Componente visual responsável por exibir um produto na lista
export default function ProdutoCard({ product }: Props) {
  const router = useRouter(); // Hook de navegação

  return (
    // Card clicável que redireciona para a tela de detalhes do produto
    <TouchableOpacity
      style={styles.card}
      onPress={() => router.push(`../produtos/${product.id}`)} // Navega dinamicamente para a tela do produto
    >
      {/* Imagem do produto exibida à esquerda */}
      <Image source={{ uri: product.image }} style={styles.imagem} />

      {/* Área com detalhes do produto (nome, descrição, preço) */}
      <View style={styles.detalhes}>
        <Text style={styles.titulo}>{product.title}</Text>
        <Text style={styles.descricao}>{product.description}</Text>
        <Text style={styles.preco}>R$ {product.price.toFixed(2)}</Text>
      </View>
    </TouchableOpacity>
  );
}

// Estilização visual do componente ProdutoCard
const styles = StyleSheet.create({
  card: {
    flexDirection: 'row', 
    backgroundColor: '#fff',
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
    justifyContent: 'center', 
  },
  titulo: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#333',
  },
  descricao: {
    fontSize: 13,
    color: '#555',
  },
  preco: {
    marginTop: 6,
    fontSize: 15,
    fontWeight: 'bold',
    color: '#2a9d8f', 
  },
});