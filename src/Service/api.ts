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
    image: 'https://picsum.photos/300?random=1',
    languages: ['TypeScript', 'HTML'],
  },
  {
    name: 'efood',
    title: 'E Food',
    image: 'https://picsum.photos/300?random=2',
    languages: ['TypeScript', 'HTML'],
  },
  {
    name: 'minhas-tarefas',
    title: 'Minhas Tarefas',
    image: 'https://picsum.photos/300?random=3',
    languages: ['TypeScript', 'HTML'],
  },
  {
    name: 'BMIcalculator',
    title: 'BMI Calculator',
    image: 'https://picsum.photos/300?random=4',
    languages: ['JavaScript', 'HTML'],
  },
  {
    name: 'my_birthday',
    title: 'My Birthday',
    image: 'https://picsum.photos/300?random=5',
    languages: ['JavaScript', 'HTML', 'SCSS'],
  },
  {
    name: 'OasisHotel2',
    title: 'Oasis Hotel',
    image: 'https://picsum.photos/300?random=6',
    languages: ['JavaScript', 'HTML', 'SCSS'],
  },
  {
    name: 'clone_disneyplus',
    title: 'Disney Plus clone',
    image: 'https://picsum.photos/300?random=7',
    languages: ['JavaScript', 'HTML', 'SCSS'],
  },
  {
    name: 'random_number_picker',
    title: 'Random Number Picker',
    image: 'https://picsum.photos/300?random=8',
    languages: ['JavaScript', 'HTML', 'Less'],
  },
  {
    name: 'jQuery-Photos-Gallery',
    title: 'Photos Gallery',
    image: 'https://picsum.photos/300?random=9',
    languages: ['JavaScript', 'HTML', 'CSS'],
  },
  {
    name: 'agenda-de-contatos',
    title: 'Agenda de Contatos',
    image: 'https://picsum.photos/300?random=10',
    languages: ['JavaScript', 'HTML', 'CSS'],
  },
  {
    name: 'projeto_calculadora_medias',
    title: 'Calculadora de Medias',
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
];

export const fetchProjects = async (): Promise<Project[]> => {
  try {
    const repos = await fetch('https://api.github.com/users/FabricioMeneze5/repos', {
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
