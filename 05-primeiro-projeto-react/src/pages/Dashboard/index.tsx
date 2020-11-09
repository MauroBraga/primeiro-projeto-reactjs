import React from 'react';
import {FiChevronRight} from 'react-icons/fi'

import logoImg from '../../assets/logo.svg';
import {Title, Form, Repositories} from './styles';



const Dashboard: React.FC = () => {
  return (
    <>
        <img src={logoImg} alt="GitHub Explorer"/>
        <Title>Explore repositórios no Github</Title>
        <Form>
            <input placeholder="Digite o nome do repositório"/>
            <button type="submit">Pesquisar</button>
        </Form>

        <Repositories>
            <a href= "teste">
                <img src="https://avatars0.githubusercontent.com/u/7256202?s=460&u=b1cca5dcfbc15dd03f216417c64d7432002515ea&v=4" alt="Mauro Braga"></img>

                <div>
                    <strong>/spring</strong>
                    <p>No description, website, or topics provided</p>
                </div>

                <FiChevronRight size={20}/>

            </a>

            <a href= "teste">
                <img src="https://avatars0.githubusercontent.com/u/7256202?s=460&u=b1cca5dcfbc15dd03f216417c64d7432002515ea&v=4" alt="Mauro Braga"></img>

                <div>
                    <strong>/spring</strong>
                    <p>No description, website, or topics provided</p>
                </div>

                <FiChevronRight size={20}/>

            </a>

            <a href= "teste">
                <img src="https://avatars0.githubusercontent.com/u/7256202?s=460&u=b1cca5dcfbc15dd03f216417c64d7432002515ea&v=4" alt="Mauro Braga"></img>

                <div>
                    <strong>/spring</strong>
                    <p>No description, website, or topics provided</p>
                </div>

                <FiChevronRight size={20}/>

            </a>
        </Repositories>

    </>
  )
}
export default Dashboard
