import './styles.css';

type Props = {
  title: string;
  description: string;
};

const ResultCard = ({ title, description }: Props) => {
  return (
    <>
      <div className="img-result-container2">
        <div className="result-container2">
          <h3 className="result-title">{title}{description}</h3>
        </div>
      </div>
    </>
  );
};

export default ResultCard;
