import { useState, useEffect } from 'react'
import apiClient from '../services/api-client'
import { CanceledError, type AxiosRequestConfig } from 'axios';

export interface FetchResponse<T> {
    count: number;
    results: T[];
}

const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();

        setLoading(true);

        apiClient
            .get<FetchResponse<T>>(endpoint, { signal: controller.signal, ...requestConfig })
            .then((response) => {
                setData(response.data.results)
                setLoading(false);
            })
            .catch((error) => {
                if (error instanceof CanceledError) return
                setError(error.message)
                setLoading(false);
            });
        return () => controller.abort();
    }, [...(deps || [])]);

    return { data, error, isLoading };

}

export default useData;    