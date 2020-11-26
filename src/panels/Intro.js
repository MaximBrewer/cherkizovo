
import React, { Fragment } from 'react';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import FixedLayout from '@vkontakte/vkui/dist/components/FixedLayout/FixedLayout';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';

import './Intro.css';
import bg from '../img/intro-bg.jpg';
import logo from '../img/logo-white.png';

const Intro = ({ id, go, route, fetchedUser, userHasSeenIntro }) => (
	<Panel id={id}>
		{(fetchedUser && !userHasSeenIntro) &&
			<Fragment>
				<Div className='Intro' style={{ textAlign: "center", backgroundImage: 'url(' + bg + ')', display: "flex", justifyContent: "center", alignItems: "center" }} >
					{/* {fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200} /> : null}
					<h2>Привет, {fetchedUser.first_name}</h2> */}
					<Div style={{ maxWidth: "25rem", color: "#ffffff" }}>
						<h2>Новый год с</h2>
						<h2><img src={logo} alt="" style={{ width: "50%" }} /></h2>
						<h2>Миссия: <br /> накрой праздничный стол <br /> с&nbsp;Черкизово!</h2>
						<h3>Набери больше всех баллов<br /> и&nbsp;получи крутые призы!</h3>
						<Button mode='primary' size="m" level="2" onClick={() => go(route)}>
							Играть
						</Button>
					</Div>
				</Div>
			</Fragment>
		}
	</Panel>
);
export default Intro;