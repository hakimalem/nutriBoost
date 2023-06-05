import axios from 'axios';
import React, { useEffect, useState } from 'react';
export const useAxiosPost = (url, payload) => {
  const [isLoading, setIsLoading] = useState(false);
  const [apiData, setApiData] = useState(null);
  const [error, setError] = useState(null);
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDZhYTI5NTM1YjJhMDA0MjFmYTEyNTgiLCJpYXQiOjE2ODQ3MTAzNDUsImV4cCI6MTY5MjQ4NjM0NX0.pd88_1MriegCLeRh0-JB8OXRqYVciPvtscQ5K4rHe-Q';

  useEffect(() => {
    const postData = async () => {
      try {
        setIsLoading(true);

        const { data } = await axios.post(url, payload, {
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
    postData();
  }, []);
  return [apiData, isLoading, error];
};
