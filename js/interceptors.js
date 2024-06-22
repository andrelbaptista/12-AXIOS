// requisição
postFetch.interceptors.request.use (
    function(config) {
        console.log (`Antes da requisição...`);
        return config;
    },
    function(error) {
        return Promise.reject(error);
    }
);

// resposta
postFetch.interceptors.response.use (
    function(response) {
        console.log (`Antes da resposta...`);
        return response;
    },
    function(error) {
        return Promise.reject(error);
    }
);