import { useEffect, useState, useRef } from "react"
import "intl-tel-input/build/css/intlTelInput.css"
import intlTelInput from "intl-tel-input"

// SMS sending statuses
const STATUSES = {
  IDLE: "",
  FAILED: "Failed to send SMS",
  PENDING: "Sending SMS...",
  SUCCEEDED: "Finished sending SMS",
}

function SmsSender ({readText}) {
  const [smsText, setSmsText] = useState(readText)
  const [iti, setIti] = useState(null)
  const [smsSendingStatus, setSmsSendingStatus] = useState(STATUSES.IDLE)
  const inputRef = useRef(null)

  // Initialize International Telephone Input
  const init = () => intlTelInput(inputRef.current, {
    initialCountry: "us"
  })

  // Initialize International Telephone Input after render
  useEffect(() => {
    setIti(init())
  }, [])

  // Request to send SMS
  const sendSMS = async () => {
    setSmsSendingStatus(STATUSES.PENDING)
    const country = iti.getSelectedCountryData()
    const num = `+${country.dialCode}${iti.telInput.value}`
    await fetch("/send-sms", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ to: num, text: smsText }),
    }).then((response) => {
      // Check successful request status
      if (response.status === 200) {
        setSmsSendingStatus(STATUSES.SUCCEEDED)
      } else {
        setSmsSendingStatus(STATUSES.FAILED)
      }
    }).catch(() => {
      // Catch network errors
      setSmsSendingStatus(STATUSES.FAILED)
    })
  }

  // Send SMS when the send button is clicked
  const handleSubmit = e => {
    e.preventDefault()
    e.stopPropagation()
    sendSMS()
  }

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>Edit the recognized text:</div>
        <div>
          <textarea
            rows="15"
            cols="45"
            name="name"
            defaultValue={readText}
            onChange={e => setSmsText(e.target.value)}
          />
        </div>
        <input
          ref={inputRef} 
          id="phone"
          name="phone"
          type="tel"
        />
        <div>
          <button disabled={smsSendingStatus == "Sending SMS..."} type="submit">Send SMS</button>
        </div>
      </form>
      <div className="status">
        {smsSendingStatus}
      </div>
    </div>
  )
}

export default SmsSender