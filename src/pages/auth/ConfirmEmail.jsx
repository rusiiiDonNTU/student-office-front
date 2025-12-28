import { useSearchParams, useNavigate } from 'react-router-dom';
import api from '../../util/axios';
import { useEffect } from 'react';
import { getAuthStatus } from '../../util/auth';

function ConfirmEmail() {
    const [searchParams] = useSearchParams()
    const navigate = useNavigate();
    const token = searchParams.get('token');

    useEffect(() => {
        const sendToken = async () => {
            // Отримання статусу аутентифікації
            const authStatus = await getAuthStatus();

            // Спроба відправити запит на активацію пошти
            try {
                const response = await api.post("/auth/confirm-email", {token: token})
                if (!authStatus) {
                    navigate("/login", {
                        state: {
                            emailConfirmed: true
                        }
                    })
                }
                else if (!!authStatus) {
                    navigate("/profile", {
                        state: {
                            emailConfirmed: true
                        }
                    })
                }
            } catch(err) {
                if (!authStatus) {
                    navigate("/login", {
                        state: {
                            error: true
                        }
                    })
                }
                else if (!!authStatus) {
                    navigate("/profile", {
                        state: {
                            error: true
                        }
                    })
                }
            }
        }

        // Якщо токена немає
        if (!token) {
            navigate("/")
        }
        else {
            sendToken();
        }
    }, [token])

    return <></>
}

export default ConfirmEmail;