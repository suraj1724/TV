import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import { Show } from "./All_Shows"
import { PlayClickk } from "./Details"
import { Nav } from "./navigation"
import { Peoples } from "./People"
import { ShowDetails } from "./ShowDetails"
export function FinalIndex(){
    return(
        <>
        <BrowserRouter>
        <Nav/>
        <Routes>
            <Route path="/" element={<Show/>}/>
            <Route path="details/:id" element={<PlayClickk/>}/>
            <Route path="nav" element={<Peoples/>}></Route>
            
            </Routes> </BrowserRouter>
        </>
    )
}