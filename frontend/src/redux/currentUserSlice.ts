import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: User = {
    id: '',
    firstName: '',
    lastName: '',
    username: '',
    password: '',
    team: ''
};

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    resetUser: state => {
        state.id = initialState.id,
        state.firstName = initialState.firstName,
        state.lastName = initialState.lastName,
        state.username = initialState.username,
        state.password = initialState.password,
        state.team = initialState.team
    },
    setUser: (state, action: PayloadAction<User>) => {
        state.id = action.payload.id;
        state.firstName = action.payload.firstName,
        state.lastName = action.payload.lastName,
        state.username = action.payload.username;
        state.password = action.payload.password;
        state.team = action.payload.team;
    },
    updateTeam: (state, action: PayloadAction<string>) => {
      state.team = action.payload;
    }
  }
})

export const { resetUser, setUser, updateTeam } = userSlice.actions;

export default userSlice.reducer;