import { Box, HStack, Stack } from "styled-system/jsx"
import { Text } from "~/ui/text"
import * as Accordion from "~/ui/accordion"
import { ChevronDownIcon } from "lucide-react"

const FaqAccordion = () => {
	const items = [
		{
			question: "What is Trinity Financial?",
			answer:
				"Trinity Financial is an innovative financial platform that offers personalized investment solutions and retirement planning services.",
		},
		{
			question: "How does Trinity Financial work?",
			answer:
				"Trinity Financial provides users with tools to set financial goals, manage investments, and plan for retirement. Users can access educational resources, track their progress, andreceive personalized recommendations.",
		},
		{
			question: "Is Trinity Financial secure?",
			answer:
				"Yes, Trinity Financial prioritizes security and employs bank-level encryption to protect users' sensitive financial information. Additionally, the platform offers two-factor authentication for enhanced security.",
		},
		{
			question: "What investment options does Trinity Financial offer?",
			answer:
				"Trinity Financial offers a range of investment options, including stocks, bonds, mutual funds, ETFs, and retirement accounts like IRAs and 401 (k)s.",
		},
		{
			question: "Can I access Trinity Financial on my mobile device?",
			answer:
				"Yes, Trinity Financial is optimized for mobile devices, allowing users to access their accounts, track investments, and manage portfolios on the go.",
		},
		{
			question: "How does Trinity Financial help with retirement planning?",
			answer:
				"Trinity Financial offers tools and resources to help users set retirement goals, optimize savings strategies, and create personalized retirement plans tailored to their needs and preferences.",
		},
		{
			question: "Does Trinity Financial provide financial advice?",
			answer:
				"While Trinity Financial offers educational resources and personalized recommendations, it does not provide personalized financial advice. Users should consult with a financial advisor for individualized guidance.",
		},
	]

	return (
		<>
			<Box
				mt="8"
				w="100%"
				h="auto"
				bg="neutral.12"
				borderRadius="2xl"
				p="5"
				position="relative"
				overflow="hidden"
			>
				<Stack
					flexDirection={{ base: "column", "@lg": "row" }}
					w="100%"
					justifyContent="space-between"
					gap="5"
				>
					<Box>
						<Text
							as="h1"
							fontSize={{ base: "xl", "@md": "2xl", "@lg": "3xl", "@xxl": "3xl" }}
							color="grass.7"
							wordBreak="break-word"
							whiteSpace="pre-wrap"
							fontWeight="medium"
						>
							Questions & Answers
						</Text>
						<Text
							as="p"
							fontSize={{ base: "md", "@md": "lg" }}
							color="grass.7"
							wordBreak="break-word"
							whiteSpace="pre-wrap"
							fontWeight="light"
						>
							Learn more about what Trinity has to offer or feel free to contact us at
							support@trinity.com
						</Text>
					</Box>
					<Box
						w={{
							base: "100%",
							"@md": "70%",
						}}
					>
						<Accordion.Root>
							{items.map((item, id) => (
								<Accordion.Item key={id} value={id.toString()}>
									<Accordion.ItemTrigger
										fontSize={{ base: "sm", "@md": "md" }}
										color="grass.7"
										wordBreak="break-word"
										whiteSpace="pre-wrap"
										fontWeight="normal"
									>
										{item.question}
										<Accordion.ItemIndicator>
											<ChevronDownIcon />
										</Accordion.ItemIndicator>
									</Accordion.ItemTrigger>
									<Accordion.ItemContent
										fontSize={{ base: "sm", "@md": "md" }}
										color="grass.7"
										wordBreak="break-word"
										whiteSpace="pre-wrap"
										fontWeight="light"
									>
										{item.answer}
									</Accordion.ItemContent>
								</Accordion.Item>
							))}
						</Accordion.Root>
					</Box>
				</Stack>
			</Box>
		</>
	)
}

export default FaqAccordion
