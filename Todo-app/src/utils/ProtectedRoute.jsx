import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux"
import { Navigate, useLocation } from "react-router-dom"


const ProtectedRoute = ({ children }) => {
    const accessToken = useSelector((state) => state?.app?.accessToken);
    const setLoading = useSelector((state) => state.app.isLoading);

    let location = useLocation(); 
 

    if (!accessToken && !setLoading) {
        return <Navigate to="/signin" state={{ from: location }} replace />
    }
    return <>{children}</>

};

export default ProtectedRoute;