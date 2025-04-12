import { View, FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import { useRouter } from 'expo-router';
import { data } from '../../data';
import { Category } from '../../types/category';
import CategoriaCard from '../components/CategoriaCard';



export default function CategoriasScreen() {
  const [listCategorias, setListCategorias] = useState<Category[]>([]);
  const router = useRouter();


  useEffect(() => {
    setListCategorias(data.categories);
  }, []);

  return (
   <View>
    <FlatList
    data={listCategorias}
    keyExtractor={(item) => item.id.toString()}
    renderItem={({ item }) => (
      <CategoriaCard
        category={item}
        onPress={() => router.push(`../categorias/${item.id}`)}
      />
    )}
    />
   </View>
  );
 
}