import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Product } from '../../types/product';
import { useRouter } from 'expo-router';

type Props = {
  product: Product;
  onPress?: () => void;
};

export default function ProdutoCard({ product }: Props) {
  const router = useRouter();

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => router.push(`../produtos/${product.id}`)}
    >
      <Image source={{ uri: product.image }} style={styles.imagem} />
      <View style={styles.detalhes}>
        <Text style={styles.titulo}>{product.title}</Text>
        <Text style={styles.descricao}>{product.description}</Text>
        <Text style={styles.preco}>R$ {product.price.toFixed(2)}</Text>
      </View>
    </TouchableOpacity>
  );
}

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
