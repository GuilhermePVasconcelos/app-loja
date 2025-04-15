import { View, FlatList, StyleSheet, Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { data } from '../../data';
import { Product } from '../../types/product';
import ProdutoCard from '../components/ProdutoCard';

// Componente principal que renderiza os produtos de uma categoria específica
export default function CategoriaDetalhe() {
  // Captura o parâmetro da URL (id da categoria)
  const { id } = useLocalSearchParams();

  // Estado que armazena os produtos filtrados por categoria
  const [produtos, setProdutos] = useState<Product[]>([]);

  // Estado que armazena o nome (título) da categoria
  const [categoriaTitulo, setCategoriaTitulo] = useState<string>('');

  // Hook que executa a lógica assim que o ID mudar
  useEffect(() => {
    const categoriaId = Number(id); // Converte o parâmetro para número

    // Filtra os produtos com base no ID da categoria
    const filtrar = data.products.filter(
      (product) => product.idCategory === categoriaId
    );
    setProdutos(filtrar);

    // Localiza o nome da categoria e atualiza o estado
    const buscarCategoria = data.categories.find((cat) => cat.id === categoriaId);
    if (buscarCategoria) {
      setCategoriaTitulo(buscarCategoria.title);
    }
  }, [id]); // Dependência: sempre que o `id` mudar, executa novamente

  // Renderização do componente
  return (
    <View style={styles.container}>
      {/* Exibe o nome da categoria como título */}
      <Text style={styles.cabecalhoTitulo}>{categoriaTitulo}</Text>

      {/* Verifica se há produtos a exibir ou exibe mensagem de vazio */}
      {produtos.length === 0 ? (
        <Text style={styles.semResultado}>Nenhum produto encontrado.</Text>
      ) : (
        <FlatList
          data={produtos} // Lista de produtos da categoria
          keyExtractor={(item) => item.id.toString()} // Chave única por produto
          renderItem={({ item }) => <ProdutoCard product={item} />} // Renderiza cada produto com seu componente
          contentContainerStyle={{ paddingBottom: 20 }} // Espaçamento inferior
        />
      )}
    </View>
  );
}

// Estilização dos elementos da tela
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