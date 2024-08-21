import { useState, useEffect } from "react";

function useFetch(url) {

    const [products, setProducts] = useState([]);

    useEffect(() => {

        fetch(url,
            {
                method: "GET",
                headers: {"Content-Type": "application/json",},
            }
        )
        .then((response) => response.json())
        .then((data) => setProducts(data))
        .catch((error) => console.log(error))

    }, [url]);

    return [products];

}

export default useFetch;