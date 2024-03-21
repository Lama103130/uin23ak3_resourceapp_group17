import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import resources from '../assets/resources';

const ResourceList = ({ category }) => {
  const [filteredResources, setFilteredResources] = useState([]);

  useEffect(() => {
    const filtered = resources.filter(item => item.category === category);
    setFilteredResources(filtered);
  }, [category]);

  return (
    <ul>
      {filteredResources.map((item, index) => (
        <li key={index}>
          <Link to={item.url}>{item.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default ResourceList;