import { makeStyles } from '@material-ui/core/styles';

//Alec 
//To leverage all of material's ui elements, we need to format the styles a bit differently than traditional css; camelCase and no dash, for instance, and passing the values into the export as 'strings-like-this',; 
//The whole goal of these files is to export the function to return the styles object. 
export default makeStyles(() => ({
  root: {
    maxWidth: '96%',
    marginLeft: '10%',
    backgroundColor: '#f5f5f4',
    shadowColor:'#000',
    shadowOpacity:'0.2',
    shadowRadius:'0',

  },
  media: {
    height: 500,
    paddingTop: '56.25%', // 16:9
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));