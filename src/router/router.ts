import { createBrowserRouter } from "react-router-dom";
import SelectMatch from "../views/selectMatch/selectMatch.js";
import Autonomous from "../views/autonomous/autonomous.js";
import Teleop from "../views/teleop/teleop.js";
import Endgame from "../views/endgame/endgame.js";
import Data from "../views/data/data.js";
import Login from "../views/login/login.js";
import Teams from "../views/teams/teams.js";

const router = createBrowserRouter([
    {
        path: '/',
        Component: Login
    },
    {
        path: '/select',
        Component: SelectMatch
    },
    {
        path: '/autonomous',
        Component: Autonomous
    },
    {
        path: '/teleop',
        Component: Teleop
    },
    {
        path: '/endgame',
        Component: Endgame
    },
    {
        path: '/data',
        Component: Data
    },
    {
        path: '/teams',
        Component: Teams
    }
]);

export default router;