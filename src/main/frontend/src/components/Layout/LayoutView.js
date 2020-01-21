import React from 'react';
import { withStyles, CssBaseline } from '@material-ui/core';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Header from '../Header/HeaderView';
import NavBar from '../NavBar/NavBarContainer';
import Footer from '../Footer/FooterView';
import Error from '../../pages/error/Error';

// import Sidebar from '../Sidebar';

// pages

import Dashboard from '../../pages/dashboard/dashboardController';
import CaseDetail from '../../pages/caseDetail/caseDetailController';
import modelPage from '../../pages/modelPage/modelPageView';
import table from '../../pages/table/tableView';
import SelectedCases from '../../pages/selectedCases/selectedCasesController';
import SelectedFiles from '../../pages/selectedFiles/selectedFilesController';
import Home from '../../pages/landing/landingController';
import CRDCView from '../../pages/about/CRDCView';
import developerView from '../../pages/about/developerView';
import CTDCDataView from '../../pages/about/CTDCDataView';
import purposeView from '../../pages/about/purposeView';
import steeringCommiteeView from '../../pages/about/steeringCommitteeView';
import supportView from '../../pages/about/supportView';
import requestAccess from '../../pages/about/requestAccessView';
import Trials from '../../pages/trials/controller';
import TrialDetail from '../../pages/trialDetail/controller';

const ScrollToTop = () => {
  window.scrollTo(0, 0);
  return null;
};

const Layout = ({ classes, isSidebarOpened }) => (
  <>
    <CssBaseline />
    <HashRouter>
      <>
        <Header />
        <NavBar />
        {/* Reminder: Ajay need to replace the ICDC with env variable and
          change build npm to read env variable */}
        <div
          className={classes.content}
        >
          <Route component={ScrollToTop} />
          <Switch>
            <Route exact path="/ICDC/" component={Home} />
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route path="/cases" component={Dashboard} />
            <Route path="/trials" component={Trials} />
            <Route path="/model" component={modelPage} />
            <Route path="/table" component={table} />
            <Route path="/myCases" component={SelectedCases} />
            <Route path="/myCasesFiles" component={SelectedFiles} />

            <Route path="/trial/:id" component={TrialDetail} />
            <Route path="/case/:id" component={CaseDetail} />
            <Route path="/purpose" component={purposeView} />
            <Route path="/steering-committee" component={steeringCommiteeView} />
            <Route path="/crdc" component={CRDCView} />
            <Route path="/icdcData" component={CTDCDataView} />
            <Route path="/developers" component={developerView} />
            <Route path="/support" component={supportView} />
            <Route path="/request-access" component={requestAccess} />


            <Route component={Error} />
          </Switch>
          <Footer data={{ isSidebarOpened }} />
        </div>
      </>
    </HashRouter>
  </>
);

const styles = (theme) => ({
  root: {
    display: 'flex',
    maxWidth: '100vw',
    overflowX: 'hidden',
  },
  content: {
    flexGrow: 1,
    // width: `calc(100vw - 240px)`,   // Ajay need to add this on addung side bar
    width: 'calc(100%)', // Remove this on adding sidebar
    background: theme.custom.bodyBackGround,
    marginTop: '139px',
  },
  '@global': {
    '*::-webkit-scrollbar': {
      width: '0.6em',
    },
    '*::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 6px #ccc',
      borderRadius: '10px',
    },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(94,140,165)',
      outline: '1px solid slategrey',
      borderRadius: '10px',
    },
  },
});

export default withStyles(styles)(Layout);
