import { makeStyles } from '@material-ui/core/styles';
import { blue, mediumGrey, white } from './components/colors';

export const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "40px",
  },
  header: {
    margin: "10px auto 40px auto",
    paddingBottom: "16px",
    color: `${mediumGrey}`,
  },
  loadButton: {
    float: "right",
    margin: "auto 20px auto -100px",
  },
  overview: {
    backgroundColor: `${blue}`,
    color: `${white}`,
    paddingTop: "32px",
  },
}));