import { useState, useEffect } from "react";

useState

function AllBeersPage() {
    const apiURL = "https://ih-beers-api2.herokuapp.com/beers";

    const[beers, setBeers] = useState([])

    useEffect(() => {
        fetch(apiURL)
        .then((res) => {
            return res.json ()
        })
        .then((data)=> {
            return setBeers(data)
        })

        .catch((err) => {
            console.log(err)
        })

    }, [apiURL])
    
    console.log(beers)

    return (
        <>
        {
            beers.map((beer) => {
                return (
                <div>
                    <img src={beer.image_url} alt={beer.name} />
                    <p>{beer.name}</p>
                    <p>{beer.tagline}</p>
                    <p>{beer.contributed_by}</p>
                </div>
                )
            })
        }
        </>
    )
}

export default AllBeersPage;
