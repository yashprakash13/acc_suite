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
import Vector8 from "./assets/vector8.svg"
import Vector9 from "./assets/vector9.svg"
import Vector10 from "./assets/vector10.svg"
import Vector11 from "./assets/vector11.svg"
import Vector12 from "./assets/vector12.svg"
import Vector13 from "./assets/vector13.svg"
import Vector14 from "./assets/vector14.svg"

import Presentation1 from "./assets/presentation1.svg"
import Presentation2 from "./assets/presentation2.svg"
import Presentation3 from "./assets/presentation3.svg"
import Presentation4 from "./assets/presentation4.svg"

import { Parallax, ParallaxProvider } from "react-scroll-parallax"

import { useRef, useState } from "react"

function App() {
  const subscriptionPlansRef = useRef(null)
  const [faqList, setFaqList] = useState([
    {
      q: "Why shouldn't I hire a full-time designer instead?",
      a: "Great question! Well, the annual cost hiring a full-time designer exceeds $100,000/year, plus other benefits. Even if you take the plunge and hire one, you may not have enough work to keep them busy at all times. \n However, with the monthly plan, you can pause and resume your subscription whenever you need to ensure you're only paying when you need some design work done.",
    },
    {
      q: "How does the pause feature work in the monthly subscription?",
      a: "We understand that you may not have enough design work for the entire month, that's why our billing cycles work on a 30-day basis. So if your work is done and you decide to pause the subscription on the 20th of the month, you will still have 10 days left to request more work whenever you need it in the future.",
    },
    {
      q: "What softwares do you use for design?",
      a: "All design work is done in Figma.",
    },
    {
      q: "What if I want changes in a design?",
      a: "No problem! We offer unlimited revisions on the design so that you have exactly what you need at the end.",
    },
    {
      q: "Do you offer web development services as well?",
      a: "Custom web development work can be purchased as an add-on after subscribing to a design subscription. Development work will either be done in a no-code tool such as Webflow or Framer or with custom code with frontend frameworks like React.",
    },
    {
      q: "How fast will my designs be delivered?",
      a: "The typical turn around time for each request is about 2 days or less, however more complex designs may take more time.",
    },
    {
      q: "Are there any refunds if I don't like the service?",
      a: "Since the nature of the work is high quality, there will be no refunds issued.",
    },
  ])

  const [selected, setSelected] = useState(null)
  function toggleAccordion(i) {
    if (selected === i) {
      return setSelected(null)
    }
    setSelected(i)
  }

  function handleScrollClick() {
    subscriptionPlansRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <ParallaxProvider>
      <div className="box-border bg-primary w-full h-full overflow-x-hidden ">
        <div className="relative flex flex-col justify-center items-center">
          {/* section 1 */}
          <Logo classes={"w-40 h-11 md:w-52 md:h-20"} />
          <div className="mt-24 text-3xl md:text-5xl font-serif text-center md:text-center leading-relaxed md:leading-loose">
            Product Design Subscriptions <br /> For Startups and Agencies.
          </div>
          <div className="mt-7 text-xl md:text-2xl text-center">
            Stunning designs for the face of your business.
          </div>
          <div
            onClick={handleScrollClick}
            className="mt-11 text-xl md:text-2xl text-white bg-black px-11 md:px-16 py-3 md:py-4 shadow-sm md:shadow-lg  cursor-pointer hover:-translate-y-2 hover:shadow-xl transition-all"
          >
            See plans
          </div>
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
        <div className="relative my-11 flex flex-col justify-center items-center bg-secondary h-fit py-11 px-1 z-50">
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
            We'll either build you a brand new design for your website and app
            or revamp your existing one. <br /> Whatever works for you.{" "}
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
                you're satisfied.
              </div>
            </div>
          </div>
          <img
            src={Vector3}
            className="-z-50 w-36 h-36 md:w-52 md:h-52 lg:w-64 lg:h-64 absolute bottom-[-5%] left-[65%] md:bottom-[-13%] md:left-[80%] lg:bottom-[-10%] lg:left-[88%] -rotate-45"
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
          <div className="z-20 border-4 border-lightHighlight rounded-full px-9 md:px-11 py-3 md:py-7 text-lg md:text-2xl w-96 h-42 text-center inline-flex justify-center items-center shadow-xxl hover:underline hover:rotate-3 transition-all">
            Design that is uniquely tailored to your brand, delivered lightning
            fast.
          </div>
          <div className="border-4 border-lightHighlight rounded-full px-9 md:px-11 py-3 md:py-7 text-lg md:text-2xl w-96 h-42 text-center inline-flex justify-center items-center shadow-xxl hover:underline hover:-rotate-3 transition-all">
            Custom code and no-code development for your website as an add-on.
          </div>
          <div className="border-4 border-lightHighlight rounded-full px-9 md:px-11 py-3 md:py-7 text-lg md:text-2xl w-96 h-42 text-center inline-flex justify-center items-center shadow-xxl hover:underline hover:rotate-3 transition-all">
            Integrate analytics to optimize your website for conversions.
          </div>
          <div className="border-4 border-lightHighlight rounded-full px-9 md:px-11 py-3 md:py-7 text-lg md:text-2xl w-96 h-42 text-center inline-flex justify-center items-center shadow-xxl hover:underline hover:-rotate-3 transition-all">
            Optimize your sales funnel so that visitors find your offer
            irresistable.
          </div>
        </div>

        <div className="relative z-20 mt-20 flex justify-center items-center">
          <div
            onClick={handleScrollClick}
            className=" z-20 text-xl md:text-2xl text-white bg-black px-11 md:px-16 py-3 md:py-4 shadow-sm md:shadow-lg cursor-pointer hover:-translate-y-2 hover:shadow-xl transition-all"
          >
            See plans
          </div>
          <img
            src={Vector6}
            alt=""
            className="-z-5 absolute w-36 h-36 md:w-42 md:h-56 lg:w-56 lg:h-42 bottom-[-350%] lg:bottom-[-400%] rotate-180"
          />
        </div>
        <div className="mt-32 flex justify-center items-center">
          {/* section 4 */}
          <div
            className="relative flex flex-col p-3 md:p-11 lg:py-48 gap-11 justify-center items-center md:justify-center md:items-center bg-secondary w-full"
            ref={subscriptionPlansRef}
          >
            <div className="flex flex-col gap-5 justify-center items-center mt-20 lg:mt-9">
              <div className="text-2xl md:text-3xl lg:text-4xl font-serif text-center">
                Membership levels
              </div>
              <div className="text-lg md:text-xl lg:text-2xl text-center">
                Choose a plan that's right for you
              </div>
              <img src={Vector9} alt="" className="w-3/5 h-12 md:h-16 " />
            </div>
            <div className="w-full flex flex-col lg:flex-row gap-3">
              <div className="w-full p-7 md:p-11 bg-primary flex flex-col">
                <div className="font-serif text-2xl md:text-3xl">Standard</div>
                <div className="text-lg md:text-xl mt-5">
                  One request at a time. Pause or cancel anytime.
                </div>
                <div className="text-3xl md:text-4xl mt-9 font-bold">
                  $3,500/m
                </div>
                <div className="text-sm md:text-md mt-2 text-lightHighlight">
                  Pause or cancel anytime
                </div>
                <a
                  href="https://buy.stripe.com/dR6bLA38DfQt8M07sv"
                  className="mt-11 z-20 text-xl md:text-2xl text-white text-center bg-black px-11 md:px-16 py-5 md:py-4 shadow-sm md:shadow-lg cursor-pointer hover:-translate-y-2 hover:shadow-xl transition-all"
                >
                  Get started
                </a>
                <a
                  href="https://cal.com/yash-accsuite/15min"
                  target="_blank"
                  className="mt-7 text-md md:text-lg text-lightHighlight"
                >
                  Book a call
                </a>
                <div className="mt-7 border border-lightHighlight w-full opacity-10"></div>
                <div className="mt-7 text-sm md:text-md font-serif font-bold">
                  What's included:
                </div>
                <ul class="mt-2 space-y-1 text-md lg:text-lg list-disc list-inside">
                  <li className="font-bold">One request at a time</li>
                  <li>An average 48 hour delivery</li>
                  <li>Unlimited requests in the queue</li>
                  <li>Unlimited revisions</li>
                  <li>Unlimited team members in workspace</li>
                  <li>Easy credit card payments</li>
                </ul>
              </div>
              <div className="w-full p-7 md:p-11 bg-primary flex flex-col">
                <div className="font-serif text-2xl md:text-3xl">Premium</div>
                <div className="text-lg md:text-xl mt-5">
                  Two requests at a time. Pause or cancel anytime.
                </div>
                <div className="text-3xl md:text-4xl mt-9 font-bold">
                  $4,220/m
                </div>
                <div className="text-sm md:text-md mt-2 text-lightHighlight">
                  Pause or cancel anytime
                </div>
                <a
                  href="https://buy.stripe.com/9AQ2b038D1ZD7HWfZ2"
                  className="mt-11 z-20 text-xl md:text-2xl text-white text-center bg-black px-11 md:px-16 py-5 md:py-4 shadow-sm md:shadow-lg cursor-pointer hover:-translate-y-2 hover:shadow-xl transition-all"
                >
                  Get started
                </a>
                <a
                  href="https://cal.com/yash-accsuite/15min"
                  target="_blank"
                  className="mt-7 text-md md:text-lg text-lightHighlight"
                >
                  Book a call
                </a>
                <div className="mt-7 border border-lightHighlight w-full opacity-10"></div>
                <div className="mt-7 text-sm md:text-md font-serif font-bold">
                  What's included:
                </div>
                <ul class="mt-2 space-y-1 text-md lg:text-lg list-disc list-inside">
                  <li className="font-bold">Two requests at a time</li>
                  <li>An average 48 hour delivery</li>
                  <li>Unlimited requests in the queue</li>
                  <li>Unlimited revisions</li>
                  <li>Unlimited team members in workspace</li>
                  <li>Easy credit card payments</li>
                </ul>
              </div>
              <div className="w-full p-7">
                <div className="font-serif text-lg lg:text-xl">Book a call</div>
                <div className="mt-3 text-md lg:text-lg">
                  Find out how Acceleration Suite works and why it's right for
                  your design needs
                </div>
                <a
                  href="https://cal.com/yash-accsuite/15min"
                  target="_blank"
                  className="mb-11 md:mb-5 text-lg mt-5 px-7 py-3 bg-black inline-flex justify-center text-white cursor-pointer"
                >
                  Book a call
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="relative md:my-32 my-20 flex flex-col gap-16 p-1">
          <img
            src={Vector10}
            alt=""
            className="absolute w-1/2 h-14 md:h-24 -rotate-90 top-[-3%] right-[-10%] md:top-[-5%] lg:top-[-5%]"
          />
          <img
            src={Vector13}
            alt=""
            className="absolute h-24 md:h-44 lg:h-64 rotate-12 top-[-3%] left-[-4%] md:top-[-5%] lg:top-[-6%]"
          />
          <img
            src={Vector14}
            alt=""
            className="absolute w-1/2 h-24 md:h-44 lg:h-64 rotate-12 top-[-3%] right-[-20%] md:top-[-5%] lg:top-[-6%]"
          />
          <div className="text-2xl md:text-3xl lg:text-4xl font-serif text-center leading-relaxed">
            Get your questions answered
          </div>
          <div className="flex flex-col gap-1 justify-center items-center">
            {faqList.map((item, i) => (
              <div className="mb-2 px-5 py-8 w-full border-lightHighlight border-[1px] border-opacity-40">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleAccordion(i)}
                >
                  <div className="font-serif text-lg md:text-xl">{item.q}</div>
                  <span>{selected === i ? "-" : "+"}</span>
                </div>
                <div
                  className={`text-lg ${
                    selected === i
                      ? "h-auto max-h-96 transition-accordShow mt-5"
                      : "max-h-0 overflow-hidden transition-accordHide"
                  }`}
                >
                  {item.a}
                </div>
              </div>
            ))}
          </div>

          <div className="relative w-full flex flex-col justify-center items-center p-3 mt-7 md:mb-14 bg-white ">
            <img
              src={Vector12}
              alt=""
              className="absolute w-1/2 h-24 md:h-32 top-[-1%] left-[-10%] md:left-[-15%] md:top-[-3%] lg:top-[-2%] lg:left-[-20%]"
            />
            <div className="text-3xl font-serif text-center px-3 leading-relaxed md:leading-normal md:px-11 mt-7 md:mt-11 pt-5 md:pt-11 pb-5">
              Design Agency <span className="underline">without</span> the
              headaches
            </div>
            <div className="text-xl text-center mt-3">
              We replace unreliable freelancers and expensive agencies with{" "}
              <br /> one flat monthly fee.
            </div>
            <div className="flex flex-col md:flex-row gap-2 md:gap-4 md:p-3 mt-11 ">
              <img
                src={Presentation1}
                alt=""
                className="md:w-1/2 w-full h-[700px] basis-1/2 md:basis-1 "
              />
              <img
                src={Presentation4}
                alt=""
                className="md:w-1/2 w-full h-[700px] basis-1/2 md:basis-1 "
              />
            </div>
            <div className="flex flex-col md:flex-row w-full pt-5 md:pt-16 md:pl-7 justify-center md:justify-around items-center gap-11">
              <div className="flex flex-col justify-center md:justify-end items-center md:w-[300px] md:h-[300px] basis-1/2">
                <img
                  src={Vector11}
                  alt=""
                  className="-z-5  w-[350px] h-[350px] "
                />
                <a
                  href="https://www.figma.com/proto/xh9ExXadd4DUSUgQZFMiQE/recent-work-~?page-id=0%3A1&type=design&node-id=16-689&viewport=920%2C321%2C0.22&t=LKalGvwlBc80eqAJ-1&scaling=contain&starting-point-node-id=16%3A689&mode=design"
                  target="_blank"
                  className="z-20 text-xl md:text-2xl text-white bg-black px-11 md:px-16 py-3 md:py-4 shadow-sm md:shadow-lg cursor-pointer hover:-translate-y-2 hover:shadow-xl transition-all"
                >
                  View Recent Work
                </a>
              </div>
              <div className="flex flex-col gap-3 basis-1/2 p-5 md:p-11">
                <div className="text-3xl font-bold">Fully async</div>
                <div className="text-lg">
                  We abhor meetings as much as you do. So much so that we work
                  completely async.
                </div>
                <div className="mt-9 text-3xl font-bold">
                  Manage requests with Trello
                </div>
                <div className="text-lg">
                  Manage your queue of requests, active and completed tasks on a
                  Trello board private to you.
                </div>
                <div className="mt-9 text-3xl font-bold">
                  Invite unlimited team members
                </div>
                <div className="text-lg">
                  It's easy to invite any number of team members you want in the
                  Trello workspace.
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-2 md:gap-4 md:p-3 mt-11 ">
              <img
                src={Presentation3}
                alt=""
                className="md:w-1/2 w-full h-[700px] basis-1/2 md:basis-1 "
              />
              <img
                src={Presentation2}
                alt=""
                className="md:w-1/2 w-full h-[700px] basis-1/2 md:basis-1 "
              />
            </div>
          </div>
          <div className="relative z-20 flex flex-col gap-11 justify-center items-center">
            <div className="text-3xl md:text-3xl leading-relaxed md:leading-normal font-serif text-center pt-3 px-3">
              See how Acceleration suite is right for you
            </div>
            <div className="text-xl md:text-2xl leading-relaxed md:leading-normal text-center pb-3 px-3">
              Take your team and your business on an easier path to <br />
              acquiring stunning design work.
            </div>
            <div
              onClick={handleScrollClick}
              className="z-20 text-xl md:text-2xl text-white bg-black px-11 md:px-16 py-3 md:py-4 shadow-sm md:shadow-lg cursor-pointer hover:-translate-y-2 hover:shadow-xl transition-all"
            >
              Get started
            </div>
            <img
              src={Vector8}
              alt=""
              className="z-20 absolute w-10 h-10 lg:w-16 lg:h-16 md:w-14 md:h-14 right-[20%] top-[110%] lg:right-[30%] lg:top-[100%] md:right-[25%] md:top-[110%]"
            />
          </div>
        </div>

        {/* <div className="w-full border-lightHighlight border my-24 opacity-50"></div> */}
        <div className="p-7 mt-36 flex flex-col md:flex-row gap-5 justify-center items-center md:justify-around text-lightHighlight">
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
