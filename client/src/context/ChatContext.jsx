import {createContext, useCallback, useEffect, useState} from 'react';
import { postRequest, getRequest } from '../utils/services';

export const ChatContext = createContext();

export const ChatContextProvider = ({ children, user }) => {
	const [userChats, setUserChats] = useState([]);
	const [isUserLoading, setIsUserLoading] = useState(false);
	const [userChatsError, setUserChatsError] = useState(null);

	useEffect(()=>{
		const getUsersChats = async () => {
			if(user?._id){
				setIsUserLoading(true);
				setUserChatsError(null);

				const response = await getRequest('/chats', user._id);

				setIsUserLoading(false);

				if(response.error){
					return setUserChatsError(response);
				}

				setUserChats(response);
			};
		};

		getUsersChats()
	}, [user])

	return <ChatContext.Provider 
		value={{
			userChats,
			isUserLoading,
			userChatsError,
		}
	}>
		{
			children
		}
	</ChatContext.Provider>
	
}