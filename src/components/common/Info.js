import Button from "./Button";
const Info = () => {
	return (
		<div className="border-[#D3DEE9] border bg-[#F7FAFC] flex p-4 rounded-md mt-5 mx-5">
			<div className="w-[70%] flex gap-3">
				<img className="h-10 mt-1" src="/avatar.png" alt="" />
				<div className="flex flex-col ">
					<h1 className="text-base text-[#262626] font-bold">John</h1>
					<p className="text-sm">(88) 99602-2404</p>
				</div>
			</div>
			<div className="w-[30%]">
				<Button
					customClass="max-h-[40px] rounded-md text-sm font-bold border border-[#EDF2F7] bg-[#EDF2F7]"
					text={"Log out"}
				/>
			</div>
		</div>
	);
};

export default Info;