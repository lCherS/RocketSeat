import React, {useEffect, useState} from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom';
import api from '../../services/api';

import { Header, RepositoryInfo, Issues } from './styles';

const logoImg = 'https://xesque.rocketseat.dev/platform/1587379765556-attachment.svg'


interface RepositoryParams {
  repository: string;
}
interface Repository {
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner: {
    login: string;
    avatar_url: string;

  }
}

interface issues {
  title: string;
  id: number;
  html_url: string;
  user: {
    login: string;
  }
}
const Repositories: React.FC = () => {
  const [repositorio, setRepositorio] = useState<Repository | null>(null)
  const [issues, setIssues] = useState<issues[]>([])
  const repository = useLocation().pathname.replace('/repositories', '');
  
  useEffect(() => {
    api.get(`repos${repository}`).then(response => {
      setRepositorio(response.data)
    })

    api.get(`repos${repository}/issues`).then(response => {
      console.log(response.data);
      setIssues(response.data);
    })

  }, [repository])

  console.log(issues)
  return (
    <>
    <Header>
      <img src={logoImg} alt="Logo GitHub Explorer" />
      <Link to="/"> <FiChevronLeft size={16} /> Voltar</Link>
    </Header>

    { repositorio && (
          <RepositoryInfo>
          <header>
            <img src={repositorio.owner.avatar_url} alt="Foto perfil github" />
            <div>
              <strong>{repositorio.full_name}</strong>
              <p>{repositorio.description}</p>
            </div>
          </header>
          <ul>
          <li>
              <strong>{repositorio.stargazers_count}</strong>
              <span>Stars</span>
            </li>
            <li>
              <strong>{repositorio.forks_count}</strong>
              <span>Forks</span>
            </li>
            <li>
              <strong>{repositorio.open_issues_count}</strong>
              <span>Issues Abertas</span>
            </li>
          </ul>
        </RepositoryInfo>
    )

    }

  <Issues>
    {issues.map(issue => (
    <a key={issue.id} href={issue.html_url}>
      <div>
        <strong>{issue.title}</strong>
        <p>{issue.user.login}</p>
      </div>
      <FiChevronRight size={20} />
    </a>
    ))}
  </Issues>
    </>
  )
}

export default Repositories;