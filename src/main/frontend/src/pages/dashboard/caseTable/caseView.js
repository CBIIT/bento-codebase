import React, { useRef, useEffect } from 'react';
import {
  Grid,
  withStyles,
  Chip,
} from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import MUIDataTable from 'mui-datatables';
import Snackbar from '@material-ui/core/Snackbar';
import { Link } from 'react-router-dom';
import wizardIcon from '../../../assets/icons/MyCases-Wizard-Step1.svg';
import SuccessOutlinedIcon from '../../../utils/SuccessOutlined';
import CustomFooter from './customFooter';
import { toggleCheckBox } from '../dashboardState';
import { receiveCases } from '../../selectedCases/selectedCasesState';


// const tableStyle = (ratio = 1) => ({
//   : ((((document.documentElement.clientWidth - 280) * 0.6) / 10) * ratio),
//   overflow: 'hidden',
//   wordBreak: 'break-word',
//   maxWidth: ((((document.documentElement.clientWidth - 280) * 0.6) / 10) * ratio),
//   minWidth: '100px',
// }
// );


const Cases = ({ classes, data }) => {
  const [snackbarState, setsnackbarState] = React.useState({
    open: false,
    value: 0,
  });
  function openSnack(value1) {
    setsnackbarState({ open: true, value: value1 });
  }
  function closeSnack() {
    setsnackbarState({ open: false });
  }
  const dispatch = useDispatch();
  // data from store
  const chipData = useSelector((state) => (
    state.dashboard.datatable
    && state.dashboard.datatable.filters
      ? state.dashboard.datatable.filters : []));

  // Get the existing caseIds from MyCases cart state
  const caseIds = useSelector((state) => state.cart.cases);

  // The bubble below will shows in the dashboard and work as
  // When user select and filters
  // they will float above the case table on the dashboard .
  // Due to the design issue, disable bubble function for now

  let bubbles = (chipData.map((ckdata) => (
    <Chip
      key={ckdata.datafield + ckdata.name}
      label={ckdata.name}
      onDelete={() => {
        dispatch(toggleCheckBox([{
          groupName: ckdata.groupName,
          name: ckdata.name,
          datafield: ckdata.datafield,
          isChecked: false,
        }]));
      }}
      classes={{
        root: classes.chipRoot,
        deleteIcon: classes.chipDeleteIcon,
      }}
    />
  )));

  bubbles = '';


  const saveButton = useRef(null);


  useEffect(() => {
    saveButton.current.disabled = true;
    saveButton.current.style.backgroundColor = 'rgb(0, 0, 0,0.12)';
  });

  const columns = [
    {
      name: 'case_id',
      label: 'Case ID',
      options: {
        filter: false,
        sortDirection: 'asc',
        customBodyRender: (value) => (
          <div className={classes.tableCell1}>
            {' '}
            <Link to={`/case/${value}`} className={classes.link}>{value}</Link>
            {' '}
          </div>
        ),
      },
    },
    {
      name: 'clinical_trial_code',
      label: 'Trial Code',
      options: {
        filter: false,
        customBodyRender: (value, tableMeta) => (
          <div className={classes.tableCell2}>

            <Link to={`/trial/${tableMeta.rowData[8]}`} className={classes.link}>{value}</Link>

          </div>
        ),
      },
    },
    {
      name: 'arm_id',
      label: 'Arm',
      options: {
        filter: false,
        customBodyRender: (value) => (
          <div className={classes.tableCell3}>
            {' '}
            {value}
            {' '}
          </div>
        ),
      },
    },
    {
      name: 'arm_drug',
      label: 'Arm Treatment',
      options: {
        filter: false,
        customBodyRender: (value) => (
          <div className={classes.tableCell4}>
            {' '}
            {value}
            {' '}
          </div>
        ),
      },
    },
    {
      name: 'disease',
      label: 'Diagnosis',
      options: {
        filter: false,
        customBodyRender: (value) => (
          <div className={classes.tableCell5}>
            {' '}
            {value}
            {' '}
          </div>
        ),
      },
    },
    {
      name: 'gender',
      label: 'Gender',
      options: {
        filter: false,
        customBodyRender: (value) => (
          <div className={classes.tableCell6}>
            {' '}
            {value}
            {' '}
          </div>
        ),
      },
    },
    {
      name: 'race',
      label: 'Race',
      options: {
        filter: false,
        customBodyRender: (value) => (
          <div className={classes.tableCell7}>
            {' '}
            {value}
            {' '}
          </div>
        ),
      },
    },
    {
      name: 'ethnicity',
      label: 'Ethnicity',
      options: {
        filter: false,
        customBodyRender: (value) => (
          <div className={classes.tableCell8}>
            {' '}
            {value}
            {' '}
          </div>
        ),
      },
    },
    // This is to redirect clinical trial code to the page
    {
      name: 'clinical_trial_id',
      label: 'clinical rial id',
      options: {
        display: false,
      },
    },
  ];

  let selectedCaseIds = [];

  function exportCases() {
    // Find the newly added cases by comparing
    // existing caseIds and selectedCaseIds
    const uniqueCases = caseIds !== null ? selectedCaseIds.filter(
      (e) => !caseIds.find((a) => e === a),
    ).length : selectedCaseIds.length;
    if (uniqueCases > 0) {
      openSnack(uniqueCases);
    }
    dispatch(receiveCases(selectedCaseIds));
    selectedCaseIds = [];
  }

  function onRowsSelect(curr, allRowsSelected) {
    if (allRowsSelected.length === 0) {
      saveButton.current.disabled = true;
      saveButton.current.style.color = '#FFFFFF';
      saveButton.current.style.backgroundColor = 'rgba(0, 0, 0, 0.12)';
      saveButton.current.style.cursor = 'auto';
    } else {
      saveButton.current.disabled = false;
      saveButton.current.style.color = '#FFFFFF';
      saveButton.current.style.backgroundColor = '#DF5226';
      saveButton.current.style.cursor = 'pointer';
    }
  }


  const options = () => ({
    selectableRows: 'multiple',
    responsive: 'stacked',
    search: false,
    filter: false,
    searchable: false,
    print: false,
    download: false,
    viewColumns: false,
    pagination: true,
    onRowsSelect: (curr, allRowsSelected) => onRowsSelect(curr, allRowsSelected),
    customToolbarSelect: (selectedRows, displayData) => {
      const selectedKeys = Object.keys(selectedRows.data).map((keyVlaue) => (
        selectedRows.data[keyVlaue].index
      ));
      const selectedCaseId = selectedKeys.map((keyVlaue) => (
        displayData[keyVlaue].data[0].props.children[1].props.children
      ));
      selectedCaseIds = selectedCaseId;
      return '';
    },
    customFooter: (count, page, rowsPerPage, changeRowsPerPage, changePage) => (
      <CustomFooter
        text="SAVE TO MY CASES"
        onClick={() => exportCases(dispatch)}
        classes={classes}
        count={count}
        page={page}
        rowsPerPage={rowsPerPage}
        onChangeRowsPerPage={(event) => changeRowsPerPage(event.target.value)}
      // eslint-disable-next-line no-shadow
        onChangePage={(_, page) => changePage(page)}
      />
    ),

  });

  return (
    <>
      <Snackbar
        className={classes.snackBar}
        open={snackbarState.open}
        onClose={closeSnack}
        autoHideDuration={3000}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        message={(
          <div className={classes.snackBarMessage}>
            <span>
              <SuccessOutlinedIcon />
              {' '}
            </span>
            <span className={classes.snackBarText}>
              {snackbarState.value}
              {' '}
              Case(s) successfully added to the My Cases list
            </span>
          </div>
)}
      />
      <div id="table_cases">
        <div className={classes.chips}>
          {bubbles}
        </div>

        <Grid container className={classes.tableTitle}>
          <Grid item xs={12}>
            <div className={classes.tableTitleText}>
            Cases
            </div>
            <div className={classes.tableTitleWizard}>
              <img
                src={wizardIcon}
                alt="CTDC MyCases Wizard"
              />
            </div>
          </Grid>
          <Grid item xs={12}>
            <MUIDataTable
              data={data}
              columns={columns}
              options={options()}
            />
          </Grid>

        </Grid>
        <Grid item xs={12} className={classes.saveButtonDiv}>
          <button
            type="button"
            ref={saveButton}
            onClick={exportCases}
            className={classes.saveButton}
          >
            SAVE TO MY CASES
          </button>
        </Grid>
      </div>
    </>
  );
};

