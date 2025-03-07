import { useCallback, useEffect, useState } from '@lynx-js/react'

import './App.css'
import HeaderComponent from './components/HeaderComponent.jsx'
import PreviewScreen from './components/PreviewScreen.jsx'

export function App() {
  const [alterLogo, setAlterLogo] = useState(false)

  useEffect(() => {
    console.info('Hello, ReactLynx')
  }, [])

  const onTap = useCallback(() => {
    'background only'
    setAlterLogo(!alterLogo)
  }, [alterLogo])

  return (
    <view className="container">
      <HeaderComponent title="MEME Gen"/>
      <br />
      <PreviewScreen />
    </view>
  )
}
