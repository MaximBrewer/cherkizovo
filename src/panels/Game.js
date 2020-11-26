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


import bg from '../img/game-bg.jpg';
import hb from '../img/hb.png';
import logo from '../img/logo-white.png';

const Game = ({ id, go, route, fetchedUser, userHasSeenIntro }) => (
	<Panel id={id}>
		{(fetchedUser && !userHasSeenIntro) &&
			<Fragment>
				<Div className='Intro' style={{ textAlign: "center", backgroundImage: 'url(' + bg + ')', color: "#ffffff" }} >
					<Div>
						<h3>Миссия: <br /> накрой праздничный стол с Черкизово!</h3>
						<h4>Набери больше всех баллов<br /> и&nbsp;получи крутые призы!</h4>
					</Div>
					<Div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
						<Div style={{ width: "35%", justifyContent: "center", alignItems: "center" }}>1</Div>
						<Div style={{ width: "35%", justifyContent: "center", alignItems: "center" }}>2</Div>
						<Div style={{ width: "30%", justifyContent: "center", alignItems: "center" }}>3</Div>
					</Div>
				</Div>
			</Fragment>
		}
	</Panel>
);

export default Game;
