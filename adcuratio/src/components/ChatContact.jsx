import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { ContactProps } from './ChatProps';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));




const ChatUser = ({ contact, active }) => {
  const classes = useStyles();

  

  return (
    <div 
    
    >
      <div className="chat__contact-avatar" className={classes.root}>
       
        { active ? <Badge ><Avatar alt="Remy Sharp" src={contact.avatar} /></Badge>
        : <Badge badgeContent={contact.data} color="secondary" ><Avatar alt={contact.name} src={contact.avatar} /></Badge>
        }
        
        
      </div>
     
    </div>
  );
};

ChatUser.propTypes = {
  contact: ContactProps.isRequired,
  active: PropTypes.bool,
};

ChatUser.defaultProps = {
  active: false,
};

export default ChatUser;
