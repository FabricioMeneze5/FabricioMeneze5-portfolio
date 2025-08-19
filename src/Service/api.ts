const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export type GitHubRepo = {
  name: string;
  description: string | null;
  html_url: string;
  homepage: string;
  languages_url: string;
};

export type Project = GitHubRepo & {
  image: string;
  title: string;
  languages: string[];
};

const desiredRepos: { name: string; title: string; image: string }[] = [
  {
    name: 'efood',
    title: 'E Food',
    image: 'https://picsum.photos/500?random',
  },
  {
    name: 'agenda-de-contatos',
    title: 'Agenda de Contatos',
    image: 'https://picsum.photos/500?random',
  },
  {
    name: 'arithmetic-calculator',
    title: 'Arithmetic Calculator',
    image: 'https://picsum.photos/500?random',
  },
  {
    name: 'BMIcalculator',
    title: 'BMI Calculator',
    image: 'https://picsum.photos/500?random',
  },
  {
    name: 'contact-list-95',
    title: 'Contact List 95',
    image: 'https://picsum.photos/500?random',
  },
  {
    name: 'GameShop',
    title: 'GameShop',
    image: 'https://picsum.photos/500?random',
  },
  {
    name: 'jQuery-Photos-Gallery',
    title: 'Photos Gallery',
    image: 'https://picsum.photos/500?random',
  },
  {
    name: 'minhas-tarefas',
    title: 'Minhas Tarefas',
    image: 'https://picsum.photos/500?random0',
  },
  {
    name: 'my_birthday',
    title: 'My Birthday',
    image: 'https://picsum.photos/500?random1',
  },
  {
    name: 'Oasis-Hotel',
    title: 'Oasis Hotel',
    image: 'https://picsum.photos/500?random12',
  },
];

// Função principal para buscar e filtrar os projetos
export const fetchProjects = async (): Promise<Project[]> => {
  try {
    const repos = await fetch('https://api.github.com/users/FabricioMeneze5/repos', {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });
    const reposJson: GitHubRepo[] = await repos.json();

    // Filtra apenas os dados desejados
    const filteredData = reposJson.filter((repo) => desiredRepos.some((d) => d.name === repo.name));

    // Para cada repo, busca as linguagens e adiciona image + title
    const projects: Project[] = await Promise.all(
      filteredData.map(async (repo) => {
        const langRes = await fetch(repo.languages_url);
        const langJson = await langRes.json();
        const languages = Object.keys(langJson); // transforma em array de strings

        const desired = desiredRepos.find((d) => d.name === repo.name);

        console.log(languages);
        return {
          ...repo,
          title: desired?.title || '',
          image: desired?.image || '',
          languages,
        };
      }),
    );

    return projects;
  } catch (err) {
    console.error('Error >>', err);
    return [];
  }
};
