'use client'

import { Input } from "@nextui-org/react"
import { MobileIcon } from "@radix-ui/react-icons"
import { useEffect, useState } from "react"

const phoneCodes = [
  { code: "+1", country: "US" },
  { code: "+44", country: "UK" },
  { code: "+49", country: "DE" },
  { code: "+91", country: "IN" },
  { code: "+81", country: "JP" },
]

export function PhoneNumberInput({ onChange = () => { } }: { onChange?: Function }) {
  const [selectedCode, setSelectedCode] = useState(phoneCodes[0].code)
  const [phoneNumber, setPhoneNumber] = useState("")

  useEffect(() => {
    onChange(selectedCode + phoneNumber)
  }, [selectedCode, phoneNumber])

  return (
    <div className="flex h-[50px] items-center w-full max-w-md">
      {/* Country Code Selector */}
      <select onChange={(e) => setSelectedCode(e.target.value)} 
      className="p-2 h-full bg-neutral-800 text-white rounded-l-[15px] border-1 border-neutral-700 border-r-0">
        <option>+1</option>
        <option>+44</option>
        <option>+91</option>
      </select>

      {/* Input with icon */}
      <div className="relative overflow-hidden rounded-r-[15px] bg-neutral-800 h-[50px]  border-1 border-neutral-700 border-l-0">
        <MobileIcon
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
        />
        <input
          type="tel"
          placeholder="Enter phone number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="w-full pl-10 h-full text-white bg-neutral-900 placeholder-gray-400"
        />
      </div>
    </div>
  )
}
