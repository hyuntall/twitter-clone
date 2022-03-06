import React from "react";
import { HashRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import Profile from "routes/Profile";
import Auth from "../routes/Auth";
import Home from "../routes/Home";
import Navigation from "./Navigation";
import 'router.css'
const AppRouter = ({ refreshUser, isLoggedIn, userObj }) => {

    return (
        <Router>
            {isLoggedIn && <Navigation userObj={userObj}/>}
            <div className="router">
            <Routes>
                {isLoggedIn ? (
                <>
                    <Route path='/' element={<Home userObj={userObj}/>}/>
                    <Route path='/profile' element={<Profile userObj={userObj} refreshUser={refreshUser}/>}/>
                </> 
                ) : (
                <>
                    <Route path='/' element={<Auth/>}/>
                    <Route path='*' element={<Navigate replate to='/'/>}/>
                </>
                )}
            </Routes>
            </div>
        </Router>
    )
}

export default AppRouter;