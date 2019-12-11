import React, { useState, View, Text } from 'react';
import { StartStopButton } from './StartStopButton'
import { LapResetButton } from './LapResetButton'
import { TimeDisplay } from './TimeDisplay'

const WatchStates = {
  stopped:'stopped',
  running:'running',
  pause:'pause',
}

const StopWatch=()=>{

  const [stopWatchState, setStopWatchState] = useState(WatchStates.stopped);


  function ChengeWatchStateAndUpdate(stateToSet){
    setStopWatchState(stateToSet)
  }

  return(
    <>
      <TimeDisplay watchState={stopWatchState} WatchStates={WatchStates}/>
      <StartStopButton watchState={stopWatchState} setWatchState={ChengeWatchStateAndUpdate.bind(StopWatch)} WatchStates=      {WatchStates}/>
      <LapResetButton watchState={stopWatchState} setWatchState={ChengeWatchStateAndUpdate.bind(StopWatch)} WatchStates={WatchStates}/>
    </>
  )
}

export  { StopWatch }
