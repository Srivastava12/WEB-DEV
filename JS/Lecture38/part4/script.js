
const table =document.getElementById('keyEvent')

window.addEventListener('keydown',function(e){
    table.innerHTML = `
        <table border=1>
            <tr>
                <th>Key</th>
                <th>Keycode</th>
                <th>Code</th>
            </tr>
            <tr>
                <td>${e.key === " " ? 'space' : e.key}</td>
                <td>${e.keyCode}</td>
                <td>${e.code}</td>
            </tr>
        </table>
    `
})