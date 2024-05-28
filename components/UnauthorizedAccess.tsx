const UnauthorizedAccess = ({ message }: { message: string }) => {
	return (
		<div className="p-2">
			<p className="font-jost italic text-secondary-dark text-lg text-center">
				{message}
			</p>
		</div>
	);
};

export default UnauthorizedAccess;
