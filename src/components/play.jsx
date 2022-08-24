import { Zoom, Fade } from "react-reveal"
export const Play = (props) => {
  return (
    <div id='play' className='text-center'>
      <div className="modal fade" id="exampleModal2" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content text-center">
            <div className="modal-header" data-dismiss="modal">
            <h2>More Ways to Play</h2>
              <div right>
                <img src='./img/Chip-locked-images/logoRed.png' className='smallLogo' alt="" />
              </div>
              <Zoom>
                <h4>CHIP SCORE</h4>
                <p className='text-center'>At the end of the round players check to see who has the best score by adding their bad chips and subtracting their good chips.</p>
              </Zoom>
              <hr />

              <div right>
                <img src='./img/Chip-locked-images/logoBlue.png' className='smallLogo' alt="" />
              </div>
              <Zoom>
                <h4>FRONT AND BACK 9 CHIP SCORE</h4>
                <p className='text-center'>Players add two chip scores, after the front and back 9, resetting the chips after the front 9.</p>
              </Zoom>
              <hr />

              <div right>
                <img src='./img/Chip-locked-images/logoOrange.png' className='smallLogo' alt="" />
              </div>
              <Zoom>
                <h4>ACCUMULATION CHIP SCORE</h4>
                <p className='text-center'>The chip score is added or subtracted after each hole without resetting the chips.</p>
              </Zoom>
              <hr />
              <div right>
                <img src='./img/Chip-locked-images/logoYellow.png' className='smallLogo' alt="" />
              </div>
              <Zoom>
                <h4>COLLECTION CHIP SCORE</h4>
                <p className='text-center'>All chips are only earned once, they cannot be taken from a player once earned, if more than one player earn a chip then it remains unclaimed, all rules for closest, furthest, last, first are not used, if a player gets a bogey then all their chips return to the bag | remove the BOGEY, DOUBLE, and TRIPLE+ chips from play.</p>
              </Zoom>
              <hr />

              <div right>
                <img src='./img/Chip-locked-images/logoGreen.png' className='smallLogo' alt="" />
              </div>
              <Zoom>
                <h4>BOUNTY CHIP SCORE</h4>
                <p className='text-center'>All chip are worth a different value of score decided on by players before the round starts.</p>
              </Zoom>
              <hr />

              <div right>
                <img src='./img/Chip-locked-images/logoGray.png' className='smallLogo' alt="" />
              </div>
              <Zoom>
                <h4>CHIPS AND STROKES</h4>
                <p className='text-center'>Players subtract strokes for their good chips and add strokes for their bad chips to their total strokes at the end of the round | remove the STROKE chip from play.</p>
              </Zoom>
              <hr />
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row section-title'>
          <div className='col-xs-10 col-md-8 col-md-offset-2 col-xs-offset-1 col-sm-10'>
            <div className="border shadow">
              <Fade left>
                <img src='./img/Chip-locked-images/Chip-locked_How_To_Play.png' className='play transition' alt="" />
                <Fade right>
                  <button className="ways" data-toggle="modal" data-target="#exampleModal2">
                    More ways to play
                  </button>
                </Fade>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
