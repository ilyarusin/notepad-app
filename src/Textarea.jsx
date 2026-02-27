import styled from 'styled-components';

const StyledTextArea = styled.textarea`
    width: 400px;
	height: 500px;
	padding: 10px;
	position: absolute;
    left: 400px;
	border-radius: 5px;
	box-shadow: 0 5px 20px rgba(80,0,0,.3);
	font: inherit;
	font-size: .75em;
	color: rgba(0,0,0,.7);
	margin: 0;
	display: block;
	box-sizing: border-box;
	border-radius: 0 0 5px 5px;
	border-color: rgba(0,0,0,.7);
	border-top: 0;
	resize: vertical;
	min-height: 150px;
	padding: 1.5em;
	padding-left: 3em;
	background-image: linear-gradient(0deg, transparent, transparent 24px, #f0c9ca 24px, #f0c9ca 25px, transparent 25px, transparent 27px, #f0c9ca 27px, #f0c9ca 28px, transparent 28px), linear-gradient(#fff, #fff 17px, #e3ebf3 17px, #e3ebf3 18px);
	background-size: 36px 18px, 36px 18px;
	background-repeat: repeat-y, repeat;
	margin-top: 48px;
`;

const H1 = styled.h1`
		text-align: center;
		font-size: 1em;
		background-color: #3f7eb6;
		background-image: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,.15));
		border-radius: 5px 5px 0 0;
		box-shadow: inset 0 1px rgba(255,255,255,.3);
		border: 1px solid rgba(0,0,0,.5);
		padding: .75em;
		color: #fff;
		text-shadow: 0 1px 1px rgba(0,0,0,.2);
		margin: 0;
		position: absolute;
		left: 400px;
		width: 400px;
		box-sizing: border-box;
`;

function Textarea({ handleBlur, text, handleChange }) {
	return <>
		<H1>Блокнот</H1>
		<StyledTextArea id="textarea" onBlur={(event) => handleBlur(event)} value={text} onChange={(event) => handleChange(event)} />
	</>;
}

export default Textarea;