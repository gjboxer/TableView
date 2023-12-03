import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import TableView from './TableView';
import HomeView from "./HomeView";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomeView />} />
                <Route path="/table" element={<TableView />} />
            </Routes>
        </Router>
    );
}

export default App;
