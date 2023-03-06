import './Blogs.css'
import blog from '../../assets/blog01.png'
import blog2 from '../../assets/blog02.png'
import blog3 from '../../assets/blog03.png'
import blog4 from '../../assets/blog04.png'
import blog5 from '../../assets/blog05.png'



const Blogs = () => {
  return (
    <div className="section blog" id="library">
      <div className="blog-section">
        <div className="top">
          <h3 className="gr-color title">
            A lot is happening, We are blogging about it.
          </h3>
        </div>
        <div className="bottom">
          <div className="col">
            <div className="blog-card">
              <div className="blog-img">
                <img src={blog} alt="" />
              </div>
              <div className="blog-content">
                <div className="content-header">
                  <p className="date">Sep 26, 2021</p>
                  <h3>
                    GPT-3 and Open AI is the future. Let us exlore how it is?
                  </h3>
                </div>
                <p>Read Full Article</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="blog-card">
              <div className="blog-img">
                <img src={blog2} alt="" />
              </div>
              <div className="blog-content">
                <div className="content-header">
                  <p className="date">Sep 26, 2021</p>
                  <h3>
                    GPT-3 and Open AI is the future. Let us exlore how it is?
                  </h3>
                </div>

                <p>Read Full Article</p>
              </div>
            </div>
            <div className="blog-card">
              <div className="blog-img">
                <img src={blog3} alt="" />
              </div>
              <div className="blog-content">
                <div className="content-header">
                  <p className="date">Sep 26, 2021</p>
                  <h3>
                    GPT-3 and Open AI is the future. Let us exlore how it is?
                  </h3>
                </div>
                <p>Read Full Article</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="blog-card">
              <div className="blog-img">
                <img src={blog4} alt="" />
              </div>
              <div className="blog-content">
                <div className="content-header">
                  <p className="date">Sep 26, 2021</p>
                  <h3>
                    GPT-3 and Open AI is the future. Let us exlore how it is?
                  </h3>
                </div>

                <p>Read Full Article</p>
              </div>
            </div>
            <div className="blog-card">
              <div className="blog-img">
                <img src={blog5} alt="" />
              </div>
              <div className="blog-content">
                <div className="content-header">
                  <p className="date">Sep 26, 2021</p>
                  <h3>
                    GPT-3 and Open AI is the future. Let us exlore how it is?
                  </h3>
                </div>

                <p>Read Full Article</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogs