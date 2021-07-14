import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { makeStyles, createStyles, Theme, Avatar as MuiAvatar } from '@material-ui/core';
import { StaticImage } from 'gatsby-plugin-image';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 80,
      height: 80,
      [theme.breakpoints.up('md')]: {
        width: 100,
        height: 100,
      },
      [theme.breakpoints.up('lg')]: {
        width: 120,
        height: 120,
      },
    },
    image: {
      borderRadius: '50%',
    },
  })
);

const Avatar: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <StaticImage
        className={classes.image}
        src='../../assets/images/avatar_artistic.png'
        alt='Severi Vidnäs'
        placeholder='blurred'
      />
    </div>
  );
  //return
};

export default Avatar;
