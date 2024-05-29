"use client";

import { useParams } from "next/navigation";

const UserItems = () => {
	const params = useParams();

	return (
		<div className="max-w-7xl mx-auto px-5 py-4">
			{Object.entries(params).map(([key, value]) => (
				<p key={key}>
					{key}: {value}
				</p>
			))}
		</div>
	);
};

export default UserItems;
