import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Restler from 'restler'

class Home extends React.Component {

  state = {
    instaToken: (this.props.match.params.instaToken) && this.props.match.params.instaToken.substr(14),
  }

  componentWillMount() {
    const accessToken = this.state.instaToken;
    const restURL = `https://api.instagram.com/v1/users/self/?access_token=${accessToken}`
    if (accessToken) {
      Restler.get(restURL).on('complete', (result) => {
        if (result instanceof Error) {
          window.alert(result.message);
        } else {
          window.alert(JSON.stringify(result));
        }
      });
    } else {
      console.log('no access token detected');
    }
  }

  requestAuth = () => {
    const clientID = '514d3f614b3246ce80cc9a4031789c0b';
    const redirectURI = 'https://l-o-u.netlify.com/';
    window.open(`https://api.instagram.com/oauth/authorize/?scope=public_content+follower_list+comments+relationships+likes&client_id=${clientID}&redirect_uri=${redirectURI}&response_type=token`);
  }

  newRound = () => {

  }

  render() {

    const accessToken = this.state.instaToken;
    const displayItem = accessToken ? (
      <p>You've signed in... apparently...</p>
    ) : (
      <button onClick={this.requestAuth}>Sign in to Instagram lol</button>
    );

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          marginTop: 60,
        }}
      >
        <h2>Home</h2>
        {displayItem}
      </div>
    );
  }
}

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)

const BasicExample = () => (
  <Router>
    <div>
      {/* <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/topics">Topics</Link></li>
        </ul>

        <hr/>
      */}
      {/* <Route path="/about" component={About}/>
      <Route path="/topics" component={Topics}/> */}
      <Route exact path="/:instaToken" component={Home}/>
      <Route exact path="/" component={Home}/>

    </div>
  </Router>
)
export default BasicExample
