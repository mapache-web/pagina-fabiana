import { FaFacebook, FaInstagram } from "react-icons/fa";
import { IoMdMail, IoLogoWhatsapp } from "react-icons/io";
import { social } from "../types";


export const SOCIAL_MEDIA: social[] = [
    {
        name: 'Facebook',
        href: "",
        component: FaFacebook
    },
    {
        name: "Instagram",
        href: "",
        component: FaInstagram
    },
    {
        name: 'Mail',
        href : "",
        component: IoMdMail
    },
    {
        name: "Whatsapp",
        href: "",
        component: IoLogoWhatsapp
    }
]