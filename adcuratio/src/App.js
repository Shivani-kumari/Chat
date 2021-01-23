import React,{useState} from 'react'
import { Col, Container, Row } from 'reactstrap';
import PropTypes from 'prop-types';
import ChatCard from './components/ChatCard';
import ChatField from './components/ChatField'
import MessageIcon from "@material-ui/icons/Message";
import { withStyles } from "@material-ui/core/styles";
import Badge from "@material-ui/core/Badge";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import './App.css'

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px"
  }
}))(Badge);

 const App = () => {
  const [openChannels, setOpenChannels] = useState(false);

  const onClickOpenChannels = (channels) => {
    setOpenChannels(channels);
  };
  return (
    <div>
      {openChannels === false && (
        <div>
          <h1>Hello</h1>
          <h2>Click to open messages</h2>
          <IconButton
            aria-label="cart"
            onClick={() => {
              onClickOpenChannels(true);
            }}
          >
            <StyledBadge badgeContent={12} color="secondary">
              <MessageIcon />
            </StyledBadge>
          </IconButton>
        </div>
      )}
      { openChannels === true &&

    <Container className="App">
   <IconButton
            onClick={() => {
              onClickOpenChannels(false);
            }}
          >
            <CloseIcon></CloseIcon>
          </IconButton>
    
    <Row className="show">
      <ChatCard />
    </Row>
    <Row><ChatField /></Row>
  </Container>
 }
  </div>
  )
}

export default App
