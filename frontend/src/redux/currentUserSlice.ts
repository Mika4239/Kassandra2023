import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: User = {
    _id: '',
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
        state._id = initialState._id,
        state.firstName = initialState.firstName,
        state.lastName = initialState.lastName,
        state.username = initialState.username,
        state.password = initialState.password,
        state.team = initialState.team
    },
    setUser: (state, action: PayloadAction<User>) => {
        state._id = action.payload._id;
        state.firstName = action.payload.firstName,
        state.lastName = action.payload.lastName,
        state.username = action.payload.username;
        state.password = action.payload.password;
        state.team = action.payload.team;
    }
  }
})

export const { resetUser, setUser } = userSlice.actions;

export default userSlice.reducer;