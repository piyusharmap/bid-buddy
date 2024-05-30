const UnauthorizedAccess = ({ message }: { message: string }) => {
	return (
		<div className="p-2">
			<p className="italic text-lg text-center text-red-500">{message}</p>
		</div>
	);
};

export default UnauthorizedAccess;
