import { View, FlatList, StyleSheet, Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { data } from '../../data';
import { Product } from '../../types/product';
import ProdutoCard from '../components/ProdutoCard';

export default function CategoriaDetalhe() {
  const { id } = useLocalSearchParams();
  const [produtos, setProdutos] = useState<Product[]>([]);
  const [categoriaTitulo, setCategoriaTitulo] = useState<string>('');

  useEffect(() => {
    const categoriaId = Number(id);

    // Busca os produtos da categoria
    const filtrar = data.products.filter(
      (product) => product.idCategory === categoriaId
    );
    setProdutos(filtrar);

    // Busca o título da categoria
    const buscarCategoria = data.categories.find((cat) => cat.id === categoriaId);
    if (buscarCategoria) {
      setCategoriaTitulo(buscarCategoria.title);
    }
  }, [id]);

  return (
    <View style={styles.container}>
      <Text style={styles.cabecalhoTitulo}>{categoriaTitulo}</Text>

      {produtos.length === 0 ? (
        <Text style={styles.semResultado}>Nenhum produto encontrado.</Text>
      ) : (
        <FlatList
          data={produtos}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <ProdutoCard product={item} />}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
    paddingTop: 16,
    backgroundColor: '#f5f5f5',
  },
  cabecalhoTitulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 16,
  },
  semResultado: {
    textAlign: 'center',
    marginTop: 40,
    fontSize: 16,
    color: '#888',
  },
});
