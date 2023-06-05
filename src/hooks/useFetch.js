import axios from 'axios';
import React, { useEffect, useState } from 'react';

export const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(false);
  const [apiData, setApiData] = useState(null);
  const [error, setError] = useState(null);
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDdhMzNkN2MyZjRlN2Y5NzBhYWJkNzkiLCJpYXQiOjE2ODU4OTc3MTAsImV4cCI6MTY5MzY3MzcxMH0.2Tzkw3cEQzyvEI4S6Tpwf4sf1AY28OUJUZo0ABQTETY';
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios(url, {
          headers: {
            Authorization: 'Bearer ' + token, //the token is a variable which holds the token
            'Content-Type': 'application/json',
          },
        });
        setApiData(data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, [url]);
  return [apiData, isLoading, error];
};
