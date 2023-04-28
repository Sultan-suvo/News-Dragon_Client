import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import Marquee from "react-fast-marquee";
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import { AuthContext } from '../../../Providers/AuthProviders';




const Header = () => {
    
    return (
        <Container className='mt-4'>
            <div className="text-center">
                <img src={logo} alt="" />
                <p className='text-secondary'><small>Journalism Without Fear or Favour</small></p>
                <p>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
            <div className='d-flex'>
                <Button variant="danger">Latest</Button>
                <Marquee speed={50} className='text-danger'>
                    <p><small>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as... </small></p>
                </Marquee>
            </div>
        </Container>
    );
};

export default Header;