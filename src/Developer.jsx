import React from 'react'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Alert from 'react-bootstrap/Alert';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import { IoLogoFacebook } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";

export const Developer = () => {
  return (
    <>
    <Container fluid className='mt-2'>
        <Alert className='text-light bg-dark'>
            <Alert.Heading>I AM THE NIGHT</Alert.Heading>
                <p>
                    Whenever you need help, just shine my light in the sky and i will be there soon.
                </p>
                <hr />
                <p className="mb-0">
                    &ldquo; It is not who i am underneath, but what i do defines me. &ldquo;
                </p>
            </Alert>
    </Container>
    <Container className='bg-dark p-2 mt-2 border rounded mx-2 text-light' fluid>
        <Row className='p-2'>
            <Col md={3} className='d-flex align-items-center justify-content-center'>
                <Image src="https://hips.hearstapps.com/hmg-prod/images/isaac_newton_1689_painting_sir_godfrey_kneller_public_domain_via_wikimedia_commons.jpg" roundedCircle height="250"/>
            </Col>
            <Col md={8}>
                <p>I am an ordinary guy from a distinguished bloodline known as the "Altan Urag." My relatives and father always told me, "Remember who your ancestors are; you were born to accomplish something amazing," when I was a little kid. Deep down, I have always known that achieving greatness depends on what you focus on, not on your origin. So, every male must contribute to creating a peaceful and happy environment for our children and future generations.
                </p>
            </Col>
        </Row>
        <Row>
            <Stack gap={3}>
                <div className="p-2 d-grid gap-2">
                    <Button variant="outline-success" size="lg">
                        <a href="https://www.github.com/ronaldo" className='text-decoration-none'>Get Batman's Github <Badge className='bg-secondary'><FaGithub size={25}/></Badge></a>
                    </Button>
                </div>
                <div className="p-2 d-grid gap-2">
                    <Button variant="outline-primary" size="lg">
                        <a href="https://www.facebook.com/ronaldo" className='text-decoration-none'>Get Batman's Facebook <Badge className='bg-primary'><IoLogoFacebook size={25}/></Badge></a>
                    </Button>
                </div>
                <div className="p-2 d-grid gap-2">
                    <Button variant="outline-danger" size="lg">
                        <a href="https://www.instagram.com/ronaldo" className='text-decoration-none'>Get Batman's Instagram <Badge><LuInstagram size={25}/></Badge></a>
                    </Button>
                </div>
            </Stack>
        </Row>
  </Container>
  </>
  )
}
