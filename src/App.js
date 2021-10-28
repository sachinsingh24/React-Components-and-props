import React from 'react';
import './App.css';
import TextBox from './components/textbox.js';
import Button from './components/button.js';

export default function App() {
  return (
    <div className="head">
      <div>
        <h1>SUBSCRIBE</h1>
        <p>Sign up with your email address to receive news and updates.</p>
        <div className="textbox">
        <TextBox name="FirstName"/>
        <TextBox name="LastName"/>
        <TextBox name="Email"/>
        </div>
        <Button />
      </div>
    </div>
  );
}
