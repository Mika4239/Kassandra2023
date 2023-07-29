import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: User = {
    _id: '',
    username: '',
    password: '',
    team: ''
};

export const matchDataSlice = createSlice({
  name: 'matchData',
  initialState: initialState,
  reducers: {
    resetMatchData: state => {
        state._id = initialState._id,
        state.username = initialState.username,
        state.password = initialState.password,
        state.team = initialState.team
    },
    setUser: (state, action: PayloadAction<User>) => {
        state._id = action.payload._id;
        state.username = action.payload.username;
        state.password = action.payload.password;
        state.team = action.payload.team;
    }
  }
})

export const { resetMatchData, setUser } = matchDataSlice.actions;

export default matchDataSlice.reducer;