import React, { useContext } from 'react'
import { Container, Stack } from 'react-bootstrap';
import { ChatContext } from '../context/ChatContext'
import { AuthContext } from '../context/AuthContext'
import UserChat from '../components/chat/UserChat';

export default function Chat() {
  const {user} = useContext(AuthContext);
  const {userChats, isUserLoading, userChatsError} = useContext(ChatContext);

  return <Container>
    {userChats.length < 1 
      ? null 
      : <Stack direction='horizontal' gap={4} className="align-items-start">
          <Stack className='messages-box flex-grow-0 pe-3' gap={3}>
            {isUserLoading 
              ? <p>Loading chats ...</p>
              : userChats.map((chat) => {
                  return (
                    <div key={chat._id}>
                      <UserChat chat={chat} user={user}/>
                    </div>
                  )
              })
            }
          </Stack>

          <p>ChatBox</p>
        </Stack>
    }
  </Container>
}
