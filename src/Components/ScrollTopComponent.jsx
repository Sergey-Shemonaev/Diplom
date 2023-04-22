import styled from "styled-components";
import { useState } from "react";
import BtnIcon from '../imeg/btnTop.png';
import { animateScroll as scroll } from "react-scroll";


const PositionBtnStyled = styled.button`
	border: none;
	background: transparent;
	position: fixed;
	right: 2em;
	bottom: 1em;
	z-index: 2;
	border-radius:50%;
`;

const ScrollButton = () => {
	const [visible, setVisible] = useState(false);

	const toggleVisible = () => {
		const scrolled = document.documentElement.scrollTop;
		if (scrolled > 300) {
			setVisible(true)
		} else if (scrolled < 300) {
			setVisible(false)
		}
	};
	window.addEventListener('scroll', toggleVisible);

	// const scrollToTop = () =>{
	// 	window.scrollTo({
	// 		top: 0,
	// 		behavior: 'smooth'
	// 	});
	// };


	return (
		<PositionBtnStyled 
				onClick={() => scroll.scrollToTop()}  
				style={{display: visible ? "inline" : "none"}}
			>
				<img src={BtnIcon}
				style={{borderRadius: "50%"}}
				alt=""/>
		</PositionBtnStyled>

	);

};

export default ScrollButton;