export default async function fetchData(url) {
    console.log("Rodou");
    try {
        const response = await fetch(url);
        if (!response.ok)
            throw new Error("Erro: " + response.status);
        const json = await response.json();
        return json;
    }
    catch (error) {
        if (error instanceof Error)
            console.log("fetchData " + error.message);
        return null;
    }
}
//# sourceMappingURL=fetchData.js.map