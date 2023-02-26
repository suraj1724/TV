import React from "react";
import axios from "axios";
import { useState,useEffect } from "react";
import { Link, useParams } from "react-router-dom";
export function PlayClickk() {
    const params = useParams();
    const [Shows, setShows] = useState([{id:0, name:''}]);
    axios({
        method: 'get',
        url: `https://api.tvmaze.com/shows/${params.id}`,
    })
        .then(response => {
            // alert(response.data)
            setShows(response.data)
        
            

        });
        return(
            <>
        
        <div>
                <div id="back">
                <div className="d-flex justify-content-evenly container-fluid " >
                    <div>
                        <img src="" height="150" width={"150px"} className="card-img-top" />
                        <h3>So, pick me. Choose me, Love me</h3>
                    </div>
                    <div id="poster">
                        
                    </div>
                    


                </div>
                </div>
                <div>
                    <div>
                        <h4> Show Info</h4>
                    </div>

                </div>
                <div className="d-flex flex-wrap justify-content-around" >
                    <div>
                        <table class="table">

                            <tbody>
                                <tr>
                                    <th scope="row">Show Name</th>
                                    <td>{Shows.name}</td>

                                </tr>
                                <tr>
                                    <th scope="row">Language</th>
                                    <td>{Shows.language}</td>

                                </tr>
                                <tr>
                                    <th scope="row">genres</th>
                                    <td colspan="2">{Shows.genres}</td>

                                </tr>
                                <tr>
                                    <th scope="row">Status</th>
                                    <td colspan="2">{Shows.status}</td>

                                </tr>

                            </tbody>
                        </table>

                    </div>
                    <div>
                        <div>
                            <table class="table">

                                <tbody>
                                    <tr>
                                        <th scope="row">premiered</th>
                                        <td>{Shows.premiered}</td>

                                    </tr>
                                    <tr>
                                        <th scope="row">rating</th>
                                        <td>{}</td>

                                    </tr>
                                    <tr>
                                        <th scope="row">timezone</th>
                                        <td colspan="2">{Shows.timezone}</td>

                                    </tr>
                                    <tr>
                                        <th scope="row">Status</th>
                                        <td colspan="2">{Shows.status}</td>

                                    </tr>

                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            </div>

                </>
        )
    
}