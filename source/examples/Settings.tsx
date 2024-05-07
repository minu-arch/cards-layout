import { Container, Stack } from "styled-system/jsx"
import { Button, Card, Switch, Text } from "~/ui"

export default () => (
	<Container maxW="md" py="6">
		<Card.Root boxShadow="xs">
			<Card.Header>
				<Card.Title>Notifications</Card.Title>
				<Card.Description>Manage when you'll receive notifications.</Card.Description>
			</Card.Header>
			<Card.Body gap="4">
				<Stack direction="row" justifyContent="space-between">
					<Stack gap="0.5">
						<Text size="sm" fontWeight="medium">
							Disputes
						</Text>
						<Text size="sm" color="fg.muted">
							Receive a notification if a payment is disputed by a customer.
						</Text>
					</Stack>
					<Switch defaultChecked />
				</Stack>
				<Stack direction="row" justifyContent="space-between">
					<Stack gap="0.5">
						<Text size="sm" fontWeight="medium">
							Fraudulent payments
						</Text>
						<Text size="sm" color="fg.muted">
							Receive a notification if Radar detects a fraudulent payment on your
							account.
						</Text>
					</Stack>
					<Switch defaultChecked />
				</Stack>
				<Stack direction="row" justifyContent="space-between">
					<Stack gap="0.5">
						<Text size="sm" fontWeight="medium">
							Successful payments
						</Text>
						<Text size="sm" color="fg.muted">
							Receive a notification for every successful payment.
						</Text>
					</Stack>
					<Switch />
				</Stack>
			</Card.Body>
			<Card.Footer>
				<Button variant="outline" width="full">
					Save Preferences
				</Button>
			</Card.Footer>
		</Card.Root>
	</Container>
)
