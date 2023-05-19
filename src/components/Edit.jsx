import { useNavigate } from "react-router-dom"

const EditButton = () => {
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate('/budget/AllTransactions')
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <button type="submit">Edit</button>
            </form>
        </div>
    )
}

export default EditButton;
