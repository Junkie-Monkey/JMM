//priority: 1100

let runAR = true;
const minutes = 1440; // One Day

const restartLoop = (server) => {
    server.tell([Text.lightPurple('[AutoRestart]'), ` Timer started!`]);
    server.tell([Text.lightPurple('[AutoRestart]'), ` Server will automatically restart in ${minutes} minutes`]);

    server.schedule(MINUTE * (minutes - 6), () => {
        server.tell([Text.lightPurple('[AutoRestart]'), ' Server will automatically restart in 5 minutes!']);
        server.schedule(MINUTE * 4, () => {
            server.tell([Text.lightPurple('[AutoRestart]'), ' Server will automatically restart in 1 minute!']);
            server.schedule(SECOND * 50, () => {
                server.tell([
                    Text.lightPurple('[AutoRestart]'), ' Server will automatically restart in 10 seconds!'
                ]);
                server.schedule(SECOND * 7, () => {
                    server.tell([
                        Text.lightPurple('[AutoRestart]'), ' Server will automatically restart in 3 seconds!'
                    ]);
                    server.schedule(SECOND * 1, () => {
                        server.tell([
                            Text.lightPurple('[AutoRestart]'), ' Server will automatically restart in 2 seconds!'
                        ]);
                        server.schedule(SECOND * 1, () => {
                            server.tell([
                                Text.lightPurple('[AutoRestart]'), ' Server will automatically restart in 1 second!'
                            ]);
                            server.schedule(SECOND * 1, () => server.runCommand('stop'));
                        });
                    });
                });
            });
        });
    })
}

onEvent('server.load', function (event) {
    if (!runAR) return;
    event.server.schedule(SECOND * 5, () => {
        restartLoop(event.server);
    });
})
