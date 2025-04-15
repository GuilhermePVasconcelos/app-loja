import { View, Text, ScrollView, StyleSheet, FlatList } from 'react-native';
import { data } from '../../data';
import { useRouter } from 'expo-router';
import CategoriaCard from '../components/CategoriaCard';
import ProdutoCard from '../components/ProdutoCard';

// Tela inicial do aplicativo (aba "Início")
export default function InicioScreen() {
  const router = useRouter(); // Hook usado para navegação  entre páginas

  return (
    <ScrollView contentContainerStyle={{ paddingHorizontal: 16, paddingVertical: 20 }}>
      {/* Título de boas-vindas */}
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 12 }}>Seja bem-vindo!</Text>

      {/* Seção de categorias */}
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 8 }}>Categorias</Text>
      <FlatList 
        data={data.categories.slice(0, 3)} // Mostra apenas as 3 primeiras categorias
        horizontal // Lista em rolagem horizontal
        showsHorizontalScrollIndicator={false} // Oculta a barra de rolagem
        keyExtractor={(item) => item.id.toString()} // Chave única por item
        renderItem={({ item }) => (
          <CategoriaCard
            category={item} // Passa os dados da categoria
            onPress={() => router.push(`../categorias/${item.id}`)} // Navega para a lista de produtos da categoria
          />
        )}
        contentContainerStyle={{ gap: 12 }} // Espaçamento entre os cards
      />

      {/* Seção de produtos em destaque */}
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginVertical: 12 }}>Produtos em destaque</Text>
      {
        data.products.slice(0, 4).map((product) => (
          <ProdutoCard
            key={product.id} // Chave única do produto
            product={product} // Dados do produto
            onPress={() => router.push(`../produtos/${product.id}`)} // Navega para a tela de detalhes do produto
          />
        ))
      }
    </ScrollView>
  );
}

// Estilos personalizados
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    backgroundColor: '#f5f5f5',
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#222',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#333',
  },
});