import * as React from 'react';
import styles from '@/styles/LocalTimeWidget.module.css'
import Widget from '../widget';
import { useEffect, useState } from 'react';

export interface Props {
}

const LocalTimeWidget: React.FC<Props> = props => {

    const [time, setTime] = useState('');

    const updateTime = () => {
        let date = new Date();
        setTime(`${(date.getUTCHours() + 16) % 24}:${date.getUTCMinutes() < 10 ? '0' + date.getUTCMinutes() : date.getUTCMinutes()}`);
    }

    useEffect(() => {
        updateTime();
        setInterval(() => {
            updateTime();
        }, 5000)
    }, [])

    return (
        <>
            <Widget style='mb-lg'>
                <>
                    <div className='localtime px-sm text-6xl'>
                        {time}
                        <div className='post text-xl'>pst</div>
                    </div>
                </>
            </Widget>
        </>
    )
}


export default LocalTimeWidget;

