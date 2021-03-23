
import {useHistory} from 'react-router-dom'

function Back (){
    const history = useHistory();
    const handleHistory = () =>{
        history.goBack();
    }
return (
    <div className="arrow"><img src="/assets/icons/arrow.svg" alt="Cart" height="20px" width="20px"  onClick={handleHistory}/></div>
)

}

export default Back