# 🛍️ App Loja — Aplicativo Mobile com React Native + Expo

Este é um aplicativo mobile de vitrine e catálogo de produtos desenvolvido em **React Native com Expo Router**, como parte de um projeto acadêmico. O app simula uma loja virtual com funcionalidades de navegação por categorias, exibição de produtos, visualização de detalhes e tela de apresentação pessoal.

---

## 📱 Funcionalidades

- ✅ Tela Início com destaques e categorias em horizontal
- ✅ Listagem de produtos por categoria
- ✅ Tela de detalhes do produto com imagem, descrição e preço
- ✅ Navegação com abas (Tabs) e pilha (Stack) utilizando **Expo Router**
- ✅ Tela "Sobre Mim" com informações do desenvolvedor
- ✅ Layout responsivo e moderno com componentes reutilizáveis

---

## 🧠 Tecnologias utilizadas

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [Expo Router](https://expo.github.io/router/)
- [TypeScript](https://www.typescriptlang.org/)
- [Expo Vector Icons](https://icons.expo.fyi/)
- [React Navigation](https://reactnavigation.org/)
- [VSCode](https://code.visualstudio.com/)

---

## 🛠️ Como executar o projeto localmente
 1. Clone o repositório

```bash
git clone https://github.com/seuusuario/app-loja.git
```
2. Acesse a pasta do projeto
```bash
cd app-loja
```
3. Instale as dependências
```bash
npm install
```
4. Inicie o servidor de desenvolvimento
```bash
npx expo start
```
5. Abra o projeto no:

- Navegador (modo web)

- Celular com o app Expo Go

- Emulador Android/iOS (se configurado)

---

## 📂 Estrutura do Projeto
📁 app
 ├── (tabs)
 │   ├── index.tsx              # Tela Início
 │   ├── categories.tsx         # Tela Categorias
 │   ├── sobremim.tsx           # Tela Sobre Mim
 ├── categorias/[id].tsx        # Produtos por categoria
 ├── produtos/[id].tsx          # Detalhes do produto

📁 components
 ├── CategoriaCard.tsx           # Componente visual de categorias
 └── ProdutoCard.tsx             # Componente visual de produtos

📁 data
 └── index.ts                   # Dados simulados de categorias e produtos

📁 types
 ├── category.ts                # Tipagem de categoria
 └── product.ts                 # Tipagem de produto

---

## 👤 Sobre o Desenvolvedor
Guilherme Vasconcelos
🎓 Estudante de Engenharia de Software
📧 guilhermewert21@gmail.com
🔗 github.com/GuilhermePVasconcelos

---

## 📌 Status do Projeto
✅ Finalizado e funcional

---

## 📜 Licença
Este projeto foi desenvolvido com fins educacionais. Está aberto para estudo, modificação e uso acadêmico.