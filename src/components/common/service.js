import Button from "./Button";
import TextInput from "./TextInput";

const Service = () => {
    return (
        <div className="">
            <div className="px-5">

                <h1 className="py-3 leading-[54px] font-[700] text-lg text-[#262626]">Selected service</h1>
                <div className="flex items-center gap-3 border-[1px] border-[#D3DEE9] p-4 rounded-lg">
                    <div>
                        <img className="w-[70px] h-[60px] rounded-lg" alt="japimg" src="/japImg.png"></img>
                    </div>
                    <div>
                        <div className="">
                            <h1 className="mb-1 text-[#262626] font-bold">Japanese lessons</h1>
                            <div className="flex items-center gap-2 text-[#718096]">
                                <img className="h-3.5" src="/vector.png" alt="" />
                                <p className="text-xs">Nov 7 2020 11:30</p>
                            </div>
                            <div className="flex items-center gap-2 text-[#718096]">
                                <img className="h-3.5" src="/vector (1).png" alt="" />
                                <p className="text-[#718096] text-xs mb-1">Client's place</p>
                            </div>
                            <h1 className="mb-1 text-[#262626] font-bold">Rp 350.000</h1>
                        </div>
                    </div>
                </div>
                <div className="">
                    <TextInput placeholder={"Enter address"} customClass="outline-none" labelText={"Enter your location"} inputStyle={"outline-none border-[1px] border-[#D3DEE9] !h-12"} />
                    <TextInput placeholder={"Enter text here"} customClass="outline-none" labelText={"Note (optional)"} labelStyle={""} inputStyle={"outline-none border-[1px] border-[#D3DEE9] !h-12"} />
                </div>
                <div>
                    <h1 className="text-[#262626] py-5 mt-8 font-bold text-xl">Choose a way to pay</h1>
                </div>
                <div className="flex justify-betwee my-2">
                    <Button customClass="border  mr-2 font-semibold !h-12 rounded md text-[#262626] bg-[#EDF2F7] hover:bg-white hover:border-black w-1/2" text={"Credit card"} />
                    <Button customClass="border ml-2 font-semibold !h-12 rounded md text-[#262626] bg-[#EDF2F7] hover:bg-white hover:border-black w-1/2" text={"Cash"} />
                </div>
                <div className="w-[48%]">
                    <Button customClass="border font-semibold !h-12 rounded md px-5 text-[#262626] bg-[#EDF2F7] hover:bg-white hover:border-black" text={"eWallet/Virtual bank"} />

                </div>
                <div className="flex gap-2 px- mt-4">
                    <div><input type="checkbox" /></div>
                    <p className="text-xs text-[#718096] w-64">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <span className="text-[#1E21FF]">do eiusmod</span></p>
                </div>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between mt-5 items-center px-3 mb-3">
                <p className="text-[#262626]">Previous</p>
                <Button customClass="border !w-24 !h-10 bg-[#1E21FF] text-white rounded-md text-sm" text={"Next"} />
            </div>
        </div>
    );
}

export default Service;