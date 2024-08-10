import '../global.css'
import trashIcon from '../assets/svg/trash-icon.svg'

function Heading({ handleClear, todoLength }) {
  function confirmClear(){
    if(todoLength == 0) return;

    const confirmationWord = "DELETE"
    const userInput = prompt(`Enter '${confirmationWord}' to confirm deletion.`).trim()

    if(userInput.toUpperCase() !== confirmationWord){
      alert(`You failed to enter '${confirmationWord}'`)
      console.error("user entered incorrect conformation word")
      return -1
    }
    
    handleClear();
  }

  return (
    <div className='header-wrapper'>
      <h4 className='header-title'>Todo List</h4>
      {todoLength != 0 ? <button className='clear-btn btn' title='clear' onClick={confirmClear}><img src={trashIcon} alt='trash icon'/></button> : null}
    </div>
  )
}

export default Heading