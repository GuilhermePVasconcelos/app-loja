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
git clone https://github.com/GuilhermePVasconcelos/app-loja.git
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

```plaintext
📁 app
 ├── (tabs)
 │   ├── index.tsx           → Tela Início
 │   ├── categorias.tsx      → Tela Categorias
 │   └── sobremim.tsx        → Tela Sobre Mim
 ├── categorias
 │   └── [id].tsx            → Produtos por categoria
 └── produtos
     └── [id].tsx            → Detalhes do produto

📁 components
 ├── CategoriaCard.tsx        → Cartão de categoria
 └── ProdutoCard.tsx          → Cartão de produto

📁 data
 └── index.ts                → Dados simulados

📁 types
 ├── category.ts             → Tipagem de categoria
 └── product.ts              → Tipagem de produto
```

---

## 👤 Sobre o Desenvolvedor

**👤Guilherme Vasconcelos**  
🎓 Estudante do 5° Periodo de Engenharia de Software FAG-Toledo  

📧 [guilhermewert21@gmail.com](mailto:guilhermewert21@gmail.com)  
🔗 [GitHub - GuilhermePVasconcelos](https://github.com/GuilhermePVasconcelos)

---

## 📌 Status do Projeto
✅ Finalizado e funcional

---

## 📜 Licença
Este projeto foi desenvolvido com fins educacionais. Está aberto para estudo, modificação e uso acadêmico.