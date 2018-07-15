import React from 'react';

const charlesKeith = 'https://firebasestorage.googleapis.com/v0/b/charles-keith-production.appspot.com/o/site-images%2Fcharles_keith.png?alt=media&token=967ab0b9-d50c-43f5-9262-1cb0ac87e807';

const AboutModal = (props) => (
  <div className="aboutModalBackground">

    <div className="aboutModal__title">
      About the Author
    </div>

    <div className="aboutModal-container">
      <div className="aboutModal">

        <div className="aboutModal__text">
          <img className="aboutModal__image" src={charlesKeith} alt="Charles Keith" />
          <p>Charles Keith resides in North Carolina. He is the Writer in Residence At Bare Theatre which is based in and
            around Raleigh. He has attended North Carolina State University and the American University of Paris
          </p><br/>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias dignissimos esse exercitationem facere laudantium natus nostrum nulla quos recusandae veritatis.
          </p><br/>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci, error, et in incidunt, laboriosam modi nobis non odit perferendis qui voluptas? Atque consequatur corporis cupiditate, deserunt doloremque ea excepturi facere ipsa labore laborum omnis perspiciatis provident quis quos ratione saepe, sint ut vitae voluptas, voluptatibus? Dolorem dolorum facere minima numquam!
          </p>

        </div>
        <button className="aboutModal__exit"
                onClick={props.handleAboutModal}>
          x
        </button>
      </div>
    </div>
  </div>

);

export default AboutModal;