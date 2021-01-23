import React from 'react';
import Avatar from '@material-ui/core/Avatar';

const ChatTopbar = ({ onClick, contact }) => (
  <div >
    
    
    
    <div >
      <Avatar alt={contact.name} src={contact.avatar} />
      <p className="text-center">{contact.name}</p>
      <p >{contact.post}</p>
    </div>
    
    
  </div>
);



export default ChatTopbar;
