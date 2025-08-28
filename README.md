<h1 align="center" width="100%">  📸 Galeria de imagens com padrão MVC </h1>

<p align="center" width="50%">

Uma galeria de imagens interativa desenvolvida em JavaScript puro aplicando o padrão arquitetural **Model-View-Controller (MVC)**, com funcionalidades de apresentação de imagens variadas por quatro categorias categorias, sendo estas : astronomia, biologia, física e literatura, Em cada categoria há a permissão de busca por palavras-chave.

</p>

<p align="center">

<img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-ES6+-yellow?style=flat-square&logo=javascript">
<img alt="HTML5" src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white">
<img alt="CSS3" src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white">
<img alt="MVC" src="https://img.shields.io/badge/Pattern-MVC-green?style=flat-square">

</p>

<h2 align="center" width="100%"> 🎯 Objetivos do Projeto </h2>

<div align="center">
    
  ✅ Implementar o padrão MVC em JavaScript.<br>
  ✅ Exercitar a separação de responsabilidades.<br>
  ✅ Trabalhar com manipulação de DOM e eventos.<br>
  ✅ Desenvolver renderização dinâmica de conteúdo.<br>
  ✅ Aplicar conceitos de organização de código em camadas.

</div>

<h2 align="center" width="100%"> ✨ Funcionalidades </h2>

<div align="center">
    
| Funcionalidade | Status | Descrição |
|---|:---:|---|
| **Galeria de imagens** | ✅ | Exibição dinâmica de imagens |
| **Separação por categorias** | ✅ | 4 categorias (astronomia, biologia, física, literatura) |
| **Busca por Palavra-chave** | ✅ | Campo de busca para filtrar imagens |
| **Paginação** | ✅ | Exibe 4 miniaturas de imagens por página |
| **Efeitos de transição** | ✅ | Animações fade in/out ao trocar imagens |
| **Interface esponsiva** | ✅ | Design adaptável para diferentes dispositivos |

</div>

<h2 align="center" width="100%"> 🏗️ Arquitetura MVC </h2>

<h3 align="center" width="100%"> 📁 Estrutura do Projeto </h3>


```
mvc-galeria/
├── js/
│   ├── model.js         # Camada de dados e lógica de negócio
│   ├── view.js          # Camada de apresentação e manipulação do DOM
│   ├── controller.js    # Camada de controle e coordenação
│   └── app.js           # Inicializador da aplicação
└── img/                 # Diretório de imagens
    ├── astronomia
        ├── quasar.jpg
    ├── biologia
        ├── dna.jpg
    ├── física
        ├── aerodinâmica.jpg
    ├── icones
        ├── logo.png
    ├── literatura
        ├── arcadismo.jpg
    └── ...
├── index.html          # Página principal
├── styles.css          # Estilos e personalização

```

<h2 align="center" width="100%"> 🧩 Componentes da Arquitetura </h2>

<div align="center">
    
<table>
<tr>
<td width="33%">

#### **🗃️ Model (model.js)**
- Gerencia os dados das imagens
- Implementa lógica de filtragem

</td>
<td width="33%">

#### **🎨 View (view.js)**
- Renderização da interface
- Manipulação do DOM
- Gerencia eventos de usuário

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

</div>

<h2 align="center" width="100%"> 🚀 Como executar </h2>

<h2 align="center" width="100%"> Pré-requisitos </h2>

- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Editor de código (opcional, para modificações)

<h2 align="center" width="100%"> Instalação </h2>

<div align="center">

```bash
# 1. Clone o repositório
git clone git@github.com:Doug16Yanc/mvc-galeria.git

# 2. Navegue para o diretório
cd mvc-galeria

# 3. Use o VS Code Live Server
# Instale a extensão Live Server e clique em "Go Live"
```
</div>

<h2 align="center" width="100%"> 🎮 Como usar </h2>

<table align="center">
  <thead>
    <tr>
      <th align="center">Ação</th>
      <th align="left">Descrição</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td align="center">🏷️ <b>Filtrar por categoria</b></td>
      <td align="left">Clique nos botões de categoria para filtrar imagens</td>
    </tr>
    <tr>
      <td align="center">🔍 <b>Buscar</b></td>
      <td align="left">Digite no campo de busca para encontrar imagens específicas</td>
    </tr>
    <tr>
      <td align="center">📄 <b>Navegar páginas</b></td>
      <td align="left">Use os controles de paginação (<code>←</code> <code>→</code>)</td>
    </tr>
    <tr>
      <td align="center">🖼️ <b>Visualizar</b></td>
      <td align="left">Imagens são exibidas automaticamente com efeitos de transição</td>
    </tr>
  </tbody>
