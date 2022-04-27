package main

import (
	"encoding/json"
	"errors"
	"strconv"
)

const dt = 60

// For convertion to json.Number format
func toJsonNumber(f float64) json.Number {
	return json.Number(strconv.FormatFloat(f, 'f', -1, 64))
}

// Main calculation function
func calculate(rb *RequestBody) (ResponseBody, error) {
	// Creating two functions
	var fFunc, uFunc Func
	fFunc.init("f", rb.F)
	uFunc.init("u", rb.U)

	_, err := fFunc.newVal(0)
	if err != nil {
		return ResponseBody{}, errors.New("can't calulate function: " + err.Error())
	}

	var t, v, s float64
	m_f := rb.M_f
	m_r := rb.M_r

	var result ResponseBody
	result.init()

	// Main counting part
	for m_f > 0 {
		t += dt
		fFunc.newVal(t)
		dm := (fFunc.cordinates[t] + fFunc.cordinates[t-dt]) * (dt / 2)
		m_f -= dm
		uFunc.newVal(t)
		result.A[toJsonNumber(t)] = toJsonNumber((dm * uFunc.cordinates[t]) / (dt * (m_r + m_f)))

		v += uFunc.cordinates[t] * dt
		result.V[toJsonNumber(t)] = toJsonNumber(s)

		s += v * dt
		result.S[toJsonNumber(t)] = toJsonNumber(s)
	}
	return result, nil
}
