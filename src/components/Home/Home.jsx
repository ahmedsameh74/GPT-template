import './Home.css'
import img from '../../assets/people.png'
import Ilu from '../../assets1/illustration.svg'

const Home = () => {
  return (
    <div className="Home section" id='home'>
      <div className="left">
        <h3 className="gr-color">
          Let’s Build Something amazing with GPT-3 OpenAI
        </h3>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <div className="input">
          <input type="text" placeholder="Enter your text here" />
          <button>Get Started</button>
        </div>
        <div className="imgs">
          <img src={img} alt="" />
          <span>1,600 people requested access a visit in last 24 hours</span>
        </div>
      </div>
      <div className="right">
        <img src={Ilu} alt="" />
      </div>
    </div>
  );
}

export default Home