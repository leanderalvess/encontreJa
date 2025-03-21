# EncontreJá - Sistema de Busca por Pessoas Desaparecidas

## 📌 Sobre o Projeto
**EncontreJá** é uma aplicação **Vue 3 + TypeScript** desenvolvida para facilitar a busca por pessoas desaparecidas. O sistema permite a **consulta de desaparecidos**, **envio de informações relevantes** e oferece **filtros avançados** para buscas precisas.

## 🚀 Tecnologias Utilizadas
- **Frontend**: Vue 3 + TypeScript + Vite
- **Estilização**: CSS + Bootstrap Icons
- **Gerenciamento de Estado**: Vue Composition API
- **Requisições HTTP**: Axios
- **Gerenciamento de Rotas**: Vue Router

## 📂 Estrutura do Projeto
A organização do código segue **boas práticas de arquitetura** para facilitar a manutenção.

```
📦 src
 ┣ assets → Contém imagens como ícones e logotipos
 ┣ components → Componentes reutilizáveis (Navbar, Pagination, SearchFilter, etc.)
 ┣ helper → Funções auxiliares (parser de dados, manipulação de fotos)
 ┣ interfaces → Tipagem TypeScript para as respostas da API
 ┣ router → Configuração das rotas Vue Router
 ┣ services → Requisições à API (fetch de pessoas, filtros, etc.)
 ┣ views → Páginas principais do sistema (Home, Detalhes, Relatório)
 ┣ App.vue → Componente principal do Vue
 ┣ main.ts → Arquivo de inicialização do Vue
 ┣ style.css → Estilos globais do sistema
```

## 📌 Funcionalidades
✅ **Listagem de Pessoas Desaparecidas** → Com paginação e ordenação

✅ **Detalhamento do Caso** → Exibe informações mais detalhadas

✅ **Pesquisa e Filtros Avançados** → Nome, idade e sexo

✅ **Envio de Informações** → Permite relatar dados sobre um desaparecido

✅ **Sistema de Paginação Inteligente** → Exibe páginas dinâmicas

✅ **Botão de Voltar** → Para melhorar a navegação

## 🔧 Como Rodar o Projeto

### 🛠️ Pré-requisitos
- Node.js 16+
- Gerenciador de pacotes (npm ou yarn)

### 📥 Instalação
```sh
# Clonar o repositório
git clone https://github.com/leanderalvess/missingPersons.git
cd missingPersons

# Instalar dependências
yarn install
```

### ▶️ Rodando o Projeto
```sh
yarn run dev
```
Acesse: `http://localhost:5173/`

## 📡 Configuração da API
A API utilizada é pública e para algumas APIs não requer autenticação. Certifique-se de que os endpoints estão acessíveis no Swagger:

🔗 **Documentação da API:** [https://abitus-api.geia.vip/swagger-ui/index.html](https://abitus-api.geia.vip/swagger-ui/index.html)

## 📌 Melhorias Futuras
🔹 Melhorias no design responsivo

🔹 Implementação de um sistema de autenticação

🔹 Melhor experiência de usuário na navegação

---
✉️ **Contato para dúvidas:** [leanderlvda@gmail.com](mailto:leanderlvda@gmail.com)