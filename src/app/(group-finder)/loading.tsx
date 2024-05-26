export default function Loading() {
	return (
		<div className="flex justify-center items-center h-screen">
			<div className="border-gray-900 border-t-2 border-b-2 rounded-full w-32 h-32 animate-spin">
				<span className="sr-only">Loading...</span>
			</div>
		</div>
	);
}
