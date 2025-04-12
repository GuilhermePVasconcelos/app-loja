import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';


export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen
       name="index"
        options={{
          title: 'Início',
           tabBarIcon: ({ color, size }) => (
             <Ionicons name="home-outline" color={color} size={size} />
           ),
        }}
      />
      <Tabs.Screen
        name="categories"
        options={{
          title: 'Categorias',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="list-outline" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="sobremim"
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
 