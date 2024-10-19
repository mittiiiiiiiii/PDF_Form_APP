package main

import (
	"encoding/json"
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
	router.GET("/gpt", func(c *gin.Context) {
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

	router.POST("/print", func(c *gin.Context) {
		var printRequest PrintRequest
		if err := c.ShouldBindJSON(&printRequest); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
			return
		}

		prettyJSON, err := json.MarshalIndent(printRequest, "", "  ")
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to generate JSON"})
			return
		}

		fmt.Printf("Received JSON:\n%s\n", string(prettyJSON))

		c.JSON(http.StatusOK, gin.H{"status": "success"})
	})

	router.Run(":8080")
}
