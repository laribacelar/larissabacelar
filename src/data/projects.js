// --- "AR Tecnologia" ---
import artecnologia1 from "../assets/trabalhos/AR-tecnologia1.jpg.png";
import artecnologia2 from "../assets/trabalhos/AR-tecnologia2.jpg";
import artecnologia3 from "../assets/trabalhos/AR-tecnologia3.jpg";
import artecnologia4 from "../assets/trabalhos/AR-tecnologia4.jpg";
import artecnologia5 from "../assets/trabalhos/AR-tecnologia5.jpg.png";
import artecnologiavideo from "../assets/trabalhos/Videos/ar-tecnologia.mp4";

// --- "JSB Personal Trainer" ---
import jsbpersonal1 from "../assets/trabalhos/JSB-Personal.jpg";
import jsbpersonal2 from "../assets/trabalhos/JSB-Personal2.jpg";
import jsbpersonal3 from "../assets/trabalhos/JSB-Personal3.jpg";
import jsbpersonal4 from "../assets/trabalhos/JSB-Personal4.jpg";
import jsbpersonal5 from "../assets/trabalhos/JSB-Personal5.jpg";
import jsbpersonalvideo from "../assets/trabalhos/Videos/jsb-personal-trainer.mp4";

// --- "Conversor de Moeda" ---
import convertmoney1 from "../assets/trabalhos/Dólar.png";
import convertmoney2 from "../assets/trabalhos/Euro.png";
import convertmoney3 from "../assets/trabalhos/Libra.png";
import convertmoney4 from "../assets/trabalhos/bc.jpg";
import convertmoneyvideo from "../assets/trabalhos/Videos/convert-money.mp4";

// --- "Starbucks" ---
import starbucks1 from "../assets/trabalhos/starbucks.png";
import starbucks2 from "../assets/trabalhos/starbucks2.png";
import starbucks3 from "../assets/trabalhos/starbucks3.png";
import starbucksvideo from "../assets/trabalhos/Videos/starbucks.mp4";

// --- "Congrulations" ---
import congrulations1 from "../assets/trabalhos/congratulation.png";
import congrulations2 from "../assets/trabalhos/congratulation-mobile.png";

// --- "We Care" ---
import wecare1 from "../assets/trabalhos/we-care.png";
import wecare2 from "../assets/trabalhos/we-care-mobile.png";

// --- "Easy" ---
import easy1 from "../assets/trabalhos/easy.png";
import easy2 from "../assets/trabalhos/easy-mobile.png";

// --- "Blog Cozinhando com a Lari" ---
import blog1 from "../assets/trabalhos/cozinhandocomalari.png";
import blog2 from "../assets/trabalhos/cozinhandocomalari2.png";
import blogvideo from "../assets/trabalhos/Videos/cozinhando-com-a-lari.mp4";

