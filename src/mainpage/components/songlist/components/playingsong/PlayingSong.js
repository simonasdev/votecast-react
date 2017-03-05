import React from 'react';
import moment from 'moment';
import { Line } from 'rc-progress';


const PlayingSong = (passedProps) => {
    if (passedProps === undefined){
        return (
            <div>
                Cannot load current song :(
            </div>
        );
    }

    function pad(num) {
        return ("0"+num).slice(-2);
    }
    function hhmmss(secs) {
        var minutes = Math.floor(secs / 60);
        secs = secs%60;
        var hours = Math.floor(minutes/60)
        minutes = minutes%60;
        return pad(hours)+":"+pad(minutes)+":"+pad(secs);
    }

    let timeElapsed = Math.round((passedProps.song[0].lenght / 100) * passedProps.song[0].playPercentage);


    return (
        <div>
            <span>
                {passedProps.song[0].name}
            </span>
            <span>
                {hhmmss(timeElapsed)}
            </span>
            <span>
                <Line percent={passedProps.song[0].playPercentage}
                    strokeWidth='2'
                    strokeColor='#D3D3D3'
                />
            </span>
            <span>
                {hhmmss(passedProps.song[0].lenght)}
            </span>
        </div>
    );
};

export default PlayingSong;