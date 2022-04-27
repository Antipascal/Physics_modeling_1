package main

import (
	"encoding/json"
	"errors"
	"fmt"
	"os"
	"os/exec"
	"strconv"
	"strings"
)

//For API
type RequestBody struct {
	M_r float64 `json:"rocket_mass"`
	M_f float64 `json:"fuel_mass"`
	U   string  `json:"u_function"`
	F   string  `json:"f_function"`
}

type ResponseBody struct {
	V map[json.Number]json.Number `json:"v_plot"`
	S map[json.Number]json.Number `json:"s_plot"`
	A map[json.Number]json.Number `json:"a_plot"`
}

func (rb *ResponseBody) init() {
	rb.V = make(map[json.Number]json.Number)
	rb.S = make(map[json.Number]json.Number)
	rb.A = make(map[json.Number]json.Number)
}

// For calculations
type PyFunc struct {
	cordinates map[float64]float64
	function   string
	name       string
}

// Creates function 'name' from 'function'
func (f *PyFunc) init(name, function string) {
	f.name = name
	f.function = function
	f.cordinates = make(map[float64]float64)
}

// Count value of function in point t
// and stores it in map
func (f *PyFunc) newVal(t float64) (float64, error) {
	file, err := os.Create(f.name + ".py")
	if err != nil {
		return 0, errors.New("can't open file")
	}

	file.WriteString("import math\nt=" + fmt.Sprintf("%f", t) + "\ne=math.e\nprint(" + f.function + ")")
	file.Close()
	cmd, err := exec.Command("python3", f.name+".py").Output()
	if err != nil {
		return 0, errors.New("can't execute calculation")
	}

	f.cordinates[t], err = strconv.ParseFloat(strings.Trim(string(cmd), "\n"), 64)
	if err != nil {
		return 0, errors.New("undefined result (wrong function)")
	}
	return f.cordinates[t], nil
}
