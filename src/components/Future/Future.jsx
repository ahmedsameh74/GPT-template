import Card from '../Card/Card';
import './Future.css'

const Future = () => {
    const cards = [
      {
        title: "Improving end distrusts instantly ",
        desc: "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.",
      },
      {
        title: "Become the tended active",
        desc: "Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.",
      },
      {
        title: "Message or am nothing",
        desc: "Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.",
      },
      {
        title: "Really boy law county",
        desc: "Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.",
      },
    ];

  return (
    <div className="section future" id='cases'>
      <div className="left">
        <h2 className="gr-color title">
          The Future is Now and You Just Need To Realize It. Step into Future
          Today & Make it Happen.
        </h2>
        <p className='orange'>Request Early Access to Get Started</p>
      </div>
      <div className="right">
        {cards.map((card, index) => <Card key={index} className={'rowCard'} title={card.title} desc={card.desc}/>)}
        
        
      </div>
    </div>
  );
}

export default Future