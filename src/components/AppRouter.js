import React from "react";
import { Route, Routes, Navigate } from 'react-router-dom';
import { routes } from "../router/route";
import { CATALOG_ROUTE } from "../utils/consts";

const AppRouter = () => {
    return(
        <Routes>
            {routes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>}  exact/>
            )}
            <Route path="*" element={<Navigate to={CATALOG_ROUTE}/>} />
        </Routes>
    )
}

export default AppRouter;