"use server"

export const getUserLibrary = async (userId: number, token: string) => {
    const res = await fetch(`http://api:3000/userbook/${userId}`, {
        method: "GET", 
        headers: {
            "Authorization": `Bearer ${token}`
        },
    });

    if (!res.ok) return { success: false, data: [] };
    const data = await res.json();
    return { success: true, data };
}

export const addToLibrary = async (bookId: number, userId: number, token: string) => {
    const res = await fetch(`http://api:3000/userbook/add/${userId}/${bookId}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
    });

    if(!res.ok) {
        const errorData = await res.json();
        return {
            success: false,
            error: 
                errorData.message || "Un problème est survenu lors de l'enregistrement dans la bibliothèque",
            status: res.status,
        };
    }

    const resData = await res.json();
    console.log("resData dans l'action :", resData);
    
    return {
        success: true,
        data: resData,
        message: "Élément enregistré avec succès"
    };

}

export const removeFromLibrary = async(id: number, token: string) => {
    const res = await fetch(`http://api:3000/userbook/remove/${id}`, {
        method: "DELETE",
        headers: {
            "Authorization": `Bearer ${token}`
        },
    });

    if(!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        return {
            success: false,
            error:
                errorData.message || "Un problème est survenu lors de la suppression de l'élément de la bibliothèque", 
            status: res.status,
        };
    }

    return {
        success: true,
        message: "Élément retiré avec succès"
    };
}