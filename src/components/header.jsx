export const Header = (props) => {
  
  function changeBgImage() {
    setTimeout(() => {
      document.querySelector('.intro').style.backgroundImage =
        'url(./img/bgweirdcolor.jpg)';
      document.querySelector('.intro').style.ease = 'ease-in-out';
    }
      , 3000);
  }
  function changeText() {
    setTimeout(() => {
      document.querySelector('.whiteColor').style.display = 'block';
      document.querySelector('.logo2').style.display = 'block';
      // animation: fadeIn 1s;
      document.querySelector('.logo2').style.animation = 'fadeIn 1s';
    }
      , 4500);
    setTimeout(() => {
      document.querySelector('.logo2').style.animation = 'fadeOut 1s';
    }
      , 5500);
    setTimeout(() => {
      document.querySelector('.btn-shop').style.display = 'flex';
    }
      , 6300);
  }
  changeText();
  changeBgImage();


  return (
    <header id='header'>
      <div className='intro'>
        <img width="200" src="img/disc2.png" className="disc" alt="discimage" />
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-sm-8 col-sm-offset-2 intro-text'>
                <h2 className="whiteColor animate__animated animate__flipInX">
                  Throw more fun into your round
                </h2>
              </div>
            </div>
            <div className='row'>
              <div className='col-sm-8 col-sm-offset-2'>
                <img src='./img/Chip-locked-images/BIGPUTTERbagBANNER.png' alt='logo2' className=' logo2 ' />
              </div>
            </div>
            <div className='row text-center'>
              <div className='col-sm-8 col-sm-offset-2 text-center mt-5'>
                <button className='btn btn-shop btn-custom btn-lg animate__animated animate__flipInX'>
                  Buy Now  <i className='fa fa-shopping-cart'></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
