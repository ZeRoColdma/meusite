import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Carlos Dev', // e.g: 'Name | Developer'
  lang: 'pt-br', // e.g: en, es, fr, jp
  description: 'Bem vindo ao meu portifolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Olá, meu nome é',
  name: 'Carlos',
  subtitle: 'Desenvolvedor Web e Mobile',
  cta: 'Sobre Mim',
};

// ABOUT DATA
export const aboutData = {
  img: 'carlos.png',
  paragraphOne:
    ' Trabalho com desenvolvimento Web e Mobile a 3 anos utilizando ReactJS e Flutter como tecnologias principais de FrontEnd e NodeJS como tecnologia de BackEnd.',
  paragraphTwo:
    'Contribuir para o crescimento profissional de todos da equipe e ajudar na obtenção dos resultados necessários para o sucesso do setor.',
  paragraphThree:
    'Adquirir técnicas de HardSkills e Softskills da área de ocupação, sempre seguindo os valores da empresa assim como tomar pra si a missão da empresa.',
  resume: 'https://drive.google.com/file/d/1y45kBORHt7JBXNpd20A6-dIftFbsp74L/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'projeto1.png',
    title: 'Dashboard',
    info:
      'Dashboard destinado ao controle financeiro para uma instituição jurídica tendo assim controle dos valores em flutuação, varas responsáveis e clientes que em questão.',
    info2: '',
    url: 'https://asjur-app-m.herokuapp.com/',
    repo: 'https://github.com/ZeRoColdma', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'projeto2.png',
    title: 'Site Institucional',
    info:
      'Site voltado para divulgação e captação de novos clientes feito e adaptado de acordo com a preferencia do contratante.',
    info2: '',
    url: '',
    repo: 'https://github.com/ZeRoColdma', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'projeto3.png',
    title: 'Conversor de Moedas',
    info:
      'Aplicação mobile para conversão de moeda em tempo real com base em uma API publica que está ligada a bolsa de valores.',
    info2: '',
    url: '',
    repo: 'https://github.com/ZeRoColdma', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Entre em contato e faça um orçamento!',
  btn: 'Enviar mensagem',
  email: 'https://wa.me/5598988023529?text=Olá%20gostaria%20de%20fazer%20um%20orçamento',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/Carloos_Dev',
    },

    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/carlos-silva-613a20b4/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/ZeRoColdma',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
