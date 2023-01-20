import { ChatEngine } from 'react-chat-engine';
import React from 'react';
import './App.css';
import LoginForm from './components/LoginForm';
import ChatFeed from './components/ChatFeed';
export default function App() {
  if (!localStorage.getItem('username')) return <LoginForm />;
  return (
    <ChatEngine
      height="100vh"
      projectID="eceacadb-107c-4c1f-b0a6-c7ce0b672677"
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
}
