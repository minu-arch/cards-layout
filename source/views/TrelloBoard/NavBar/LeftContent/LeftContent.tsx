import { Box, HStack } from "styled-system/jsx"
import { Input } from "~/ui/input"

const LeftContent = () => {
	return (
		<Box p="1" color="neutral.12" borderRadius="8">
			<HStack>
				<Box position="relative">
					<Input
						id="name"
						size="xs"
						bg="blue.10"
						style={{
							border: "none",
						}}
					/>
					<svg
						style={{
							position: "absolute",
							right: "8px",
							top: "50%",
							transform: "translateY(-50%)",
							pointerEvents: "none",
						}}
						height="24px"
						viewBox="0 -960 960 960"
						width="24px"
						fill="#e8eaed"
					>
						<path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
					</svg>
				</Box>
			</HStack>
		</Box>
	)
}

export default LeftContent
