import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './static/font-awesome-4.7.0/css/font-awesome.min.css';
import './static/devicon-colors.css';
import './static/devicon.min.css';
import 'animate.css/animate.min.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { ThemeProvider } from 'styled-components';
import * as colors from 'material-ui/colors';

const styledTheme = {
    primary: '#FF9800',
    textColor: 'rgba(255, 255, 255, 0.86)',
    maxWidth: '1600px'
}
const theme = createMuiTheme({
    palette: {
        primary: colors.orange,
    },
    typography: {
        fontFamily: 'Open-sans',
    },
    overrides: {
        MuiTab: {
            rootPrimary: {
                color: "white"
            }
        }
    }
});

const Root = () => (
   <MuiThemeProvider theme={theme}>
       <ThemeProvider theme={styledTheme}>
            <App />
       </ThemeProvider>
   </MuiThemeProvider>
)
ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
