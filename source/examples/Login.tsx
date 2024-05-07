import { XIcon } from "lucide-react"
import { IconButton } from "~/ui/icon-button"
import { Box, Circle, HStack, Stack, Container } from "styled-system/jsx"
import { FormLabel } from "~/ui/form-label"
import { Input } from "~/ui/input"
import { Button } from "~/ui/button"
import * as Card from "~/ui/card"
import { Text } from "~/ui/text"
import { Link } from "~/ui/link"
import { Checkbox } from "~/ui/checkbox"

const Login = () => {
	return (
		<Container maxW="md" py="6">
			<Card.Root borderRadius="9" bg="sky.2" p="4">
				<HStack justifyContent="space-between">
					<HStack>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 48 48"
							width="34px"
							height="34x"
							baseProfile="basic"
						>
							<linearGradient
								id="Xems3PEryynYH1sXF-VSqa"
								x1="24"
								x2="24"
								y1="44"
								y2="4"
								gradientUnits="userSpaceOnUse"
							>
								<stop offset="0" stop-color="#cc1b4e" />
								<stop offset="1" stop-color="#ed3675" />
							</linearGradient>
							<path
								fill="url(#Xems3PEryynYH1sXF-VSqa)"
								d="M28.915,29.767C28.48,31.746,26.42,33.249,24,33.25c-2.56-0.001-4.516-1.508-4.922-3.491	c-0.082-0.398,0.235-0.771,0.641-0.771h8.557C28.685,28.988,29.003,29.367,28.915,29.767z M24.003,33.25c-0.001,0-0.002,0-0.003,0	s-0.002,0-0.003,0H24.003z M19.555,19.565c-1.775,2.137-3.253,4.123-3.701,5.96c-0.448,1.681-1.187,2.443-2.52,2.443	c-1.478,0-4.149-2.137-4.446-5.654c-0.297-3.517,1.775-5.966,3.555-7.184c1.781-1.219,5.633-1.831,7.111,0.156	C19.555,15.286,21.481,17.272,19.555,19.565z M17.011,19.003c0-0.571-0.428-1.003-1.003-1.003C15.434,18,15,18.437,15,19.003	s0.434,0.992,1.008,0.992V20C16.577,20,17.011,19.574,17.011,19.003z M24.037,27.536c0.313,0.139,3.413-1.033,3.413-2.506	c0-0.885-2.52-1.03-3.415-1.03c-0.896,0-3.404,0.145-3.404,1.03C20.484,26.503,23.729,27.675,24.037,27.536z M35.545,15.13	c2.408,1.508,3.784,4.288,3.555,7.184c-0.442,3.517-3.102,5.654-4.44,5.654c-1.338,0-2.072-0.612-2.52-2.443	c-0.448-1.681-1.78-3.829-3.707-5.966c-1.926-2.137,0-4.273,0-4.273C29.918,13.299,33.77,13.911,35.545,15.13z M33,19.005	c0-0.57-0.432-1-1-1s-1,0.435-1,1S31.427,20,32,20C32.568,20,33,19.575,33,19.005z M43.997,24.063c0,0.029,0.003,0.058,0.003,0.087	c-0.006,10.134-7.663,18.477-17.546,19.684c-0.767,0.094-1.544,0.155-2.336,0.16C24.078,43.994,24.04,44,24,44c0,0,0,0,0,0	c-0.885,0-1.75-0.077-2.604-0.189c-9.811-1.274-17.393-9.583-17.396-19.667c0-0.028,0.003-0.055,0.003-0.082	C4.003,24.041,4,24.021,4,24c0-0.088,0.012-0.172,0.013-0.26c0.006-0.478,0.03-0.953,0.072-1.426	c0.023-0.279,0.055-0.555,0.09-0.832c0.027-0.202,0.059-0.403,0.092-0.603c0.451-2.872,1.497-5.543,3.033-7.872	c-1.042-1.02-1.647-2.404-1.671-3.861C5.682,6.267,8.065,3.969,10.966,4c1.79,0,3.311,0.765,4.237,2.059C17.86,4.753,20.839,4,24,4	c3.163,0,6.142,0.754,8.801,2.061C33.719,4.771,35.25,4,37.035,4c2.967,0,5.336,2.206,5.336,5.146c0,1.56-0.566,2.972-1.67,3.864	c1.53,2.32,2.573,4.979,3.027,7.838c0.027,0.167,0.054,0.334,0.077,0.502c0.046,0.342,0.086,0.685,0.114,1.033	c0.034,0.408,0.052,0.82,0.062,1.234C43.983,23.747,44,23.871,44,24C44,24.021,43.997,24.042,43.997,24.063z M42,24	c0-9.925-8.075-18-18-18S6,14.075,6,24s8.075,18,18,18S42,33.925,42,24z"
							/>
						</svg>
						<Text size="md" fontWeight="bold">
							Flowbite Panda
						</Text>
					</HStack>
					<IconButton variant="ghost" size="sm">
						<XIcon />
					</IconButton>
				</HStack>
				<Text size="md" fontWeight="normal" color="neutral.12" marginTop="5">
					Join over <FormLabel fontWeight="bold"> 74,000 </FormLabel> developers and
					designers.
				</Text>
				<HStack marginTop="5" justifyContent="center" p="3">
					<Box
						bg="sky.2"
						_hover={{ bg: "slate.8" }}
						borderWidth="1px"
						borderColor="neutral.4"
						borderRadius="8"
						cursor="pointer"
					>
						<HStack
							display="flex"
							alignItems="center"
							justifyContent="center"
							maxWidth="sm"
							paddingTop="2"
							paddingRight={{ base: "14", sm: "10" }}
							paddingBottom="2"
							paddingLeft={{ base: "14", sm: "10" }}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								width="28px"
								height="28px"
							>
								<path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.6,5,2.5,9.3,6.9,10.7v-2.3c0,0-0.4,0.1-0.9,0.1c-1.4,0-2-1.2-2.1-1.9 c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1c0.4,0,0.7-0.1,0.9-0.2 c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6c0,0,1.4,0,2.8,1.3 C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4c0.7,0.8,1.2,1.8,1.2,3 c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v3.3c4.1-1.3,7-5.1,7-9.5C22,6.1,16.9,1.4,10.9,2.1z" />
							</svg>
							<Text size="sm" fontWeight="bold">
								<Link href="https://github.com" textDecoration="none">
									GitHub
								</Link>
							</Text>
						</HStack>
					</Box>
					<Box
						bg="indigo.8"
						_hover={{ bg: "indigo.10" }}
						borderRadius="8"
						cursor="pointer"
					>
						<HStack
							display="flex"
							alignItems="center"
							justifyContent="center"
							maxWidth="md"
							paddingTop="2"
							paddingRight={{ base: "14", sm: "10" }}
							paddingBottom="2"
							paddingLeft={{ base: "14", sm: "10" }}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 48 48"
								width="28px"
								height="28px"
							>
								<path
									fill="#fbc02d"
									d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
								/>
								<path
									fill="#e53935"
									d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
								/>
								<path
									fill="#4caf50"
									d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
								/>
								<path
									fill="#1565c0"
									d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
								/>
							</svg>

							<Text size="sm" fontWeight="bold">
								<Link href="https://google.com" textDecoration="none">
									GooGle
								</Link>
							</Text>
						</HStack>
					</Box>
				</HStack>
				<HStack justifyContent="center" gap="6" marginTop="5">
					<Box
						bg="indigo.12"
						width="100%"
						maxWidth="md"
						borderWidth="1.5px"
						borderColor="neutral.4"
						borderRadius="8"
					></Box>
					<Text size="md" fontWeight="bold">
						or
					</Text>
					<Box
						bg="indigo.12"
						maxWidth="md"
						width="100%"
						borderWidth="1.5px"
						borderColor="neutral.4"
						borderRadius="8"
					></Box>
				</HStack>
				<Stack gap="1.5" width="3xs">
					<FormLabel htmlFor="name">Email</FormLabel>
					<Input
						id="email"
						placeholder="JohnDoe@exemple.com"
						bg="neutral.5"
						color="neutral.11"
						_focus={{ borderColor: "blue.10" }}
						borderRadius="8"
					/>
					<FormLabel htmlFor="name">Password</FormLabel>
					<Input
						id="password"
						type="password"
						placeholder="••••••••"
						bg="neutral.5"
						color="neutral.11"
						_focus={{ borderColor: "blue.10" }}
						borderRadius="8"
					/>
					<FormLabel htmlFor="name">Repet Password</FormLabel>
					<Input
						id="repetpassword"
						type="password"
						placeholder="••••••••"
						bg="neutral.5"
						color="neutral.11"
						_focus={{ borderColor: "neutral.12" }}
						borderRadius="8"
					/>
				</Stack>
				<Stack marginTop="5">
					<Checkbox colorPalette="blue" size="sm">
						<Text size="sm" fontWeight="normal" color="neutral.10">
							I want to receive promotional offers (no spam).
						</Text>
					</Checkbox>

					<Checkbox colorPalette="blue" size="sm">
						<Text size="sm" fontWeight="normal" color="neutral.10">
							I agree to all the{" "}
							<Link
								color="blue.10"
								textDecoration="underline"
								href="#"
								_hover={{ textDecoration: "none" }}
							>
								Terms
							</Link>{" "}
							and{" "}
							<Link
								color="blue.10"
								textDecoration="underline"
								_hover={{ textDecoration: "none" }}
								href="#"
							>
								Privacy Policy.
							</Link>
						</Text>
					</Checkbox>
				</Stack>
				<Button
					bg="blue.10"
					size="md"
					width="100%"
					borderRadius="8"
					_hover={{ bg: "#1d4ed8" }}
					marginTop="5"
				>
					Create an Account
				</Button>
				<Text
					size="sm"
					fontWeight="normal"
					color="neutral.10"
					marginTop="5"
					textAlign="center"
				>
					Already have an account?{" "}
					<Link
						color="blue.10"
						textDecoration="underline"
						_hover={{ textDecoration: "none" }}
						href="#"
					>
						Sign in
					</Link>
				</Text>
			</Card.Root>
		</Container>
	)
}

export default Login
