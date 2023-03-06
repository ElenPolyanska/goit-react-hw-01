import styled from 'styled-components';

import { color, space, layout, flexbox, grid, background, border, position, shadow } from 'styled-system';



// export const Box = styled.div`
// background: ${p => p.theme.colors.ping};
// width: 500px;
// margin: 0 auto;
// margin-bottom: 100px;
// border-radius: ${p=>p.theme.radii.normal}; 
// box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, 
// rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;`
export const Box = styled('div')(
    background,
    color,
    space,
    layout,
    flexbox,
    grid,
    border,
    position,
    shadow
);