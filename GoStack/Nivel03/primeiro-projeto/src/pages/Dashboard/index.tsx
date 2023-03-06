import React, { useState, useEffect, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import {Link} from 'react-router-dom';
import {Title, Form, Repositories, Error} from './styles'

import api from '../../services/api';

const logoImg = 'https://xesque.rocketseat.dev/platform/1587379765556-attachment.svg'

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;

  }
}

const Dashboard: React.FC = () => {
const [newRepo, setNewRepo] = useState('')
const [inputError, setInputError] = useState('')
const [repositories, setRepositories] = useState<Repository[]>(() => {
  const storagedRepositories = localStorage.getItem('@GithubExplorer:repositories');

  if(storagedRepositories) {
    return JSON.parse(storagedRepositories)
  } else {
    return [];
  }
  })


useEffect(() => {
  localStorage.setItem('@GithubExplorer:repositories', JSON.stringify(repositories))
}, [repositories])
async function handleAddRepository(event:FormEvent) {
  //adição de um novo rpeositorio
  // Consumir APi do GitHub
  event.preventDefault();
  if(!newRepo) {
    setInputError('Digite o Autor/nome do repositório')
    return
  }
  try {

    const response = await api.get<Repository>(`repos/${newRepo}`);
    const repository = response.data;
    repository.full_name = repository.full_name
    setRepositories([...repositories, repository])
    setNewRepo('');
    setInputError('');
  } catch (err) {
    setInputError('Erro na busca por esse repositório')
  }
}

return (
  <>
  <img src={logoImg} alt="Logo foto name repository" />
  <Title>Explore Repositorio no Github</Title>
  <Form hasError={!!inputError} onSubmit={handleAddRepository}>
    <input 
    value={newRepo}
    onChange={e => setNewRepo(e.target.value)}
    type="text" placeholder='Digite o nome do Repositório' />
    <button type='submit'>Pesquisar</button>
  </Form>
  { inputError && <Error>{inputError}</Error> }
  <Repositories>
    {repositories.map((repository) => (
      <Link key={repository.full_name} to={`/repositories/${repository.full_name}`}>
        <img src={repository.owner.avatar_url} alt={repository.owner.login} />
      <div>
        <strong>{repository.full_name}</strong>
        <p>{repository.description}</p>
      </div>
      <FiChevronRight size={20} />
    </Link>
    ))}
  </Repositories>
  </>
)
}

export default Dashboard;