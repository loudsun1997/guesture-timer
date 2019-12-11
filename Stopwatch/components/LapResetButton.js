import React from 'react';
import { useState, useEffect } from 'react';
import {CustomizableButton} from './Button'



const ButtonText = {
  lap:'Lap',
  reset:'Reset',
}

const LapResetButton=(props)=>{
  const [buttonText, setButtonText] = useState(ButtonText.lap);
  useEffect(() => {
    watchStateChange()
  });

  function recordLap(){

  }

  function disableButton(){

  }

  function watchStateChange(){
    if(props.watchState==props.WatchStates.running){
      setButtonText(ButtonText.lap)
    }
    else if(props.watchState==props.WatchStates.pause){
      setButtonText(ButtonText.reset)
    }
  }


  function handleOnPress(e){
    if(props.watchState==props.WatchStates.running){
      recordLap()
    }
    else if(props.watchState==props.WatchStates.pause){
      setButtonText(ButtonText.reset)
      props.setWatchState(props.WatchStates.stopped)
    }
    else if(props.watchState==props.WatchStates.stopped){
      disableButton()
    }
  }

  return (
    <CustomizableButton text={buttonText} onPress={handleOnPress} />
  )
}

export {LapResetButton}

