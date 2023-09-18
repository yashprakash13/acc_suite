import { useRef, useState } from "react"
import Logo from "./assets/logo"
import {
  EnvelopeOpenIcon,
  DocumentArrowDownIcon,
  BoltIcon,
} from "@heroicons/react/24/outline"
import img2 from "./assets/sc2.png"

function App() {
  const subscriptionPlansRef = useRef(null)
  const [faqList, setFaqList] = useState([
    {
      q: "Why shouldn't I hire a full-time technical writer instead?",
      a: "Great question! Well, the annual cost hiring a full-time writer is around $100,000/year, plus other benefits. Even if you take the plunge and hire one, you may not have enough work to keep them busy at all times. \n However, with the monthly plan, you can pause and resume your subscription whenever you need to ensure you're only paying when you need some writing work done.",
    },
    {
      q: "Why are your prices so low?",
      a: "We wanted to keep a good balance of profitability for us and affordability for you. This is why we're starting out with an offer that is slightly lower than industry standards.",
    },
    {
      q: "How does the pause feature work in the monthly subscription?",
      a: "We understand that you may not have enough writing work for the entire month, that's why our billing cycles work on a 30-day basis. So if your work is done and you decide to pause the subscription on the 20th of the month, you will still have 10 days left to request more work whenever you need it in the future.",
    },
    {
      q: "What softwares do you use for writing?",
      a: "All writing work is done in Google docs which are shared with you as requests are completed.",
    },
    {
      q: "What if I want changes in a draft?",
      a: "No problem! We offer unlimited revisions on the draft so that you have exactly what you need at the end.",
    },
    {
      q: "How fast will my writing be delivered?",
      a: "The typical turn around time for each request is about 3-5 days or less, however more complex requests may take more time.",
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
    <div className="container mx-auto box-border bg-primary w-full h-full overflow-x-hidden ">
      {/* section 1 */}
      <div className="relative flex flex-col justify-center items-center p-3">
        <Logo classes={"w-40 h-11 md:w-52 md:h-20"} />
        <div className="mt-24 text-3xl md:text-5xl font-serif text-center md:text-center leading-loose md:leading-relaxed">
          High Quality Technical Writing as a Subscription.
        </div>
        <div className="mt-7 text-xl md:text-2xl text-center">
          Blogs, guides, tutorials and more for your SaaS business.
        </div>
        <div
          onClick={handleScrollClick}
          className="mt-11 text-xl md:text-2xl text-white bg-black px-11 md:px-16 py-3 md:py-4 shadow-sm md:shadow-lg  cursor-pointer hover:-translate-y-2 hover:shadow-xl transition-all"
        >
          See plans
        </div>
        <div className="mt-11 text-md font-thin text-center">
          Work that'll engage and wow, guaranteed.
        </div>
      </div>

      {/* divider */}
      <div className="flex w-full gap-3 items-center mt-28 mb-5 p-3">
        <div className="text-xs md:text-sm text-lightHighlight opacity-40 font-serif tracking-[0.2em]">
          HOW IT WORKS
        </div>
        <div className="w-full border-lightHighlight border-[0.8px] opacity-10 basis-1/2 md:basis-2/3 lg:basis-3/4"></div>
      </div>

      {/* section 2 */}
      <div className="relative flex flex-col justify-center items-center bg-secondary h-fit px-1 z-50">
        <div className="text-3xl md:text-4xl font-serif text-center leading-loose md:leading-relaxed">
          Writing that your engineers <br />
          will love
        </div>
        <div className="mt-7 text-lg md:text-xl text-center mx-4 md:mx-0">
          ...obtained in 3 easy steps
        </div>
        <div className="mt-11 md:mt-24 flex flex-col md:flex-row gap-14 md:gap-10 mb-20 justify-center items-center md:items-start">
          <div className="z-50 flex flex-col gap-3 justify-center items-center">
            <EnvelopeOpenIcon className="w-10 h-10" />
            <div className="text-xl text-center">
              Subscribe to a plan and request <br />
              as many jobs as you'd like
            </div>
          </div>
          <div className="flex flex-col gap-3 justify-center items-center">
            <DocumentArrowDownIcon className="w-10 h-10" />
            <div className="text-xl text-center">
              Start receiving your work within a <br />
              few business days
            </div>
          </div>
          <div className="flex flex-col gap-3 justify-center items-center">
            <BoltIcon className="w-10 h-10" />
            <div className="text-xl text-center">
              We'll revise your drafts until <br />
              you're 100% satisfied.
            </div>
          </div>
        </div>
      </div>

      {/* divider */}
      <div className="flex w-full gap-3 items-center mt-28 mb-5 p-3">
        <div className="text-xs md:text-sm text-lightHighlight opacity-40 font-serif tracking-[0.2em]">
          FEATURES
        </div>
        <div className="w-full border-lightHighlight border-[0.8px] opacity-10 basis-1/2 md:basis-2/3 lg:basis-3/4"></div>
      </div>

      {/* section 3 */}
      <div className="z-50  text-2xl md:text-4xl font-serif text-center leading-loose md:leading-relaxed">
        Artistically inspired, written by human engineers.
      </div>
      <div className="mt-16 flex flex-wrap gap-11 w-full justify-center items-center p-2 md:p-0">
        {/* section 3 */}
        <div className="w-96 border border-lightHighlight rounded-full px-9 md:px-11 py-3 md:py-7 text-xl md:text-2xl  h-40 md:h-52 text-center inline-flex justify-center items-center  hover:underline hover:-rotate-3 transition-all">
          Adaptable writing styles to match your brand, tone and target
          audience.
        </div>
        <div className="w-96 border border-lightHighlight rounded-full px-9 md:px-11 py-3 md:py-7 text-xl md:text-2xl h-40 md:h-52 text-center inline-flex justify-center items-center hover:underline hover:rotate-3 transition-all">
          No hidden fees or charges, the monthly subscription is all you pay.
        </div>
        <div className="w-96 border border-lightHighlight rounded-full px-9 md:px-11 py-3 md:py-7 text-xl md:text-2xl h-40 md:h-52 text-center inline-flex justify-center items-center  hover:underline hover:-rotate-3 transition-all">
          Quick turn around time, usually just a few business days.
        </div>
        <div className="w-96 border border-lightHighlight rounded-full px-9 md:px-11 py-3 md:py-7 text-xl md:text-2xl h-40 md:h-52 text-center inline-flex justify-center items-center  hover:underline hover:-rotate-3 transition-all">
          No more meetings to add to your busy day. We work completely async.
        </div>
      </div>

      {/* divider */}
      <div className="flex w-full gap-3 items-center mt-40 mb-5 p-3">
        <div className="text-xs md:text-sm text-lightHighlight opacity-40 font-serif tracking-[0.2em]">
          WHAT YOU GET
        </div>
        <div className="w-full border-lightHighlight border-[0.8px] opacity-10 basis-1/2 md:basis-2/3 lg:basis-3/4"></div>
      </div>

      {/* section 4 */}
      <div className="w-full relative flex flex-col justify-center items-center bg-secondary h-fit p-3 z-50">
        <div className="text-2xl md:text-4xl font-serif text-center leading-loose md:leading-relaxed">
          Forget about unreliable freelancers and expensive agencies.
        </div>
        <div className="mt-14 flex flex-col justify-center items-center gap-7">
          <img
            src={img2}
            alt=""
            className="max-w-full h-auto rounded-tl-3xl rounded-tr-3xl"
          />
          <div className="flex flex-wrap gap-3 justify-center items-center">
            <div className="bg-[#fafafa] text-blue-800 text-lg font-medium px-3.5 py-1 inline-flex justify-center items-center rounded border-lightHighlight border-[0.8px] border-opacity-20">
              Articles
            </div>
            <div className="bg-[#fafafa] text-blue-800 text-lg font-medium px-3.5 py-1 inline-flex justify-center items-center rounded border-lightHighlight border-[0.8px] border-opacity-20">
              Landing page copy
            </div>
            <div className="bg-[#fafafa] text-blue-800 text-lg font-medium px-3.5 py-1 inline-flex justify-center items-center rounded border-lightHighlight border-[0.8px] border-opacity-20">
              Tutorials
            </div>
            <div className="bg-[#fafafa] text-blue-800 text-lg font-medium px-3.5 py-1 inline-flex justify-center items-center rounded border-lightHighlight border-[0.8px] border-opacity-20">
              Guides
            </div>
            <div className="bg-[#fafafa] text-blue-800 text-lg font-medium px-3.5 py-1 inline-flex justify-center items-center rounded border-lightHighlight border-[0.8px] border-opacity-20">
              Documentation
            </div>
            <div className="bg-[#fafafa] text-blue-800 text-lg font-medium px-3.5 py-1 inline-flex justify-center items-center rounded border-lightHighlight border-[0.8px] border-opacity-20">
              Product descriptions
            </div>
            <div className="bg-[#fafafa] text-blue-800 text-lg font-medium px-3.5 py-1 inline-flex justify-center items-center rounded border-lightHighlight border-[0.8px] border-opacity-20">
              Email content
            </div>
            <div className="bg-[#fafafa] text-blue-800 text-lg font-medium px-3.5 py-1 inline-flex justify-center items-center rounded border-lightHighlight border-[0.8px] border-opacity-20">
              Full website audits
            </div>
            <div className="bg-[#fafafa] text-blue-800 text-lg font-medium px-3.5 py-1 inline-flex justify-center items-center rounded border-lightHighlight border-[0.8px] border-opacity-20">
              Social content
            </div>
            <div className="bg-[#fafafa] text-blue-800 text-lg font-medium px-3.5 py-1 inline-flex justify-center items-center rounded border-lightHighlight border-[0.8px] border-opacity-20">
              ... and anything else you need
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-around items-start">
            <div className="flex flex-col gap-3 basis-1/2 p-2 md:p-5 text-center">
              <div className="text-3xl  font-medium">
                Manage requests with Trello
              </div>
              <div className="text-lg">
                All of our communications are async. Manage your queue of
                requests, active and completed tasks on a Trello board private
                to you.
              </div>
            </div>
            <div className="flex flex-col gap-3 basis-1/2 p-2 md:p-5 text-center">
              <div className="text-3xl font-medium">
                Invite unlimited team members
              </div>
              <div className="text-lg">
                It's easy to invite any number of team members that you want so
                that they can issue and track requests within your Trello
                workspace.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* divider */}
      <div className="flex w-full gap-3 items-center mt-40 mb-5 p-3">
        <div className="text-xs md:text-sm text-lightHighlight opacity-40 font-serif tracking-[0.2em]">
          PRICING
        </div>
        <div className="w-full border-lightHighlight border-[0.8px] opacity-10 basis-1/2 md:basis-2/3 lg:basis-3/4"></div>
      </div>

      {/* section 5 */}
      <div className="flex justify-center items-center p-3">
        <div
          className="relative flex flex-col gap-5 justify-center items-center md:justify-center md:items-center bg-secondary w-full"
          ref={subscriptionPlansRef}
        >
          <div className="flex flex-col gap-5 justify-center items-center">
            <div className="text-3xl md:text-4xl font-serif text-center">
              Membership levels
            </div>
            <div className="text-lg md:text-xl lg:text-2xl text-center">
              Choose a plan that's right for you
            </div>
          </div>
          <div className="w-full flex flex-col lg:flex-row gap-3 mt-11">
            <div className="w-full p-7 md:p-11 bg-[#fafafa] border-lightHighlight border-[0.8px] border-opacity-20 flex flex-col text-center">
              <div className="font-serif text-2xl md:text-3xl">Standard</div>
              <div className="text-lg md:text-xl mt-5">
                One request at a time. Pause or cancel anytime.
              </div>
              <div className="text-3xl md:text-4xl mt-9 font-bold">
                $1,200/m
              </div>
              <div className="text-sm md:text-md mt-2 text-lightHighlight">
                Pause or cancel anytime
              </div>
              <a
                href="https://buy.stripe.com/3cs6rg8sX7jX4vK8wx"
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
              <div className="mt-7 text-sm md:text-md font-serif font-bold text-left">
                What's included:
              </div>
              <ul class="mt-2 space-y-1 text-md lg:text-lg list-disc list-inside text-left">
                <li>One request at a time</li>
                <li>An average 3 - 5 days delivery</li>
                <li>Unlimited requests in the queue</li>
                <li>Unlimited revisions</li>
                <li>Unlimited team members in workspace</li>
                <li>Easy credit card payments</li>
              </ul>
            </div>
            <div className="w-full p-7 md:p-11 bg-[#fafafa] border-lightHighlight border-[0.8px] border-opacity-20 flex flex-col text-center">
              <div className="font-serif text-2xl md:text-3xl">Premium</div>
              <div className="text-lg md:text-xl mt-5">
                Two requests at a time. Pause or cancel anytime.
              </div>
              <div className="text-3xl md:text-4xl mt-9 font-bold">
                $2,200/m
              </div>
              <div className="text-sm md:text-md mt-2 text-lightHighlight">
                Pause or cancel anytime
              </div>
              <a
                href="https://buy.stripe.com/3cs6rg8sXfQtd2gfZ0"
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
              <div className="mt-7 text-sm md:text-md font-serif font-bold text-left">
                What's included:
              </div>
              <ul class="mt-2 space-y-1 text-md lg:text-lg list-disc list-inside text-left">
                <li>Two requests at a time</li>
                <li>An average 3 - 5 days delivery</li>
                <li>Unlimited requests in the queue</li>
                <li>Unlimited revisions</li>
                <li>Unlimited team members in workspace</li>
                <li>Easy credit card payments</li>
              </ul>
            </div>
          </div>
          <div className="mt-7 border border-lightHighlight w-1/3 opacity-10"></div>
          <div className="w-full p-7 text-center">
            <div className="font-serif text-lg lg:text-xl">Book a call</div>
            <div className="mt-3 text-md lg:text-lg">
              Find out how Acceleration Suite works and why it's the easiest way
              to acquire quality technical content for your business.
            </div>
            <a
              href="https://cal.com/yash-accsuite/15min"
              target="_blank"
              className="text-lg mt-5 px-7 py-3 bg-black inline-flex justify-center text-white cursor-pointer"
            >
              Book a call
            </a>
          </div>
        </div>
      </div>

      {/* divider */}
      <div className="flex w-full gap-3 items-center mt-40 mb-5 p-3">
        <div className="text-xs md:text-sm text-lightHighlight opacity-40 font-serif tracking-[0.2em]">
          QUES & ANS ?
        </div>
        <div className="w-full border-lightHighlight border-[0.8px] opacity-10 basis-1/2 md:basis-2/3 lg:basis-3/4"></div>
      </div>

      {/* section 6 */}
      <div className="relative flex flex-col gap-16 p-3">
        <div className="text-3xl md:text-4xl font-serif text-center leading-relaxed">
          Get your questions answered
        </div>
        <div className="flex flex-col gap-1 justify-center items-center">
          {faqList.map((item, i) => (
            <div className="bg-[#fafafa] mb-2 px-5 py-8 w-full border-lightHighlight border-[0.8px] border-opacity-20">
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
        <div className="flex flex-col justify-center items-center p-3">
          <div
            onClick={handleScrollClick}
            className="mt-7 text-xl md:text-2xl text-white bg-black px-11 md:px-16 py-3 md:py-4 shadow-sm md:shadow-lg  cursor-pointer hover:-translate-y-2 hover:shadow-xl transition-all"
          >
            See plans
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="p-7 mt-36 flex flex-col md:flex-row gap-5 justify-center items-center md:justify-around text-lightHighlight">
        <div className="text-sm font-serif">Acceleration suite</div>
        <div className="text-sm font-serif text-center">
          Copyright 2023-24. All rights reserved.
        </div>
      </div>
    </div>
  )
}

export default App
