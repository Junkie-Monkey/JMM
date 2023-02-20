//priority: 1100
let runAR = true;
let oneDay = MINUTE * 60 * 24;

const restartLoop = (server) => {
    server.tell([Text.lightPurple('[AutoRestart]'), ` Timer started!`]);
    server.tell([
        Text.lightPurple('[AutoRestart]'),
        ` Server will automatically restart in ${Math.floor(oneDay / 1200)} minutes!`
    ]);

    server.schedule(oneDay - MINUTE * 5, () =>
        server.tell([Text.lightPurple('[AutoRestart]'), ' Server will automatically restart in 5 minutes!'])
    );
    server.schedule(oneDay - MINUTE, () =>
        server.runCommand(`tellraw @a "§d[AutoRestart]§r Server will automatically restart in 1 minute!"`)
    );
    server.schedule(oneDay - SECOND * 10, () =>
        server.tell([Text.lightPurple('[AutoRestart]'), ' Server will automatically restart in 10 seconds!'])
    );
    server.schedule(oneDay - SECOND * 3, () =>
        server.tell([Text.lightPurple('[AutoRestart]'), ' Server will automatically restart in 3 seconds!'])
    );
    server.schedule(oneDay - SECOND * 2, () =>
        server.tell([Text.lightPurple('[AutoRestart]'), ' Server will automatically restart in 2 seconds!'])
    );
    server.schedule(oneDay - SECOND, () =>
        server.tell([Text.lightPurple('[AutoRestart]'), ' Server will automatically restart in 1 second!'])
    );
    server.schedule(oneDay, () => server.runCommand('stop'));
};

onEvent('server.load', (event) => {
    if (runAR) {
        restartLoop(event.server);
    }
});
