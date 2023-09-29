import Position from "../types/position";

export interface PeriodGP {
  row: string;
  gp: string;
  period: string;
  amount: number;
}

export interface PeriodPosition {
  period: string;
  position: Position;
}

export interface GpState {
  top: number;
  middle: number;
  bottom: number;
}

export interface AutonomousState {
  mobility: boolean;
  cones: GpState;
  cubes: GpState;
  position: Position;
}

export interface TeleopState {
  cones: GpState;
  cubes: GpState;
}

export interface EndgameState {
  position: Position;
  comments: string;
}

export interface MatchDataState {
  user: string;
  event: string;
  match: string;
  team: string;
  autonomous: AutonomousState;
  teleop: TeleopState;
  endgame: EndgameState;
}

export interface Periods {
  autonomous: AutonomousState;
  teleop: TeleopState;
}

export interface PositionPeriods {
  autonomous: {
    position: Position;
  };
  endgame: {
    position: Position;
  };
}

export interface MatchTeam {
  name: string;
  input: string;
}

export interface SelectMatchState {
  team: string;
  match: string;
  event: string;
}
