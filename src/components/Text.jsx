import React from 'react'
import styled from 'styled-components'

const Text = styled.span`
    transition: all 0.3s ease;
    animation: fadeInLeft 0.7s ease 1;
    animation-fill-mode: both;    
    animation-delay: 0.3s;    
    text-align: ${({ justify }) => justify ? 'justify' : ''};
    font-family: ${
        ({normal}) => normal ? 'Open-sans' : 'Montserrat'
    }, sans-serif;
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
    color: ${
        ({ color, primary, ...props }) => {
            if (color) return color
            if (primary) return props.theme.primary
            return props.theme.textColor
        }
    };
`
export default Text;

export const StrongText = styled(Text)`
    marginBottom: 16px;
    font-weight: 600;
    font-size: 2rem;
    @media only screen and (max-width: 768px) {
        font-size: 1.3rem;
    }
`
export const ExpandedText = styled(Text)`
    line-height: 28px;
`