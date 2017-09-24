import React from 'react';
import gameScript from './gameScript';

export default class BallGame extends React.Component {
    componentDidMount() {
        gameScript(this.canvas);
    }
    render() {
        return (
            <canvas
                style={{
                    width: '100vw',
                    height: '100vh',
                    backgroundColor: 'black',
                }}
                ref={instance => (this.canvas = instance)}
            />
        );
    }
}
