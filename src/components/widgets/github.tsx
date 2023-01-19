import * as React from 'react';
import Widget from '../widget';

export interface Props {
}


const GitHubWidget: React.FC<Props> = props => {

    return (
        <>
            <Widget style='my-lg'>
                <>
                    <div className='github'>
                        <img src='GitHub_Logo.png' />
                    </div>
                </>
            </Widget>
        </>
    )
}


export default GitHubWidget;

