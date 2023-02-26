import { useState, useEffect } from "react";
import axios from "axios";
import '../components/Details.css'
export function ShowDetails() {
    const [Shows, setShows] = useState([]);

    useEffect((e) => {
        axios({
            method: 'get',
            url:`https://api.tvmaze.com/shows/${e.target.id}`,
        })
            .then(response => {
                setShows(response.data);
            })
    }, []);

    return (
        <>


            <div>
                <div className="d-flex justify-content-evenly bg-secondary flex-wrap">
                    <div>
                        <img src={Shows.image} height="150" width={"150px"} className="card-img-top" />
                    </div>
                    <div>
                       <p>{Shows.summarry}</p>
                    </div>


                </div>
                <div>
                    <div>
                        <h3> Show Info</h3>
                    </div>

                </div>
                <div className="d-flex justify-content-around" >
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
                                        <th scope="row">country</th>
                                        <td>{Shows.code}</td>

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