import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme)=>({
    container: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6)
    },
    icon: {
        marginRight: '1.2em'
    },
    button: {
        marginTop: '2.4em'
    },
    cardGrid:{
        padding: '20px 0'
    },
    cardStyle:{
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    cardMedia:{
        paddingTop: '56.25%' // 16:9
    },
    cardContent:{
        flexGrow: 1
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: '50px 0'
    }
}));