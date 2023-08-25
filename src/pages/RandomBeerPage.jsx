import { useState, useEffect } from "react";
import { useParams} from "react-router-dom";

function RandomBeersPage() {
    const {beerId} = useParams();

    const [beer, setBeer] = useState([])

    const apiURL = `https://ih-beers-api2.herokuapp.com/beers/random`

    useEffect(() => {
        fetch(apiURL)
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            return setBeer(data)
        })
    }, [apiURL])

    console.log(beer)

    return (
        <div>
            <img src={beer.image_url} alt={beer.name} />
            <p>{beer.name}</p>
            <p>{beer.tagline}</p>
            <p>{beer.first_brewed}</p>
            <p>{beer.attenuation_level}</p>
            <p>{beer.description}</p>
            <p>{beer.contributed_by}</p>
        </div>
    )
}

export default RandomBeersPage;