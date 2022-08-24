import Fade from 'react-reveal/Fade';
export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <Fade bottom>
            <img src="img/Chip-locked-images/STICKERlogoV2.png" className="img-responsive" alt="" />
            </Fade>
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <Fade right>
              <h2>About ChipLocked</h2>
              </Fade>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
