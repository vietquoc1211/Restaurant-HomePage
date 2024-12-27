import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function ProtectedRoute({ children }) { // Use {} for object destructuring
  const { token } = useSelector((state) => state.Auth); // Ensure your state slice is correctly named

  if (!token) {
    return <Navigate to="/signup" />;
  }
  return children;
}


