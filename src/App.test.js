import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginSuccess = () => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/'); // 로그인 페이지로 이동
    };

    return (
        <div style={styles.container}>
            <div style={styles.icon}>✔️</div>
            <h2>회원가입에 성공했습니다.</h2>
            <button onClick={handleNavigate} style={styles.button}>
                로그인 페이지
            </button>
        </div>
    );
};

const styles = {
    container: {
        textAlign: 'center',
        marginTop: '50px',
    },
    icon: {
        fontSize: '48px',
        color: 'green',
        marginBottom: '20px',
    },
    button: {
        backgroundColor: '#4285F4',
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        fontSize: '16px',
        cursor: 'pointer',
        borderRadius: '5px',
    },
};

export default LoginSuccess;