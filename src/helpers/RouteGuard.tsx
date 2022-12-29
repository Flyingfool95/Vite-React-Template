/* Imports */
import { useEffect, useState } from "react";
//Hooks
import { useNavigate } from "react-router-dom"

export default function RouteGuard({ children, redirectTo }: { children: JSX.Element, redirectTo: string }) {

  //User state
  let user: null | {} = null;

  //Local State
  const [result, setResult] = useState<any>(null)

  //Hooks
  const navigate = useNavigate()

  //Side effects
  useEffect(() => {
    //Redirects if not logged in
    if (!user) navigate(redirectTo);

    //Returns children of routeguards if logged in
    return setResult(children);
  }, []);

  return result;
}