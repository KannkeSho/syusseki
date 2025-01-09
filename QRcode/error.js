async function readQRCode() {
    try {
        const response = await fetch('/read_qr', { method: 'POST' });
        if (!response.ok) {
            throw new Error(`HTTPエラー: ${response.status}`);
        }
        const data = await response.json();
        document.getElementById('result').innerText = data.result;
    } catch (error) {
        document.getElementById('result').innerText = `エラー: ${error.message}`;
        console.error(error);
    }
}
