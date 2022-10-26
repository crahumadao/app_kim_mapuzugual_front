import * as React from 'react'
import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';

import Ruka from '../components/Ruka'

function AppRoutes() {
    return(
        <BrowserRouter>
            <Routes>                
                <Route path='/' element={<Ruka/>}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;