

const About = () => {
  return (
    <div className="about">
      <div className="about__title">
        <h2>Sobre mí</h2>
      </div>
      <section className="about__info">
        <article className="about__info--desc">
          <div className="about-img">
            <div className="about-img__pic"></div>
            <div className="about-img__circles">
              <div className="about-img__circles--1"></div>
              <div className="about-img__circles--2"></div>
              <div className="about-img__circles--3"></div>
            </div>
          </div>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit expedita voluptatum rem beatae dolor excepturi? Voluptatem hic placeat quisquam dolorem sint pariatur consequatur a, incidunt rerum voluptas maiores voluptatum dolore!</p>
        </article>
        <div className="about__info--skills">
          <div>
            <h3>Tecnologías</h3>
            <div>blablabla</div>
          </div>
          <div>
            <h3>Software</h3>
            <div>blablabla</div>
          </div>
          <div>
            <h3>Habilidades</h3>
            <div>blablabla</div>
          </div>
          <div>
            <h3>Idiomas</h3>
            <div className="languages">
              <div className="languages__list">
                <div className="languages__list--text">
                  <p>Español</p>
                  <p>Inglés</p>
                </div>
                <div className="languages__list--bullets">
                  <p>● ● ● ● ●</p>
                  <p>● ● ● ● <span>●</span></p>
                </div>
              </div>
              <div className="languages__list">
                <div className="languages__list--text">
                  <p>Catalán</p>
                  <p>Francés</p>
                </div>
                <div className="languages__list--bullets">
                  <p>● ● ● ● <span>●</span></p>
                  <p>● ● ● <span>● ●</span></p>
                </div>
              </div>
              <div className="languages__list">
                <div className="languages__list--text">
                  <p>Chino</p>  
                </div>
                <div className="languages__list--bullets">
                  <p>● <span>● ● ● ●</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="about__arrows">
        <i className="fa-solid fa-chevron-right arrow-right"></i>
        <i className="fa-solid fa-chevron-left arrow-left"></i>
      </div>
    </div>
  )
}

export default About