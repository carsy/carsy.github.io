import { css } from 'styled-components';

export function animation({ animation, duration = 1000, func = 'ease', delay = 0 } = {}) {
    return css`${animation} ${duration}ms ${func} ${delay}ms forwards`;
}
