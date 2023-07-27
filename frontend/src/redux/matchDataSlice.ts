import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import Position from '../types/position';
import  { PeriodGP, AutonomousState, TeleopState, EndgameState, Periods, PeriodPosition, PositionPeriods, MatchTeam, SelectMatchState } from '../interfaces/interfaces';

interface MatchDataState {
    match: string;
    team: string;
    autonomous: AutonomousState,
    teleop: TeleopState,
    endgame: EndgameState
};

const initialState: MatchDataState = {
    match: '',
    team: '',
    autonomous: {
        mobility: false,
        cones: 0,
        cubes: 0,
        links: 0,
        position: Position.NONE
    },
    teleop: {
        cones: 0,
        cubes: 0,
        links: 0
    },
    endgame: {
        position: Position.NONE,
        comments: ''
    }
};

export const matchDataSlice = createSlice({
  name: 'matchData',
  initialState: initialState,
  reducers: {
    resetMatchData: state => {
        state.match = initialState.match,
        state.team = initialState.team,
        state.autonomous = initialState.autonomous,
        state.teleop = initialState.teleop,
        state.endgame = initialState.endgame
    },
    setGPAmount: (state, action: PayloadAction<PeriodGP>) => {
        state[action.payload.period as keyof Periods][action.payload.gp as keyof TeleopState] = action.payload.amount;
    },
    setPosition: (state, action: PayloadAction<PeriodPosition>) => {
        state[action.payload.period as keyof PositionPeriods].position = action.payload.position;
    },
    setMobility: (state, action: PayloadAction<boolean>) => {
        state.autonomous.mobility = action.payload;
    },
    setComments: (state, action: PayloadAction<string>) => {
        state.endgame.comments = action.payload;
    },
    setMatchTeam: (state, action: PayloadAction<MatchTeam>) => {
        state[action.payload.name as keyof SelectMatchState] = action.payload.input;
    }
  }
})

export const { resetMatchData, setGPAmount, setPosition, setMobility, setComments, setMatchTeam } = matchDataSlice.actions;

export default matchDataSlice.reducer;