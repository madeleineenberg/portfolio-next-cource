import BaseLayout from '@/components/shared/BaseLayout';
import { Container, Row, Col } from 'reactstrap';
import Typed from 'react-typed';
import { useGetUser } from '@/actions/user';

const roles = ['Developer', 'Film photographer', 'Tech Lover'];

export default function Home() {
  const { data, loading } = useGetUser();

  return (
    <BaseLayout className='cover' user={data} loading={loading}>
      <div className='main-section'>
        <div className='background-image'>
          <img src='/images/ros_spegel.jpg' />
        </div>
        <Container>
          <Row>
            <Col md='6'>
              <div className='hero-section'>
                <div className={`flipper`}>
                  <div className='back'>
                    <div className='hero-section-content'>
                      <h2> Frontend Developer </h2>
                      <div className='hero-section-content-intro'>
                        Have a look at my portfolio and job history.
                      </div>
                    </div>
                    <img
                      className='image portrait'
                      src='/images/web_resized_20210528_112952290.jpg'
                    />
                    <div className='shadow-custom'>
                      <div className='shadow-inner'> </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col md='6' className='hero-welcome-wrapper'>
              <img
                className='blob'
                src='/images/image-from-rawpixel-id-2024486-original.png'
              />
              <div className='hero-welcome-text'>
                <h1>
                  Welcome to the portfolio website of Madeleine Enberg. Get
                  informed, collaborate and discover projects I've worked with
                  through the years!
                </h1>
              </div>
              <Typed
                loop
                typeSpeed={70}
                backSpeed={70}
                strings={roles}
                backDelay={1000}
                loopCount={0}
                showCursor
                className='self-typed'
                cursorChar='|'
              />
              <div className='hero-welcome-bio'>
                <h1>Let's take a look on my work.</h1>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </BaseLayout>
  );
}
