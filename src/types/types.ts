type TOwner = {
  login: string;
  avatar_url: string;
  html_url: string;
};

export type TRepository = {
  owner: TOwner;
  language: string;
  watchers: string;
  html_url: string;
  full_name: string;
  id: string | number;
  description: string;
  stargazers_count: string;
  forks: string | undefined;
};
