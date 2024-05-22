import {
	Heading,
	Flex,
	Button,
	Container,
	Box,
	Input,
} from "@chakra-ui/react";

import {
	countDoubleNumber,
	source,
	flip,
	fullDeck,
} from "./utils";
import { useEffect, useMemo, useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import DominoCard from "./components/DominoCard";

export default function App() {
	const [dominoes, setDominoes] = useState(() => [...source]);
	const [parent, enableAnimations] = useAutoAnimate({ duration: 2000 });

	const doubles = useMemo(() => countDoubleNumber(dominoes), [dominoes]);

	const handleFlip = () => {
		const flipped = flip(dominoes);
		setDominoes(flipped);
	};

	const handleReset = () => {
		setDominoes(() => [...source]);
	};

	const handleRemoveDupe = () => {
		const seen = new Set();
		const duplicates = new Set();

		dominoes.forEach((domino) => {
			const sorted = [...domino.arr];
			const key = sorted.sort().toString();
			if (seen.has(key)) {
				duplicates.add(key);
			} else {
				seen.add(key);
			}
		});

		console.log(seen);
		console.log(duplicates);

		setDominoes((next) =>
			next.filter((domino) => {
				const sorted = [...domino.arr];
				const key = sorted.sort().toString();
				return !duplicates.has(key);
			})
		);
	};

	const asc = () => {
		setDominoes((next) =>
			next
				.slice()
				.sort((a, b) => a.arr[0] - b.arr[0])
				.sort((a, b) => a.arr[0] + a.arr[1] - (b.arr[0] + b.arr[1]))
		);
	};

	const desc = () => {
		setDominoes((next) =>
			next
				.slice()
				.sort((a, b) => b.arr[0] - a.arr[0])
				.sort((a, b) => b.arr[0] + b.arr[1] - (a.arr[0] + a.arr[1]))
		);
	};

	const setFullDeck = () => {
		setDominoes([...fullDeck]);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const next = dominoes.filter(
			(d) => d.arr[0] + d.arr[1] !== +e.currentTarget.target.value
		);
		setDominoes([...next]);
		e.currentTarget.target.value = 0;
	};

	return (
		<Container maxW={"container.xl"} paddingY={"4"}>
			<Flex
				padding={"8"}
				gap={"4"}
				align={"center"}
				direction={"column"}
				flexWrap={"wrap"}
			>
				<Box
					display={"flex"}
					ref={parent}
					gap={"4"}
					flexWrap={"wrap"}
					// maxH={'464px'}
					justifyContent={"center"}
				>
					{dominoes.map((domino, id) => {
						return <DominoCard showDouble key={domino.id} domino={domino} />;
					})}
				</Box>
				<Heading>Double Numbers: {doubles}</Heading>
				<Flex direction={"column"} gap={"3"}>
					<Flex gap={"2"}>
						<Button onClick={setFullDeck}>Set Full Deck</Button>
						<Button onClick={asc}>Sort (ASC)</Button>
						<Button onClick={desc}>Sort (DESC)</Button>
						<Button onClick={handleFlip}>Flip</Button>
						<Button onClick={handleRemoveDupe}>Remove Duplicate</Button>
						<Button onClick={handleReset}>Reset</Button>
						<form onSubmit={handleSubmit} style={{ display: "flex", gap: "1em" }}>
							<Input defaultValue={0} name="target" type="number" />
							<Button type="submit">Remove</Button>
						</form>
					</Flex>
				</Flex>
			</Flex>
		</Container>
	);
}
