import React from 'react';
import moment from 'moment';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';



const ChatBubble = ({ contact, message, active }) => (
  <div 
  
  >
    <div>
    <Avatar alt={contact.name} src={contact.avatar} />
    </div>
   
      
      
        <div className="chat">
          <p className="chat-name">{contact.name}</p>
          
          { message.side ?
          <Chip className="chat-message" label={message.message} color="primary"></Chip>
          : <Chip className="chat-message " label={message.message}></Chip>
          }
          <p className="chat-date">{moment(message.date).format('LT')}</p>
        </div>

      
        
  </div>
);



export default ChatBubble;
