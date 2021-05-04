import React from "react";
import { Auth0, useAuth0 } from "@auth0/auth0-react";

function User() {
  const { user, isAuthenticated, isLoading, error } = useAuth0();
  if (!isLoading) {
    return (
      isAuthenticated && (
        <div>
          <h1>Datos de usuario</h1>
          <img src={user.picture} alt="imagen usuario" />
          <h2>{user.name}</h2>
          <h2>{user.email}</h2>
        </div>
      )
    );
  }
}
export default User;
