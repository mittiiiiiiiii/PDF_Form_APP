package main

import (
	"fmt"
	"net/http"
	"os"

	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
)

const openaiURL = "https://api.openai.com/v1/chat/completions"

var messages []Message

func main() {
	err := godotenv.Load()
	if err != nil {
		fmt.Println("Error loading .env file")
		return
	}

	apiKey := os.Getenv("GPT_API_KEY")

	gin.SetMode(gin.ReleaseMode)

	router := gin.Default()
	router.GET("/", func(c *gin.Context) {
		question := c.Query("question")

		messages = append(messages, Message{
			Role:    "user",
			Content: question,
		})

		response := getOpenAIResponse(apiKey)
		fmt.Println(response)

		c.JSON(http.StatusOK, gin.H{
			"response": response.Choices[0].Messages.Content,
		})
	})

	router.Run(":8080")
}
