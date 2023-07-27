import { createBrowserRouter } from "react-router-dom";
import SelectMatch from "../views/selectMatch/selectMatch";

const router = createBrowserRouter([
    {
        path: '/select',
        Component: SelectMatch
    }
]);

export default router;