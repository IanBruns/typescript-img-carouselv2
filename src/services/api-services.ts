const ApiService = {
    getImages() {
        return fetch('https://jsonplaceholder.typicode.com/photos')
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            );
    }
}

export default ApiService;