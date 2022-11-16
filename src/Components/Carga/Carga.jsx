import Spinner from 'react-bootstrap/Spinner';
import "./Carga.css"
function Carga({children,loading}){
	if(loading){
		return(
			<div className='app configBox spinnerBox'>
				<Spinner className='sizeSpinner' animation="border" role="status" variant="light">
					<span className="visually-hidden">Loading...</span>
				</Spinner>
			</div>
		)
	}else{
		return (
			<>
				{children}
			</>
		)
	}
}

export default Carga