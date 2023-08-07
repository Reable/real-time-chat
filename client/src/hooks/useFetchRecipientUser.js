import { useEffect, useState } from "react";
import { getRequest } from "../utils/services";

export const useFetchRecipientUser = (chat, user) => {
	const [recipeentUser, setRecipetUser] = useState(null);
	const [error, setError] = useState(null);

	const recipientId = chat?.members.find( id => id !== user?._id);

	useEffect(()=>{
		const getUser = async()=>{
			if(!recipientId) return null;

			const response = await getRequest('/users/find', recipientId);

			if(response.error){
				return setError(response);
			}

			setRecipetUser(response);
		};

		getUser();
	}, []);

	return { recipeentUser, error };
}