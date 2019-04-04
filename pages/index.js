import { Grid, Col, Row } from 'react-styled-flexboxgrid';
import styled, { createGlobalStyle } from 'styled-components';
import Head from 'next/head';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #f4f9ff;
    font-family: 'Open Sans', sans-serif;
  }
`;

const CircularImage = styled.img`
  width: 90px;
  height: auto;
  font-size: 1rem;
  border-radius: 500rem;
  display: inline-block;
  vertical-align: middle;
  margin-right: 25px;
  margin-bottom: 5px;
`;

const TitleCol = styled(Col)`
  padding-top: 21px;
`;

const H1 = styled.span`
  margin: 0em;
  font-size: 1.7rem;
  font-weight: 700;
  letter-spacing: 2px;
}`;

const Button = styled.button`
  width: 100%;
  margin-bottom: 0.75em;
  margin-right: 0.25em;
  cursor: pointer;
  display: inline-block;
  min-height: 1em;
  outline: 0;
  border: none;
  vertical-align: baseline;
  padding: .78571429em 1.5em .78571429em;
  line-height: 1em;
  font-style: normal;
  text-align: center;
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;
  box-shadow: 0 0 0 2px #0074eb inset!important;
  color: #0074eb!important;
  background: transparent none!important;
  font-weight: bold;
`;

const Divider = styled.div`
  margin: 1rem 0;
  line-height: 1;
  height: 0;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: .05em;
  color: rgba(0,0,0,.85);
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  font-size: 1rem;
  border-top: 2px solid #cde1fa;
  border-bottom: 2px solid rgba(255,255,255,.1);
`;

const BackButton = styled.button`
  margin-bottom: 0.75em;
  margin-right: 0.25em;
  cursor: pointer;
  display: inline-block;
  min-height: 1em;
  outline: 0;
  border: none;
  vertical-align: baseline;
  padding: .78571429em 1.5em .78571429em;
  line-height: 1em;
  font-style: normal;
  text-align: center;
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;
  box-shadow: 0 0 0 2px #0074eb inset!important;
  color: #fff !important;
  background: #0074eb !important;
  font-weight: bold;
  border-radius: 5px;
`;

const BlueButton = styled.button`
  margin-bottom: 0.75em;
  margin-right: 0.25em;
  cursor: pointer;
  display: inline-block;
  min-height: 1em;
  outline: 0;
  border: none;
  vertical-align: baseline;
  padding: .78571429em 1.5em .78571429em;
  line-height: 1em;
  font-style: normal;
  text-align: center;
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;
  box-shadow: 0 0 0 2px #0074eb inset!important;
  color: #fff !important;
  background: #0074eb !important;
  font-weight: bold;
  border-radius: 5px;
  width: 100%;
`;

const Input = styled.input`
  margin: 0;
  max-width: 100%;
  -webkit-box-flex: 1;
  -ms-flex: 1 0 auto;
  flex: 1 0 auto;
  outline: 0;
  -webkit-tap-highlight-color: rgba(255,255,255,0);
  text-align: left;
  line-height: 1.21428571em;
  font-family: Lato,'Helvetica Neue',Arial,Helvetica,sans-serif;
  padding: .67857143em 1em;
  background: #fff;
  border: 1px solid rgba(34,36,38,.15);
  color: rgba(0,0,0,.87);
  border-radius: .28571429rem;
  -webkit-transition: border-color .1s ease,-webkit-box-shadow .1s ease;
  transition: border-color .1s ease,-webkit-box-shadow .1s ease;
  transition: box-shadow .1s ease,border-color .1s ease;
  transition: box-shadow .1s ease,border-color .1s ease,-webkit-box-shadow .1s ease;
  -webkit-box-shadow: none;
  box-shadow: none;
  font-size: 100%;

  &:focus {
    border-color: #85b7d9;
    background: #fff;
    color: rgba(0,0,0,.8);
    -webkit-box-shadow: none;
    box-shadow: none;
  }
`;

const BigInput = styled.div`
  position: relative;
  font-weight: 400;
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  color: rgba(0,0,0,.87);
  font-size: 1.1em;
  width: 100%;
`;

const Section = styled.div`
  position: relative;
  p {
    font-size: 20px;
  }
`;

const Image = styled.img`
  float: right;
  margin-right: 0;
  margin-bottom: 1em;
  margin-left: 1em;
  width: 315px;
  height: auto;
