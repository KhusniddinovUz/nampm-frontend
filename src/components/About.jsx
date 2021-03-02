import './About.scss';

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
      <section className='mb-3'>
        <div className='statistics'>
          <div>
            <i className='fal fa-globe' />
            <span>15</span>
            <p>International Teachers</p>
          </div>
          <div>
            <i className='fal fa-graduation-cap' />
            <span>142</span>
            <p>Students Enrolled</p>
          </div>
          <div>
            <i className='fal fa-lightbulb-on' />
            <span>5</span>
            <p>Available Courses</p>
          </div>
          <div>
            <i className='fal fa-user' />
            <span>15</span>
            <p>Certified Teachers</p>
          </div>
        </div>
      </section>
      <div className='border'></div>
      <section className='categories'>
        <h1 className='text-center mt-3 mb-3'>COURSES CATEGORIES</h1>
        <p className='text-center mb-5 w-50 mx-auto'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate ea
          voluptas dignissimos eveniet tenetur corporis nemo ab, molestias cum
          odit!
        </p>
        <div className='statistics'>
          <div>
            <i className='fal fa-flask' />
            <span>Science</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              corporis est quod architecto amet atque nam ipsum nostrum sed
              enim, incidunt perspiciatis dolore nesciunt, nemo sequi illum
              exercitationem, repellendus illo.
            </p>
          </div>
          <div>
            <i className='fal fa-lightbulb-on' />
            <span>Engineering</span>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi
              quia rem repellendus quisquam, veritatis quidem maxime doloribus
              assumenda perferendis natus aliquam mollitia consequatur harum
              amet earum blanditiis nemo provident sunt?
            </p>
          </div>
          <div>
            <i className='fal fa-network-wired' />
            <span>Technology</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus numquam hic illum consequatur harum fugiat commodi
              delectus debitis blanditiis ducimus magni, aliquid asperiores
              velit nemo error ullam fugit animi placeat!
            </p>
          </div>
          <div>
            <i className='fal fa-function' />
            <span>Mathematics</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium excepturi, harum dignissimos, consequuntur ab quod
              molestias culpa, et ullam nemo totam voluptas? Unde animi ullam
              facilis quam numquam voluptates officiis?
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
