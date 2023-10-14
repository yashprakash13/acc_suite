import React, { useEffect } from "react"

const ThanksPage = () => {
  useEffect(() => {
    window.gtag("event", "form_submitted", {
      event_category: "access",
      event_label: "form_submitted_successfully",
    })
  }, [])
  return (
    <div className="flex h-screen items-center font-serif text-xl md:text-2xl ml-5 md:ml-16">
      We have your submission. Thank you for you choosing to work with us.{" "}
      <br />
      <br />
      We'll get back to you with an onboarding email shortly.
    </div>
  )
}

export default ThanksPage
