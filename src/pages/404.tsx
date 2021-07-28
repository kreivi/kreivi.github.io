import React from 'react';
import { Link, PageProps } from 'gatsby';

import Layout from '../components/Layout';
import { makeStyles, createStyles, Theme, Typography, Link as MuiLink, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    title: {
      margin: theme.spacing(2),
    },
    message: {
      margin: theme.spacing(2),
    },
    link: {
      margin: theme.spacing(4),
    },
  })
);

/**
 * NotFound page properties
 */
type NotFoundPageProps = PageProps<{}>;

/**
 * Not found error page
 * @returns not found page element
 */
const NotFoundPage: React.FC<NotFoundPageProps> = () => {
  const classes = useStyles();
  return (
    <Layout>
      <Paper className={classes.root}>
        <Typography className={classes.title} variant='h1' color='error'>
          Oops!
        </Typography>
        <Typography className={classes.message}>The page does not exist</Typography>
        <MuiLink className={classes.link} component={Link} to='/'>
          Home
        </MuiLink>
      </Paper>
    </Layout>
  );
};

export default NotFoundPage;
