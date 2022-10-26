import ResultCard from 'components/ResultCard';
import './styles.css';

const GitSearch = () => {
  return (
    <>
      <div className="git-search-container">
        <div className="container search-container">
          <form>
            <div className="form-container">
              <h1>Encontre um perfil Github</h1>
              <input
                type="text"
                className="search-input"
                placeholder="usuário Github"
                onChange={() => {}}
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
          <ResultCard title="perfil" description="seguidores" test="localidade" name="nome" />
        </div>
      </div>
    </>
  );
};

export default GitSearch;
