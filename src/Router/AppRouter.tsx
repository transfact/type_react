import { createBrowserRouter } from "react-router-dom";
import SalesStat from "../Page/SalesStatPage";
import NotFound from "../Common/NotFound";
import App from "../Component/App";
import Graph1 from "../Component/Graph1";
import Graph2 from "../Component/Graph2";

const AppRouter = createBrowserRouter([
    {
        path : "/",
        element : <SalesStat/>,
        children :[
            {index : true, element : <App></App>},
            {path: 'salesGraphMonth', element: <Graph1 />},
            {path: 'salesProductMonth', element: <Graph2 />},
        ]
    },
    { 
        path:"*",
        element : <NotFound></NotFound>
    }


])

export default AppRouter;