'use client'

import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Button,
    SelectItem,
    Select,
    Radio,
    RadioGroup
} from "@nextui-org/react";
import {Callback} from "@/shared/ui/callback";

const districts: {value: string, label: string}[] = [
    {value: 'Кутузовский', label: 'Кутузовский'},
    {value: 'Ленинский', label: 'Ленинский'},
    {value: 'Кировский', label: 'Кировский'},
    {value: 'Роща', label: 'Роща'},
];

const stages: {value: string, label: string}[] = [
    {value: 'Черновые', label: 'Черновые'},
    {value: 'Предчистовые', label: 'Предчистовые'},
    {value: 'Чистовые', label: 'Чистовые'},
];


export const Appointment = () => {

    return (
        <Card className="max-w-[400px]">
            <CardHeader className="flex gap-3">
                <p className="text-xl">
                    Запишитесь на просмотр объекта
                </p>
            </CardHeader>
            <CardBody className="flex flex-col gap-y-4">
                <Select
                    label="Выберите район"
                    className="max-w-xs"
                >
                    {districts.map((district) => (
                        <SelectItem key={district.value} value={district.value}>
                            {district.label}
                        </SelectItem>
                    ))}
                </Select>
                <RadioGroup
                    label="Какие этапы работ интересны?"
                    defaultValue={'Черновые'}
                >
                    {stages.map((stage) => (
                        <Radio key={stage.value} value={stage.value}>
                            {stage.label}
                        </Radio>
                    ))}
                </RadioGroup>
            </CardBody>
            <CardFooter className="flex flex-col gap-y-4 items-start">
                <Callback>
                    <Button color="warning">
                        Записаться на просмотр
                    </Button>
                </Callback>
                <p className="text-gray-300 text-sm">
                    *Показываем объекты только с согласия клиентов
                </p>
            </CardFooter>
        </Card>
    );
};
