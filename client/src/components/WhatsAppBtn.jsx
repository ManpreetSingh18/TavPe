import React from 'react'
import { FloatingWhatsApp } from 'react-floating-whatsapp'

export default function WhatsAppBtn() {

  return (
    <FloatingWhatsApp 
    phoneNumber="1234567890"
    accountName="Test Business"
    avatar="https://example.com/avatar.jpg"
    statusMessage="Typically replies within minutes"
    chatMessage="Hello! How can we help you today?"
    placeholder="Type your message..."
    notification
  />
  )
}