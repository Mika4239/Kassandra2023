import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import Position from "../types/position.js";
import {
  PeriodGP,
  TeleopState,
  Periods,
  PeriodPosition,
  PositionPeriods,
  MatchTeam,
  SelectMatchState,
  MatchDataState,
  GpState,
} from "../interfaces/interfaces.js";

const initialGp: GpState = {
  top: 0,
  middle: 0,
  bottom: 0,
};

const initialState: MatchDataState = {
  user: "",
  event: "",
  match: "",
  team: "",
  teamIndex: 0, 
  autonomous: {
    mobility: false,
    cones: initialGp,
    cubes: initialGp,
    position: Position.NONE,
  },
  teleop: {
    cones: initialGp,
    cubes: initialGp,
  },
  endgame: {
    position: Position.NONE,
    comments: "",
  },
};

export const matchDataSlice = createSlice({
  name: "matchData",
  initialState: initialState,
  reducers: {
    resetMatchData: (state) => {
        (state.autonomous = initialState.autonomous),
        (state.teleop = initialState.teleop),
        (state.endgame = initialState.endgame);
    },
    setGPAmount: (state, action: PayloadAction<PeriodGP>) => {
      state[action.payload.period as keyof Periods][
        action.payload.gp as keyof TeleopState
      ][action.payload.row as keyof GpState] = action.payload.amount;
    },
    setPosition: (state, action: PayloadAction<PeriodPosition>) => {
      state[action.payload.period as keyof PositionPeriods].position =
        action.payload.position;
    },
    setMobility: (state, action: PayloadAction<boolean>) => {
      state.autonomous.mobility = action.payload;
    },
    setComments: (state, action: PayloadAction<string>) => {
      state.endgame.comments = action.payload;
    },
    setMatchTeam: (state, action: PayloadAction<MatchTeam>) => {
      if(action.payload.name == "event") {
        state.match = "";
        state.team = "";
      }
      if(action.payload.name == "match") {
        state.team = "";
      }
      state[action.payload.name as keyof SelectMatchState] =
        action.payload.input;
    },
    setTeamIndex: (state, action: PayloadAction<number>) => {
      state.teamIndex = action.payload;
    }
  },
});

export const {
  resetMatchData,
  setGPAmount,
  setPosition,
  setMobility,
  setComments,
  setMatchTeam,
  setTeamIndex
} = matchDataSlice.actions;

export default matchDataSlice.reducer;
