'use client'

import { FC, ReactNode } from 'react';
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import {Input} from "@nextui-org/input";
import {WhatsAppCallback} from "@/components/WhatsAppCallback";
import {Policy} from "@/components/Policy";

interface Props {
    children: ReactNode;
}

export const Callback: FC<Props> = ({ children }) => {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    return (
        <>
            <div onClick={onOpen}>
                {children}
            </div>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Заказать звонок</ModalHeader>
                            <ModalBody>
                                <Input type="text" label="Как вас зовут?" size="sm"/>
                                <Input type="tel" label="Ваш телефон" size="sm"/>
                                <WhatsAppCallback/>
                                <Policy/>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onPress={onClose}>
                                    Отправить
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
};