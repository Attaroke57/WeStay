import Navbar from './components/navbar'

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <div className="flex items-center justify-center py-20">
        <h1 className="text-4xl font-bold text-white">
          Dashboard Content 🔥
        </h1>
      </div>
    </div>
  )
}

export default App