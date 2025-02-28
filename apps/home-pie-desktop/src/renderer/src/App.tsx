import Versions from './components/Versions'
import electronLogo from './assets/electron.svg'

function App(): JSX.Element {
  const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

  return (
    <div className="flex items-center justify-center bg-slate-500 w-screen h-screen">
      <h1>Test</h1>
    </div>
  )
}

export default App
