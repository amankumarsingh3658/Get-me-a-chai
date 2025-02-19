import Image from "next/image";

export default function Home() {
  return <>
    <div className="flex flex-col items-center justify-center text-white py-10 gap-4">
      <div className="font-bold text-5xl flex justify-center items-center">
        Buy Me a Chai <span><Image width={60} height={60} src={"/tea.gif"} alt="tea"></Image></span>
      </div>
      <p>A CrowdFunding platform for creators. Get Funded by your fans and followers</p>
      <div className="button flex gap-5">
        <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Here</button>
        <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button>
      </div>
    </div>
    <div className="bg-white h-1 opacity-10"></div>
    <div className="text-white container mx-auto py-10 space-y-8">
      <h1 className="text-white text-2xl font-bold text-center">Your Fans can Buy You a chai</h1>
      <div className="flex justify-around gap-5">
        <div className="text-white space-y-3 flex flex-col justify-center items-center">
          <img className="bg-slate-400 rounded-full p-2" width={88} src="/man.gif" alt="" />
          <p>Fans Want To Help</p>
          <p>Your fans are availabe to help you</p>
        </div>
        <div className="text-white space-y-3 flex flex-col justify-center items-center">
          <img className="bg-slate-400 rounded-full p-2" width={88} src="/coin.gif" alt="" />
          <p>Fans Want To Help</p>
          <p>Your fans are availabe to help you</p>
        </div>
        <div className="text-white space-y-3 flex flex-col justify-center items-center">
          <img className="bg-slate-400 rounded-full p-2" width={88} src="/group.gif" alt="" />
          <p>Fans Want To Help</p>
          <p>Your fans are availabe for you to help you</p>
        </div>
      </div>
    </div>
    <div className="bg-white h-1 opacity-10"></div>
    <div className="text-white container mx-auto space-y-8 py-10 flex flex-col justify-center items-center">
      <h1 className="text-white text-2xl font-bold text-center">Learn More About Us</h1>
      <iframe width="660" height="315" src="https://www.youtube.com/embed/PaF7QuGhLp0?si=S5iwbr2UKk51dp1-" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
  </>
}