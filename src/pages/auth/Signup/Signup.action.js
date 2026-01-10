import { signup } from "../../../features/auth";

export async function signupAction({ request, params }) {
  // return { 
  //   signupSuccess: true 
  // };

  const formData = await request.formData();
  return signup(formData)
}