import { useNavigate } from 'react-router-dom';

function BtnBack() {
  const navigation = useNavigate()
  const goBack = () => navigation(-1)

  return (
    <button
      onClick={goBack}
      className="arrowBack">
      ←
    </button>
  )
}

export default BtnBack;