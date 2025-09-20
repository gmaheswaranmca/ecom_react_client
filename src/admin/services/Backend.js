export function getUrlAndHeaders() {
    const baseUrl = import.meta.env.VITE_API_URL;//'http://localhost:8081';
    const token = localStorage.getItem("token");
    const headers = {"headers" :{"Authorization":`Bearer ${token}`}}

    return { baseUrl, token, headers};
}

export function signOut(isNavigate=false, navigate=null) {
    localStorage.removeItem("token")
    if(isNavigate) {
        navigate('/admin/login')
    }
}

export function singIn(token) {
    localStorage.setItem("token", token)
}

export function signedInContinue(navigate) {
    const token = localStorage.getItem("token");
    if(localStorage.getItem("token") != null) {
            navigate("/admin");
    }  
}

export function notSignedIn(navigate) {
    if(localStorage.getItem("token") == null) {
        navigate("/admin/login");
    }  
}