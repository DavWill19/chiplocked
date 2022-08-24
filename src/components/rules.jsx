import { Fade } from "react-reveal"
export const Rules = (props) => {
  return (
    <div id='rules'>
      <div className='container'>
        <div className='section-title'>
          <div className='row'>
            <div className='col-xs-8 col-xs-offset-2 text-center'>
              <Fade bottom>
              <img src='./img/Chip-locked-images/LOGOcircle2.png' alt='logoCircle' className='logoCircle' />
                <h2> What are the rules?</h2>
              </Fade>
              <hr />
              <Fade bottom>
                <p className='slogan'>During the round players earn chips by meeting their requirements, if a player already has earned a chip they give it up to the most recent player to meet it's requirements.

                  It helps to stick to the traditional order of play that furthest out goes first.

                  If unsure about what circle you're in or if a shot meets certain requirements, ask the other players if they agree or measure before throwing it.

                  As chips get traded back and forth between players, the players earning the good chips are responsible for collecting that chip, and the players not earning the bad chips are responsible for giving that chip to the player that earned it.

                  Remember that you're playing for fun and that the benefit of the doubt should be given to the thrower but you can flip a disc to make a determination when there's a dispute.</p>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}