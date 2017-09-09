import React from 'react'
import styled from 'styled-components'

const Text = styled.span`
    transition: all 0.3s ease;
    animation: fadeInLeft 0.3s ease 1;
    font-family: 'Montserrat', sans-serif;
    font-size: ${
        ({ fontSize }) => fontSize || '1rem'
    };
    font-weight: ${
        ({ bold, medium, light }) => {
            if (bold) return 'bold';
            if (medium) return 600;
            if (light) return 300;
            return 'normal'
        }
    };
    color: ${({ color, ...props }) => color || props.theme.textColor};
`
export default Text;