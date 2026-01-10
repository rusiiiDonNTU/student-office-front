import { useSearchParams, useNavigate } from 'react-router-dom';
import { api } from '../../../shared/api';
import { useEffect } from 'react';
import { getAuthStatus } from '../../../entities/session'; 

export function ConfirmEmailPage() {
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
                            activationFailed: true
                        }
                    })
                }
                else if (!!authStatus) {
                    navigate("/profile", {
                        state: {
                            activationFailed: true
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