/* eslint-disable react/no-array-index-key */
import React, { Component } from 'react';
import { Button, Icon } from "@material-ui/core";
import ChatContact from './ChatContact';
import ChatBubble from './ChatBubble';
import ChatField from './ChatField';
import ChatTopbar from './ChatTopbar';
import { CurrentUserProps, ContactsProps } from './ChatProps';
import IconButton from '@material-ui/core/IconButton';
import "../App.css"



export default class Chat extends Component {
 

  static propTypes = {
    currentUser: CurrentUserProps.isRequired,
    contacts: ContactsProps.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      currentMessages: props.contacts[0].messages,
      currentChat: props.contacts[0].userName,
      openContacts: false,
    };
  }


  onOpenChat = (contact, e) => {
    const { contacts } = this.props;

    e.preventDefault();
    const dialog = contacts.find(c => c.userName === contact).messages;
    const messages = dialog || null;
    this.setState({
      currentChat: contact,
      currentMessages: messages,
    });
  };

  onOpenContacts = () => {
    this.setState(prevState => ({ openContacts: !prevState.openContacts }));
  };

  

  render() {
   
    const { openContacts, currentChat, currentMessages } = this.state;

    const { currentUser, contacts } = this.props;
    

    return (
      <div
      >
        <div 
       
        >
         
          <div >
              {contacts.map((c, i) => (
               
                <IconButton  key={i}  onClick={e => this.onOpenChat(c.userName, e)}
                
                >
                  <ChatContact active={c.userName === currentChat} contact={c} />
                </IconButton>
              ))}
            
          </div>
        </div>
        
           
            <div >
              <ChatTopbar
                contact={contacts.find(c => c.userName === currentChat)}
                onClick={this.onOpenContacts}
              />
              
                <div  style={{backgroundColor: "#f5f5f5"}}>
                     
                      <div >
                        {currentMessages.map((m, i) => (
                          <ChatBubble
                            key={i}
                            contact={m.userName === currentUser.userName ? currentUser
                              : contacts.find(c => c.userName === m.userName)}
                            message={m}
                            date={m}
                            active={m.userName === currentUser.userName}
                          />
                        ))}
                      </div>
                    
               
                </div>
             
              
            </div>
          
        
      </div>
    );
  }
}
