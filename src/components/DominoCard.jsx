import React from "react";
import { Card, Box, Wrap, Divider } from "@chakra-ui/react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

export default function DominoCard(props) {
	let isDouble = props.domino.arr[0] === props.domino.arr[1]

	let showDouble = isDouble && props.showDouble

	
	const [parent, enableAnimations] = useAutoAnimate(/* optional config */);
	return (
		<>
			<Card
				ref={parent}
				height={"9em"}
				display={"flex"}
				direction={"column"}
				width={"5em"}
				bgColor={showDouble ? 'gray.300' : 'gray.100'}
				color={"white"}
			>
				<Dots number={props.domino.arr[0]} />
				<Divider borderColor={'red.600'} />
				<Dots number={props.domino.arr[1]} />
			</Card>
		</>
	);
}

function Dots(props) {
	return (
		<>
			<Box
				height={"49%"}
				display={"flex"}
				justifyContent={"center"}
				alignItems={"center"}
				padding={"1em"}
			>
				<Wrap gap={"2"} justify={"center"}>
					{[...Array(props.number)].map((d, id) => {
						return (
							<Box
								bgColor={"red.600"}
								key={id}
								width={3}
								height={3}
								rounded={"full"}
							></Box>
						);
					})}
				</Wrap>
			</Box>
		</>
	);
}
