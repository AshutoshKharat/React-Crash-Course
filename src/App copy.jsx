import React from 'react'

const App = () => {
  const names = ['Ashu', 'Ritu', 'Nitin'];
  const loggedIn = true;
  const styles = {
    color: 'red',
    fontSize: 24
  }

  return (
    <>
      <div className='text-5xl'>App</div>
      <p style={styles}> Hello</p>
      {names.map((name, index) => (
        <p key={ index }>{ name }</p>
      ))
      }
      { loggedIn ? 'Hello Members' : 'Hello Guest'}
    </>
  )
}

export default App