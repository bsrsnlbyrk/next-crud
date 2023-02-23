export const fetchArticles = async (query = 'machine-learning') => {
    const response = await fetch(`https://serpapi.com/search.json?engine=google_scholar&q=${query}&api_key=${process.env.SERP_API_KEY}`)
    const result = await response.json();

    return result;
}
