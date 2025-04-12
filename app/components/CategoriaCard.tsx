import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Category } from "../../types/category";  

type Props = {
  category: Category;
  onPress: () => void;
};

export default function CategoriaCard({ category, onPress }: Props) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <Image source={{ uri: category.cover }} style={styles.imagem} />
      <View style={styles.detalhes}>
        <Text style={styles.titulo}>{category.title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
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
        justifyContent: "center",
    },
    titulo: {
        fontSize: 16,
        fontWeight: "bold",
    },
});
