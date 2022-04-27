package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()

	r.GET("/physics", func(c *gin.Context) {
		c.JSON(http.StatusOK, "still works")
	})

	r.POST("/calculate", func(c *gin.Context) {
		// Unmarshall data
		var rb RequestBody
		if err := c.BindJSON(&rb); err != nil {
			c.JSON(http.StatusBadRequest, "Wrong argument list")
		}

		// Calculating
		resp, err := calculate(&rb)
		if err != nil {
			c.JSON(http.StatusBadRequest, err.Error())
			return
		}

		// Send plots if everything was OK
		c.JSON(http.StatusOK, resp)
	})

	http.ListenAndServe("localhost:8080", r)
}
