import LogoCenter from "./LogoCenter/LogoCenter"
import RightContent from "./RightContent/RightContent"
import LeftContent from "./LeftContent/LeftContent"
import { HStack } from "styled-system/jsx"
import React, { useState } from "react"

const NavBar = () => {
	const [show, setShow] = useState(false)
	const toggleIcon = () => {
		setShow(!show)
	}
	return (
		<HStack p="1" bg="blue.8" w="full" justifyContent="space-between">
			<LeftContent />

			<LogoCenter />

			<RightContent show={show} toggleIcon={toggleIcon} />
		</HStack>
	)
}

export default NavBar
