import { Calendar, FlagIcon, SmileIcon, User2 } from "lucide-react";

export function IconSwitcherSf({ name }: { name: string }) {
    const dimentions = { width: 20, height: 20,  className:"mr-1 text text-neutral-500"};

    switch (name.toLowerCase()) {
        case "artist":
            return <User2  {...dimentions} />
        case "event":
            return <SmileIcon {...dimentions} />
        case "location":
            return <FlagIcon {...dimentions} />
        case "date":
            return <Calendar {...dimentions} />
    }


    return null;
}