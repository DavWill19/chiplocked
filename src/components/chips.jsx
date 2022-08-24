import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import React from 'react';
export const Chips = (props) => {
  const [image, setImage] = React.useState('');
  const [title, setTitle] = React.useState('');
  const [text, setText] = React.useState('');

  React.useEffect(() => {
    console.log(image, title, text);
  }
    , [image, title, text]);

  return (
    <div className='text-center'>
      <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content text-center">
            <div className="modal-header" data-dismiss="modal">
              <img src={image} alt='chipLarge' className='chipLarge animate__animated animate__flipInY' data-dismiss="modal" />
              <h2 className="modal-title mt-3" id="exampleModalLabel">{title}</h2>
              <h3>{text}</h3>
            </div>
          </div>
        </div>
      </div>
      <div id='chips' className='text-center'>
        <div className='container'>
          <div className='section-title'>
            <div className='row'>
              <div className='col-xs-8 col-xs-offset-2 text-center'>
                <Fade bottom>
                  <img src='./img/Chip-locked-images/LOGOcircle2.png' alt='logoCircle' className='logoCircle' /><h2> What is Chip-locked?</h2>
                </Fade>
                <hr />
                <Fade bottom>
                  <p className='slogan'>Chip-Locked is a game played alongside a round of disc golf. Good throws are rewarded with good chips while a bad throw could get you a bad chip but don't worry, the next hole could change everything!</p>
                </Fade>
              </div>
            </div>
            <div id="chiplogo" />
            <div className='border p-3'>
              <div className='row'>
                <div className='col-xs-12 col-sm-6 col-sm-offset-3 col-md-6 col-lg-6'>
                  <Fade>
                    <img src='./img/Chip-locked-images/BIGPUTTERbagBANNER.png' alt='logo' className='logoLarge' />
                    {/* <h2 className='chipFontBig'>THE CHIPS</h2> */}
                    <h4 className="clickChip">Click each chip to learn more</h4>
                  </Fade>
                </div>
              </div>
              <div className='row justify-content-around'>
                <div className='col-xs-6 sideBorder'>
                  <h3 className='chipFont'>THE GOOD CHIPS</h3>
                  <hr/>
                  <div className=''>
                    <div className='row justify-content-around'>
                      {/* good chips */}
                      <div className='col-xs-12 col-sm-6 col-md-4 hover'>
                        <Flip right>
                          <img data-toggle="modal" data-target="#exampleModal" onClick={() => {
                            setImage('./img/Chip-locked-images/BirdieChip.jpg'); setTitle('Birdie Chip'); setText(`Earned with the closest made putt for a 1 under par on a hole.`)
                          }}
                            img src='./img/Chip-locked-images/BirdieChip.jpg' alt='chip' className='chip transition' />
                        </Flip>
                        <div className='service-desc'>
                          <h4>Birdie</h4>
                        </div>
                      </div>
                      <div className='col-xs-12 col-sm-6 col-md-4 hover'>
                        <Flip right>
                          <img data-toggle="modal" data-target="#exampleModal" onClick={() => {
                            setImage('./img/Chip-locked-images/EagleChip.jpg'); setTitle('Eagle Chip'); setText(`Earned with the closest made putt for a 2 under par on a hole.`)
                          }}
                            src='./img/Chip-locked-images/EagleChip.jpg' alt='chip' className='chip transition' />
                        </Flip>
                        <div className='service-desc'>
                          <h4>Eagle</h4>
                        </div>
                      </div>
                      <div className='col-xs-12 col-sm-6 col-md-4 hover'>
                        <Flip right>
                          <img data-toggle="modal" data-target="#exampleModal" onClick={() => {
                            setImage('./img/Chip-locked-images/AceChip.jpg'); setTitle('Ace Chip'); setText('Earned with the first ace on a hole | Alternate: Ace Run - first to hit metal from the tee box')
                          }} src='./img/Chip-locked-images/AceChip.jpg' alt='chip' className='chip transition' />
                        </Flip>
                        <div className='service-desc'>
                          <h4>Ace</h4>
                        </div>
                      </div>
                      <div className='col-xs-12 col-sm-6 col-md-4 hover'>
                        <Flip right>
                          <img data-toggle="modal" data-target="#exampleModal" onClick={() => {
                            setImage('./img/Chip-locked-images/ThrowInChip.jpg'); setTitle('Throw In Chip'); setText(`Earned with the closest made throw in from outside circle 2 on a hole .`)
                          }}
                            src='./img/Chip-locked-images/ThrowInChip.jpg' alt='chip' className='chip transition' />
                        </Flip>
                        <div className='service-desc'>
                          <h4>Throw-In</h4>
                        </div>
                      </div>
                      <div className='col-xs-12 col-sm-6 col-md-4 hover'>
                        <Flip right>
                          <img data-toggle="modal" data-target="#exampleModal" onClick={() => {
                            setImage('./img/Chip-locked-images/BigPutterChip.jpg'); setTitle('Big Putter Chip'); setText(`Earned with the closest made putt from circle 2 for par or better.`)
                          }}
                            src='./img/Chip-locked-images/BigPutterChip.jpg' alt='chip' className='chip transition' />
                        </Flip>
                        <div className='service-desc'>
                          <h4>Big-Putter</h4>
                        </div>
                      </div>
                      <div className='col-xs-12 col-sm-6 col-md-4 hover'>
                        <Flip right>
                          <img data-toggle="modal" data-target="#exampleModal" onClick={() => {
                            setImage('./img/Chip-locked-images/DropInChip.jpg'); setTitle('Drop In Chip'); setText(`Earned by being the only player to place their disc in the basket without throwing it | if Earned on a birdie or eagle putt, it must be taken with a putt of equal or better score on subsequent holes.`)
                          }}
                            src='./img/Chip-locked-images/DropInChip.jpg' alt='chip' className='chip transition' />
                        </Flip>
                        <div className='service-desc'>
                          <h4>Drop-In</h4>
                        </div>
                      </div>
                      <div className='col-xs-12 col-sm-6 col-md-4 hover'>
                        <Flip right>
                          <img data-toggle="modal" data-target="#exampleModal" onClick={() => {
                            setImage('./img/Chip-locked-images/ScrambleChip.jpg'); setTitle('Scramble Chip'); setText(`Earned with closest made putt to make par or better from off the fairway and outside circle 2 with only 2 throws left for par.`)
                          }}
                            src='./img/Chip-locked-images/ScrambleChip.jpg' alt='chip' className='chip transition' />
                        </Flip>
                        <div className='service-desc'>
                          <h4>Scramble</h4>
                        </div>
                      </div>
                      <div className='col-xs-12 col-sm-6 col-md-4 hover'>
                        <Flip right>
                          <img data-toggle="modal" data-target="#exampleModal" onClick={() => {
                            setImage('./img/Chip-locked-images/RescueRangerChip.jpg'); setTitle('Rescue Ranger Chip'); setText(`Earned by finding someone else's disc after they have looked for a "long time", 3 minutes or longer, or they ask for help or by giving a player a disc they left on the previous hole once they are on the next hole's tee box or by finding a disc that doesn't belong to your card.`)
                          }}
                            src='./img/Chip-locked-images/RescueRangerChip.jpg' alt='chip' className='chip transition' />
                        </Flip>
                        <div className='service-desc'>
                          <h4>Rescued-Ranger</h4>
                        </div>
                      </div>
                      <div className='col-xs-12 col-sm-6 col-md-4 hover'>
                        <Flip right>
                          <img data-toggle="modal" data-target="#exampleModal" onClick={() => {
                            setImage('./img/Chip-locked-images/PuredChip.jpg'); setTitle('Pured Chip'); setText(`Earned with the closest drive that touches nothing but air and the fairway while finishing past the defined gap or tunnel | players should decide which holes the PURED chip is up for grabs on and what are the acceptable lines before the hole is played.`)
                          }}
                            src='./img/Chip-locked-images/PuredChip.jpg' alt='chip' className='chip transition' />
                        </Flip>
                        <div className='service-desc'>
                          <h4>Pured</h4>
                        </div>
                      </div>
                      <div className='col-xs-12 col-sm-6 col-md-4 col-md-offset-4 hover'>
                        <Flip right>
                          <img data-toggle="modal" data-target="#exampleModal" onClick={() => {
                            setImage('./img/Chip-locked-images/StrokeChip.jpg'); setTitle('Stroke Chip'); setText(`Earned by having the lowest strokes at the end of the round.`)
                          }}
                            src='./img/Chip-locked-images/StrokeChip.jpg' alt='chip' className='chip transition' />
                        </Flip>
                        <div className='service-desc'>
                          <h4>Stroke</h4>
                        </div>
                      </div>
                      <div className='col-xs-12 col-sm-6 col-md-4 hover'>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-xs-6'>
                  <h3 className='chipFont'>THE BAD CHIPS</h3>
                  <hr />
                  <div>
                    <div className='row'>
                      <div className='row'>
                        {/* bad chips */}
                        <div className='col-xs-12 col-sm-6 col-md-4 hover'>
                          <Flip right>
                            <img data-toggle="modal" data-target="#exampleModal" onClick={() => {
                              setImage('./img/Chip-locked-images/BogeyChip.jpg'); setTitle('Bogey Chip'); setText(`Earned with the farthest made putt for 1 over par on a hole.`)
                            }}
                              src='./img/Chip-locked-images/BogeyChip.jpg' alt='chip' className='chip transition' />
                          </Flip>
                          <div className='service-desc'>
                            <h4>Bogey</h4>
                          </div>
                        </div>
                        <div className='col-xs-12 col-sm-6 col-md-4 hover'>
                          <Flip right>
                            <img data-toggle="modal" data-target="#exampleModal" onClick={() => {
                              setImage('./img/Chip-locked-images/DoubleChip.jpg'); setTitle('Double Chip'); setText(`Earned with the farthest made putt for 2 over par on a hole.`)
                            }}
                              src='./img/Chip-locked-images/DoubleChip.jpg' alt='chip' className='chip transition' />
                          </Flip>
                          <div className='service-desc'>
                            <h4>Double</h4>
                          </div>
                        </div>
                        <div className='col-xs-12 col-sm-6 col-md-4 hover'>
                          <Flip right>
                            <img data-toggle="modal" data-target="#exampleModal" onClick={() => {
                              setImage('./img/Chip-locked-images/Triple+Chip.jpg'); setTitle('Triple Chip'); setText(`Earned with the farthest made putt for 3 over par or more on a hole.`)
                            }}
                              src='./img/Chip-locked-images/Triple+Chip.jpg' alt='chip' className='chip transition' />
                          </Flip>
                          <div className='service-desc'>
                            <h4>Triple+</h4>
                          </div>
                        </div>
                        <div className='col-xs-12 col-sm-6 col-md-4 hover'>
                          <Flip right>
                            <img data-toggle="modal" data-target="#exampleModal" onClick={() => {
                              setImage('./img/Chip-locked-images/PenaltyStrokeChip.jpg'); setTitle('Penalty Stroke Chip'); setText(`Earned with the last throw that lands out of bounds, in the water, in a hazard, or misses a mandatory.`)
                            }}
                              src='./img/Chip-locked-images/PenaltyStrokeChip.jpg' alt='chip' className='chip transition' />
                          </Flip>
                          <div className='service-desc'>
                            <h4>Penalty</h4>
                          </div>
                        </div>
                        <div className='col-xs-12 col-sm-6 col-md-4 hover'>
                          <Flip right>
                            <img data-toggle="modal" data-target="#exampleModal" onClick={() => {
                              setImage('./img/Chip-locked-images/TreeChip.jpg'); setTitle('Tree Chip'); setText(`Earned with last drive that gets a tree kick before hitting the ground | if a normal play of the hole is to throw through the top of the trees or use the trees on purpose then the tree chip is not in play for that hole.`)
                            }}
                              src='./img/Chip-locked-images/TreeChip.jpg' alt='chip' className='chip transition' />
                          </Flip>
                          <div className='service-desc'>
                            <h4>Tree</h4>
                          </div>
                        </div>
                        <div className='col-xs-12 col-sm-6 col-md-4 hover'>
                          <Flip right>
                            <img data-toggle="modal" data-target="#exampleModal" onClick={() => {
                              setImage('./img/Chip-locked-images/DethronedChip.jpg'); setTitle('Dethroned Chip'); setText(`Earned by going from first on the tee to last on the next tee | if there is no next tee the player still receives the chip as if there was.`)
                            }}
                              src='./img/Chip-locked-images/DethronedChip.jpg' alt='chip' className='chip transition' />
                          </Flip>
                          <div className='service-desc'>
                            <h4>Dethroned</h4>
                          </div>
                        </div>
                        <div className='col-xs-12 col-sm-6 col-md-4 col-md-offset-2 hover'>
                          <Flip right>
                            <img data-toggle="modal" data-target="#exampleModal" onClick={() => {
                              setImage('./img/Chip-locked-images/AirBallChip.jpg'); setTitle('Air Ball Chip'); setText(`Earned with the closest putt missed from inside circle 1 that doesn't hit any metal.`)
                            }}
                              src='./img/Chip-locked-images/AirBallChip.jpg' alt='chip' className='chip transition' />
                          </Flip>
                          <div className='service-desc'>
                            <h4>AirBall</h4>
                          </div>
                        </div>
                        <div className='row'>
                          <div className='col-xs-12 col-sm-6 col-md-4 hover'>
                            <Flip right>
                              <img data-toggle="modal" data-target="#exampleModal" onClick={() => {
                                setImage('./img/Chip-locked-images/BonusChip.jpg'); setTitle('Bonus Chip'); setText(`players decide on a rule or check @chiplocked on Instagram for current suggested bonus chip rule.`)
                              }}
                                src='./img/Chip-locked-images/BonusChip.jpg' alt='chip' className='chip transition' />
                            </Flip>
                            <div className='service-desc'>
                              <h4>Bonus</h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
