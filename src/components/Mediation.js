import React, { useState, useEffect } from 'react';
import { Paper, TextField, Button, Typography, List, ListItem, Container } from '@material-ui/core';

function Mediation({ caseId }) {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    fetchMessages();
  }, [caseId]);

  const fetchMessages = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/cases/${caseId}/messages`);
      const data = await response.json();
      setMessages(data);
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  const sendMessage = async () => {
    try {
      await fetch(`http://localhost:5000/api/cases/${caseId}/messages`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content: newMessage })
      });
      setNewMessage('');
      fetchMessages();
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <Container maxWidth="md">
      <Paper style={{ padding: 20, marginTop: 20 }}>
        <Typography variant="h6" gutterBottom>
          Mediation Session
        </Typography>
        <List style={{ maxHeight: 400, overflow: 'auto' }}>
          {messages.map((message, index) => (
            <ListItem key={index}>
              <Typography>
                {message.sender}: {message.content}
              </Typography>
            </ListItem>
          ))}
        </List>
        <div style={{ display: 'flex', marginTop: 20 }}>
          <TextField
            fullWidth
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message"
          />
          <Button 
            variant="contained" 
            color="primary"
            onClick={sendMessage}
            style={{ marginLeft: 10 }}
          >
            Send
          </Button>
        </div>
      </Paper>
    </Container>
  );
}

export default Mediation;