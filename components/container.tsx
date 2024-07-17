interface IContainerProps {
	children?: React.ReactNode
	className?: string
}

export default function Container(props: IContainerProps) {
	const { children, className } = props

	return (
		<div className={`w-full max-w-[1310px] mx-auto px-10 ${className || ""}`}>
			{children}
		</div>
	)
}