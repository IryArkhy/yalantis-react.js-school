import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  popover: {
    pointerEvents: 'none',
  },
  paper: {
    padding: theme.spacing(1),
  },
  summaryGray: {
    backgroundColor: 'rgb(174, 187, 193)',
  },
  summaryBlue: {
    backgroundColor: 'rgb(164, 224, 252)',
  },
  summaryGreen: {
    backgroundColor: 'rgb(164, 252, 189)',
  },
  summaryRed: {
    backgroundColor: 'rgb(252, 164, 164)',
  },
}));

export default useStyles;
