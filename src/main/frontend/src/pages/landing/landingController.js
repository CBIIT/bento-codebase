/* eslint-disable */
import React from 'react';
import {
  Grid,
  withStyles,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import imgAbout from '../../assets/landing/About-image.jpg';
import imgTrial from '../../assets/landing/Trials-image.jpg';
import imgAccess from '../../assets/landing/RequestAccess-LP.jpg';
import icon from '../../assets/landing/LP_ReadMore.svg';
import iconAbout from '../../assets/landing/LP_About_Fullarticle.Arrow.svg';
import texturebg from '../../assets/landing/BackgroundTexture-LP.jpg'
import l9dg from '../../assets/landing/Cases-LP.jpg';
import { Button } from '../../components/Wrappers/Wrappers';
import cn from '../../utils/classNameConcat';
import starImg from '../../assets/LP_FLARE.2.png';
import dogImg from '../../assets/landing/dog-bubble.png';
import humanImg from '../../assets/landing/human-bubble.png';

const slideDown = keyframes`
  0% {
    top: 0;
    left:0;
  }
  50% {
    top: 350px;
    left: 30px;
  }

  100% {
    top: 0;
    left:0;
  }
`;

const slideUp = keyframes`
  0% {

    top: 0;
    left:0;
  }

  50% {
    top:-390px;
    left:0px;
  }

  
  100% {
    top: 0;
    left:0;
  }
`;

const star = keyframes`
  0% {
    opacity: 0;
  }

  8%{
    opacity: 0;
  }

  25%{
    opacity: 1;
  }

  32%{
    opacity: 0;
  }

  58%{
    opacity: 0;
  }

  65% {
    opacity: 1;
  }

  80% {
    opacity: 0;
  }

`;

const SlideDown = styled.div`
  animation: ${slideDown} 20s  0s 1;
`;

const SlideUp = styled.div`
  animation: ${slideUp} 20s  0s 1;
`;

const Star = styled.div`
  animation: ${star} 20s  0s 1;
`;

const LandingController = ({ classes }) => (
  <div className={classes.page}>
    <div className={classes.container}>
      <Grid container spacing={16} direction="row" className={cn(classes.paddingTop30, classes.paddingLeft50)}>
        <Grid item lg={3} md={3} sm={12} xs={12}>
          <div className={classes.headerTitle}>
            <span className={classes.paddingLeft2}>Integrated </span>
            {' '}
Canine Data Commons
          </div>
          <div className={classes.headerContent}>
Exploring. analyzing, and understanding the biological relationships
between human and canine cancers.
          </div>
          <div className={classes.headerButtonSection}>

            <Link to="/cases" className={classes.headerLink}>
              <Button className={classes.headerButton}>
                {' '}
                    explore
              </Button>
            </Link>

          </div>
        </Grid>
        <Grid item lg={9} md={9} sm={12} xs={12}>
          <div>
            <div className={classes.animationContainer}>
              <SlideDown className={classes.dog}>
                <img className={classes.dogImg} src={dogImg} alt="Dog" />
              </SlideDown>
              <SlideUp className={classes.human}>
                <img className={classes.humanImg} src={humanImg} alt="human" />
              </SlideUp>
              <Star className={classes.star}>
                <img className={classes.starImg} src={starImg} alt="star" />
              </Star>
            </div>
          </div>
        </Grid>
      </Grid>
      </div>
      <div className={classes.container}>
      <div className={classes.texture}>
        <Grid container spacing={16} direction="row" className={classes.landingContainer}>
        <div className={classes.contentLeft}>
          <div className={classes.about}>
            <div className={classes.aboutImageSection}>
              <img src={imgAbout} className={classes.aboutImage} alt="CTDC about" />
            </div>
            <div className={classes.CTDCWords}>
                About the Clinical Trials Data Commons (CTDC)
            </div>
            <div className={classes.aboutContent}>
                NCI's Division of Cancer Treatment and Diagnosis (DCTD) charged
                the Frederick National Laboratory for Cancer Research (FNLCR) to
                build the Integrated Canine Data Commons (CTDC), a cloud-based repository
                of canine cancer data. CTDC was established to further research
                on human cancers by enabling comparative
                analysis with canine cancer. The data in the CTDC is sourced
                from multiple different programs and projects; all focused on
                the canine subjects.
            </div>
            <div className={classes.aboutButtonSection}>
              <div className={classes.aboutButtonLeft}>
                <img src={iconAbout} className={classes.iconAbout} alt="CTDC about icon" />
              </div>
              <div className={classes.aboutButtonRight}>
                <Link to="/purpose" className={classes.aboutButton}>FULL ARTICLE</Link>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.contentRight}>
          <div className={classes.contentRightTop}>
            <div className={classes.program}>
              <div>
                <img className={classes.image} src={imgTrial} alt="CTDC program " />
              </div>
              <div className={classes.content}>
                <div className={classes.contentHeader}> Trials</div>
                <div className={classes.contentMessage}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</div>

              </div>
              <div className={classes.blueButton}>
                <div className={classes.blueButtonLeft}>
                  <img className={classes.icon} src={icon} alt="CTDC about " />
                  {' '}
                </div>
                <div className={classes.blueButtonRight}>
                  <Link to="/programs" className={classes.blueButton}>READ MORE</Link>
                </div>
              </div>
            </div>
            <div className={classes.studies}>
              <div>
                <img className={classes.image} src={imgAccess} alt="CTDC Request ACCESS " />
              </div>
              <div className={classes.content}>
                <div className={classes.contentHeader}> REQUEST ACCESS</div>
                <div className={classes.contentMessage}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</div>

              </div>
              <div className={classes.blueButton}>
                <div className={classes.blueButtonLeft}>
                  <img className={classes.icon} src={icon} alt="CTDC about " />
                  {' '}
                </div>
                <div className={classes.blueButtonRight}>
                  <Link to="/studies" className={classes.blueButton}>READ MORE</Link>
                </div>
              </div>
            </div>
           
          </div>
          <div className={classes.contentRightBottom}>
            <div className={classes.cases}>
              <div className={classes.greyContentHeader}> Cases</div>
              <div className={classes.greyContent}>
Search all the Cases and build cohorts from all the
Programs/Studies within the CTDC. The data files from
 these cohorts can then be analyzed in the Cloud Resources.
              </div>
              <div className={classes.greybuttonSection}>
                <div className={classes.blueButtonLeft}>
                  <img className={classes.greyIcon} src={icon} alt="CTDC about " />
                  {' '}
                </div>
                <div className={classes.blueButtonRight}>
                  <Link to="/cases" className={classes.greybutton}>READ MORE</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Grid>
      </div>
    
    </div>
  </div>
);
const styles = (theme) => ({
  texture: {
    backgroundSize: 'cover',
    backgroundImage: `url(${texturebg})`,
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    padding: '80px 0 80px 0',
  },
  container: {
    fontFamily: 'Raleway, sans-serif',
    margin: '0 auto',
    
  },
  headerTitle: {
    paddingTop: '180px',
    paddingBottom: '12px',
    width: '208px',
    color: '#FFFFFF',
    fontFamily: 'Raleway, sans-serif',
    fontSize: '40px',
    fontWeight: 'bold',
    lineHeight: '40px',

  },
  paddingLeft50: {
    paddingLeft: '50px',
  },
  headerContent: {
    height: '98px',
    width: '194px',
    color: '#CB8311',
    fontFamily: 'Raleway',
    fontSize: '16px',
    fontWeight: '500',
    lineHeight: '22px',
    marginBottom: '40px',
  },
  headerButtonSection: {

  },
  iconAbout: {
    height: '17px',
    width: '9px',
    marginTop: '15px',
    marginLeft: '20px',
  },
  icon: {
    width: '20px',
    marginTop: '13px',
    marginLeft: '36px',
  },
  headerButton: {
    borderRadius: '10px',
    width: '178px',
    height: '37px',
    lineHeight: '18px',
    fontSize: '14px',
    fontWeight: 'bolder',
    color: '#ffffff',
    textTransform: 'uppercase',
    backgroundColor: '#CB8311',
    fontFamily: theme.custom.fontFamilySans,
    textDecoration: 'none',
    boxShadow: 'none !important',
    '&:hover': {
      backgroundColor: '#CB8311',
      color: '#ffffff',

    },

  },

  headerLink: {
    color: '#ffffff',
    textDecoration: 'none',
    '&:hover': {
      backgroundColor: '#CB8311',
      textDecoration: 'none',
    },
  },
  imgDogHuman: {
    width: '627px',
  },

  aboutImage: {
    width: '300px',
    height: '240px',
    padding: '10px',
  },
  aboutImageSection: {
    height: '240px',
  },
  CTDCWords: {
    height: '193px',
    background: '#0B2731',
    color: '#FFFFFF',
    fontSize: '26px',
    textTransform: 'uppercase',
    lineHeight: '29px',
    padding: '36px 75px 26px 26px',
    fontFamily: 'Oswald',


  },
  landingContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: '15px',
  },
  contentLeft: {
    float: 'left',
    paddingRight: '10px',
  },
  about: {
    width: '300px',
    backgroundColor: '#20506A',
  },
  image: {
    width: '293px',
    height: '247px',
  },
  aboutContent: {
    background: '#20506A',
    width: '300px',
    padding: '30px 30px 30px 30px',
    color: '#fff',
    fontFamily: '"Open Sans"',
    fontSize: '14px',
    lineHeight: '22px',
  },
  aboutButtonSection: {
    background: '#20506A',
    height: '67px',
  },
  imgIconAbout: {
    width: '49px',
  },
  aboutButtonLeft: {
    float: 'left',
    background: '#C53B27',
    height: '45px',
    width: '48px',
  },
  aboutButtonRight: {
    background: '#894439',
    float: 'left',
    height: '45px',
    width: '132px',
  },
  aboutButton: {
    color: '#ffffff',
    textDecoration: 'none',
    textTransform: 'uppercase',
    fontSize: '12px',
    fontWeight: '600',
    lineHeight: '45px',
    paddingLeft: '20px',
    boxShadow: 'none',
  },

  content: {
    width: '100%',
    background: '#fff',
    height: '120px',
    paddingLeft: '30px',
    paddingTop: '6px',
  },
  contentHeader: {
    width: '144px',
    color: '#000000',
    fontFamily: 'Raleway',
    fontSize: '24px',
    fontWeight: 'bold',
    lineHeight: '18px',
    padding: '15px 0',
  },
  contentMessage: {
    width: '125px',
    color: '#010101',
    fontFamily: 'Lato',
    fontSize: '15pt',
    lineHeight: '20px',
  },
 
  program: {
    float: 'left',
    padding: '0 10px 10px 0px',
  },

  studies: {
    float: 'left',
    padding: '0 10px 10px 0px',
  },

  contentRightBottom: {
    float: 'left',
    width: '597px',
    background: '#fff',
    backgroundImage: `url(${l9dg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  cases: {
    height: '442px',
    paddingLeft: '400px',
    paddingTop: '40px',
  },
  greybuttonSection: {
    height: '46px',
    width: '176px',
    opacity: '0.51',
    backgroundColor: '#4D4D4D',
    marginTop: '20px',

  },
  blueButton: {
    height: '45px',
    background: '#39C0F0',
    color: '#FFFFFF',
    fontFamily: 'Raleway',
    fontSize: '12px',
    fontWeight: '600',
    lineHeight: '25px',
    paddingLeft: '8px',
    textDecoration: 'none',
  },
  blueButtonLeft: {
    float: 'left',
  },
  blueButtonRight: {
    float: 'left',
    lineHeight: '47px',
    color: '#fff',
  },
  greyContentHeader: {
    color: '#000000',
    fontFamily: 'Raleway',
    fontSize: '24px',
    fontWeight: 'bold',
    lineHeight: '18px',
    padding: '15px 0',
  },
  greyContent: {
    height: '143px',
    width: '166px',
    color: '#010101',
    fontFamily: '"Open Sans"',
    fontSize: '14px',
    lineHeight: '22px',
  },
  greyIcon: {
    width: '20px',
    marginTop: '15px',
    marginLeft: '33px',
  },
  greybutton: {
    padding: '15px 5px 0 0',
    height: '9px',
    width: '71px',
    color: '#FFFFFF',
    fontFamily: 'Raleway',
    fontSize: '12px',
    fontWeight: '600',
    lineHeight: '19.31px',
    textDecoration: 'none',
    marginLeft: '8px',
    '&:hover': {
      color: '#ffffff',
    },
  },
  paddingBottom50: {
    paddingBottom: '50px',
  },
  paddingTop30: {
    paddingTop: '30px',
  },
  animationContainer: {
    position: 'relative',
    height: '800px',
    maxHeight: '800px',
    overflow: 'hidden',
  },

  dogImg: {
  },
  humanImg: {
    position: 'absolute',
    top: '-800px',
    left: '350px',
  },
  starImg: {
    width: '300px',
    position: 'absolute',
    top: '-2150px',
    left: '220px',
  },


  dog: {
    position: 'relative',
    height: '1200px',
  },
  human: {
    position: 'relative',
    height: '1200px',

  },
  star: {
    position: 'relative',
    height: '1200px',
    opacity: '0',
  },
  paddingLeft2: {
    paddingLeft: '2px',
  },

});
export default withStyles(styles, { withTheme: true })(LandingController);
