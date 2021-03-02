import './About.scss';
import showcase from '../images/Home/showcase.jpg';

const About = () => {
  return (
    <div className='About'>
      <main>
        <div>
          <h1>Biz haqimizda</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo eveniet
            saepe, totam neque illum hic?
          </p>
        </div>
      </main>
      <section>
        <div className='statistics'>
          <div>
            <i className='fal fa-globe' />
            <span className='st-number'>15</span>
            <p className='st-text'>International Teachers</p>
          </div>
          <div>
            <i className='fal fa-graduation-cap' />
            <span className='st-number'>142</span>
            <p className='st-text'>Students Enrolled</p>
          </div>
          <div>
            <i className='fal fa-lightbulb-on' />
            <span className='st-number'>4</span>
            <p className='st-text'>Available Courses</p>
          </div>
          <div>
            <i className='fal fa-user' />
            <span className='st-number'>15</span>
            <p className='st-text'>Certified Teachers</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
