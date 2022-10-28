import axios from 'axios';
import ResultCard from 'components/ResultCard';
import { useState } from 'react';
import './styles.css';

type FormData = {
  git: string;
};

type GitData = {
  avatar_url: string;
  url: string;
  name: string;
  location: string;
  followers: string;
};

const GitSearch = () => {
  const [gitdata, setGitData] = useState<GitData>();

  const [formData, setFormData] = useState<FormData>({
    git: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    axios
      .get(`https://api.github.com/users/${formData.git}`)
      .then((response) => {
        setGitData(response.data);
      })
      .catch((error) => {
        setGitData(undefined);
      });
  };

  return (
    <>
      <div className="git-search-container">
        <div className="container search-container">
          <form onSubmit={handleSubmit}>
            <div className="form-container">
              <h1>Encontre um perfil Github</h1>
              <input
                type="text"
                name="git"
                value={formData.git}
                className="search-input"
                placeholder="usuário Github"
                onChange={handleChange}
              />
              <button type="submit" className="btn btn-primary search-button">
                Encontrar
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="img-result-container">
        <div className="container result-container">
          {gitdata && (
            <>
              <div className="box-container">
                <div className="img-container">
                  <img src={gitdata.avatar_url} alt="Avatar" />
                </div>
                <div>
                  <div className="info-container">
                    <h3>Informações</h3>
                  </div>
                  <ResultCard title="Perfil: " description={gitdata.url} />
                  <ResultCard
                    title="Seguidores: "
                    description={gitdata.followers}
                  />
                  <ResultCard
                    title="Localidade: "
                    description={gitdata.location}
                  />
                  <ResultCard title="Nome: " description={gitdata.name} />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default GitSearch;
