import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { data } from '../../data';
import { Product } from '../../types/product';

export default function ProductDetail() {
  const { id } = useLocalSearchParams();
  const [produto, setProduto] = useState<Product | null>(null);

  useEffect(() => {
    const filtrar = data.products.find((item) => item.id === Number(id));
    if (filtrar) setProduto(filtrar);
  }, [id]);

  if (!produto) {
    return (
      <View style={styles.container}>
        <Text style={styles.carregando}>Carregando...</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: produto.image }} style={styles.imagem} />
      <Text style={styles.titulo}>{produto.title}</Text>
      <Text style={styles.preco}>R$ {produto.price.toFixed(2)}</Text>
      <Text style={styles.descricao}>{produto.description}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  imagem: {
    width: '100%',
    height: 250,
    borderRadius: 12,
    marginBottom: 16,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  preco: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2a9d8f',
    marginBottom: 12,
  },
  descricao: {
    fontSize: 16,
    color: '#555',
    lineHeight: 22,
  },
  carregando: {
    marginTop: 100,
    fontSize: 16,
    textAlign: 'center',
    color: '#888',
  },
});
