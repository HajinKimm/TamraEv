import axios from 'axios';
import React, { useEffect, useState } from 'react';

export const useAxios = (url=[]) => {
    const [state, setState] = useState([]) 
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [stateList, setStateList] = useState([])

    useEffect(()=>{
        axios.get(url)
            .then(res=>{
                setStateList(res.data)
                setState(res.data)
                setLoading(true)
                setError(null)
            }).catch(error=>{
                setStateList([])
                setState([])
                setLoading(false)
                setError('error발색')
            })
    },[url])

    return {stateList, state, setState, loading,error}
};
