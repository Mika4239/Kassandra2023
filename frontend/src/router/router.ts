import { createBrowserRouter } from "react-router-dom";
import SelectMatch from "../views/selectMatch/selectMatch";
import Autonomous from "../views/autonomous/autonomous";
import Teleop from "../views/teleop/teleop";
import Endgame from "../views/endgame/endgame";
import Data from "../views/data/data";
import Login from "../views/login/login";
import Teams from "../views/teams/teams";

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