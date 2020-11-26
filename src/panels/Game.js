import React, { Fragment, useRef, useState, useEffect } from 'react';
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
import Tetris from 'react-tetris';


import './Game.css';
import bg from '../img/game-bg.jpg';
import canavsBg from '../img/canvas-bg.png';

const COLS = 10, ROWS = 15, shapes = [
	[1, 1, 1, 1],
	[1, 1, 1, 0, 1],
	[1, 1, 1, 0, 0, 0, 1],
	[1, 1, 0, 0, 1, 1],
	[1, 1, 0, 0, 0, 1, 1],
	[0, 1, 1, 0, 1, 1],
	[0, 1, 0, 0, 1, 1, 1]
];

const Game = ({ id, go, route, fetchedUser, userHasSeenIntro }) => {
	const moveLeft = (e) => {
		e.preventDefault();
	}
	const moveRight = (e) => {
		e.preventDefault();

	}
	const rotate = (e) => {
		e.preventDefault();
	}

	const canvasOuter = useRef(null);

	const [canvas, setCanvas] = useState({
		width: 288
	})

	return (
		<Panel id={id}>
			{fetchedUser &&
				<Fragment>
					<Div className='Game' style={{ textAlign: "center", backgroundImage: 'url(' + bg + ')', color: "#ffffff" }} >
						<Div style={{ paddingLeft: "1rem" }}>
							<h4>Миссия: <br /> накрой праздничный стол с Черкизово!</h4>
							<p>Набери больше всех баллов и&nbsp;получи крутые призы!</p>
						</Div>
						<Tetris>
							{({ HeldPiece, Gameboard, PieceQueue, points, linesCleared }) => {
								return (
									<Div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
										<Div style={{ width: "32%", justifyContent: "center", alignItems: "center" }}>1</Div>
										<Div style={{ width: "36%", justifyContent: "center", alignItems: "center" }}>
											<div style={{
												backgroundPosition: "center",
												backgroundSize: "contain",
												backgroundImage: 'url(' + canavsBg + ')'
											}}>
												<div ref={canvasOuter}>
													{/* <HeldPiece />
														<div>
															<p>Points: {points}</p>
															<p>Lines Cleared: {linesCleared}</p>
														</div> */}
													<Gameboard />
													{/* <PieceQueue /> */}
												</div>
											</div>
										</Div>
										<Div style={{ width: "32%", justifyContent: "center", alignItems: "center", padding: "0 1rem 0 2rem" }}>
											<Div style={{
												background: "#AA2223",
												border: "2px solid #FFFFFF",
												boxSizing: "border-box",
												boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
												borderRadius: "1.5rem",
												padding: "0.5rem 1.5rem"
											}}>
												<Div className={`control`} style={{ display: "flex", justifyContent: "space-between" }}>
													<a href="#" onClick={moveLeft} style={{ display: "block", width: "25%" }}>
														<Left style={{ display: "block", width: "100%" }} />
													</a>
													<a href="#" onClick={rotate} style={{ display: "block", width: "25%" }}>
														<Rotate style={{ display: "block", width: "100%" }} />
													</a>
													<a href="#" onClick={moveRight} style={{ display: "block", width: "25%" }}>
														<Right style={{ display: "block", width: "100%" }} />
													</a>
												</Div>
											</Div>
										</Div>
									</Div>
								);
							}}
						</Tetris>
					</Div>
				</Fragment>
			}
		</Panel >
	)
}

export default Game;
