import React from 'react';
import { Card, Col, CardBody } from 'reactstrap';
import Chat from './Chat';
import myContacts from './contacts';

const ChatCard = () => (
  <Col md={12} lg={12}>
    <Card >
      <CardBody>
        <Chat
          contacts={myContacts}
          currentUser={{
            avatar: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fflower%2F&psig=AOvVaw2XL5HGEIfWy6j-p3W_pKdD&ust=1611476394101000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOiU35LPse4CFQAAAAAdAAAAABAF",
            name: 'Roman Johanson',
            userName: 'dragonKing',
          }}
        />
      </CardBody>
    </Card>
  </Col>
);

export default ChatCard;
