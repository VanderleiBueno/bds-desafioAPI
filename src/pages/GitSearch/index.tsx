import ResultCard from 'components/ResultCard';
import { useState } from 'react';
import './styles.css';

type FormData = {
  git: string;
  test: string;
}

const GitSearch = () => {

  const [formData, setFormData] = useState<FormData>({
    git: '',
    test: ''
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData( { ...formData, [name]:value } )
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
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
              <input
                type="text"
                name="test"
                value={formData.test}
                className="search-input"
                placeholder="teste"
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
          <ResultCard
            title="perfil"
            description="seguidores"
            test="localidade"
            name="nome"
          />
        </div>
      </div>
    </>
  );
};

export default GitSearch;
