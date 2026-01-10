import { login } from "../../../features/auth";

export async function loginAction({ request, params }) {
  const formData = await request.formData();
  return login(formData);  
}