export const projetos = [
  {
    id: 1,
    titulo: "AR Tecnologia",
    descricao: [
      "Desenvolvimento de um website institucional completo para modernizar a presença online e otimizar a captação de leads de um cliente. O projeto incluiu o design e a programação do frontend (HTML, CSS e JavaScript) e a implementação de um backend de automação de baixo custo.",
      "O formulário de contato foi integrado a um sistema self-hosted com n8n e Docker em um servidor na nuvem Oracle Cloud, garantindo a notificação automática e eficiente de novos leads por e-mail.",
      "Tecnologias: HTML5, CSS3, JavaScript (ES6+), n8n, Docker, Docker-Compose, Oracle Cloud (OCI), Ubuntu Server, SSH.",
    ],
    link: "https://tecnologiadomesticaar.com.br/",
    midias: [
      {
        id: 1,
        type: "image",
        src: artecnologia1,
        alt: "Primeira tela do site AR Tecnologia",
      },
      {
        id: 2,
        type: "image",
        src: artecnologia2,
        alt: "Formulário do site AR Tecnologia",
      },
      {
        id: 3,
        type: "image",
        src: artecnologia3,
        alt: "Nós do n8n do site AR Tecnologia",
      },
      {
        id: 4,
        type: "image",
        src: artecnologia4,
        alt: "Email enviado atravéz do n8n do site AR Tecnologia",
      },
      {
        id: 5,
        type: "image",
        src: artecnologia5,
        alt: "Versão Mobile do site AR Tecnologia",
      },
      {
        id: 6,
        type: "video",
        src: artecnologiavideo,
        alt: "Video do site AR Tecnologia",
      },
    ],
  },

  {
    id: 2,
    titulo: "JSB Personal Trainer",
    descricao: [
      "Desenvolvimento de um site institucional personalizado para o personal trainer JSB, com o objetivo de criar uma presença online profissional e impactante. O projeto foca em um design moderno e atrativo, utilizando um layout estruturado com gradientes, seções bem definidas e botões interativos para promover confiança e motivação nos visitantes.",
      "A interface foi projetada para apresentar os serviços de forma clara e organizada, facilitando a navegação e a leitura do conteúdo.",
      "Tecnologias: HTML5, CSS3, JavaScript, Git.",
    ],
    github: "https://github.com/laribacelar/jonathanBacelar",
    midias: [
      {
        id: 1,
        type: "image",
        src: jsbpersonal1,
        alt: "Primeira tela do site JSB Personal Trainer",
      },
      {
        id: 2,
        type: "image",
        src: jsbpersonal2,
        alt: "Segunda tela do site JSB Personal Trainer",
      },
      {
        id: 3,
        type: "image",
        src: jsbpersonal3,
        alt: "Terceira tela do site JSB Personal Trainer",
      },
      {
        id: 4,
        type: "image",
        src: jsbpersonal4,
        alt: "Quarta tela do site JSB Personal Trainer",
      },
      {
        id: 5,
        type: "image",
        src: jsbpersonal5,
        alt: "Quinta tela do site JSB Personal Trainer",
      },
      {
        id: 6,
        type: "video",
        src: jsbpersonalvideo,
        alt: "Video do site JSB Personal Trainer",
      },
    ],
  },

  {
    id: 3,
    titulo: "Projeto DevClub - Conversor de moeda",
    descricao: [
      "Desenvolvimento de um conversor de moedas como parte do desafio do curso Front End do DevClub. A aplicação converte valores de Real (BRL) para Dólar (USD), Euro (EUR), Libra (GBP) e Bitcoin (BTC).",
      "O principal desafio técnico foi a implementação em JavaScript da troca dinâmica de nomes e imagens das moedas, baseada na seleção do usuário. O projeto serviu para reforçar o domínio sobre conceitos de manipulação do DOM, eventos e lógica condicional.",
      "Tecnologias: HTML, CSS, JavaScript, Git.",
    ],
    github: "https://github.com/laribacelar/Conversor-de-Moedas",
    midias: [
      {
        id: 1,
        type: "image",
        src: convertmoney1,
        alt: "Conversor de Real para Dólar",
      },
      {
        id: 2,
        type: "image",
        src: convertmoney2,
        alt: "Conversor de Real para Euro",
      },
      {
        id: 3,
        type: "image",
        src: convertmoney3,
        alt: "Conversor de Real para Libra",
      },
      {
        id: 4,
        type: "image",
        src: convertmoney4,
        alt: "Conversor de Real para Bitcoin",
      },
      {
        id: 5,
        type: "video",
        src: convertmoneyvideo,
        alt: "Video do conversor de moedas",
      },
    ],
  },

  {
    id: 4,
    titulo: "Projeto DevClub - Starbucks",
    descricao: [
      "Desenvolvimento de um projeto web do zero como parte do desafio - Programador em 72h - da plataforma DevClub. A aplicação foi construída utilizando HTML, CSS e JavaScript, com o objetivo de colocar em prática conceitos de estruturação de páginas, estilização responsiva e lógica de programação.",
      "O projeto foi uma excelente oportunidade para reforçar os fundamentos do desenvolvimento front-end e evoluir na prática",
      "Tecnologias: HTML, CSS, JavaScript, Git.",
    ],
    github: "https://github.com/laribacelar/Desafio-Starbucks",
    midias: [
      {
        id: 1,
        type: "image",
        src: starbucks1,
        alt: "Primeiro modelo do Starbucks",
      },
      {
        id: 2,
        type: "image",
        src: starbucks2,
        alt: "Segundo modelo do Starbucks",
      },
      {
        id: 3,
        type: "image",
        src: starbucks3,
        alt: "Terceiro modelo do Starbucks",
      },
      {
        id: 4,
        type: "video",
        src: starbucksvideo,
        alt: "Video do site Starbucks",
      },
    ],
  },

  {
    id: 5,
    titulo: "Projeto DevClub - Congrulations, We care",
    descricao: [
      "Revisão e aprofundamento em HTML5 e CSS3, reforçando fundamentos essenciais para o desenvolvimento front-end. Neste módulo, pratiquei a criação de páginas semânticas, estilização com boas práticas de CSS, e responsividade utilizando media queries.",
      "O foco foi a estruturação limpa de código e a aplicação de conceitos como o Box Model, posicionamento, Flexbox e o design Mobile First.",
      "Habilidades Aplicadas: HTML5 Semântico, CSS3, Responsividade, Boas Práticas de Código.",
    ],
    github: "https://github.com/laribacelar/WeCare",
    midias: [
      { id: 1, type: "image", src: congrulations1, alt: "Site Congrulations" },
      {
        id: 2,
        type: "image",
        src: congrulations2,
        alt: "Site Congrulations Mobile",
      },
      { id: 3, type: "image", src: wecare1, alt: "Site We Care" },
      { id: 4, type: "image", src: wecare2, alt: "Site We Care Mobile" },
    ],
  },

  {
    id: 6,
    titulo: "Projeto DevClub - Easy",
    descricao: [
      "Revisão e aprofundamento em HTML5 e CSS3, reforçando fundamentos essenciais para o desenvolvimento front-end. Neste módulo, pratiquei a criação de páginas semânticas, estilização com boas práticas de CSS, e responsividade utilizando media queries.",
      "O foco foi a estruturação limpa de código e a aplicação de conceitos como o Box Model, posicionamento, Flexbox e o design Mobile First.",
      "Habilidades Aplicadas: HTML5 Semântico, CSS3, Responsividade, Boas Práticas de Código.",
    ],
    github: "https://github.com/laribacelar/easy",
    midias: [
      { id: 1, type: "image", src: easy1, alt: "Site Easy" },
      { id: 2, type: "image", src: easy2, alt: "Site Easy Mobile" },
    ],
  },

  {
    id: 7,
    titulo: "Blog Cozinhando com a Lari",
    descricao: [
      "Desenvolvimento de um projeto web do zero utilizando HTML, CSS e JavaScript com o objetivo de praticar e aprimorar os fundamentos do desenvolvimento front-end. Cada etapa do projeto foi pensada para consolidar os conhecimentos nas tecnologias e fortalecer a base de programação.",
      "Tecnologias: HTML, CSS, JavaScript, Git.",
    ],
    github: "https://github.com/laribacelar/cozinhando-com-a-lari",
    midias: [
      { id: 1, type: "image", src: blog1, alt: "Site Cozinhando com a Lari" },
      {
        id: 2,
        type: "image",
        src: blog2,
        alt: "Site Cozinhando com a Lari Mobile",
      },
      {
        id: 6,
        type: "video",
        src: blogvideo,
        alt: "Video do Site Cozinhando com a Lari ",
      },
    ],
  },
];
