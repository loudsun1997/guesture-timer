import React from 'react';
import { useState, useEffect } from 'react';
import {CustomizableButton} from './Button'


const ButtonText = {
  start:'Start',
  stop:'Stop',
}



const StartStopButton=(props)=>{

  const [buttonText, setButtonText] = useState(ButtonText.start);

  useEffect(() => {
    watchStateChange(props.watchState)
  });

  function watchStateChange(stateToSet){
    if(props.state==props.WatchStates.running){
      setButtonText(ButtonText.stop)
    }
    else if(stateToSet==props.WatchStates.pause){
      setButtonText(ButtonText.start)
    }
    else if(stateToSet==props.WatchStates.stopped){
      setButtonText(ButtonText.start)
    }
  }

  function handleWatchStateChange(e){
    if(props.watchState==props.WatchStates.running){
      setButtonText(ButtonText.start)
      props.setWatchState(props.WatchStates.pause)
    }
    else if(props.watchState==props.WatchStates.pause){
      setButtonText(ButtonText.stop)
      props.setWatchState(props.WatchStates.running)
    }
    else if(props.watchState==props.WatchStates.stopped){
      setButtonText(ButtonText.stop)
      props.setWatchState(props.WatchStates.running)
    }
    
  }

  return(
    <CustomizableButton text={buttonText} onPress={handleWatchStateChange}/>
  )
}

export {StartStopButton}