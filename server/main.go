package main

import (
	"io"
	"net/http"
	"os"

	"github.com/gin-gonic/gin"
)

type RequestBody struct {
	Weight int64 `json:"weight"`
	Amount int64 `json:"amount"`
}

type ResponseBody struct {
	Answer int64  `json:"answer"`
	Units  string `json:"units"`
}

func main() {
	f, _ := os.Create("gin.log")
	gin.DefaultWriter = io.MultiWriter(f, os.Stdout)

	r := gin.Default()
	r.GET("/physics", func(c *gin.Context) {
		c.JSON(http.StatusOK, "sucks")
	})

	r.POST("/calculate", func(c *gin.Context) {
		var rb RequestBody
		if err := c.BindJSON(&rb); err != nil {
			c.JSON(http.StatusBadRequest, "Wrong argument list")
		}
		// calculating
		var resp ResponseBody
		resp.Answer = rb.Amount * rb.Weight
		resp.Units = "ЭВМ"
		c.JSON(http.StatusOK, resp)
	})

	http.ListenAndServe("localhost:8080", r)
}
