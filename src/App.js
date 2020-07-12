import React, {useEffect} from 'react';
import { useJitsi } from 'react-jutsu';

function App() {
  
  const roomName = 'test'
  const parentNode = 'jitsiArea'
  const jitsi = useJitsi({ roomName, parentNode })

  useEffect(() => {
    if (jitsi) {
      jitsi.addEventListener('videoConferenceJoined', () => {
        jitsi.executeCommand('displayName', 'test')
        jitsi.executeCommand('password', 'test1234')
        jitsi.executeCommand('subject', 'testingPase')
      })
    }
    return () => jitsi && jitsi.dispose()
  }, [jitsi])

  return <div id={parentNode} />
}

export default App;