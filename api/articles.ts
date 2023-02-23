import { Article } from "@/lib/types";

export const fetchArticles = async (query = 'machine-learning') => {
    const response = await fetch(`https://serpapi.com/search.json?engine=google_scholar&q=${query}&api_key=${process.env.SERP_API_KEY}`)
    const result = await response.json();

    return result;
}

export const fetchArticlesFromMe = async () => {
    const response = await fetch(`${process.env.HOST_BASE_URL}/api/get-articles`)
    const result = await response.json()

    return result;
}

export const createArticle = async (data: Article) => {
    const response = await fetch('/api/add-article', {
        method: 'POST',
        body: JSON.stringify({ ...data, actions: true })
    })

    return response
}

export const deleteArticle = async (id: string) => {
    const response = await fetch('/api/delete-article', {
        method: 'POST',
        body: JSON.stringify({ id })
    })

    return response
}
