import {useNavigate} from "react-router-dom";
export const useRedirect = () => {
    const navigate = useNavigate();
    navigate('/add');
};