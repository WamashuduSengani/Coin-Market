import { Theme, makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme: Theme) => ({
    container: {
        padding: theme.spacing(2),
      },
      card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
        backgroundColor: '#F1F1F1', // Light gray background
        borderRadius: theme.spacing(1),
        boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.05)',
        transition: 'transform 0.3s ease',
        '&:hover': {
          transform: 'scale(1.03)', // Enlarge the card on hover
        },
      },
      iconContainer: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: theme.spacing(1),
      },
      icon: {
        marginRight: theme.spacing(1),
        color: theme.palette.primary.main, // Set the icon color to primary color
      },
      name: {
        fontSize: '1.2rem',
        fontWeight: 'bold',
        color: theme.palette.text.primary, // Set the name color to primary text color
      },
      symbol: {
        fontSize: '1rem',
        color: theme.palette.text.secondary, // Set the symbol color to secondary text color
      },
      rank: {
        fontSize: '0.8rem',
        color: theme.palette.text.secondary, // Set the rank color to secondary text color
      },
      buttonContainer: {
        marginTop: theme.spacing(2),
        textAlign: 'center',
      },
      viewAllButton: {
        minWidth: 200,
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
        '&:hover': {
          backgroundColor: theme.palette.primary.dark,
        },
      },
      backButton: {
        minWidth: 200,
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.common.white,
        '&:hover': {
          backgroundColor: theme.palette.secondary.dark,
        },
      },
      selectedCard: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        cursor: 'pointer',
        transition: 'transform 0.3s ease',
        border: `2px solid ${theme.palette.primary.main}`,
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
        transform: 'scale(1)',
        position: 'relative',
        '&:hover': {
          transform: 'scale(1.03)', // Enlarge the card on hover
        },
      },
    
      centeredCoin: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '80vh', // Adjust the height as needed
      },
      closeButton: {
        position: 'absolute',
        top: theme.spacing(1),
        right: theme.spacing(1),
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        color: theme.palette.text.primary,
        fontSize: '1.5rem',
        padding: 0,
        '&:hover': {
          color: theme.palette.secondary.main,
        },
      },
      hideButton: {
        position: 'absolute',
        top: theme.spacing(1),
        right: theme.spacing(1),
        color: theme.palette.text.secondary, // Set the hide button color to secondary text color
        transition: 'color 0.3s ease',
        '&:hover': {
          color: theme.palette.secondary.main, // Change hide button color on hover
        },
      },
      paginationButton: {
        minWidth: 150,
        margin: theme.spacing(0, 1),
      },
      
    
    }));

export default useStyles
  