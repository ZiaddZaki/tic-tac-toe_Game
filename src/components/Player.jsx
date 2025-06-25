import { useState } from "react"
export default function Player({intialName,symbol,isActive,onChangeName}){
    const [playerName,setPlayerName] =useState(intialName);
    let [isEditing,setIsEditing] = useState(false);

    function handleEditClick(){
        setIsEditing((editing)=> !editing);  //state base on previous state it's recomndation form react to use function inside bec of schedules of useState
        if(isEditing){
            onChangeName(symbol,playerName);
        }

    }
    let editablePlayerName = <span className="player-name">{playerName}</span>;
    let buttonCaption = 'Edit'
    if(isEditing===true){
        editablePlayerName = <input type="text" required value={playerName} onChange={handleChange}/>
        buttonCaption = 'Save'
    }
    function handleChange(event){
        setPlayerName(event.target.value);
    }
    return(
    <li className={isActive?'active': undefined}>
        <span className="player">
            {editablePlayerName}
            <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleEditClick}>{buttonCaption}</button>
    </li>
    )

}