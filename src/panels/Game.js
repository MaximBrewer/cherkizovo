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
import { Stage, Layer, Rect, Text } from 'react-konva';


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

	const canvasOuter = useRef(null);

	const [canvas, setCanvas] = useState({
		height: 432,
		width: 288
	})

	// useEffect(() => {
	// 	const ctx = canvas.current.getContext('2d');
	// 	ctx.fillRect(0, 0, 100, 100);
	// }, [])

	// var ctx = canvas.getContext( '2d' );
	// var W = 300, H = 600;
	// var BLOCK_W = W / COLS, BLOCK_H = H / ROWS;

	// // draw a single square at (x, y)
	// function drawBlock( x, y ) {
	// 	ctx.fillRect( BLOCK_W * x, BLOCK_H * y, BLOCK_W - 1 , BLOCK_H - 1 );
	// 	ctx.strokeRect( BLOCK_W * x, BLOCK_H * y, BLOCK_W - 1 , BLOCK_H - 1 );
	// }

	// // draws the board and the moving shape
	// function render() {
	// 	ctx.clearRect( 0, 0, W, H );

	// 	ctx.strokeStyle = 'black';
	// 	for ( var x = 0; x < COLS; ++x ) {
	// 		for ( var y = 0; y < ROWS; ++y ) {
	// 			if ( board[ y ][ x ] ) {
	// 				ctx.fillStyle = colors[ board[ y ][ x ] - 1 ];
	// 				drawBlock( x, y );
	// 			}
	// 		}
	// 	}

	// 	ctx.fillStyle = 'red';
	// 	ctx.strokeStyle = 'black';
	// 	for ( var y = 0; y < 4; ++y ) {
	// 		for ( var x = 0; x < 4; ++x ) {
	// 			if ( current[ y ][ x ] ) {
	// 				ctx.fillStyle = colors[ current[ y ][ x ] - 1 ];
	// 				drawBlock( currentX + x, currentY + y );
	// 			}
	// 		}
	// 	}
	// }

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
									<div style={{ position: "absolute", left: 0, top: 0, width: "100%", height: "100%" }} ref={canvasOuter}>
										<Stage width={canvas.width} height={canvas.height}>
											<Layer>
												<Text text="Try to drag a star" />
												{/* {stars.map((star) => (
													<Star
														key={star.id}
														id={star.id}
														x={star.x}
														y={star.y}
														numPoints={5}
														innerRadius={20}
														outerRadius={40}
														fill="#89b717"
														opacity={0.8}
														draggable
														rotation={star.rotation}
														shadowColor="black"
														shadowBlur={10}
														shadowOpacity={0.6}
														shadowOffsetX={star.isDragging ? 10 : 5}
														shadowOffsetY={star.isDragging ? 10 : 5}
														scaleX={star.isDragging ? 1.2 : 1}
														scaleY={star.isDragging ? 1.2 : 1}
														onDragStart={handleDragStart}
														onDragEnd={handleDragEnd}
													/>
												))} */}
											</Layer>
										</Stage>
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
					</Div>
				</Fragment>
			}
		</Panel >
	)
}

export default Game;
