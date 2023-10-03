export interface AllTeams {
  listTeams: {
    items: Team[];
  };
}

export interface CreateTeam {
    createTeam: {
        id: string;
    }
}

export interface CreateTeamInput {
  name: string;
  number: number;
  description: string;
  image: string;
  admin: string[];
}
