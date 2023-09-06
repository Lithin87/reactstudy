import AuthContext from '../Contexts/app-context';
import { useContext } from 'react';

function VMImage() {

  const ctx = useContext(AuthContext);

  function containsNumbers(input) {
    const regex = /\d/; 
    return regex.test(input);
  }
  return (
    <div>
      <h2>VM STATUS : </h2>
    
      <img src="https://i.ytimg.com/vi/1FpMe8na64A/maxresdefault.jpg" alt="VM" className='small-image' style={{ paddingRight: '20px' }}></img> <span>     </span>
      <img src="https://clipground.com/images/on-off-switch-icon-png-6.png" alt="VM" className='small-image' hidden={ctx.data !== "off"}></img>
      <img src="https://previews.123rf.com/images/grublee/grublee0909/grublee090900101/5462563-glossy-round-on-off-button-isolated-over-white-background.jpg" alt="VM" 
       width="35" height="25" className='small-image' hidden={!containsNumbers(ctx.data)}></img>
      
    </div>
  );
}

export default VMImage;