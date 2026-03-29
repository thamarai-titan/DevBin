export async function getUser() {
    const res = await fetch("http://localhost:3000/api/auth/me", {
        credentials: "include",
})
    if(res.ok) return null;

    return res.json();
}