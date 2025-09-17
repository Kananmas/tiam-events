
import { MusicIcon } from "@/components/MusicIcon";
import { PartyPopperIcon, GraduationCap  , SmileIcon} from "lucide-react";



export function IconSwitcher({name}:{name:string}) {

    switch(name.toLowerCase()){
        case "stand-up":
            return <SmileIcon  width={15} height={15}/>
        case "concert":
            return <MusicIcon  width={15} height={15}/>
        case "workshop":
            return <GraduationCap width={15} height={15}/>
        case "festival":
            return <PartyPopperIcon  width={15} height={15}/>
        default:
            return null;
    }
}