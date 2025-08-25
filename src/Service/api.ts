import IMGbmi from '../assets/img/projectsSection/BMI 2 desktop-front.png';
import IMGbirthday from '../assets/img/projectsSection/birthday 2 desktop-front.png';
import IMGcontactBook from '../assets/img/projectsSection/contact book 2 desktop-front.png';
import IMGcontactList from '../assets/img/projectsSection/contact list 2 desktop-front.png';
import IMGdisney from '../assets/img/projectsSection/disney clone 2 desktop-front.png';
import IMGoasis from '../assets/img/projectsSection/oasis 2 desktop-front.png';
import IMGgalery from '../assets/img/projectsSection/photos gallery 2 desktop-front.png';
import IMGrandomNumber from '../assets/img/projectsSection/random number picker 2 desktop-front.png';
import IMGefood from '../assets/img/projectsSection/efood 2 desktop-front.png';
import IMGminhasTarefas from '../assets/img/projectsSection/minhasTarefas 2 desktop-front.png';
import IMGclientRegister from '../assets/img/projectsSection/clientRegister 2 desktop-front.png';
import IMGcartorio from '../assets/img/projectsSection/cartorio 2 desktop-front.png';

const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export type GitHubRepo = {
  name: string;
  description: string | null;
  html_url: string;
  homepage: string;
};

export type Project = GitHubRepo & {
  image: string;
  title: string;
  languages: string[];
};

const desiredRepos: { name: string; title: string; image: string; languages: string[] }[] = [
  {
    name: 'contact-list-95',
    title: `Contact List 95'`,
    image: IMGcontactList,
    languages: ['Node', 'TypeScript', 'React', 'Redux', 'Styled-Components'],
  },
  {
    name: 'efood',
    title: 'E Food',
    image: IMGefood,
    languages: ['Node', 'TypeScript', 'React', 'Redux', 'Styled-Components'],
  },
  {
    name: 'todo-vue',
    title: 'Minhas Tarefas',
    image: IMGminhasTarefas,
    languages: ['Vue', 'JavaScript', 'Bootstrap'],
  },
  {
    name: 'BMIcalculator',
    title: 'BMI Calculator',
    image: IMGbmi,
    languages: ['Node', 'TypeScript', 'React', 'Bootstrap'],
  },
  {
    name: 'my_birthday',
    title: 'My Birthday',
    image: IMGbirthday,
    languages: ['JavaScript', 'HTML', 'Parcel', 'SASS'],
  },
  {
    name: 'clone_disneyplus',
    title: 'Disney Plus clone',
    image: IMGdisney,
    languages: ['JavaScript', 'HTML', 'SASS'],
  },
  {
    name: 'random_number_picker',
    title: 'Random Number Picker',
    image: IMGrandomNumber,
    languages: ['Node', 'JavaScript', 'HTML', 'Less'],
  },
  {
    name: 'jQuery-Photos-Gallery',
    title: 'Photos Gallery',
    image: IMGgalery,
    languages: ['jQuery', 'HTML', 'CSS'],
  },
  {
    name: 'agenda-de-contatos',
    title: 'Agenda de Contatos',
    image: IMGcontactBook,
    languages: ['JavaScript', 'HTML', 'CSS'],
  },
  {
    name: 'CartorioEBAC',
    title: 'Cartorio EBAC',
    image: IMGcartorio,
    languages: ['C'],
  },
  {
    name: 'ClientRegistry',
    title: 'Client Registry',
    image: IMGclientRegister,
    languages: ['Java'],
  },
  {
    name: 'OasisHotel2',
    title: 'Oasis Resort',
    image: IMGoasis,
    languages: ['JavaScript', 'HTML', 'SASS'],
  },
];

export const fetchProjects = async (): Promise<Project[]> => {
  try {
    const repos = await fetch('https://api.github.com/users/FabricioMeneze5/subscriptions', {
      headers: { Authorization: `token ${GITHUB_TOKEN}` },
    });
    const reposJson: GitHubRepo[] = await repos.json();

    const filteredData = reposJson.filter((repo) => desiredRepos.some((d) => d.name === repo.name));

    return filteredData.map((repo) => {
      const manual = desiredRepos.find((d) => d.name === repo.name);
      if (!manual) {
        return {
          ...repo,
          title: repo.name,
          image: '',
          languages: [],
        };
      }
      return {
        ...repo,
        title: manual.title,
        image: manual.image,
        languages: manual.languages,
      };
    });
  } catch (err) {
    console.error('Error >>', err);
    return [];
  }
};
