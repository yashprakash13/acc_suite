import Logo from "./assets/logo"
import Img1 from "./assets/1.png"
import Img2 from "./assets/2.png"
import Img3 from "./assets/3.png"
import Img4 from "./assets/4.png"
import SaveIcon from "./assets/save"
import Envelope from "./assets/envelope"
import Code from "./assets/code"
import Vector2 from "./assets/vector2"
import Vector1 from "./assets/vector1"
import Vector3 from "./assets/vector3.svg"
import Vector4 from "./assets/vector4.svg"
import Vector5 from "./assets/vector5.svg"
import Vector6 from "./assets/vector6.svg"
import Vector7 from "./assets/vector7.svg"
import MePhoto from "./assets/black_and_white.jpg"
import Vector8 from "./assets/vector8.svg"

import { Parallax, ParallaxProvider } from "react-scroll-parallax"

function App() {
  return (
    <ParallaxProvider>
      <div className="box-border bg-primary w-full h-full overflow-x-hidden ">
        <div className="relative flex flex-col justify-center items-center">
          {/* section 1 */}
          <Logo classes={"w-40 h-11 md:w-52 md:h-20"} />
          <div className="mt-24 text-3xl md:text-5xl font-serif text-center md:text-center">
            Web Design For Influence.
          </div>
          <div className="mt-7 text-xl md:text-2xl text-center">
            Web design and development for your business.
          </div>
          <a
            href="https://cal.com/yash-accsuite/20min"
            target="_blank"
            className="mt-11 text-xl md:text-2xl text-white bg-black px-11 md:px-16 py-3 md:py-4 shadow-sm md:shadow-lg  cursor-pointer hover:-translate-y-2 hover:shadow-xl transition-all"
          >
            Book a free call
          </a>
          <div className="mt-11 text-md font-thin text-center">
            Designs that'll get you customers, guaranteed.
          </div>
          <Parallax translateX={["100px", "-200px"]}>
            <div className="flex gap-3 mt-20 mb-9 w-full">
              <img
                src={Img1}
                alt=""
                className="basis-1/3 h-[200px] md:h-[300px] lg:h-[400px]"
              />
              <img
                src={Img2}
                alt=""
                className="basis-1/3 h-[200px] md:h-[300px] lg:h-[400px]"
              />
              <img
                src={Img4}
                alt=""
                className="basis-1/3 h-[200px] md:h-[300px] lg:h-[400px]"
              />
              <img
                src={Img3}
                alt=""
                className="basis-1/3 h-[200px] md:h-[300px] lg:h-[400px]"
              />
            </div>
          </Parallax>
          <Vector1 />
          <Vector2 />
        </div>
        <div className="relative my-11 flex flex-col justify-center items-center bg-secondary h-full px-1 z-50">
          {/* section 2 */}
          <div className="mt-28 text-2xl md:text-4xl font-serif text-center leading-loose md:leading-relaxed">
            Designs that'll make your <br />
            brand stand apart
          </div>
          <img
            src={Vector5}
            alt=""
            className="mt-3 mb-11 w-24 md:w-36 lg:w-42 -rotate-6"
          />
          <div className="mt-7 text-lg md:text-xl text-center mx-4 md:mx-0">
            We'll either build you a brand new website or revamp your existing
            one. <br /> Whatever works for you.{" "}
          </div>
          <div className="mt-20 flex flex-col md:flex-row gap-14 md:gap-10 mb-28 justify-center items-start">
            <div className="z-50 flex flex-col gap-3 justify-center items-center">
              <SaveIcon />
              <div className="text-xl text-center">
                Subscribe to a plan and request <br />
                as many jobs as you'd like
              </div>
            </div>
            <div className="flex flex-col gap-3 justify-center items-center">
              <Envelope />
              <div className="text-xl text-center">
                Receive your designs within a <br />
                few business days
              </div>
            </div>
            <div className="flex flex-col gap-3 justify-center items-center">
              <Code />
              <div className="text-xl text-center">
                We'll revise your designs until <br />
                you're satisfied. Then we'll <br /> develop it for you
              </div>
            </div>
          </div>
          <img
            src={Vector3}
            className="-z-50 w-36 h-36 md:w-52 md:h-52 lg:w-64 lg:h-64 absolute bottom-[-5%] left-[65%] md:bottom-[-13%] md:left-[80%] lg:bottom-[-10%] lg:left-[83%] -rotate-45"
          />
          <img
            src={Vector4}
            className="-z-50 w-32 h-32 md:w-40 md:h-40 lg:w-64 lg:h-64 absolute bottom-[-5%] left-[-5%] md:bottom-[-10%] md:left-[-3%] lg:bottom-[-15%] lg:left-[-3%]"
          />
        </div>
        <div className="z-50 mt-28 text-2xl md:text-4xl font-serif text-center leading-loose md:leading-relaxed">
          Design + Development + Optimization. <br />
          Together.
        </div>
        <div className="mt-20"></div>
        <div className="z-20 flex flex-wrap gap-11 w-full justify-center items-center p-2 md:p-0">
          {/* section 3 */}
          <div className="z-20 border-4 border-lightHighlight rounded-full px-9 md:px-11 py-3 md:py-7 text-lg md:text-2xl w-96 h-42 text-center inline-flex justify-center items-center shadow-xxl">
            Design that is uniquely tailored to your brand, delivered lightning
            fast.
          </div>
          <div className="border-4 border-lightHighlight rounded-full px-9 md:px-11 py-3 md:py-7 text-lg md:text-2xl w-96 h-42 text-center inline-flex justify-center items-center shadow-xxl">
            Website analytics to optimize your website for conversions.
          </div>
          <div className="border-4 border-lightHighlight rounded-full px-9 md:px-11 py-3 md:py-7 text-lg md:text-2xl w-96 h-42 text-center inline-flex justify-center items-center shadow-xxl">
            Persuasive copy to go along with your brand and attract more
            customers.
          </div>
          <div className="border-4 border-lightHighlight rounded-full px-9 md:px-11 py-3 md:py-7 text-lg md:text-2xl w-96 h-42 text-center inline-flex justify-center items-center shadow-xxl">
            Optimize your sales funnel so that visitors find your offer
            irresistable.
          </div>
        </div>
        <div className="relative z-20 mt-20 flex justify-center items-center">
          <a
            href="https://cal.com/yash-accsuite/20min"
            target="_blank"
            className=" z-20 text-xl md:text-2xl text-white bg-black px-11 md:px-16 py-3 md:py-4 shadow-sm md:shadow-lg cursor-pointer hover:-translate-y-2 hover:shadow-xl transition-all"
          >
            Book a free call
          </a>
          <img
            src={Vector6}
            alt=""
            className="-z-5 absolute w-36 h-36 md:w-42 md:h-56 lg:w-56 lg:h-42 bottom-[-350%] lg:bottom-[-400%] rotate-180"
          />
        </div>
        <div className="mt-32 flex justify-center items-center">
          {/* section 4 */}
          <div className="relative flex flex-col lg:flex-row p-3 md:p-32 lg:py-48 gap-11 justify-center items-center md:justify-center md:items-center bg-secondary w-[1200px]">
            <div className="basis-1/3 mt-20 md:mt-0 text-2xl md:text-3xl font-serif">
              Hey, it's Yash
            </div>
            <img
              src={Vector7}
              alt=""
              className="-z-2 w-40 h-40 md:w-60 md:h-60 lg:w-80 lg:h-80 absolute top-[85%] left-[-15%] md:top-[80%] md:left-[-7%] lg:top-[80%] lg:left-[-13%] rotate-45"
            />
            <img
              src={MePhoto}
              alt=""
              className="basis-1/4 w-36 md:w-40 h-auto rounded-md"
            />
            <div className="basis-1/2 mb-24 md:mb-0 z-50 text-lg md:text-xl text-center">
              Your designer and developer with more than five years of
              experience in making stunning websites. <br />
              <br /> Helping businesses establish their identity and grow makes
              me happy and I'm always eager to help in any way I can, so feel
              free to reach out!
            </div>
          </div>
        </div>
        <div className="md:my-32 my-20 flex flex-col gap-16 p-1">
          <div className="text-2xl md:text-3xl font-serif text-center leading-relaxed">
            Get your questions answered and let's work together!
          </div>
          <div className="relative z-20 flex justify-center items-center">
            <a
              href="https://cal.com/yash-accsuite/20min"
              target="_blank"
              className="z-20 text-xl md:text-2xl text-white bg-black px-11 md:px-16 py-3 md:py-4 shadow-sm md:shadow-lg cursor-pointer hover:-translate-y-2 hover:shadow-xl transition-all"
            >
              Book a free call
            </a>
            <img
              src={Vector8}
              alt=""
              className="z-20 absolute w-10 h-10 lg:w-16 lg:h-16 md:w-14 md:h-14 right-[1%] top-[160%] lg:right-[30%] lg:top-[100%] md:right-[15%] md:top-[140%]"
            />
          </div>
        </div>
        {/* <div className="w-full border-lightHighlight border my-24 opacity-50"></div> */}
        <div className="p-7 flex flex-col md:flex-row gap-5 justify-center items-center md:justify-around text-lightHighlight">
          <div className="text-sm font-serif">Acceleration suite</div>
          <div className="text-sm font-serif text-center">
            Copyright 2023-24. All rights reserved.
          </div>
        </div>
      </div>
    </ParallaxProvider>
  )
}

export default App
