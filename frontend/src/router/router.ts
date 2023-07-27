import { createBrowserRouter } from "react-router-dom";
import SelectMatch from "../views/selectMatch/selectMatch";
import Autonomous from "../views/autonomous/autonomous";

const router = createBrowserRouter([
    {
        path: '/select',
        Component: SelectMatch
    },
    {
        path: '/autonomous',
        Component: Autonomous
    }
]);

export default router;