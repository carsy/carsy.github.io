/* eslint react/no-multi-comp: off */

import React, { Component } from 'react';

import './App.css';


// Animations

const initialState = `rotate(0), scale(0)`;
const getRandom = array => array[Math.floor(Math.random() * array.length)];
const transformFunctions = [
    () => 'rotateZ(130deg)',
    () => 'rotateZ(230deg)',
    () => 'scale(2)',
    () => 'scale(0.5)',
];
const getRandomAnimationTime = () => `${Math.random()}s`;
const getRandomAnimation = (size) => ({
    transform: `${getRandom(transformFunctions)()}`,
    transformOrigin: 'center',
    transition: `transform ${getRandomAnimationTime()} ease`,
});


// Positioning

const vw = Math.round(Math.max(document.documentElement.clientWidth, window.innerWidth || 0));
const vh = Math.round(Math.max(document.documentElement.clientHeight, window.innerHeight || 0));
const center = (containerSize, size) => Math.round(containerSize / 2 - size / 2);


// Compoments

class Square extends Component {
    componentDidMount() {
        // setInterval(() => this.forceUpdate(), 2);
    }
    render() {
        const { x, y, size: containerSize } = this.props;
        const size = Math.round(containerSize / 4);

        return (<div
            className="square"
            style={{
                top: y + center(containerSize, size),
                left: x + center(containerSize, size),
                ...getRandomAnimation()
            }}
        />);
    }
};

const Squares = ({ n }) => {
    const squares = [];

    for (let y = 0; y < n; ++y) {
        for (let x = 0; x < n; ++x) {
            squares.push({
                x: Math.round(x * vw / n),
                y: Math.round(y * vh / n),
                size: Math.round(vw / n),
            });
        }
    }

    return (<div className="squares"> {
        squares.map((props, index) => <Square key={ index } { ...props } />)
    }</div>);
};

const App = () => (
    <div className="app">
        { <Squares n={ 20 } /> }
    </div>
);

export default App;

/*

square width = vw / n


*/
