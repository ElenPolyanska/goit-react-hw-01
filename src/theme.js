const col = () => '#' + Math.floor(Math.random() * 2 ** 24).toString(16).padStart(6, 0);

export const theme = {
    colors: {
        black: '#000',
        white: '#fff',
        text: '#2a2a2a',
        accent: '#ffabf2',
        bg: '#cffaf9',
        stat: '#fcf962',
        main: '#ffcff8',
        back: '#5342a8',
        random: col,
        fr:' rgb(248, 240, 240)',
    },
    space: [0, 2, 4, 8, 16, 32, 64],
    fonts: {
        body: "Helvetica, sans-serif",
        heading: 'Roboto, sans-serif',
        monospace: 'Menlo, monospace',
    },
    fontSizes: {
        xs: '12px',
        s: '14px',
        m: '16px',
        l: '20px',
        xl: '64px',
    },
    fontWeights: {
        normal: 400,
        bold: 700,
    },
    lineHeights: {
        body: 1.5,
        heading: 1.25,
    },
    borders: {
        none: 'none',
        normal: '1px solid',
    },
    radii: {
        none: '0',
        normal: '8px',
        round: '20%',
    },
    shadows: { 
        item: '1px -2px 3px rgb(0 0 0 / 12%), -1px 1px 1px rgb(0 0 0 / 14%), 0px 2px 1px rgb(0 0 0 / 20%)',
        card:'rgba(50, 50, 93, 0.5) 0px 50px 100px -20px, rgba(0, 0, 0, 0.5) 0px 30px 60px -30px',
    }
}