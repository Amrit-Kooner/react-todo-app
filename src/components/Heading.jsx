import '../global.css'
import trashIcon from '../assets/svg/trash-icon.svg'

function Heading({ handleClear, todoLength }) {
  function confirmClear(){
    if(todoLength == 0) return;

    const confirmationWord = "DELETE"
    const userInput = prompt(`Enter '${confirmationWord}' to confirm deletion.`).trim()

    if(userInput !== confirmationWord){
      alert(`You failed to enter '${confirmationWord}'`)
      console.error("user entered incorrect conformation word")
      return -1
    }
    
    handleClear();
  }

  return (
    <div className=''>
      <span className=''>Personal Todo List:</span>
      {todoLength != 0 ? <button className='' onClick={confirmClear}><img src={trashIcon} alt='trash icon'/></button> : null}
    </div>
  )
}

export default Heading