import { AutonomousState, EndgameState, TeleopState } from "../interfaces/interfaces";

export interface MatchData {
    id: string;
    event: string;
    match: string;
    team: string;
    autonomous: AutonomousState,
    teleop: TeleopState,
    endgame: EndgameState
};