export interface UsersList {
    listUsers: {
        items: User[]
    }
}

export interface CreateUser {
    createUser: {
        id: string;
    }
};

export interface CreateUserInput {
    firstName: string;
      lastName: string;
      username: string;
      password: string;
      team?: string;
}