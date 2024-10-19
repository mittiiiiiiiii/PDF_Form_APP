package main

import (
	"bytes"
	"encoding/json"
	"io"
	"io/ioutil"
	"net/http"
)

func getOpenAIResponse(apiKey string) OpenaiResponse {
	requestBody := OpenaiRequest{
		Model:    "gpt-3.5-turbo",
		Messages: messages,
	}

	requestJSON, _ := json.Marshal(requestBody)

	req, err := http.NewRequest("POST", openaiURL, bytes.NewBuffer(requestJSON))
	if err != nil {
		panic(err)
	}

	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("Authorization", "Bearer "+apiKey)

	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		panic(err)
	}
	defer func(Body io.ReadCloser) {
		err := Body.Close()
		if err != nil {
			panic(err)
		}
	}(resp.Body)

	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		panic(err)
	}

	var response OpenaiResponse
	err = json.Unmarshal(body, &response)
	if err != nil {
		println("Error: ", err.Error())
		return OpenaiResponse{}
	}

	messages = append(messages, Message{
		Role:    "assistant",
		Content: response.Choices[0].Messages.Content,
	})

	return response
}
