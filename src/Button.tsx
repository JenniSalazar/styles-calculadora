import React from 'react';
import styled from 'styled-components';

interface ButtonProps{
    disable?:boolean;
    children:React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({children, disable = false}) => {
	return <StyledButton isDisable={disable}>{children}</StyledButton>
};

const StyledButton = styled.button<{isDisable:boolean}>`
	border-radius: 6px;
	padding:10px 12px;
	background:${props => props.isDisable ?` #aeacac` : `#417841`};
	color:#000;
	font-size:12px;
	line-height: 16px;
	margin-top:20px;
	border:none;
	box-shadow: ${props => props.isDisable ? `none`: `1, 2, 3 #000`};
`;


/* const StyledButton = styled.button`
	border-radius: 6px;
	padding:10px 12px;
	background: red;
	color:#333;
	font-size:12px;
	line-height: 16px;
	margin-top:20px;
	border:none;
`; */