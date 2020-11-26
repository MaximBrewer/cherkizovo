import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import FixedLayout from '@vkontakte/vkui/dist/components/FixedLayout/FixedLayout';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';


import hb from '../img/hb.png';

const Game = ({ id, go, route, fetchedUser, userHasSeenIntro }) => (
	<Panel id={id}>
		<Group title="User Data Fetched with VK Bridge">
			<Div>
				Game
			</Div>
		</Group>
		<FixedLayout vertical='bottom'>
			<Div>
				<Button mode='commerce' size="xl" level="2" onClick={() => go(route)}>
					Назад
						</Button>
			</Div>
		</FixedLayout>
		{/* <PanelHeader style={{ position: "relative" }}>
			<div style={{ width: "25%", position: "absolute", top: 0, left: 0 }}>
				<img src={hb} alt="" style={{ width: "100%" }} />
			</div>
		</PanelHeader> */}
		{/* {fetchedUser &&
			<Group title="User Data Fetched with VK Bridge">
				<Cell
					before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200} /> : null}
					description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
				>
					{`${fetchedUser.first_name} ${fetchedUser.last_name}`}
				</Cell>
			</Group>}

		<Group title="Navigation Example">
			<Div>
				<Button size="xl" level="2" onClick={go} data-to={ROUTRES.}>
					Show me the Persik, please
				</Button>
			</Div>
		</Group> */}
	</Panel>
);

Game.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Game;
