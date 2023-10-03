import { AutonomousState, EndgameState, TeleopState } from "../interfaces/interfaces.js";

export interface MatchData {
    id: string;
    createdAt?: string;
    event: string;
    match: string;
    team: string;
    autonomous: AutonomousState,
    teleop: TeleopState,
    endgame: EndgameState
};