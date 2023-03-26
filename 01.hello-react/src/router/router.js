import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Say from '../Say';
import Iteration from "../Iteration";
import EventPractice from '../EventPractice';


export const router = createBrowserRouter(
    [
        {
            path: '/',
            element: (
                <App />
            ),
            children: [
                {
                    path: '/',
                    element: <Say />
                },
                {
                    path: '/event',
                    element: <EventPractice />
                },
                {
                    path: '/iteration',
                    element: <Iteration />
                },
            ]
        }
    ]
)