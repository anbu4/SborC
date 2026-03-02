let Activeted = 0;

document.addEventListener('keydown', async function (e) {
    if (e.key === 'p') {
        Activeted++;

        if (Activeted === 3) {
            Activeted = 0;
            let value = prompt('Enter command:');

            const scripts = {
                voice: 'BigoVoice.js',
                spa: 'Space.js',
                laylo: 'BigoVoiceQA.js',
                enter: 'Enter.js',
                hotx: 'Hotlife.js',
                spax:'Spax.js',
                icop:'ImoVoiceQa.js',
                ac:'AC.js',
                acx:'ACX.js',
                spav:'VoiceAutoX.js'
            };

            if (scripts[value]) {
                await ImportScript(scripts[value]);
            } else {
                console.log('Unknown command');
            }
        }
    } else {
        Activeted = 0;
    }
});

async function ImportScript(file) {
    const url = `https://raw.githubusercontent.com/anbu4/SborC/main/${file}`;

    try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(res.status);

        const code = await res.text();
        eval(code);

        console.log(`${file} loaded`);
    } catch (e) {
        console.error('Error import:', e);
    }
}
