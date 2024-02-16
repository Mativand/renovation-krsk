'use client'

import {cloneElement, FC, ReactNode, Children, MouseEvent, ReactElement} from 'react';
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import {Input} from "@nextui-org/input";
import {WhatsAppCallback} from "../whatsAppCallback/ui";
import {Policy} from "../policy/ui";

interface Props {
    children: ReactNode;
}

export const Callback: FC<Props> = ({ children }) => {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    const handleChildClick = (event: MouseEvent<HTMLElement>) => {
        onOpen();
        event.stopPropagation();
    };

    const childrenWithOnClick = Children.map(children, (child) =>
        cloneElement(child as ReactElement, {
            onClick: handleChildClick,
        })
    );

    return (
        <>
            {childrenWithOnClick}
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Заказать звонок</ModalHeader>
                            <ModalBody>
                                <Input type="text" label="Как вас зовут?" size="sm"/>
                                <Input type="tel" label="Ваш телефон" size="sm"/>
                                <WhatsAppCallback/>
                                <Policy label='Нажимая на кнопку, вы соглашаетесь с'/>
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