
import { MusicIcon } from "@/components/MusicIcon";
import { PartyPopperIcon, GraduationCap  , SmileIcon} from "lucide-react";



export function EventIconSwitcher({name}:{name:string}) {

    switch(name.toLowerCase()){
        case "stand-up":
            return <SmileIcon className="mr-1"  width={18} height={18}/>
        case "concert":
            return <MusicIcon className="mr-1"    width={20} height={20}/>
        case "workshop":
            return <GraduationCap className="mr-1"   width={20} height={20}/>
        case "festival":
            return <PartyPopperIcon className="mr-1"    width={20} height={20}/>
        default:
            return null;
    }
}