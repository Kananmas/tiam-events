import { Accordion } from "@/components/Accordion"
import { GradientHeader } from "@/components/GradientHeader"
import { randomString } from "@/utils/random-string.utils"

export function FAQ() {
    const questions = [
        {
            question: "How Can I purchase Tickets?",
            answer: "Step-by-step guide to buying tickets on our website."
        },
        {
            question: "Are the tickets digital or physical?",
            answer: "You get digital ticket here and at concert location you receive the the physical"
        },
        {
            question: "What happens if the event is canceled? How can I get a refund?",
            answer: "In Most Cases You Get Automaitc Refund",
        },
        {
            question: "Can I transfer or exchange my ticket?",
            answer: "I don't know aboout."
        },
        {
            question: "Can I transfer or exchange my ticket?",
            answer: "Both Are acceptable.but we suggest you to print it!"

        }
    ]


    return <div className="relative w-full py-20 overflow-hidden">
        {/* Gradient overlay */}

        <div className="relative z-10 mb-10">
            <GradientHeader additionalStyles="text-[50px]">FAQ</GradientHeader>
            <p className="text-center text-neutral-300-300 text-[18px]">
                Find answers to the most common questions about ticket purchasing, 
                event policies, refunds, and more.
            </p>
        </div>

        <div className="relative z-10 w-[80%] mx-auto">
            {questions.map(({ question, answer }) => (
                <Accordion content={answer} title={question} key={randomString()} />
            ))}
        </div>
    </div>
}