import { useSearchParams, useNavigate } from 'react-router-dom';
import { api } from '../../../shared/api';
import { useEffect } from 'react';
import { getAuthStatus, useAuthStatus } from '../../../entities/session'; 
import { postActivateEmail } from '@/features/confirm-email';

export function ConfirmEmailPage() {
    const [searchParams] = useSearchParams()
    const navigate = useNavigate();
    const {data: authStatus, isPending, isError} = useAuthStatus();
    const token = searchParams.get('token');

    useEffect(() => {
        const sendToken = async () => {
            // Спроба відправити запит на активацію пошти
            const result = await postActivateEmail();

            if (!authStatus) {
                navigate("/login", {
                    state: result
                })
            }
            else if (authStatus) {
                navigate("/profile", {
                    state: result
                })
            }
        }

        // Якщо токена немає
        if (!token) {
            navigate("/", {replace: true})
        }
        else {
            sendToken();
        }
    }, [token])

    return <></>
}