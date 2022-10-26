import './styles.css';

type Props = {
  title: string;
  description: string;
  test: string;
  name: string;
};

const ResultCard = ({ title, description, test, name }: Props) => {
  return (
    <>
      <div className="img-result-container2">
        <div className="img-container2">
          <h1>IMAGEM</h1>
        </div>
        <div className="result-container2">
          <h1>Informações</h1>
          <h3 className="result-title">{title}</h3>
          <h3 className="result-title">{description}</h3>
          <h3 className="result-title">{test}</h3>
          <h3 className="result-title">{name}</h3>
        </div>
      </div>
    </>
  );
};

export default ResultCard;
