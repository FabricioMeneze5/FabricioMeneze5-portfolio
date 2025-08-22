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
    title: `Contact List 95' OK`,
    image: 'https://picsum.photos/300?random=1',
    languages: ['Node', 'TypeScript', 'React', 'Redux', 'Styled-Components'],
  },
  {
    name: 'efood',
    title: 'E Food OK',
    image: 'https://picsum.photos/300?random=2',
    languages: ['Node', 'TypeScript', 'React', 'Redux', 'Styled-Components'],
  },
  {
    name: 'minhas-tarefas',
    title: 'Minhas Tarefas OK',
    image: 'https://picsum.photos/300?random=3',
    languages: ['Node', 'TypeScript', 'React', 'Redux', 'Styled-Components'],
  },
  {
    name: 'BMIcalculator',
    title: 'BMI Calculator OK',
    image: 'https://picsum.photos/300?random=4',
    languages: ['Node', 'TypeScript', 'React', 'Bootstrap'],
  },
  {
    name: 'my_birthday',
    title: 'My Birthday OK',
    image: 'https://picsum.photos/300?random=5',
    languages: ['JavaScript', 'HTML', 'Parcel', 'SASS'],
  },
  {
    name: 'clone_disneyplus',
    title: 'Disney Plus clone OK',
    image: 'https://picsum.photos/300?random=7',
    languages: ['JavaScript', 'HTML', 'SASS'],
  },
  {
    name: 'random_number_picker',
    title: 'Random Number Picker OK',
    image: 'https://picsum.photos/300?random=8',
    languages: ['Node', 'JavaScript', 'HTML', 'Less'],
  },
  {
    name: 'jQuery-Photos-Gallery',
    title: 'Photos Gallery OK',
    image: 'https://picsum.photos/300?random=9',
    languages: ['jQuery', 'HTML', 'CSS'],
  },
  {
    name: 'agenda-de-contatos',
    title: 'Agenda de Contatos OK',
    image: 'https://picsum.photos/300?random=10',
    languages: ['JavaScript', 'HTML', 'CSS'],
  },
  {
    name: 'projeto_calculadora_medias',
    title: 'Calculadora de Medias OK',
    image: 'https://picsum.photos/300?random=11',
    languages: ['JavaScript', 'HTML', 'CSS'],
  },
  {
    name: 'CartorioEBAC',
    title: 'Cartorio EBAC',
    image: 'https://picsum.photos/300?random=12',
    languages: ['C'],
  },
  {
    name: 'ClientRegistry',
    title: 'Client Registry',
    image: 'https://picsum.photos/300?random=12',
    languages: ['Java'],
  },
  {
    name: 'OasisHotel2',
    title: 'Oasis Resort',
    image: 'https://picsum.photos/300?random=13',
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
