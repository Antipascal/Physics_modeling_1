start: runServer runFrontend

runServer:
	@ cd ./server && go run .

runFrontend:
	@ npm run start