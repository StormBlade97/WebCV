import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './static/font-awesome-4.7.0/css/font-awesome.min.css';
import './static/devicon-colors.css';
import './static/devicon.min.css';
import 'animate.css/animate.min.css';
import App from './App';
import BallGame from './BallGame/BallGame';
import registerServiceWorker from './registerServiceWorker';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { ThemeProvider } from 'styled-components';
import * as colors from 'material-ui/colors';

import { BrowserRouter as Router, Route } from 'react-router-dom';

const styledTheme = {
    primary: colors.blue[500],
    textColor: 'rgba(255, 255, 255, 0.86)',
    maxWidth: '1600px',
};
const theme = createMuiTheme({
    palette: {
        primary: colors.blue,
    },
    typography: {
        fontFamily: 'Open-sans',
    },
    overrides: {
        MuiTab: {
            rootPrimary: {
                color: 'white',
            },
        },
    },
});

const Root = () => (
    <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={styledTheme}>
            <Router>
                <div>
                    <Route exact path="/" component={App} />
                    <Route path="/game" component={BallGame} />
                </div>
            </Router>
        </ThemeProvider>
    </MuiThemeProvider>
);
ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
