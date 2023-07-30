import { AutonomousState, EndgameState, TeleopState } from "../../interfaces/interfaces";

interface DataObjectProps {
    object: AutonomousState | TeleopState | EndgameState
};

export default DataObjectProps;