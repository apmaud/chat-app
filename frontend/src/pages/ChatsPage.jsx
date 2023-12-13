import { Box, useMediaQuery } from '@mui/material'
import React from 'react'
import Bar from '../components/chats/Bar'
import ChatList from "../components/chats/ChatList"
import ChatBox from "../components/chats/ChatBox"
import { useState } from 'react'
import { ChatState } from '../contexts/ChatProvider'


const ChatsPage = () => {
  const [refresh, setRefresh] = useState(false);
  const { user } = ChatState();

  return (
    <Box
    width="100%" 
    height="100%" 
    display="flex"
    flexDirection="column"
    alignItems="center"
    justifyContent="flex-start"
    gap="2rem"
    >
      <Bar />
      <Box
      width="100%"
      height="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      gap="1rem"
      marginBottom="2rem"
      >
        <ChatList refresh={refresh} />
        <ChatBox />
      </Box>
    </Box>
  )
}

export default ChatsPage