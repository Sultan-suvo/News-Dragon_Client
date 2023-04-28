import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaTwitter, FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';
import QZone from '../Qzone/QZone';
import bg from '../../../assets/bg.png'


const RightNav = () => {
    return (
        <div>
            <h4>Login With</h4>
            <Button className='mb-2 mt-4' variant="outline-primary"><FaGoogle></FaGoogle> Login With Google</Button>
            <Button variant="outline-secondary"><FaGithub></FaGithub> Login With Github</Button>

            <div className='mt-4'>
                <h4>Find Us On</h4>
                <ListGroup>

                    <ListGroup.Item><FaFacebook></FaFacebook> facebook</ListGroup.Item>

                    <ListGroup.Item><FaTwitter></FaTwitter> twitter</ListGroup.Item>

                    <ListGroup.Item><FaInstagram></FaInstagram> instagram</ListGroup.Item>

                </ListGroup>
            </div>
            <QZone></QZone>
            <div>
                <img src={bg} alt="" />
            </div>
        </div>
    );
};

export default RightNav;