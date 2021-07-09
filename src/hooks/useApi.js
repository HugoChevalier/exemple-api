import { useState } from "react";


const useApi = (url, options) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const fetchData = async (params) => {
        const url = new URL("https://api.starcitizen-api.com/1fe1ec50020d1aaef1cc5a0d25cc32e4/v1/gamedata/get/3.6.1/ship?name=Avenger");
        url.search = new URLSearchParams(params).toString();

        setData(null)
        setIsLoading(true);
        try {
            const resp = await fetch(url);
            const data = await resp.json();

            setData(data);
        } catch (e) {
            setData([]);
            setError(e);
        }
        setIsLoading(false);

        return data;
    };

    return { data, error, isLoading, fetchData };
};

export default useApi;
