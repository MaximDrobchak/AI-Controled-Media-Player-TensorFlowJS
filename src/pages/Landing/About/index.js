import React from 'react';

import { Layout } from '../../../components';
import Article from './Article';
import { useStyles } from './styles';

import { Group52, Group53, Group54, ArticleImage } from './img';

const About = () => {
  const classes = useStyles();
  return (
    <Layout id='about' className={classes.root}>
      <h1 className={classes.header}>ABOUT US</h1>

      <div className={classes.mainGrids}>
        <div className={classes.articalDev}>
          <Article
            textColor='#707070'
            icon={Group53}
            headline='Developmen'
            picture={ArticleImage}>
            We transform your ideas into a perfect product and deliver it on
            time. Full software development cycle for all platforms..
          </Article>
        </div>

        <div className={classes.articalStrategi}>
          <Article textColor='white' icon={Group52} headline='Strategy'>
            Understanding who a company, brand or product is, where they came
            from and how they got here is integral in understanding where to go
            next.
          </Article>
        </div>
        <div className={classes.articalCounsalting}>
          <Article textColor='#707070' icon={Group54} headline='Consulting'>
            Fix, improve, or get insights on your website without adding
            headcount to your team. Put our expertise to work.
          </Article>
        </div>
      </div>
    </Layout>
  );
};
export default About;
