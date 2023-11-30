type ThemeStyle = React.CSSProperties;

interface ThemeStyles {
    [key: string]: ThemeStyle;
}

export const themes: ThemeStyles = {
    default: {
        backgroundColor: 'lightgray',
        color: 'black',
    },
    blue: {
        backgroundColor: 'blue',
        color: 'white',
    },
    orange: {
        backgroundColor: 'orange',
        color: 'black',
    },
};