
import React, { Fragment } from 'react';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import FixedLayout from '@vkontakte/vkui/dist/components/FixedLayout/FixedLayout';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';

import './Intro.css';
import bg from '../img/bg.jpg';

const Intro = ({ id, go, route, fetchedUser, userHasSeenIntro }) => (
	<Panel id={id} centered={true} className='Intro' style={{ backgroundImage: 'url(' + bg + ')' }}>
		{(fetchedUser && !userHasSeenIntro) &&
			<Fragment>
				<Div >
					{fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200} /> : null}
					<h2>Привет, {fetchedUser.first_name}</h2>
					<h3>Этот сервис помогает следить за тем, чтобы туалетная бумага дома не заканчивалась и ты не попал в неловкую ситуацию, когда ее не окажется в самый нужный момент.</h3>
					<Button mode='commerce' size="xl" level="2" onClick={() => go(route)}>
						ОК, всё понятно
						</Button>
				</Div>
			</Fragment>
		}
	</Panel>
);
export default Intro;