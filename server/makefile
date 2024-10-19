APP_NAME=Chat_GPT_Response

all: clean build run

build:
	go build -o $(APP_NAME)

clean:
	rm -f $(APP_NAME)

run:
	./$(APP_NAME)

.PHONY: all build clean run