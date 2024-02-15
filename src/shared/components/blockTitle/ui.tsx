import {FC} from 'react';

interface Props {
    text: string;
}

export const BlockTitle: FC<Props> = ({text}) => {
    return (
        <div className="text-center sm:text-left text-3xl sm:mb-0">
            <h1>
                {text}
            </h1>
        </div>
    );
};
