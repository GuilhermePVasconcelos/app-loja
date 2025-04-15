import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons'; 

// Componente responsável pela estrutura de navegação por abas no app
export default function Layout() {
  return (
    <Tabs>
      {/* Aba: Início */}
      <Tabs.Screen
        name="index" // Corresponde ao arquivo index.tsx em (tabs)
        options={{
          title: 'Início', // Título exibido na aba
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={color} size={size} /> // Ícone da aba
          ),
        }}
      />

      {/* Aba: Categorias */}
      <Tabs.Screen
        name="categories" // Corresponde ao arquivo categories.tsx em (tabs)
        options={{
          title: 'Categorias',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="list-outline" color={color} size={size} />
          ),
        }}
      />

      {/* Aba: Sobre Mim */}
      <Tabs.Screen
        name="sobremim" // Corresponde ao arquivo sobremim.tsx em (tabs)
        options={{
          title: 'Sobre Mim',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}