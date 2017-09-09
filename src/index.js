import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './static/font-awesome-4.7.0/css/font-awesome.min.css';
import 'animate.css/animate.min.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { ThemeProvider } from 'styled-components';

const styledTheme = {
    primary: '#FF9800',
    textColor: 'rgba(255, 255, 255, 0.86)'
}
const theme = createMuiTheme({
    typography: {
        fontFamily: 'Open-sans'
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
