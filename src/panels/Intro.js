import React from 'react';
import PropTypes from 'prop-types';
import { platform, IOS } from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';

import bg from '../img/bg.jpg';
import './Intro.scss';

const osName = platform();

const Persik = props => {
	return (
		<Panel id={props.id}>
			<div style={{ backgroundImage: 'url(' + bg + ')' }} className="Intro">
				<button onClick={props.go(ROUTES.GAME)}></button>
			</div>
		</Panel>
	)
}

Persik.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Persik;