</table>


<h2 align="center" width="100%"> Categorias disponíveis </h2>
<div align="center">
 ✅ Astronomia<br>
 ✅ Biologia<br>
 ✅ Física<br> 
 ✅ Literatura

</div>

<h2 align="center" width="100%"> 🛠️ Tecnologias utilizadas </h2>

<div align="center">

<img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-ES6+-yellow?style=flat-square&logo=javascript">
<img alt="HTML5" src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white">
<img alt="CSS3" src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white">

</div>

<div align="center">
    
| Tecnologia | Versão | Uso |
|---|---|---|
| **HTML5** | Padrão | Estrutura da página |
| **CSS3** | Padrão | Estilos e animações |
| **JavaScript** | ES6+ | Lógica da aplicação |
| **MVC Pattern** | - | Arquitetura de software |

</div>

<h2 align="center" width="100%"> 📚 Conceitos aplicados </h2>

<div align="center">
    
 ✅ Separação de Responsabilidades**: Cada camada tem sua função específica.<br>
 ✅ Manipulação de DOM**: Criação e modificação dinâmica de elementos.<br>
 ✅ Event Handling**: Gerenciamento de eventos de usuário.<br>
 ✅ Estado da Aplicação**: Controle de estado centralizado no Model.<br>
 ✅ Programação Orientada a Objetos**: Classes e métodos organizados.<br>
 ✅ Modularização**: Código organizado em módulos reutilizáveis.

 </div>

<h2 align="center" width="100%"> 🎨 Funcionalidades implementadas </h2>

 <h2 align="center" width="100%"> Filtragem por Categorias </h2>
 <div align="center">
  ✅ Astronomia**: Quasares, pulsares, nebulosas, galáxias, estrelas, planetas.<br>
  ✅ Biologia**: Ataxonomias, seres vivos, genética, citologia.<br>
  ✅ Física**: Fenômenos da natureza, leis matemáticas.<br>
  ✅ Literatura**: Escolas literárias, obras artísticas.<br>
 </div>

<h2 align="center" width="100%"> Sistema de busca </h2>
<div align="center">
 ✅ Busca em tempo real por palavras-chave.<br>
 ✅ Filtros associados (categoria conduz a busca da imagem).<br>
 ✅ Resultados instantâneos.<br>
</div>

<h2 align="center" width="100%"> Paginação Inteligente </h2>
<div align="center">
 ✅ 4 miniaturas das imagens de uma categoria por página.<br>
 ✅ A imagem principal aparecendo no centro da tela.<br>
 ✅ Navegação intuitiva.<br>
 ✅ Controle de estado entre páginas.
</div>


<h2 align="center" width="100%"> Animações e transições </h2>
<div align="center">
 ✅ Fade in/out ao trocar imagens.<br>
 ✅ Transições suaves entre filtros.<br>
 ✅ Efeitos visuais responsivos.<br>
</div>

<h2 align="center" width="100%"> 🧪 Testes realizados </h2>

<div align="center">

| Teste | Status | Descrição |
|---|:---:|---|
| **Filtragem por categoria** | ✅ | Exibe apenas imagens da categoria selecionada |
| **Sistema de busca** | ✅ | Campo de busca funciona corretamente |
| **Paginação** | ✅ | Navegação mantém filtros ativos |
| **Efeitos de transição** | ✅ | Animações funcionais |
| **Responsividade** | ✅ | Interface adaptável a diferentes dispositivos |

</div>


<h2 align="center" width="100%"> 👨‍💻 Desenvolvimento </h2>

Este projeto foi desenvolvido como parte da disciplina **Programação Web II**, aplicando conceitos fundamentais de arquitetura de software e desenvolvimento web moderno.


<h2 align="center" width="100%"> 📄 Licença </h2>

<div align="center">

Este projeto é de uso acadêmico e está disponível para fins educacionais.

📚 **Disciplina**: Programação Web II  
🏗️ **Padrão Arquitetural**: MVC (Model-View-Controller)

</div>

<p align="center" width="100%"> 🌟 Se este projeto te ajudou, considere dar uma estrela! </p>
