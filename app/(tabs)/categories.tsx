import { View, FlatList } from 'react-native'; 
import { useState, useEffect } from 'react'; 
import { useRouter } from 'expo-router'; 
import { data } from '../../data'; 
import { Category } from '../../types/category';
import CategoriaCard from '../components/CategoriaCard'; 

// Componente da tela de categorias (renderiza a lista de categorias disponíveis)
export default function CategoriasScreen() {
  const [listCategorias, setListCategorias] = useState<Category[]>([]); // Estado para armazenar a lista de categorias
  const router = useRouter(); // Hook de navegação

  // useEffect é executado uma única vez ao carregar a tela
  // Define no estado a lista de categorias que vem do mock de dados
  useEffect(() => {
    setListCategorias(data.categories);
  }, []);

  return (
    <View>
      <FlatList
        data={listCategorias} // Lista de dados que será exibida
        keyExtractor={(item) => item.id.toString()} // Chave única para cada item (necessária para performance)
        renderItem={({ item }) => (
          <CategoriaCard
            category={item} // Passa os dados da categoria atual para o componente
            onPress={() => router.push(`../categorias/${item.id}`)} // Ao tocar no item, navega para a lista de produtos daquela categoria
          />
        )}
      />
    </View>
  );
}
