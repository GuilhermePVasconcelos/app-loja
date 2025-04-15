import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { data } from '../../data';
import { Product } from '../../types/product';


// Componente principal que exibe os detalhes de um produto selecionado
export default function ProductDetail() {
  // Captura o ID passado via rota (dinamicamente pela URL)
  const { id } = useLocalSearchParams();

  // Estado que armazena o produto selecionado
  const [produto, setProduto] = useState<Product | null>(null);

  // Busca o produto com base no ID fornecido
  useEffect(() => {
    // Converte o ID da rota para número e encontra o produto correspondente
    const filtrar = data.products.find((item) => item.id === Number(id));

    // Se encontrar o produto, armazena no estado
    if (filtrar) setProduto(filtrar);
  }, [id]); // Executa o efeito sempre que o ID mudar

  // Caso o produto ainda não tenha sido carregado, exibe mensagem de carregamento
  if (!produto) {
    return (
      <View style={styles.container}>
        <Text style={styles.carregando}>Carregando...</Text>
      </View>
    );
  }

  // Exibe os detalhes do produto dentro de um ScrollView
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Imagem principal do produto */}
      <Image source={{ uri: produto.image }} style={styles.imagem} />

      {/* Nome do produto */}
      <Text style={styles.titulo}>{produto.title}</Text>

      {/* Preço formatado */}
      <Text style={styles.preco}>R$ {produto.price.toFixed(2)}</Text>

      {/* Descrição completa do produto */}
      <Text style={styles.descricao}>{produto.description}</Text>
    </ScrollView>
  );
}

// Estilos visuais da tela de detalhes do produto
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