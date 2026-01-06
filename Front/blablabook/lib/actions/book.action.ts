"use server";

export const getTenRandomBooks = async() => {
    const res = await fetch(`http://api:3000/books/fetch-random`, {
        method: "GET", 
        headers: {
            "Content-Type": "application/json",
        },

    });

    if (!res.ok) {
        const errorData = await res.json();
        return {
            success: false,
            error: 
                errorData.message || "Un problème est survenu lors de la récupération des livres",
            status: res.status,
        };
    }

    const resData = await res.json();

    return {
        success: true,
        data: resData,
    };
};

export const getTenLatestBooks = async() => {
    const res = await fetch(`http://api:3000/books/fetch-latest`, {
        method: "GET", 
        headers: {
            "Content-Type": "application/json",
        },

    });

    if (!res.ok) {
        const errorData = await res.json();
        return {
            success: false,
            error: 
                errorData.message || "Un problème est survenu lors de la récupération des livres",
            status: res.status,
        };
    }

    const resData = await res.json();

    return {
        success: true,
        data: resData,
    };
}