import React, { useState, useEffect, View, Text } from 'react';

const TimeDisplay=(props)=>{

  const [offset, setOffset] = useState(0)
  const [timeToDisplay, setTimeToDisplay] = useState('00:00:00')

  useEffect(() => {
    let interval;
    const convertForDisplay = (offset) => {
        const hour = Math.floor(setOffset/3600)
        const minute = Math.floor((setOffset-hour*3600)/60)
        const second = Math.floor(setOffset%60)
        if(second)
          setTimeToDisplay(`${hour}:${minute}:${second}`)
          alert(timeToDisplay)
    }

    if(props.watchState==props.WatchStates.running)
      interval = setInterval(
        () => setOffset(Date.now() - startTime),
        100
      );
    if(props.watchState==props.WatchStates.stopped)
      setOffset(0);

    convertForDisplay(offset);
  
    return () => clearInterval(interval);
  });
  const [startTime, setStartTime] = useState(Date.now())
  
  return(
    <>
      {offset}
    </>
  )
}

export  { TimeDisplay }
