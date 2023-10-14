import Arrow from "./assets/arrow"
import Lightning from "./assets/lightning"
import Logo from "./assets/logo.png"

function App() {
  return (
    <div className="box-border w-full h-full">
      <div className="flex flex-col h-screen justify-center items-start ml-5 md:ml-16">
        <img src={Logo} alt="" className="w-14 h-14" />
        <div className="mt-12 text-3xl md:text-4xl lg:text-5xl font-serif leading-[3rem] md:leading-loose">
          From Ideas to Interaction
        </div>
        <div className="text-lg md:text-xl lg:tex-2xl font-serif mt-5 lg:mt-5 w-4/5 md:w-3/4 lg:w-1/2 leading-[1.975rem] md:leading-[2.2rem]">
          We do custom web design and development for founders and creators to
          build their vision a strong online foundation with acceleration.
        </div>
        <a
          className="bg-[#fdd5d5] text-lg md:text-xl px-11 pt-2 pb-1 text-black border-[2.5px] mt-9 border-black font-serif inline-flex justify-center items-center gap-2 cursor-pointer hover:bg-[#f6b3b3]"
          href="https://tally.so/r/wgqQbl"
          target="_blank"
        >
          Get started <Arrow classes={"w-10 md:w-12 h-10 md:h-12"} />
        </a>
        <div className="flex gap-3 mt-5 justify-center items-center">
          <Lightning classes={"w-6 h-6 text-[#fdd5d5]"} />
          <div className="text-sm font-serif mt-2">Limited availability</div>
        </div>
      </div>
    </div>
  )
}

export default App
