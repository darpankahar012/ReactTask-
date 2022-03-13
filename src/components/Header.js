import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
    const loaction = useLocation()

    const [routeLocation, setRouteLocation] = useState("/")

    useEffect(() => {
        if (loaction.pathname) setRouteLocation(loaction.pathname)
    }, [loaction]);

    return (
        <>
            <ul className="nav nav-tabs bg-primary">
                <li className="nav-item">
                    <Link
                        className="nav-link"
                        style={routeLocation === "/" ? { color: '#FFA500' } : { color: '#ffffff' }}
                        to={{
                            pathname: "/",
                        }}
                    >Home</Link>
                </li>
                <li className="nav-item">
                    <Link
                        className="nav-link"
                        style={routeLocation === "/math" ? { color: '#FFA500' } : { color: '#ffffff' }}
                        to={{
                            pathname: "/math",
                        }}
                    >Math</Link>
                </li>
            </ul>
        </>
    )
}
