import { Table, TableCell, TableRow, Typography } from '@mui/material'
import type { MDXComponents } from 'mdx/types'
import React from 'react'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    p: ({ children }) => <Typography gutterBottom align='justify'>{children}</Typography>,
    h1: ({ children }) => <Typography gutterBottom variant='h1'>{children}</Typography>,
    h2: ({ children }) => <Typography gutterBottom variant='h2'>{children}</Typography>,
    h3: ({ children }) => <Typography gutterBottom variant='h3'>{children}</Typography>,
    h4: ({ children }) => <Typography gutterBottom variant='h4'>{children}</Typography>,
    h5: ({ children }) => <Typography gutterBottom variant='h5'>{children}</Typography>,
    h6: ({ children }) => <Typography gutterBottom variant='h6'>{children}</Typography>,
    blockquote: ({ children }) => <Typography gutterBottom variant="body2" component='blockquote' sx={{ borderLeft: 4, borderColor: 'primary.main', marginLeft: 2, paddingLeft: 1 }}>{children}</Typography>,
    table: ({ children }) => (
      <Table
        sx={{
          marginY: 2,
          display: 'table',
          width: '100%',
          borderCollapse: 'collapse',
          border: 1,
          borderColor: 'divider'
        }}
      >
        {children}
      </Table>
    ),
    thead: ({ children }) => <thead>{children}</thead>,
    tbody: ({ children }) => <tbody>{children}</tbody>,
    tr: ({ children }) => <TableRow>{children}</TableRow>,
    th: ({ children }) => (
      <TableCell
        component="th"
        sx={{
          fontWeight: 'bold',
          backgroundColor: 'divider',
          border: 1,
          borderColor: 'divider'
        }}
      >
        {children}
      </TableCell>
    ),
    td: ({ children }) => (
      <TableCell
        sx={{
          border: 1,
          borderColor: 'divider'
        }}
      >
        {children}
      </TableCell>
    ),
    pre: ({ children }) => (
      <Typography
        gutterBottom
        component='pre'
        sx={{
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
        }}>
        {children}
      </Typography>
    ),
    code: ({ children }) => <Typography component='code' sx={{ fontFamily: 'monospace', backgroundColor: 'divider', paddingX: 0.5, paddingY: 0.25, borderRadius: 1, fontSize: '0.875rem', alignSelf: 'center'}}>{children}</Typography>,
    ...components,
  }
}