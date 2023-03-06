import React from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom';

import { Header, RepositoryInfo, Issues } from './styles';

const logoImg = 'https://xesque.rocketseat.dev/platform/1587379765556-attachment.svg'


interface RepositoryParams {
  repository: string;
}

const Repositories: React.FC = () => {
  const repository = useLocation().pathname.replace('/repositories', '');
  return (
    <>
    <Header>
      <img src={logoImg} alt="Logo GitHub Explorer" />
      <Link to="/"> <FiChevronLeft size={16} /> Voltar</Link>
    </Header>

    <RepositoryInfo>
      <header>
        <img src="" alt="Foto perfil github" />
        <div>
          <strong></strong>
          <p></p>
        </div>
      </header>
      <ul>
      <li>
          <strong>12</strong>
          <span>Stars</span>
        </li>
        <li>
          <strong>4</strong>
          <span>Forks</span>
        </li>
        <li>
          <strong>3</strong>
          <span>Issues Abertas</span>
        </li>
      </ul>
    </RepositoryInfo>
    <Issues>
    <Link to='asas'>
      <div>
        <strong>zca</strong>
        <p>asdsa</p>
      </div>
      <FiChevronRight size={20} />
    </Link>
    </Issues>
    </>
  )
}

export default Repositories;