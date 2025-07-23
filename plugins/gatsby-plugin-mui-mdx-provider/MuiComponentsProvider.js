import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { Typography, Link, Divider, Table, TableRow, TableCell } from '@mui/material';
const components = {
    p: (props) => React.createElement(Typography, { gutterBottom: true, align: 'justify', ...props }),
    h1: (props) => React.createElement(Typography, { variant: 'h1', gutterBottom: true, ...props }),
    h2: (props) => React.createElement(Typography, { variant: 'h2', gutterBottom: true, ...props }),
    h3: (props) => React.createElement(Typography, { variant: 'h3', gutterBottom: true, ...props }),
    h4: (props) => React.createElement(Typography, { variant: 'h4', gutterBottom: true, ...props }),
    h5: (props) => React.createElement(Typography, { variant: 'h5', gutterBottom: true, ...props }),
    h6: (props) => React.createElement(Typography, { variant: 'h6', gutterBottom: true, ...props }),
    blockquote: (props) => React.createElement(Typography, { gutterBottom: true, variant: "body2", component: 'blockquote', sx: { borderLeft: 4, borderColor: 'primary.main', marginLeft: 2, paddingLeft: 1 } }, props.children),
    table: (props) => (React.createElement(Table, { sx: {
            marginY: 2,
            display: 'table',
            width: '100%',
            borderCollapse: 'collapse',
            border: 1,
            borderColor: 'divider'
        } }, props.children)),
    tr: (props) => React.createElement(TableRow, { ...props }),
    th: (props) => (React.createElement(TableCell, { component: "th", sx: {
            fontWeight: 'bold',
            backgroundColor: 'divider',
            border: 1,
            borderColor: 'divider'
        } }, props.children)),
    td: (props) => (React.createElement(TableCell, { sx: {
            border: 1,
            borderColor: 'divider'
        } }, props.children)),
    pre: (props) => (React.createElement(Typography, { gutterBottom: true, component: 'pre', sx: {
            whiteSpace: 'pre-wrap',
            overflowX: 'auto',
            backgroundColor: 'divider',
            mx: 2,
            my: 1,
            py: 1,
            px: 0.5,
            borderRadius: 1,
            borderLeft: 4,
            borderColor: 'primary.main',
            '& code': {
                border: 'none',
                backgroundColor: 'transparent',
                padding: 0,
                margin: 0,
            }
        } }, props.children)),
    code: (props) => React.createElement(Typography, { component: 'code', sx: { fontFamily: 'monospace', backgroundColor: 'divider', paddingX: 0.5, paddingY: 0.25, borderRadius: 1, fontSize: '0.875rem', alignSelf: 'center' } }, props.children),
    em: (props) => React.createElement(Typography, { component: 'em', ...props }),
    strong: (props) => React.createElement(Typography, { component: 'strong', ...props }),
    delete: (props) => React.createElement(Typography, { component: 'del', ...props }),
    inlineCode: (props) => React.createElement(Typography, { component: 'code', ...props }),
    hr: (props) => React.createElement(Divider, { component: 'hr', ...props }),
    a: (props) => React.createElement(Link, { target: '_blank', rel: 'noreferrer', ...props }),
};
const MuiComponentProvider = ({ children }) => {
    return React.createElement(MDXProvider, { components: components }, children);
};
export default MuiComponentProvider;
