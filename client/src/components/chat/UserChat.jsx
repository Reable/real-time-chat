import React from 'react'
import { Stack } from 'react-bootstrap';
import {useFetchRecipientUser} from '../../hooks/useFetchRecipientUser'

export default function UserChat({chat, user}) {
	const {recipeentUser} = useFetchRecipientUser(chat, user);
	console.log(recipeentUser)

	return <Stack direction="horizontal" className="user-card align-items-center p-2 justify-content-between" gap={3}>
		<div className="d-flex">
			<div className="me-2">
				<img src="" alt="" width={50} height={50}/>
			</div>
			<div className="text-content">
				<div className="name">
					{recipeentUser?.name} 
				</div>
				<div className="text">
					Text Message
				</div>
			</div>
		</div>
		<div className="d-flex flex-column align-items-end">
			<div className="date">12/12/1212</div>
			<div className="this-user-notifications">2</div>
			<span className="user-online"></span>
		</div>
	</Stack>
}