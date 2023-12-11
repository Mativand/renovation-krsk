import {FaWhatsapp} from "react-icons/fa";

export const WhatsAppCallback = () => {
    return (
        <p className="flex space-x-2">
            <FaWhatsapp size="1.5em"/><u className={'cursor-pointer hover:text-gray-300'}>Написать в WhatsApp</u>
        </p>
    );
};
