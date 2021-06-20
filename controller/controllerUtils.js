function setHeaderToResponse(res) {
    res.set({
        "Content-Type": "application/txt",
        "Access-Control-Allow-Origin": "*",
    });
}

module.exports = {
    setHeaderToResponse
}