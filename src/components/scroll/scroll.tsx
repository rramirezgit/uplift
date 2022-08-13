import { Scrollbars } from 'react-custom-scrollbars';
import './styles.css'

export const ScrollUplift = ({ children, vertical = false, horizontal = false, className }: any) => {
    return (
        <Scrollbars
            className={className}
            style={{
                width: '100%', position: "relative",
                height: "100vh",
                display: vertical ? "-webkit-inline-box" : "block"
            }}
            renderThumbVertical={({ style, ...props }) =>
                <div {...props} style={{
                    ...style,
                    backgroundColor: 'rgb(141, 131, 97)',
                    borderRadius: '10px',
                    display: `${horizontal ? 'block' : 'none'}`,
                }} />
            }
            // renderThumbHorizontal={({ style, ...props }) =>
            //     <div {...props} style={{
            //         ...style,
            //         backgroundColor: 'rgb(141, 131, 97)',
            //         borderRadius: '10px',
            //         display: `${vertical ? 'block' : 'none'}`,
            //     }} />
            // }
        >
            {children}
        </Scrollbars>
    );
}