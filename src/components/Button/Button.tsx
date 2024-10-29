type ButtonProps = {
	type: 'link' | 'btn'
	className: string
	text: string
	icon: JSX.Element
	url: string | undefined
}

const Button: React.FC<ButtonProps> = ({
	type,
	className,
	text,
	icon,
	url,
}) => {
	if (type === 'link') {
		return (
			<a href={url} className={className}>
				<span>{text}</span>
				{icon}
			</a>
		)
	} 
	if (type === 'btn') {
		return (
			<button className={className}>
				<span>{text}</span>
				{icon}
			</button>
		)
	} 
}

export default Button
