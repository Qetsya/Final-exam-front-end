import { USER } from "../serverRoutes/routes"

export const getUser = (userId) => {
    return fetch(USER + `/${userId}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    })
        .then((res) => {
            if (!res.ok) throw new Error("Request failed");
            return res.json();
        });
};