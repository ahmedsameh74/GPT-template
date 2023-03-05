import './About.css'
import Card from '../Card/Card';

const About = () => {
    const cards = [
        {title: 'Chatbots', desc: 'We so opinion friends me message as delight. Whole front do of plate heard oh ought.'},
        {title: 'Knowledgebase', desc: 'At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b'},
        {title: 'Education', desc: 'At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b'},
    ]
  return (
    <div className="section about">
      <div className="section-content">
        <div className="top">
          <h3>What is GPT-3?</h3>
          <p className="paragraph gray">
            We so opinion friends me message as delight. Whole front do of plate
            heard oh ought. His defective nor convinced residence own.
            Connection has put impossible own apartments boisterous. At jointure
            ladyship an insisted so humanity he. Friendly bachelor entrance to
            on by.
          </p>
        </div>
        <div className="middle">
          <div className="left">
            <h2 className="gr-color title">
              The possibilities are beyond your imagination
            </h2>
          </div>
          <div className="right">
            <p className="orange">Explore The Library</p>
          </div>
        </div>
        <div className="bottom">
          {cards.map((card, index) => (
            <Card
              className={"card"}
              key={index}
              title={card.title}
              desc={card.desc}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default About