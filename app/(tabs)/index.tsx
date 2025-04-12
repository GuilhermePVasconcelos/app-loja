import { View, Text, ScrollView, StyleSheet, FlatList } from 'react-native';
import { data } from '../../data';
import { useRouter } from 'expo-router';
import CategoriaCard from '../components/CategoriaCard';
import ProdutoCard from '../components/ProdutoCard';

export default function InicioScreen() {
  const router = useRouter();
  return (
    <ScrollView contentContainerStyle={{ paddingHorizontal: 16, paddingVertical: 20 }}>
    <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 12 }}>Seja bem-vindo!</Text>
  
    <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 8 }}>Categorias</Text>
    {  
    <FlatList 
        data={data.categories.slice(0, 3)}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <CategoriaCard
            category={item}
            onPress={() => router.push(`../categorias/${item.id}`)}
          />
        )}
        contentContainerStyle={{ gap: 12 }}
        />}
  
    <Text style={{ fontSize: 18, fontWeight: 'bold', marginVertical: 12 }}>Produtos em destaque</Text>
    {
      
      data.products.slice(0, 4).map((product) => (
        <ProdutoCard
          key={product.id}
          product={product}
          onPress={() => router.push(`../produtos/${product.id}`)}
        />
      ))
    }
  </ScrollView>
  
  );
}

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