import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'

const useAuth = () => {
  const token = useSelector((state: RootState) => state.auth.token)

  return {
    authenticated: !!token,
  }
}

export default useAuth