const styles = (theme) => ({
  saveButtonDiv: {
    position: 'absolute',
    margin: '-50px 0 0 0',
    paddingLeft: '25px',
  },
  saveButton: {
    color: 'rgba(0, 0, 0, 0.26)',
    boxShadow: 'none',
    backgroundColor: 'rgba(0, 0, 0, 0.12)',
    padding: '6px 16px',
    fontSize: '0.875rem',
    minWidth: '64px',
    boxSizing: 'border-box',
    transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    lineHeight: '1.75',
    fontWeight: '500',
    fontFamily: theme.custom.fontFamily,
    borderRadius: '35px',
    textTransform: 'uppercase',
  },
  link: {
    color: '#DD401C',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
    '&:visited': {
      color: '#9F3D26',
    },
  },
  tableTitle: {
    backgroundColor: '#f5f5f5',
  },
  tableTitleText: {
    color: '#C32F30',
    fontSize: '20pt',
    fontStyle: 'normal',
    fontFamily: 'Raleway',
    letterSpacing: '0.025em',
    padding: '10px 32px 8px 28px',
    position: 'absolute',
    height: '15px',
  },
  tableTitleWizard: {
    width: '400px',
    float: 'right',
  },
  chips: {
    position: 'absolute',
    marginLeft: '250px',
    marginTop: '36px',
    zIndex: '999',
  },
  chipRoot: {
    color: '#ffffff',
    fontFamily: theme.custom.fontFamily,
    letterSpacing: '0.075em',
    marginLeft: '10px',
    backgroundColor: '#9b9b9b',
    fontSize: '9pt',
  },
  chipDeleteIcon: {
    color: '#ffffff',
    '&:hover': {
      color: '#ffffff',
    },
  },
  root: {
    fontFamily: theme.custom.fontFamily,
    fontSize: '9pt',
    letterSpacing: '0.025em',
    color: '#000',
  },
  button: {
    borderRadius: '10px',
    width: '178px',
    height: '27px',
    lineHeight: '18px',
    fontSize: '10pt',
    color: '#fff',
    backgroundColor: '#C53B27',
  },

  tableCell1: {
    width: '105px',
    overflow: 'hidden',
    wordBreak: 'break-word',
  },
  tableCell2: {
    width: '105px',
    overflow: 'hidden',
    wordBreak: 'break-word',
  },
  tableCell3: {
    width: '58px',
    overflow: 'hidden',
    wordBreak: 'break-word',
  },
  tableCell4: {
    width: '200px',
    overflow: 'hidden',
    wordBreak: 'break-word',
  },
  tableCell5: {
    width: '495px',
    overflow: 'hidden',
    wordBreak: 'break-word',
  },
  tableCell6: {
    width: '80px',
    overflow: 'hidden',
    wordBreak: 'break-word',
  },
  tableCell7: {
    width: '272px',
    overflow: 'hidden',
    wordBreak: 'break-word',
  },
  tableCell8: {
    width: '211px',
    overflow: 'hidden',
    wordBreak: 'break-word',
  },
  snackBar: {
    '& > div': {
      backgroundColor: '#4CAF50',
      padding: '6px 80px 0px',
    },
  },
  snackBarMessage: {
    display: 'flex',
  },
  snackBarText: {
    paddingLeft: '10px',
  },
});

export default withStyles(styles, { withTheme: true })(Cases);
