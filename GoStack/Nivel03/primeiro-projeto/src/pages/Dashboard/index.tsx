import React, { useState, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';

import {Title, Form, Repositories} from './styles'

import api from '../../services/api';

const logoImg = 'https://xesque.rocketseat.dev/platform/1587379765556-attachment.svg'
const Dashboard: React.FC = () => {
const [newRepo, setnewRepo] = useState('')
const [repositories, setRepositories] = useState<Repository[]>([])

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;

  }
}

async function handleAddRepository(event:FormEvent) {
  //adição de um novo rpeositorio
  // Consumir APi do GitHub
  event.preventDefault();
  const response = await api.get<Repository>(`repos/${newRepo}`);

  const repository = response.data;
  setRepositories([...repositories, repository])
  setnewRepo('');
  console.log(newRepo);
}

return (
  <>
  <img src={logoImg} alt="Logo Image" />
  <Title>Explore Repositorio no Github</Title>
  <Form action="" onSubmit={handleAddRepository}>
    <input 
    value={newRepo}
    onChange={e => setnewRepo(e.target.value)}
    type="text" placeholder='Digite o nome do Repositório' />
    <button type='submit'>Pesquisar</button>
  </Form>

  <Repositories>
    {repositories.map((repository) => (
      <a key={repository.full_name} href="teste">
        <img src={repository.owner.avatar_url} alt={repository.owner.login} />
      <div>
        <strong>{repository.full_name}</strong>
        <p>{repository.description}</p>
      </div>
      <FiChevronRight size={20} />
    </a>
    ))}
  </Repositories>
  </>
)
}

export default Dashboard;