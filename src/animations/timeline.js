import { Component } from 'react';
import { keyframes } from 'styled-components';
import forIn from 'lodash/forIn';
import defaults from 'lodash/defaults';

const steps = [
    {
        animations: {
            avatar: {
                animation: keyframes`
                    from {
                        transform: translateY(150px) scale(9);
                        opacity: 0;
                    }

                    to {
                        transform: translateY(150px) scale(0.2);
                        opacity: 0.8;
                    }
                `,
                duration: 600,
                func: 'cubic-bezier(.45, .45, 0, 1)',
            },
        },
    },
    {
        animations: {
            avatar: {
                animation: keyframes`
                    from {
                        transform: translateY(150px) scale(0.2);
                        opacity: 0.8;
                    }

                    to {
                        transform: translateY(0px) scale(0.2);
                        opacity: 0.8;
                    }
                `,
                duration: 800,
                func: 'cubic-bezier(.71, .35, .29, 1.43)',
            },
        },
    },
    {
        animations: {
            avatar: {
                animation: keyframes`
                    from {
                        transform: translateY(0px) scale(0.2);
                        opacity: 0.8;
                    }

                    to {
                        transform: translateY(0px) scale(1);
                        opacity: 1;
                    }
                `,
                duration: 500,
                func: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
            },
            image: {
                animation: keyframes`
                    from { opacity: 0; }
                    to { opacity: 1; }
                `,
                duration: 500,
                func: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
            },
        },
    },
    {
        animations: {
            ...['name', 'sub', 'description', 'endDescription', 'links'].reduce((animations, animation, i) => (
                {
                    ...animations,
                    [animation]: {
                        animation: keyframes`
                            from {
                                transform: translateY(80px);
                                opacity: 0;
                            }
                            to {
                                transform: translateY(0);
                                opacity: 1;
                            }
                        `,
                        duration: 500,
                        delay: i * 50,
                    },
                }
            ), {}),
        },
    },
].map((step, i, steps) => {
    i > 0 && forIn(steps[i - 1].animations, (previousAnimation, name) => {
        console.log(name, previousAnimation);
        defaults(step.animations, { [name]: previousAnimation });
    });

    // Add max duration for the step
    step.duration = Math.max(
        ...Object.values(step.animations).map(animation => animation.duration)
    );

    return step;
});

export class Timeline extends Component {
    constructor() {
        super();

        this.state = { currentStepNumber: 0 };
    }

    render() {
        const { currentStepNumber } = this.state;
        const { children } = this.props;
        const currentStep = steps[currentStepNumber];
        const nextStepNumber = currentStepNumber + 1;

        currentStepNumber < steps.length - 1 &&
            setTimeout(
                () => this.setState({ currentStepNumber: nextStepNumber }),
                currentStep.duration + 200 // TODO instead of using setTimeout, use animationend event
            );

        return children(steps[currentStepNumber]);
    }
}
