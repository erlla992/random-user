import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(17),
    height: theme.spacing(17),
    justifyContent: "center",
    display: "flex"
  },
  userSectionHeader: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(1),
  },
  icon: {
    color: "white",
  },
  media: {
    height: 140,
  },
}));