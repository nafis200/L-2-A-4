import MainLayout from "../../components/layout/MainLayout";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();
    useEffect(() => {
        navigate('get_car');
    }, [navigate]);
    return (
        <MainLayout/>
    );
};

export default Dashboard;