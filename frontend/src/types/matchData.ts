import { AutonomousState, EndgameState, TeleopState } from "../interfaces/interfaces";

export interface MatchData {
    _id: string;
    match: string;
    team: string;
    autonomous: AutonomousState,
    teleop: TeleopState,
    endgame: EndgameState
};