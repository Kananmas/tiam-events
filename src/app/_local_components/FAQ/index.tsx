import { randomString } from "@/utils/random-string.utils"
import { Accordion, AccordionItem } from "@nextui-org/react"

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


    return <div className="bg-black">
        <div>
            <h2
                className="text-[40px] font-bold bg-gradient-to-r text-center from-white to-neutral-600 text-transparent bg-clip-text"
            >
                FAQ
            </h2>
            <p className="text-center">Find answers to the most common questions about ticket purchasing, event policies, refunds, and more.</p>
        </div>
        <div className="w-[70%] bg-black mx-auto mt-10">
            <Accordion variant="splitted" >
                {
                    questions.map((question, index) => <AccordionItem
                        className="bg-neutral-950 mb-5 text-white p-2 rounded-[15px]"
                        key={index}
                        aria-label={question.question}
                        title={question.question}>
                        {question.answer}
                    </AccordionItem>)
                }
            </Accordion>
        </div>
    </div>
}