`;

const Card = styled.div`
  margin: 1em 0;
  max-width: 100%;
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  width: 290px;
  min-height: 0;
  background: #fff;
  padding: 0;
  border: none;
  border-radius: .28571429rem;
  -webkit-box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;
  box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;
  -webkit-transition: -webkit-box-shadow .1s ease,-webkit-transform .1s ease;
  transition: -webkit-box-shadow .1s ease,-webkit-transform .1s ease;
  transition: box-shadow .1s ease,transform .1s ease;
  transition: box-shadow .1s ease,transform .1s ease,-webkit-box-shadow .1s ease,-webkit-transform .1s ease;
  z-index: '';

  .image {
    position: relative;
    display: block;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    padding: 0;
    background: rgba(0,0,0,.05);

    img {
      display: block;
      width: 100%;
      height: auto;
      border-radius: inherit;
    }
  }

  .content {
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    border: none;
    background: 0 0;
    margin: 0;
    padding: 1em 1em;
    -webkit-box-shadow: none;
    box-shadow: none;
    font-size: 1em;
    border-radius: 0;

    .header {
      font-weight: 700;
      font-size: 1.1em;
      margin-top: -.21425em;
      line-height: 1.28571429em;
    }
  }

  &:first-child {
    border-radius: .28571429rem .28571429rem 0 0!important;
    border-top: none!important;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const Index = () => (
  <Grid>
    <GlobalStyle />
    <Head>
      <link href='https://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css' />
    </Head>
    <Row>
      <TitleCol xs={12} sm={6} md={10} lg={10}>
        <CircularImage src="https://semantic-ui.com/images/wireframe/square-image.png" />
        <H1>Alita: Battle Angel</H1>
      </TitleCol>
      <Col xs={12} sm={6} md={2} lg={2}>
        <Button>Play Video</Button>
        <Button>Watch Later</Button>
        <Button>Share</Button>
      </Col>
    </Row>
    <Divider />
    <Row>
      <Col xs={12} sm={6} md={6} lg={8}>
        <BackButton>Back</BackButton>
      </Col>
      <Col xs={12} sm={6} lg={6} lg={4}>
        <BigInput>
          <Input type="text" placeholder="Search for a movie" />
        </BigInput>
      </Col>
      <Col xs={12} sm={12} md={12} lg={12}>
        <Section>
          <h2>Sypnosis</h2>
          <Image class="ui small left floated image" src="https://m.media-amazon.com/images/M/MV5BNzVhMjcxYjYtOTVhOS00MzQ1LWFiNTAtZmY2ZmJjNjIxMjllXkEyXkFqcGdeQXVyNTc5OTMwOTQ@._V1_.jpg" />
          <p>Alita: Battle Angel is a 2019 American cyberpunk action film based on the 1990s Japanese manga series Gunnm (known as Battle Angel Alita in the English translation) by Yukito Kishiro. Directed by Robert Rodriguez, the film is written by James Cameron and Laeta Kalogridis and Rosa Salazar stars as the titular heroine Alita, an amnesiac cyborg girl who sets out to learn about her destiny after she awakens in a new body with no past memory of who she is. Christoph Waltz, Jennifer Connelly, Mahershala Ali, Ed Skrein, Jackie Earle Haley and Keean Johnson also star in supporting roles.</p>
          <p>Originally announced in 2003, production on the release of the film was repeatedly delayed due to Cameron's work on Avatar and its sequels. After years of the film languishing in development hell, Rodriguez was announced as the film's director in April 2016, with Salazar being cast the following month. Principal photography began in Austin, Texas, in October 2016, lasting through February 2017.</p>
        </Section>
      </Col>
    </Row>

    <Row>
      <Col xs={12} sm={12} md={12} lg={12}>
        <Section>
          <h2>Related videos</h2>
          <Row>
          <Col lg={2}>
            <Card>
              <div className="image">
                <img src="https://semantic-ui.com/images/avatar2/large/kristy.png" />
              </div>
              <div className="content">
                <span className="header">Pulp Fictions</span>
              </div>
              <div className="extra content">
                <BlueButton>Watch</BlueButton>
              </div>
            </Card>
          </Col>
          <Col lg={2}>
            <Card>
              <div className="image">
                <img src="https://semantic-ui.com/images/avatar2/large/kristy.png" />
              </div>
              <div className="content">
                <span className="header">The Wizard of Oz</span>
              </div>
              <div className="extra content">
                <BlueButton>Watch</BlueButton>
              </div>
            </Card>
          </Col>
          <Col lg={2}>
            <Card>
              <div className="image">
                <img src="https://semantic-ui.com/images/avatar2/large/kristy.png" />
              </div>
              <div className="content">
                <span className="header">Star Wars: The Last Jedi</span>
              </div>
              <div className="extra content">
                <BlueButton>Watch</BlueButton>
              </div>
            </Card>
          </Col>
          <Col lg={2}>
            <Card>
              <div className="image">
                <img src="https://semantic-ui.com/images/avatar2/large/kristy.png" />
              </div>
              <div className="content">
                <span className="header">Harry Potter and the Philisopher's Stone</span>
              </div>
              <div className="extra content">
                <BlueButton>Watch</BlueButton>
              </div>
            </Card>
          </Col>
          <Col lg={2}>
            <Card>
              <div className="image">
                <img src="https://semantic-ui.com/images/avatar2/large/kristy.png" />
              </div>
              <div className="content">
                <span className="header">Jurassic Park</span>
              </div>
              <div className="extra content">
                <BlueButton>Watch</BlueButton>
              </div>
            </Card>
          </Col>
          </Row>
        </Section>
      </Col>
    </Row>
  </Grid>
);

export default Index;
