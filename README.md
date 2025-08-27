# 📸 Galeria de Imagens Filtrável - Padrão MVC

Uma galeria de imagens interativa desenvolvida em JavaScript puro aplicando o padrão arquitetural **Model-View-Controller (MVC)**, com funcionalidades de filtragem por categorias, busca por palavras-chave e paginação.

![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?style=flat-square&logo=javascript)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![MVC](https://img.shields.io/badge/Pattern-MVC-green?style=flat-square)

## 🎯 Objetivos do Projeto

- Implementar o padrão MVC em JavaScript
- Exercitar a separação de responsabilidades
- Trabalhar com manipulação de DOM e eventos
- Desenvolver renderização dinâmica de conteúdo
- Aplicar conceitos de organização de código em camadas

## ✨ Funcionalidades

| Funcionalidade | Status | Descrição |
|---|:---:|---|
| **Galeria de Imagens** | ✅ | Exibição dinâmica de imagens |
| **Filtragem por Categorias** | ✅ | 4+ categorias (natureza, cidade, animais, pessoas, tecnologia) |
| **Busca por Palavra-chave** | ✅ | Campo de busca para filtrar imagens |
| **Paginação** | ✅ | Exibe 4 imagens por página |
| **Efeitos de Transição** | ✅ | Animações fade in/out ao trocar imagens |
| **Interface Responsiva** | ✅ | Design adaptável para diferentes dispositivos |

## 🏗️ Arquitetura MVC

### 📁 Estrutura do Projeto

```
mvc-galeria/
├── index.html          # Página principal
├── js/
│   ├── model.js         # Camada de dados e lógica de negócio
│   ├── view.js          # Camada de apresentação e manipulação do DOM
│   ├── controller.js    # Camada de controle e coordenação
│   └── app.js          # Inicializador da aplicação
└── img/                 # Diretório de imagens
    ├── natureza1.jpg
    ├── cidade1.jpg
    ├── animais1.jpg
    └── ...
```

### 🧩 Componentes da Arquitetura

<table>
<tr>
<td width="33%">

#### **🗃️ Model (model.js)**
- Gerencia os dados das imagens
- Implementa lógica de filtragem
- Controla a paginação
- Mantém o estado da aplicação

</td>
<td width="33%">

#### **🎨 View (view.js)**
- Renderização da interface
- Manipulação do DOM
- Gerencia eventos de usuário
- Implementa efeitos visuais

</td>
<td width="34%">

#### **🎯 Controller (controller.js)**
- Coordena Model e View
- Processa ações do usuário
- Atualiza o estado
- Controla o fluxo de dados

</td>
</tr>
</table>

## 🚀 Como Executar

### Pré-requisitos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Editor de código (opcional, para modificações)

### Instalação

```bash
# 1. Clone o repositório
git clone https://github.com/Doug16Yanc/mvc-galeria.git

# 2. Navegue para o diretório
cd mvc-galeria

# 3. Abra o arquivo index.html no navegador
# Ou utilize um servidor local (recomendado):

# Opção 1: Python 3
python -m http.server 8000

# Opção 2: Node.js (http-server)
npx http-server

# Opção 3: VS Code Live Server
# Instale a extensão Live Server e clique em "Go Live"
```

### Acesso
- **Diretamente**: Abra `index.html` no navegador
- **Servidor local**: `http://localhost:8000`

## 🎮 Como Usar

| Ação | Descrição |
|---|---|
| 🏷️ **Filtrar por Categoria** | Clique nos botões de categoria para filtrar imagens |
| 🔍 **Buscar** | Digite no campo de busca para encontrar imagens específicas |
| 📄 **Navegar Páginas** | Use os controles de paginação (`←` `→`) |
| 🖼️ **Visualizar** | Imagens são exibidas automaticamente com efeitos de transição |

### Categorias Disponíveis
- 🌿 **Natureza** - Paisagens, plantas, cenários naturais  
- 🏙️ **Cidade** - Arquitetura urbana, prédios, ruas  
- 🐾 **Animais** - Fauna diversa, pets, vida selvagem  
- 👥 **Pessoas** - Retratos, grupos, atividades humanas  
- 💻 **Tecnologia** - Dispositivos, inovações, gadgets

## 🛠️ Tecnologias Utilizadas

<div align="center">

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

</div>

| Tecnologia | Versão | Uso |
|---|---|---|
| **HTML5** | Padrão | Estrutura da página |
| **CSS3** | Padrão | Estilos e animações |
| **JavaScript** | ES6+ | Lógica da aplicação |
| **MVC Pattern** | - | Arquitetura de software |

## 📚 Conceitos Aplicados

- **Separação de Responsabilidades**: Cada camada tem sua função específica
- **Manipulação de DOM**: Criação e modificação dinâmica de elementos
- **Event Handling**: Gerenciamento de eventos de usuário
- **Estado da Aplicação**: Controle de estado centralizado no Model
- **Programação Orientada a Objetos**: Classes e métodos organizados
- **Modularização**: Código organizado em módulos reutilizáveis

## 🎨 Funcionalidades Implementadas

### Filtragem por Categorias
- **Natureza**: Paisagens, plantas, cenários naturais
- **Cidade**: Arquitetura urbana, prédios, ruas
- **Animais**: Fauna diversa, pets, vida selvagem
- **Pessoas**: Retratos, grupos, atividades humanas
- **Tecnologia**: Dispositivos, inovações, gadgets

### Sistema de Busca
- Busca em tempo real por palavras-chave
- Filtros combinados (categoria + busca)
- Resultados instantâneos

### Paginação Inteligente
- 4 imagens por página
- Navegação intuitiva
- Controle de estado entre páginas

### Animações e Transições
- Fade in/out ao trocar imagens
- Transições suaves entre filtros
- Efeitos visuais responsivos

## 🧪 Testes Realizados

| Teste | Status | Descrição |
|---|:---:|---|
| **Filtragem por Categoria** | ✅ | Exibe apenas imagens da categoria selecionada |
| **Sistema de Busca** | ✅ | Campo de busca funciona corretamente |
| **Paginação** | ✅ | Navegação mantém filtros ativos |
| **Efeitos de Transição** | ✅ | Animações funcionam em todos os navegadores |
| **Responsividade** | ✅ | Interface adaptável a diferentes dispositivos |


## 👨‍💻 Desenvolvimento

Este projeto foi desenvolvido como parte da disciplina **Programação Web II**, aplicando conceitos fundamentais de arquitetura de software e desenvolvimento web moderno.


## 📄 Licença

Este projeto é de uso acadêmico e está disponível para fins educacionais.

📚 **Disciplina**: Programação Web II  
🏗️ **Padrão Arquitetural**: MVC (Model-View-Controller)

### 🌟 Se este projeto te ajudou, considere dar uma estrela!
