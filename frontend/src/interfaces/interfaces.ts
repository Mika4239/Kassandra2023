import Position from "../types/position";

export interface PeriodGP {
    gp: string;
    period: string;
    amount: number;
}

export interface PeriodPosition {
    period: string;
    position: Position;
}

export interface AutonomousState {
    mobility: boolean;
    cones: number;
    cubes: number;
    links: number;
    position: Position;
}

export interface TeleopState {
        cones: number;
        cubes: number;
        links: number;
}

export interface EndgameState {
    position: Position;
    comments: string;
}

export interface Periods {
    autonomous: AutonomousState,
    teleop: TeleopState
}

export interface PositionPeriods {
    autonomous: {
        position: Position
    },
    endgame: {
        position: Position
    }
}