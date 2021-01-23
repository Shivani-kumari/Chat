import React from 'react';
// import { Input } from 'reactstrap';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import EmoticonIcon from 'mdi-react/EmoticonIcon';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import SendIcon from '@material-ui/icons/Send';
import "../App.css"

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '25ch',
  },
}));

const  ChatField = () => {

  const classes = useStyles()
  return(

  <div className="chat__text-field" className={classes.root}  >
    <FormControl fullWidth variant="outlined">
    
        <OutlinedInput 
        label="Standard" 
        placeholder="Write your message "
          id="input-with-icon-adornment"
          endAdornment={<InputAdornment position="end"><AttachFileIcon></AttachFileIcon></InputAdornment>}
          startAdornment={
            <InputAdornment position="start">
              <EmoticonIcon />
              
            </InputAdornment>
          }
          
        />
        <SendIcon className="send" style={{ color: 'white' }}></SendIcon>
        
    </FormControl >
    
        
  </div>
  )
};

export default ChatField;
