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
import { Left, Right, Rotate } from '../Icons'


import './Game.css';
import bg from '../img/game-bg.jpg';
import canavsBg from '../img/canvas-bg.png';

const Game = ({ id, go, route, fetchedUser, userHasSeenIntro }) => {
	const moveLeft = (e) => {
		e.preventDefault();
	}
	const moveRight = (e) => {
		e.preventDefault();

	}
	const moveDown = (e) => {
		e.preventDefault();

	}
	const drop = (e) => {
		e.preventDefault();

	}
	const rotate = (e) => {
		e.preventDefault();

	}
	return (
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
							<Div style={{ width: "36%", justifyContent: "center", alignItems: "center" }}>
								<div style={{
									backgroundPosition: "center",
									backgroundSize: "contain",
									backgroundImage: 'url(' + canavsBg + ')',
									width: "100%",
									height: "0",
									paddingTop: "150%",
									position: "relative"
								}}>
									<div style={{ position: "absolute", left: 0, top: 0, width: "100%", height: "100%" }}>
										<canvas style={{ width: "100%", height: "100%" }}></canvas>
									</div>
								</div>
							</Div>
							<Div style={{ width: "32%", justifyContent: "center", alignItems: "center" }}>
								<Div style={{
									background: "#AA2223",
									border: "2px solid #FFFFFF",
									boxSizing: "border-box",
									boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
									borderRadius: "31px",
									padding: "0.3rem 1rem"
								}}>
									<Div className={`control`} style={{ display: "flex", justifyContent: "space-between" }}>
										<a href="#" onClick={moveLeft} style={{ display: "block", width: "25%" }}>
											<Left style={{ width: "100%" }} />
										</a>
										<a href="#" onClick={rotate} style={{ display: "block", width: "25%" }}>
											<Rotate style={{ width: "100%" }} />
										</a>
										<a href="#" onClick={moveRight} style={{ display: "block", width: "25%" }}>
											<Right style={{ width: "100%" }} />
										</a>
									</Div>
								</Div>
							</Div>
						</Div>
					</Div>
				</Fragment>
			}
		</Panel >
	)
}

export default Game;
