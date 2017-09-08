
export const animation = ({ animation, duration = 1000, func = 'ease', delay = 0 } = {}) =>
    `${animation} ${duration}ms ${func} ${delay}ms forwards`;
