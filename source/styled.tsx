// import type { DynamicComponentType } from "~/types"
import type { PropsWithChildren, ElementType } from "react"
import { createContext, useContext, createElement } from "react"
import { styled } from "styled-system/jsx"

export type AnyRecipe = {
	(props?: Record<string, unknown>): Record<string, string>
	splitVariantProps: (props: Record<string, unknown>) => any
}

export function toClasses<T extends string>(styledPart: T, classList?: string) {
	return classList ? `${styledPart} ${classList}` : styledPart
}

export function createStyledContext<T extends AnyRecipe, R = ReturnType<T>>(
	styledRecipe: T
) {
	const StyledContext = createContext<R>({} as R)

	function useStyled<E extends ElementType, P extends keyof R>(
		element: E,
		part: P,
		classList?: string
	) {
		const styledMap = useContext(StyledContext) as R
		const classes = toClasses(styledMap[part] as string, classList)
		const Styled = styled(element)

		return { Styled, classes, styled, styledRecipe }
	}

	useStyled.withAsComponent = <E extends ElementType, P extends keyof R>(
		element: E,
		part: P,
		classList?: string
	) => {
		const styledMap = useContext(StyledContext) as R
		const classes = toClasses(styledMap[part] as string, classList)
		const Styled = styled(props => createElement(element, props))

		return { Styled, classes, styled, styledRecipe }
	}

	function StyledProvider(props: PropsWithChildren<{ value: R }>) {
		return (
			<StyledContext.Provider value={props.value}>
				{props.children}
			</StyledContext.Provider>
		)
	}

	return { StyledProvider, useStyled, styled, styledRecipe }
}

export { styled }
export default styled
