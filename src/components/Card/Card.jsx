import './Card.css'

const Card = ({title, desc, className}) => {
  return (
    <div className={className}>
      <h3>{title}</h3>
      <p className='paragraph gray'>
        {desc}
      </p>
    </div>
  );
}

export default Card