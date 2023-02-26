import React from "react";
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";
import '../components/Details.css'

import { useState, useEffect } from "react";
import axios from "axios";
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';








export function Peoples() {

    const [People, setPeople] = useState([]);


    useEffect(() => {
        axios({
            method: 'get',
            url: `https://api.tvmaze.com/people`,
        })
            .then(response => {
                setPeople(response.data);


            })
    }, []);

   

    return (
        <>
            <div className="container-fluid">
                {/* <div>
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
                </div> */}
                <div className="" id="Showss">
                    <h4>Peoples</h4>
                    <div className="d-flex flex-wrap">
                        {
                            People.map(Peoples =>
                                <div className="card m-2 p-2" style={{ width: '150px' }}>
                                       <img   id={Peoples.id} src={Peoples.image.medium} height="150" className="card-img-top" />

                                    <div className="card-header" style={{ height: '100px' }}>
                                      


                                        <div className="mt-2 ">
                                          <h5>{Peoples.name}</h5>
                                        </div>
                                    </div>
                                    {/* <div className="card-footer ">
                                        <p key={Show.id}>{Show.rating.average}<StarBorderOutlinedIcon /></p>
                                        <button className="btn btn-warning w-100">Play</button>
                                    </div> */}
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>

        </>
    )
}