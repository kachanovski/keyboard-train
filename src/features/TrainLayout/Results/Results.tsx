import React from 'react';

type ResultsPropsType = {
  mistakes: number
  time: number
}

export const Results = (props: ResultsPropsType)=> {

    return (
        <div>
            <div>
                <div>
                    Ошибок: {props.mistakes}
                </div>
                <div >
                   Время: <span>{props.time}</span>
                </div>
            </div>
        </div>
    );
}


