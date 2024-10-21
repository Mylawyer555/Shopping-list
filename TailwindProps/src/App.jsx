
import './App.css'


import Card from './components/Card'

function App() {
 

  return (
    <>
      <h1 className='bg-green-500 text-3xl rounded-md p-5'>Vite with tailwind</h1>
      <Card username='Madline' post='Content Creator' img='https://images.pexels.com/photos/26632794/pexels-photo-26632794/free-photo-of-a-woman-in-a-white-dress-posing-for-a-photo.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'/>
      <Card username='Jewel' post='Software Developer' />
      <Card username='Esther' post='Software Engineer' />
      
    
    

    </>
  )
}

export default App
