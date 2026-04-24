import React, { useEffect, useState } from 'react';

const useProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/data.json');
      const data = await res.json();
      console.log(data, 'Data from UseEffect');

      setTimeout(() => {
        setProjects(data);
        setLoading(false);
      }, 900);
    };
    fetchData();
  }, []);

  return { projects, loading };
};

export default useProjects;
