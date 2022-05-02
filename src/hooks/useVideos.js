import { useState, useEffect } from "react";
import youtube from "../api/YouTube";

const useVideos = (defaultSearchText) => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        return search(defaultSearchText);
    }, [defaultSearchText]);

    const search = async (text) => {
        const response = await youtube.get("/search", {
            params: { q: text },
        });
        setVideos(response.data.items);
    };

    return [videos, search];
};

export default useVideos;
