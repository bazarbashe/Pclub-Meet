import React from 'react';
import Button from '@material-ui/core/Button'
import '../Home/Home.css'
import { useHistory } from 'react-router-dom';
import './Meetend.css'
import Logo from '../HeaderLogo/HeaderLogo';


const Meetend = () => {
    const history = useHistory();
    const handleback = () => {
        history.push('/');
    }
    return (
        <div>
          
            <Logo />
            <div className="meetend">
                <p>You left the meeting</p>
                <Button className="btn" onClick={handleback}>Back To Home screen</Button>
            </div>
        </div>
    );
}

export default Meetend;