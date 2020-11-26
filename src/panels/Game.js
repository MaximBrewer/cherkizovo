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


import './Game.css';
import bg from '../img/game-bg.jpg';
import canavsBg from '../img/canvas-bg.jpg';

const Game = ({ id, go, route, fetchedUser, userHasSeenIntro }) => (
	<Panel id={id}>
		{fetchedUser &&
			<Fragment>
				<Div className='Game' style={{ textAlign: "center", backgroundImage: 'url(' + bg + ')', color: "#ffffff" }} >
					<Div style={{ paddingLeft: "1rem" }}>
						<h4>Миссия: <br /> накрой праздничный стол с Черкизово!</h4>
						<p>Набери больше всех баллов и&nbsp;получи крутые призы!</p>
					</Div>
					<Div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
						<Div style={{ width: "32%", justifyContent: "center", alignItems: "center" }}>1</Div>
						<Div style={{ width: "38%", justifyContent: "center", alignItems: "center" }}>
							<canvas style={{ backgroundImage: 'url(' + canavsBg + ')', width: "100%", height: "100%" }}></canvas>
						</Div>
						<Div style={{ width: "30%", justifyContent: "center", alignItems: "center" }}>3</Div>
					</Div>
				</Div>
			</Fragment>
		}
	</Panel>
);

export default Game;
