import React from "react";
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";
import '../components/Details.css'

import { useState, useEffect } from "react";
import axios from "axios";
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';

import { Details } from "@mui/icons-material";
import { PlayClickk } from "./Details";






export function Show() {

    const [Shows, setShows] = useState([]);


    useEffect(() => {
        axios({
            method: 'get',
            url: `https://api.tvmaze.com/shows`,
        })
            .then(response => {
                setShows(response.data);


            })
    }, []);

    // function PlayClick(e) {

    //         alert(e.target.id);
    //         setShows(<PlayClickk id={e.target.id} />)

    //         axios({
    //             method: 'get',
    //             url: `https://api.tvmaze.com/shows/${e.target.id}`,
    //         })
    //             .then(response => {
    //                 alert(response.data)



    //             })

    // }

    return (
        <>
            <div className="container-fluid">
                <div>
                    <div className="box">
                        <h2>TV Bland</h2>

                        <div>


                            <p>
                                TV Show and web series database
                                <br />
                                Create personalised schedules.Episodes guide, cast, crew and <br />
                                character information
                            </p>
                        </div>
                    </div>
                </div>
                <div className="" id="Shows">
                    <h4>All Latest Shows</h4>
                    <div className="d-flex flex-wrap">
                        {
                            Shows.map(Show =>
                                <div className="card m-2 p-2" style={{ width: '150px' }}>
                                    <Link to={'/details/' + Show.id}>    <img value={Show.id} key={Show.image} id={Show.id} src={Show.image.medium} height="150" className="card-img-top" /></Link>

                                    <div className="card-header" style={{ height: '100px' }}>
                                        <p>{Show.name}</p>


                                        <div className="mt-2 ">
                                            {/* <span>{<StarBorderOutlinedIcon/>}</span>
                                       <span>{<StarBorderOutlinedIcon/>}</span>
                                       <span>{<StarBorderOutlinedIcon/>}</span>
                                       <span>{<StarBorderOutlinedIcon/>}</span> */}
                                            {/* <span>{Show.rating}</span> */}
                                        </div>
                                    </div>
                                    <div className="card-footer ">
                                        <p key={Show.id}>{Show.rating.average}<StarBorderOutlinedIcon /></p>
                                        {/* <button className="btn btn-warning w-100">Play</button> */}
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>

        </>
    )
}