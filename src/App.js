import Wars from "./components/Wars";
import Films from "./components/Films";
import Header from "./components/Header";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Transport from "./components/Transport";

import Starships from "./components/Starships";
import Planets from "./components/Planets";


function App() {
    return (
        <div className="bac">
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/planets" element={<Planets/>}/>
                    <Route path="/starships" element={<Starships/>}/>
                    <Route path="/transport" element={<Transport/>}/>
                    <Route path="/wars" element={<Wars/>}/>
                    <Route path="/films" element={<Films/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}


export default App;
