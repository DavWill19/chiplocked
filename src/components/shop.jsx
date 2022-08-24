import Swing from 'react-reveal/Swing';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import React from 'react';
export const Shop = (props) => {
  return (
    <div id='shop' className='text-center'>
      <Zoom>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-12'>
              <a className="amazon" href="https://www.bonfire.com/store/chip-locked/">
                <img src='./img/Chip-locked-images/greenAmazon.png' alt='amazonGreen' className='amazonGreen' />
              </a>
            </div>
          </div>
        </div>
      </Zoom>
      <div className='container border'>
        <div className="">
          <div className="row">
            <div className='col-md-10 col-md-offset-1'>
              <Fade left>
                <img src='./img/Chip-locked-images/merch.png' alt='merch' className='merch' />
              </Fade>
            </div>
          </div>
        </div>
        <div className="">
          <div className='row'>
            {props.data
              ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className='col-xs-6 col-md-4 col-lg-3'>
                  <a href={`${d.link}`}>
                    <Swing>
                      <img src={`${d.url}`} alt='shirt' className='shirt shake' />
                    </Swing>
                  </a>
                  <h3>{d.description}</h3>
                  <h3 className="style">Available in 4 styles</h3>
                  <p>{d.text}</p>
                </div>
              ))
              : 'Loading...'}
          </div>
          <div className='row mt-5'>
            <div className='col-xs-12'>
              <Fade right>
                <a className="bonfireText transition" href="https://www.bonfire.com/store/chip-locked/">
                  View more styles here
                </a>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
