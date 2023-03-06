import React from 'react';
import { matchRoutes, useMatch, useResolvedPath, useLocation, useParams } from 'react-router-dom';

interface RepositoryParams {
  repository: string;
}

const Repositories: React.FC = () => {
  const repository = useLocation().pathname.replace('/repositories', '');
  return (<h1>Repository: {repository}</h1>)
}

export default Repositories;