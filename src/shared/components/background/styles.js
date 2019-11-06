import styled from 'styled-components';

import theme from '../../theme';

export const Background = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0.3;

    background-color: ${theme.colors.grey};
`;
