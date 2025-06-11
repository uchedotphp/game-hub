import { useState, useEffect } from 'react'
import apiClient from '../services/api-client'
import { CanceledError } from 'axios';

interface Genre {
    id: number;
    name: string;
    slug: string;
    games_count: number;
    image_background: string;
}

export interface FetchGenresResponse {
    count: number;
    results: Genre[];
}

const useGenres = () => {
    const [genres, setGenres] = useState<Genre[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();

        setLoading(true);

        apiClient
            .get<FetchGenresResponse>("/games", { signal: controller.signal })
            .then((response) => {
                setGenres(response.data.results)
                setLoading(false);
            })
            .catch((error) => {
                if (error instanceof CanceledError) return
                setError(error.message)
                setLoading(false);
            });
        return () => controller.abort();
    }, []);

    return { genres, error, isLoading };

}

export default useGenres;    